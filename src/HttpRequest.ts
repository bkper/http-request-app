/**
 * @public
 */
class HttpRequest {
  private url: string;
  private method: "get" | "delete" | "patch" | "post" | "put" = "get";
  private headers: any;
  private params: any;
  private contentType: string;
  private payload: any;
  private validateHttpsCertificates = true;
  private followRedirects = true;
  private muteHttpExceptions = false;
  private escaping = true;

  constructor(url: string) {
    this.url = url;
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

  public addParam(name: string, value: string): HttpRequest {
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


