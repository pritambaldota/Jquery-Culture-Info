# Jquery Localized Culture Information
Accessing Culture Information in JavaScript is always difficult and most of the web developer has to search on internet for this information. 
There may be several options available to fetch this information int Server-side technologies like ASP.Net, JAVA, PHP, and etc. But in JavaScript it is very difficult to find this information at one place.

To solve this problem, I have created small jQuery plugin which will give you this infomration at one place. You can search for Culture information by LCID (for e.g. 1033) or by Culture Name (for e.g. en-US), which will return you JSON Object. This plugin can be used in any of your favourite application which supports JavaScript.  

This culture object has following properties: 

## Properties available with resulting JSON Object
* LCID - Locale Identifier number like 1033.
* Culture Name - For e.g. en-US
* Locale Name - For e.g. English (Unites States)
* Culture English Name - For e.g. English
* Culture Name Native Language - For e.g. मराठी (भारत)
* [Windows ANSI Code Page](http://en.wikipedia.org/wiki/Code_page#Windows_.28ANSI.29_code_pages)
* [OEM Code Page](http://en.wikipedia.org/wiki/Code_page#IBM_PC_.28OEM.29_code_pages)
* Country Name Abbrevation
* Language Name Abbrevation

## How to use
* Include JQuery Library reference to your web page
* Include JQuery Localized Culture Plugin minified version or debug version
* Use $.getCultureInfoByLCID() method to search by LCID
```javascript
var cultureInfo = $.getCultureInfoByLCID(1033);
```

* Use $.GetCultureInfoByCultureName() method to search by Culture Name
```javascript
var cultureInfo = $.GetCultureInfoByCultureName('en-us');
```
## Demo Web Page
![How to use Demo](/demo.jpg)
