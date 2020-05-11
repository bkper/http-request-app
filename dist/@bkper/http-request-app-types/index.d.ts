// Type definitions for HttpRequestApp
// Generated using clasp-types

declare namespace Bkper {

    /**
     * The main entry point to interact with HttpRequestApp
     *
     * Script ID: **1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_**
     */
    export interface HttpRequestApp {

        newRequest(url: string): HttpRequest;

    }

    /**
     * This class allows user to prepare the HttpRequest to fetch.
     */
    export interface HttpRequest {

        /**
         * Adds a name=value query param to the url
         */
        addParam(name: string, value: string): HttpRequest;

        /**
         * Executes the fetch request to the url.
         */
        fetch(): GoogleAppsScript.URL_Fetch.HTTPResponse;

        /**
         * Gets the content type of the request
         */
        getContentType(): string;

        /**
         * Gets the result url, with query params appended.
         */
        getUrl(): string;

        /**
         * Sets the content type for the request (defaults to 'application/x-www-form-urlencoded').
         *
         * Another example of content type is 'application/json; charset=utf-8'.
         */
        setContentType(contentType: string): HttpRequest;

        /**
         * If false reserved characters in the URL aren't escaped. The default is true.
         */
        setEscaping(escaping: boolean): HttpRequest;

        /**
         * If false the fetch doesn't automatically follow HTTP redirects; it returns the original HTTP response. The default is true.
         */
        setFollowRedirects(followRedirects: boolean): HttpRequest;

        /**
         * Sets an name/value HTTP header pair for the request.
         */
        setHeader(name: string, value: string): HttpRequest;

        /**
         * Sets the HTTP method for the request: get, delete, patch, post, or put. The default is get
         */
        setMethod(method: GoogleAppsScript.URL_Fetch.HttpMethod): HttpRequest;

        /**
         * If true the fetch doesn't throw an exception if the response code indicates failure, and instead returns the HTTPResponse. The default is false.
         */
        setMuteHttpExceptions(muteHttpExceptions: boolean): HttpRequest;

        /**
         * Sets the payload (that is, the POST body) for the request.
         *
         * Certain HTTP methods (for example, GET) do not accept a payload.
         * 
         * It can be a string, a byte array, a blob, or a JavaScript object.
         * 
         * A JavaScript object is interpreted as a map of form field names to values, where the values can be either strings or blobs.
         */
        setPayload(payload: GoogleAppsScript.URL_Fetch.Payload): HttpRequest;

        /**
         * If false the fetch ignores any invalid certificates for HTTPS requests. The default is true.
         */
        setValidateHttpsCertificates(validateHttpsCertificates: boolean): HttpRequest;

    }

}

declare var HttpRequestApp: Bkper.HttpRequestApp;