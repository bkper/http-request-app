/**
 * 
 * This class allows user to prepare the HttpRequest to fetch.
 * 
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

  /**
   * Sets the HTTP method for the request: get, delete, patch, post, or put. The default is get
   */
  public setMethod(method: GoogleAppsScript.URL_Fetch.HttpMethod): HttpRequest {
    this.options.method = method;
    return this;
  }
  
  /**
   * Sets an name/value HTTP header pair for the request.
   */
  public setHeader(name: string, value: string): HttpRequest {
    if (this.options.headers == null) {
      this.options.headers = {} as GoogleAppsScript.URL_Fetch.HttpHeaders;
    }
    this.options.headers[name] = value;
    return this;
  }

  /**
   * Adds a name=value query param to the url
   */
  public addParam(name: string, value: string): HttpRequest {
    if (this.params == null) {
      this.params = [];
    }
    this.params.push({name, value});
    return this;
  }

  /**
   * Sets the content type for the request (defaults to 'application/x-www-form-urlencoded').
   * 
   * Another example of content type is 'application/json; charset=utf-8'.
   */
  public setContentType(contentType: string): HttpRequest {
    this.options.contentType = contentType;
    return this;
  }

  /**
   * Gets the content type of the request
   */
  public getContentType(): string {
    return this.options.contentType;
  }

  /**
   * Sets the payload (that is, the POST body) for the request. 
   * 
   * Certain HTTP methods (for example, GET) do not accept a payload. 
   * 
   * It can be a string, a byte array, a blob, or a JavaScript object.
   * 
   * A JavaScript object is interpreted as a map of form field names to values, where the values can be either strings or blobs.
   */
  public setPayload(payload: GoogleAppsScript.URL_Fetch.Payload): HttpRequest {
    this.options.payload = payload;
    return this;
  }

  /**
   * If false the fetch ignores any invalid certificates for HTTPS requests. The default is true.
   */
  public setValidateHttpsCertificates(validateHttpsCertificates: boolean): HttpRequest {
    this.options.validateHttpsCertificates = validateHttpsCertificates;
    return this;
  }

  /**
   * If false the fetch doesn't automatically follow HTTP redirects; it returns the original HTTP response. The default is true.
   */
  public setFollowRedirects(followRedirects: boolean): HttpRequest {
    this.options.followRedirects = followRedirects;
    return this;
  }

  /**
   * If true the fetch doesn't throw an exception if the response code indicates failure, and instead returns the HTTPResponse. The default is false.
   */
  public setMuteHttpExceptions(muteHttpExceptions: boolean): HttpRequest {
    this.options.muteHttpExceptions = muteHttpExceptions;
    return this;
  }

  /**
   * If false reserved characters in the URL aren't escaped. The default is true.
   */
  public setEscaping(escaping: boolean): HttpRequest {
    this.options.escaping = escaping;
    return this;
  }

  /**
   * Gets the result url, with query params appended.
   */
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

  /**
   * Executes the fetch request to the url.
   */
  public fetch(): GoogleAppsScript.URL_Fetch.HTTPResponse {
    return UrlFetchApp.fetch(this.getUrl(), this.options);
  }; 

}
