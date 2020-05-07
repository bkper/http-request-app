/**
 * 
 * @public
 * 
 * @param url The url to target the request
 */
function newRequest(url: string): HttpRequest {
  return new HttpRequest(url)
}