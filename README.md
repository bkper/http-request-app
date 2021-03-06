
## HttpRequestApp

Fluent interface for Google Apps Script [Url Fetch Service](https://developers.google.com/apps-script/reference/url-fetch), to simplify HttpRequest building and 3rd party API integrations.

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![npm (scoped)](https://img.shields.io/npm/v/@bkper/http-request-app-types?color=%235889e4&label=types)](https://www.npmjs.com/package/@bkper/http-request-app-types)

**UrlFetchApp:**
```js
var options = {
  'method' : 'post',
  'header' : {
    'token' : 'xxx'
  }
  'contentType': 'application/json',
  'payload' : JSON.stringify(data)
};
var response = UrlFetchApp.fetch('https://httpbin.org/post?key=yyy', options);

```

**HttpRequestApp:**
```js
var response = HttpRequestApp.newRequest('https://httpbin.org/post')
                .setMethod('post')
                .setHeader('token', 'xxx')
                .addParam('key', 'yyy')
                .setContentType('application/json')
                .setPayload(JSON.stringify(data))
                .fetch()
```
>There is an open [feature request](https://issuetracker.google.com/issues/156446909) to include it as a native feature in the URL Fetch Service. Please start this issue if you think it makes sense.

### Setup

This library is already published as an [Apps Script](https://script.google.com/d/1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_/edit?usp=sharing), making it easy to include in your project. 

To add it to your script, do the following in the Apps Script code editor:

1. Click on the menu item "Resources > Libraries..."
2. In the "Add a Library" text box, enter the Script ID "**1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_**" and click the "Select" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Save" button.

You can also copy the ```ts``` code on [/src](https://github.com/bkper/http-request-app/tree/master/src) folder or the executable [compiled script](https://script.google.com/d/1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_/edit?usp=sharing).


#### Typescript Definitions for autocomplete:

##### 1) Add the package:

```
npm i -S @bkper/http-request-app-types
```
or
```
yarn add --dev @bkper/http-request-app-types
```

##### 2) Configure tsconfig.json:

```
{
    "compilerOptions": {
        "typeRoots" : ["node_modules/@bkper", "node_modules/@types" ]
    }
}
```

[Learn more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) about **@types**, **typeRoots** and **types**
