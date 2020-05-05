
<h2 id="http-request-app">
HttpRequestApp
<a href='https://script.google.com/a/bkper.com/d/1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_/edit'>
  <img height="30" width="30" src="https://bkper.com/docs/images/google-apps-script.svg"/>
</a>
</h2>

A fluent interface for [Url Fetch Service](https://developers.google.com/apps-script/reference/url-fetch) to simplify HttpRequest building.

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![npm (scoped)](https://img.shields.io/npm/v/@bkper/http-request-app-types?color=%235889e4&label=types)](https://www.npmjs.com/package/@bkper/http-request-app-types)

**UrlFetchApp:**
```js
var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(data)
};
var response = UrlFetchApp.fetch('https://httpbin.org/post', options);

```

**HttpRequestApp:**
```js
var response = HttpRequestApp.newHttpRequest('https://httpbin.org/post')
                .setMethod('post')
                .setContentType('application/json')
                .setPayload(JSON.stringify(data))
                .fetch()
```

<h3 id="bkper-app-setup">Setup</h3>

This library is already published as an Apps Script, making it easy to include in your project. 

To add it to your script, do the following in the Apps Script code editor:

1. Click on the menu item "Resources > Libraries..."
2. In the "Add a Library" text box, enter the Script ID "**1Iqaz0dbrlOXp9D2giO0DS6CDW_Q4IrgfhTJyYqxknww_OmFVF_4NQVR_**" and click the "Select" button.
3. Choose a version in the dropdown box (usually best to pick the latest version).
4. Click the "Save" button.


#### Add Typescript Definitions:

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