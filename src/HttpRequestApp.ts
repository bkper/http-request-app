/**
 * 
 * @public
 * 
 * @param url The target url of the http request to fetch from.
 */
function newRequest(url: string): HttpRequest {
  return new HttpRequest(url)
}