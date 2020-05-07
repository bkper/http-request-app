/**
 * @public
 */
class HttpRequest {
  private url: string;
  private params: Array<{name: string, value: string}>;
  private options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {};

  constructor(url: string) {
    let parts = url.split('?');
    this.url = parts[0];
    if (parts.length == 2) {
      let params = parts[1].split('&');
      params.forEach(param => {
        let keyValue = param.split('=');
        if (keyValue.length == 2) {
          this.addParam(keyValue[0], keyValue[1])
        }
      });
    }
  }

  public setMethod(method: GoogleAppsScript.URL_Fetch.HttpMethod): HttpRequest {
    this.options.method = method;
    return this;
  }
  

  public setHeader(name: string, value: string): HttpRequest {
    if (this.options.headers == null) {
      this.options.headers = {} as GoogleAppsScript.URL_Fetch.HttpHeaders;
    }
    this.options.headers[name] = value;
    return this;
  }

  public addParam(name: string, value: string): HttpRequest {
    if (this.params == null) {
      this.params = [];
    }
    this.params.push({name, value});
    return this;
  }

  public slash(pathSegment: string): HttpRequest {
    if (!this.url.endsWith('/') && !pathSegment.startsWith('/')) {
      this.url += '/';
    }
    this.url += pathSegment;
    return this;
  }

  public setContentType(contentType: string): HttpRequest {
    this.options.contentType = contentType;
    return this;
  }

  public getContentType(): string {
    return this.options.contentType;
  }

  public setPayload(payload: GoogleAppsScript.URL_Fetch.Payload): HttpRequest {
    this.options.payload = payload;
    return this;
  }

  public setValidateHttpsCertificates(validateHttpsCertificates: boolean): HttpRequest {
    this.options.validateHttpsCertificates = validateHttpsCertificates;
    return this;
  }

  public setFollowRedirects(followRedirects: boolean): HttpRequest {
    this.options.followRedirects = followRedirects;
    return this;
  }

  public setMuteHttpExceptions(muteHttpExceptions: boolean): HttpRequest {
    this.options.muteHttpExceptions = muteHttpExceptions;
    return this;
  }

  public getUrl(): string {
    let url = this.url;
    if (this.params != null) {
      let i = 0
      if (url.indexOf('?') < 0) {
        url += '?';
      } else {
        i++;
      }
      for (const param of this.params) {
          if (i > 0) {
            url += "&";
          }
          var key = param.name;
          var value = param.value;          
          if (value != null) {
            url += key + "=" + encodeURIComponent(value);
            i++;
          }
      }      

    }
    return url
  }

  public fetch(): GoogleAppsScript.URL_Fetch.HTTPResponse {
    return UrlFetchApp.fetch(this.getUrl(), this.options);
  }; 

}
