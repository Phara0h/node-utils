# Changelog

All notable changes to this project will be documented in this file.

## 3.8.0 - 01/14/2021

-   Fixed `camelCase` to respect already camel case strings. [ENG-1209](https://abedev.atlassian.net/browse/ENG-1209)
-   Fixed `isObject` to return `false` for `null`. [ENG-1209](https://abedev.atlassian.net/browse/ENG-1209)
-   Changed `keysToCamel` to not be recursive by default. [ENG-1209](https://abedev.atlassian.net/browse/ENG-1209)

##### Engineering Internal

-   

##### Deployment Action Items

-   

## 3.7.0 - 12/17/2020

-   Fixed broken imports for `keysToCamel`. [ENG-1205](https://abedev.atlassian.net/browse/ENG-1205)

##### Engineering Internal

-   

##### Deployment Action Items

-   

## 3.6.0 - 12/15/2020

-   Fixed missed refactor of `isArray`. [ENG-1118](https://abedev.atlassian.net/browse/ENG-1118)
-   `request`
    -   Added retry logic on `ECONNRESET`. [OPS-723](https://abedev.atlassian.net/browse/OPS-723)
    -   Added `timeout` option. [PLAT-738](https://abedev.atlassian.net/browse/PLAT-738)

## 3.5.0 - 06/29/2020

-   Added `set`, `toPath`, `isObject`, `mapKeys`, `forEach`, `snakeCase`, `camelCase`, `kebabCase`, `keysToCamel` and `debounce` functions.
-   Removed `clone` and `isArray` functions. [ENG-1118](https://abedev.atlassian.net/browse/ENG-1118)
-   Added benchmarks, documents and tests for new functions. [ENG-1118](https://abedev.atlassian.net/browse/ENG-1118)

## 3.4.0 - 10/21/2019

## 3.3.0 - 10/16/2019

-   Update node-utils to include redirects and auth options  [ENG-1114](https://abedev.atlassian.net/browse/ENG-1114)

##### Engineering Internal

-   Update to eslint 6.5.1 to resolve a secuirty vulnerability.

## 3.2.0 - 10/02/2019

-   Fix active model on new to assign copies instead of pointers to fields. [ENG-1090](https://abedev.atlassian.net/browse/ENG-1090)

## 3.1.1 - 09/26/2019

-   Fixed bug with bug with Request if response JSON can't be parsed. [ENG-1086](https://abedev.atlassian.net/browse/ENG-1086)

## 3.1.0 - 08/27/2019

-   Use `http.globalAgent` if `request` `options.keepAlive` is `false`. [ENG-1051](https://abedev.atlassian.net/browse/ENG-1051)
-   Added `defaultPublicServiceHeaders` middleware. [ENG-1045](https://abedev.atlassian.net/browse/ENG-1045)

## 3.0.0 - 08/20/2019

-   Added encryption capabilities to PG's active model [ENG-999](https://abedev.atlassian.net/browse/ENG-999)

## 2.1.0 - 08/12/2019

-   Added redaction logic. [ENG-996](https://abedev.atlassian.net/browse/ENG-996)

## 2.0.0 - 07/15/2019

-   Added tests, and major changes to postgres [ENG-975](https://abedev.atlassian.net/browse/ENG-975)

## 1.5.0 - 07/12/2019

-   Updated request error response to not have circular references. [CC-127](https://abedev.atlassian.net/browse/CC-127)

## 1.4.0 - 07/8/2019

-   Added deep merge function and get [ENG-967](https://abedev.atlassian.net/browse/ENG-967)

## 1.3.0 - 07/3/2019

-   Added timer class and added querystring to request lib [ENG-961](https://abedev.atlassian.net/browse/ENG-961)

## 1.2.0 - 07/1/2019

-   Added keepalive http/s sockets [ENG-948](https://abedev.atlassian.net/browse/ENG-948)

## 1.1.0 - 05/22/2019

-   added cloneDeepWith function [ENG-873](https://abedev.atlassian.net/browse/ENG-873)

## 1.0.0 - 05/9/2019

-   Added clone and cloneDeep functions [ENG-873](https://abedev.atlassian.net/browse/ENG-873)
-
