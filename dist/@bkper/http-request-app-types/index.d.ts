// Type definitions for HttpRequestApp
// Generated using clasp-types

declare namespace Bkper {

    /**
     * The main entry point to interact with HttpRequestApp
     *
     * Script ID: **1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_**
     */
    export interface HttpRequestApp {

        newHttpRequest(url: string): HttpRequest;

    }

    export interface HttpRequest {

        addHeader(name: string, value: string): HttpRequest;

        addParam(name: string, value: string): HttpRequest;

        fetch(): GoogleAppsScript.URL_Fetch.HTTPResponse;

        getUrl(): string;

        setContentType(contentType: string): HttpRequest;

        setFollowRedirects(followRedirects: boolean): HttpRequest;

        setMethod(method: "get" | "delete" | "patch" | "post" | "put"): HttpRequest;

        setMuteHttpExceptions(muteHttpExceptions: boolean): HttpRequest;

        setPayload(payload: any): HttpRequest;

        setValidateHttpsCertificates(validateHttpsCertificates: boolean): HttpRequest;

    }

}

declare var HttpRequestApp: Bkper.HttpRequestApp;