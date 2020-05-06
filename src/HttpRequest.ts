/**
 * @public
 */
class HttpRequest {
  private url: string;
  protected method: "get" | "delete" | "patch" | "post" | "put" = "get";
  protected headers: any;
  protected params: any;
  protected contentType: string;
  protected payload: any;
  protected validateHttpsCertificates = true;
  protected followRedirects = true;
  protected muteHttpExceptions = false;
  protected escaping = true;

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

  public setMethod(method: "get" | "delete" | "patch" | "post" | "put"): HttpRequest {
    this.method = method;
    return this;
  }
  

  public addHeader(name: string, value: string): HttpRequest {
    if (this.headers == null) {
      this.headers = new Object();
    }
    this.headers[name] = value;
    return this;
  }

  public addParam(name: string, value: any): HttpRequest {
    if (this.params == null) {
      this.params = new Object();
    }
    this.params[name] = value;
    return this;
  }

  public setContentType(contentType: string): HttpRequest {
    this.contentType = contentType;
    return this;
  }

  public setPayload(payload: any): HttpRequest {
    this.payload = payload;
    return this;
  }

  public setValidateHttpsCertificates(validateHttpsCertificates: boolean): HttpRequest {
    this.validateHttpsCertificates = validateHttpsCertificates;
    return this;
  }

  public setFollowRedirects(followRedirects: boolean): HttpRequest {
    this.followRedirects = followRedirects;
    return this;
  }

  public setMuteHttpExceptions(muteHttpExceptions: boolean): HttpRequest {
    this.muteHttpExceptions = muteHttpExceptions;
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
      for (var prop in this.params) {
        if (this.params.hasOwnProperty(prop)) {
          if (i > 0) {
            url += "&";
          }
          var key = prop;
          var value = this.params[prop];          
          if (value != null) {
            url += key + "=" + encodeURIComponent(value);
            i++;
          }
        }
      }      

    }
    return url
  }

  public fetch(): GoogleAppsScript.URL_Fetch.HTTPResponse {
  
    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {};

    if (this.headers != null) {
      options.headers = this.headers;
    }
    
    if (this.contentType != null) {
      options.contentType = this.contentType;
    }
    
    if (this.method != null) {
      options.method = this.method;
    }
    
    if (this.payload != null) {
      options.payload = this.payload;
    }

    options.validateHttpsCertificates = this.validateHttpsCertificates
    options.followRedirects = this.followRedirects;
    options.muteHttpExceptions = this.muteHttpExceptions;
    options.escaping = this.escaping;

    return UrlFetchApp.fetch(this.getUrl(), options);
    
  }; 

}