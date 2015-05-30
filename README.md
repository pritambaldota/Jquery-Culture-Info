# Jquery Culture Information
Accessing Culture Information for all available cultures in JavaScript is always difficult and most of the web developer has to search on internet for this information. 
There may be several options available to fetch this information int Server-side technologies like ASP.Net, JAVA, PHP, and etc. But in JavaScript it is very difficult to find this information at one place.

To solve this problem, I have created small jQuery plugin which will give you this infomration at one place. You can search for Culture information by LCID (for e.g. 1033) or by Culture Name (for e.g. en-US), which will return you JSON Object. This plugin can be used in any of your favourite application which supports JavaScript.  

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

## Installing via the [NuGet](https://www.nuget.org/packages/PritamBaldota.JqueryCultureInfo) Package
Jquery Localized Culture Information is a NuGet package that augments an existing empty ASP.NET project. Just install using NuGet and then run demo.html!

```nuget
Install-Package PritamBaldota.JqueryCultureInfo
```

## Install Manually by downloading the source or Cloning the repository
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

## Find below list of all Locale ID's (LCID) and Culture Names
LCID | Culture | Locale Name
--- | --- | ---
**54**| af | Afrikaans
**1078**| af-ZA | Afrikaans (South Africa)
**28**| sq | Albanian
**1052**| sq-AL | Albanian (Albania)
**132**| gsw | Alsatian
**1156**| gsw-FR | Alsatian (France)
**94**| am | Amharic
**1118**| am-ET | Amharic (Ethiopia)
**1**| ar | Arabic‎
**5121**| ar-DZ | Arabic (Algeria)‎
**15361**| ar-BH | Arabic (Bahrain)‎
**3073**| ar-EG | Arabic (Egypt)‎
**2049**| ar-IQ | Arabic (Iraq)‎
**11265**| ar-JO | Arabic (Jordan)‎
**13313**| ar-KW | Arabic (Kuwait)‎
**12289**| ar-LB | Arabic (Lebanon)‎
**4097**| ar-LY | Arabic (Libya)‎
**6145**| ar-MA | Arabic (Morocco)‎
**8193**| ar-OM | Arabic (Oman)‎
**16385**| ar-QA | Arabic (Qatar)‎
**1025**| ar-SA | Arabic (Saudi Arabia)‎
**10241**| ar-SY | Arabic (Syria)‎
**7169**| ar-TN | Arabic (Tunisia)‎
**14337**| ar-AE | Arabic (U.A.E.)‎
**9217**| ar-YE | Arabic (Yemen)‎
**43**| hy | Armenian
**1067**| hy-AM | Armenian (Armenia)
**77**| as | Assamese
**1101**| as-IN | Assamese (India)
**44**| az | Azeri
**29740**| az-Cyrl | Azeri (Cyrillic)
**2092**| az-Cyrl-AZ | Azeri (Cyrillic, Azerbaijan)
**30764**| az-Latn | Azeri (Latin)
**1068**| az-Latn-AZ | Azeri (Latin, Azerbaijan)
**109**| ba | Bashkir
**1133**| ba-RU | Bashkir (Russia)
**45**| eu | Basque
**1069**| eu-ES | Basque (Basque)
**35**| be | Belarusian
**1059**| be-BY | Belarusian (Belarus)
**69**| bn | Bengali
**2117**| bn-BD | Bengali (Bangladesh)
**1093**| bn-IN | Bengali (India)
**30746**| bs | Bosnian
**25626**| bs-Cyrl | Bosnian (Cyrillic)
**8218**| bs-Cyrl-BA | Bosnian (Cyrillic, Bosnia and Herzegovina)
**26650**| bs-Latn | Bosnian (Latin)
**5146**| bs-Latn-BA | Bosnian (Latin, Bosnia and Herzegovina)
**126**| br | Breton
**1150**| br-FR | Breton (France)
**2**| bg | Bulgarian
**1026**| bg-BG | Bulgarian (Bulgaria)
**3**| ca | Catalan
**1027**| ca-ES | Catalan (Catalan)
**30724**| zh | Chinese
**4**| zh-Hans | Chinese (Simplified)
**2052**| zh-CN | Chinese (Simplified, PRC)
**4100**| zh-SG | Chinese (Simplified, Singapore)
**31748**| zh-Hant | Chinese (Traditional)
**3076**| zh-HK | Chinese (Traditional, Hong Kong S.A.R.)
**5124**| zh-MO | Chinese (Traditional, Macao S.A.R.)
**1028**| zh-TW | Chinese (Traditional, Taiwan)
**131**| co | Corsican
**1155**| co-FR | Corsican (France)
**26**| hr | Croatian
**1050**| hr-HR | Croatian (Croatia)
**4122**| hr-BA | Croatian (Latin, Bosnia and Herzegovina)
**5**| cs | Czech
**1029**| cs-CZ | Czech (Czech Republic)
**6**| da | Danish
**1030**| da-DK | Danish (Denmark)
**140**| prs | Dari‎
**1164**| prs-AF | Dari (Afghanistan)‎
**101**| dv | Divehi‎
**1125**| dv-MV | Divehi (Maldives)‎
**19**| nl | Dutch
**2067**| nl-BE | Dutch (Belgium)
**1043**| nl-NL | Dutch (Netherlands)
**9**| en | English
**3081**| en-AU | English (Australia)
**10249**| en-BZ | English (Belize)
**4105**| en-CA | English (Canada)
**9225**| en-029 | English (Caribbean)
**16393**| en-IN | English (India)
**6153**| en-IE | English (Ireland)
**8201**| en-JM | English (Jamaica)
**17417**| en-MY | English (Malaysia)
**5129**| en-NZ | English (New Zealand)
**13321**| en-PH | English (Republic of the Philippines)
**18441**| en-SG | English (Singapore)
**7177**| en-ZA | English (South Africa)
**11273**| en-TT | English (Trinidad and Tobago)
**2057**| en-GB | English (United Kingdom)
**1033**| en-US | English (United States)
**12297**| en-ZW | English (Zimbabwe)
**37**| et | Estonian
**1061**| et-EE | Estonian (Estonia)
**56**| fo | Faroese
**1080**| fo-FO | Faroese (Faroe Islands)
**100**| fil | Filipino
**1124**| fil-PH | Filipino (Philippines)
**11**| fi | Finnish
**1035**| fi-FI | Finnish (Finland)
**12**| fr | French
**2060**| fr-BE | French (Belgium)
**3084**| fr-CA | French (Canada)
**1036**| fr-FR | French (France)
**5132**| fr-LU | French (Luxembourg)
**6156**| fr-MC | French (Monaco)
**4108**| fr-CH | French (Switzerland)
**98**| fy | Frisian
**1122**| fy-NL | Frisian (Netherlands)
**86**| gl | Galician
**1110**| gl-ES | Galician (Galician)
**55**| ka | Georgian
**1079**| ka-GE | Georgian (Georgia)
**7**| de | German
**3079**| de-AT | German (Austria)
**1031**| de-DE | German (Germany)
**5127**| de-LI | German (Liechtenstein)
**4103**| de-LU | German (Luxembourg)
**2055**| de-CH | German (Switzerland)
**8**| el | Greek
**1032**| el-GR | Greek (Greece)
**111**| kl | Greenlandic
**1135**| kl-GL | Greenlandic (Greenland)
**71**| gu | Gujarati
**1095**| gu-IN | Gujarati (India)
**104**| ha | Hausa
**31848**| ha-Latn | Hausa (Latin)
**1128**| ha-Latn-NG | Hausa (Latin, Nigeria)
**13**| he | Hebrew‎
**1037**| he-IL | Hebrew (Israel)‎
**57**| hi | Hindi
**1081**| hi-IN | Hindi (India)
**14**| hu | Hungarian
**1038**| hu-HU | Hungarian (Hungary)
**15**| is | Icelandic
**1039**| is-IS | Icelandic (Iceland)
**112**| ig | Igbo
**1136**| ig-NG | Igbo (Nigeria)
**33**| id | Indonesian
**1057**| id-ID | Indonesian (Indonesia)
**93**| iu | Inuktitut
**31837**| iu-Latn | Inuktitut (Latin)
**2141**| iu-Latn-CA | Inuktitut (Latin, Canada)
**30813**| iu-Cans | Inuktitut (Syllabics)
**1117**| iu-Cans-CA | Inuktitut (Syllabics, Canada)
**60**| ga | Irish
**2108**| ga-IE | Irish (Ireland)
**52**| xh | isiXhosa
**1076**| xh-ZA | isiXhosa (South Africa)
**53**| zu | isiZulu
**1077**| zu-ZA | isiZulu (South Africa)
**16**| it | Italian
**1040**| it-IT | Italian (Italy)
**2064**| it-CH | Italian (Switzerland)
**17**| ja | Japanese
**1041**| ja-JP | Japanese (Japan)
**75**| kn | Kannada
**1099**| kn-IN | Kannada (India)
**63**| kk | Kazakh
**1087**| kk-KZ | Kazakh (Kazakhstan)
**83**| km | Khmer
**1107**| km-KH | Khmer (Cambodia)
**134**| qut | K'iche
**1158**| qut-GT | K'iche (Guatemala)
**135**| rw | Kinyarwanda
**1159**| rw-RW | Kinyarwanda (Rwanda)
**65**| sw | Kiswahili
**1089**| sw-KE | Kiswahili (Kenya)
**87**| kok | Konkani
**1111**| kok-IN | Konkani (India)
**18**| ko | Korean
**1042**| ko-KR | Korean (Korea)
**64**| ky | Kyrgyz
**1088**| ky-KG | Kyrgyz (Kyrgyzstan)
**84**| lo | Lao
**1108**| lo-LA | Lao (Lao P.D.R.)
**38**| lv | Latvian
**1062**| lv-LV | Latvian (Latvia)
**39**| lt | Lithuanian
**1063**| lt-LT | Lithuanian (Lithuania)
**31790**| dsb | Lower Sorbian
**2094**| dsb-DE | Lower Sorbian (Germany)
**110**| lb | Luxembourgish
**1134**| lb-LU | Luxembourgish (Luxembourg)
**1071**| mk-MK | Macedonian (Former Yugoslav Republic of Macedonia)
**47**| mk | Macedonian (FYROM)
**62**| ms | Malay
**2110**| ms-BN | Malay (Brunei Darussalam)
**1086**| ms-MY | Malay (Malaysia)
**76**| ml | Malayalam
**1100**| ml-IN | Malayalam (India)
**58**| mt | Maltese
**1082**| mt-MT | Maltese (Malta)
**129**| mi | Maori
**1153**| mi-NZ | Maori (New Zealand)
**122**| arn | Mapudungun
**1146**| arn-CL | Mapudungun (Chile)
**78**| mr | Marathi
**1102**| mr-IN | Marathi (India)
**124**| moh | Mohawk
**1148**| moh-CA | Mohawk (Mohawk)
**80**| mn | Mongolian (Cyrillic)
**30800**| mn-Cyrl | Mongolian (Cyrillic)
**1104**| mn-MN | Mongolian (Cyrillic, Mongolia)
**31824**| mn-Mong | Mongolian (Traditional Mongolian)
**2128**| mn-Mong-CN | Mongolian (Traditional Mongolian, PRC)
**97**| ne | Nepali
**1121**| ne-NP | Nepali (Nepal)
**20**| no | Norwegian
**31764**| nb | Norwegian (Bokmål)
**30740**| nn | Norwegian (Nynorsk)
**1044**| nb-NO | Norwegian, Bokmål (Norway)
**2068**| nn-NO | Norwegian, Nynorsk (Norway)
**130**| oc | Occitan
**1154**| oc-FR | Occitan (France)
**72**| or | Oriya
**1096**| or-IN | Oriya (India)
**99**| ps | Pashto‎
**1123**| ps-AF | Pashto (Afghanistan)‎
**41**| fa | Persian‎
**1065**| fa-IR | Persian‎
**21**| pl | Polish
**1045**| pl-PL | Polish (Poland)
**22**| pt | Portuguese
**1046**| pt-BR | Portuguese (Brazil)
**2070**| pt-PT | Portuguese (Portugal)
**70**| pa | Punjabi
**1094**| pa-IN | Punjabi (India)
**107**| quz | Quechua
**1131**| quz-BO | Quechua (Bolivia)
**2155**| quz-EC | Quechua (Ecuador)
**3179**| quz-PE | Quechua (Peru)
**24**| ro | Romanian
**1048**| ro-RO | Romanian (Romania)
**23**| rm | Romansh
**1047**| rm-CH | Romansh (Switzerland)
**25**| ru | Russian
**1049**| ru-RU | Russian (Russia)
**28731**| smn | Sami (Inari)
**31803**| smj | Sami (Lule)
**59**| se | Sami (Northern)
**29755**| sms | Sami (Skolt)
**30779**| sma | Sami (Southern)
**9275**| smn-FI | Sami, Inari (Finland)
**4155**| smj-NO | Sami, Lule (Norway)
**5179**| smj-SE | Sami, Lule (Sweden)
**3131**| se-FI | Sami, Northern (Finland)
**1083**| se-NO | Sami, Northern (Norway)
**2107**| se-SE | Sami, Northern (Sweden)
**8251**| sms-FI | Sami, Skolt (Finland)
**6203**| sma-NO | Sami, Southern (Norway)
**7227**| sma-SE | Sami, Southern (Sweden)
**79**| sa | Sanskrit
**1103**| sa-IN | Sanskrit (India)
**145**| gd | Scottish Gaelic
**1169**| gd-GB | Scottish Gaelic (United Kingdom)
**31770**| sr | Serbian
**27674**| sr-Cyrl | Serbian (Cyrillic)
**7194**| sr-Cyrl-BA | Serbian (Cyrillic, Bosnia and Herzegovina)
**12314**| sr-Cyrl-ME | Serbian (Cyrillic, Montenegro)
**3098**| sr-Cyrl-CS | Serbian (Cyrillic, Serbia and Montenegro (Former))
**10266**| sr-Cyrl-RS | Serbian (Cyrillic, Serbia)
**28698**| sr-Latn | Serbian (Latin)
**6170**| sr-Latn-BA | Serbian (Latin, Bosnia and Herzegovina)
**11290**| sr-Latn-ME | Serbian (Latin, Montenegro)
**2074**| sr-Latn-CS | Serbian (Latin, Serbia and Montenegro (Former))
**9242**| sr-Latn-RS | Serbian (Latin, Serbia)
**108**| nso | Sesotho sa Leboa
**1132**| nso-ZA | Sesotho sa Leboa (South Africa)
**50**| tn | Setswana
**1074**| tn-ZA | Setswana (South Africa)
**91**| si | Sinhala
**1115**| si-LK | Sinhala (Sri Lanka)
**27**| sk | Slovak
**1051**| sk-SK | Slovak (Slovakia)
**36**| sl | Slovenian
**1060**| sl-SI | Slovenian (Slovenia)
**10**| es | Spanish
**11274**| es-AR | Spanish (Argentina)
**16394**| es-BO | Spanish (Bolivia)
**13322**| es-CL | Spanish (Chile)
**9226**| es-CO | Spanish (Colombia)
**5130**| es-CR | Spanish (Costa Rica)
**7178**| es-DO | Spanish (Dominican Republic)
**12298**| es-EC | Spanish (Ecuador)
**17418**| es-SV | Spanish (El Salvador)
**4106**| es-GT | Spanish (Guatemala)
**18442**| es-HN | Spanish (Honduras)
**2058**| es-MX | Spanish (Mexico)
**19466**| es-NI | Spanish (Nicaragua)
**6154**| es-PA | Spanish (Panama)
**15370**| es-PY | Spanish (Paraguay)
**10250**| es-PE | Spanish (Peru)
**20490**| es-PR | Spanish (Puerto Rico)
**3082**| es-ES | Spanish (Spain, International Sort)
**21514**| es-US | Spanish (United States)
**14346**| es-UY | Spanish (Uruguay)
**8202**| es-VE | Spanish (Venezuela)
**29**| sv | Swedish
**2077**| sv-FI | Swedish (Finland)
**1053**| sv-SE | Swedish (Sweden)
**90**| syr | Syriac‎
**1114**| syr-SY | Syriac (Syria)‎
**40**| tg | Tajik (Cyrillic)
**31784**| tg-Cyrl | Tajik (Cyrillic)
**1064**| tg-Cyrl-TJ | Tajik (Cyrillic, Tajikistan)
**95**| tzm | Tamazight
**31839**| tzm-Latn | Tamazight (Latin)
**2143**| tzm-Latn-DZ | Tamazight (Latin, Algeria)
**73**| ta | Tamil
**1097**| ta-IN | Tamil (India)
**68**| tt | Tatar
**1092**| tt-RU | Tatar (Russia)
**74**| te | Telugu
**1098**| te-IN | Telugu (India)
**30**| th | Thai
**1054**| th-TH | Thai (Thailand)
**81**| bo | Tibetan
**1105**| bo-CN | Tibetan (PRC)
**31**| tr | Turkish
**1055**| tr-TR | Turkish (Turkey)
**66**| tk | Turkmen
**1090**| tk-TM | Turkmen (Turkmenistan)
**34**| uk | Ukrainian
**1058**| uk-UA | Ukrainian (Ukraine)
**46**| hsb | Upper Sorbian
**1070**| hsb-DE | Upper Sorbian (Germany)
**32**| ur | Urdu‎
**1056**| ur-PK | Urdu (Islamic Republic of Pakistan)‎
**128**| ug | Uyghur‎
**1152**| ug-CN | Uyghur (PRC)‎
**30787**| uz-Cyrl | Uzbek (Cyrillic)
**2115**| uz-Cyrl-UZ | Uzbek (Cyrillic, Uzbekistan)
**67**| uz | Uzbek (Latin)
**31811**| uz-Latn | Uzbek (Latin)
**1091**| uz-Latn-UZ | Uzbek (Latin, Uzbekistan)
**42**| vi | Vietnamese
**1066**| vi-VN | Vietnamese (Vietnam)
**82**| cy | Welsh
**1106**| cy-GB | Welsh (United Kingdom)
**136**| wo | Wolof
**1160**| wo-SN | Wolof (Senegal)
**133**| sah | Yakut
**1157**| sah-RU | Yakut (Russia)
**120**| ii | Yi
**1144**| ii-CN | Yi (PRC)
**106**| yo | Yoruba
**1130**| yo-NG | Yoruba (Nigeria)
