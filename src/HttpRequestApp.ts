/**
 * 
 * @public
 * 
 * @param url The url to target the request
 */
function newHttpRequest(url: string): HttpRequest {
  return new HttpRequest(url)
}