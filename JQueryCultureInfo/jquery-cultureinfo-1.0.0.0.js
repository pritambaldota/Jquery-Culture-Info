﻿/***********************************************************************
Author  :   Pritam Baldota
Web Url :   http://www.pritambaldota.com

The MIT License (MIT)

Copyright (c) 2015 pritambaldota

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

***********************************************************************/
(function ($) {
    // "private" variables 
    var cultureDetails = [{
        "LCID": 54,
        "CultureName": "af",
        "LocaleName": "Afrikaans",
        "LocaleEnglishName": "Afrikaans",
        "LocaleNativeName": "Afrikaans",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "AFK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1078,
        "CultureName": "af-ZA",
        "LocaleName": "Afrikaans (South Africa)",
        "LocaleEnglishName": "Afrikaans",
        "LocaleNativeName": "Afrikaans (Suid Afrika)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "AFK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 28,
        "CultureName": "sq",
        "LocaleName": "Albanian",
        "LocaleEnglishName": "Albanian",
        "LocaleNativeName": "shqipe",
        "CountryAbbrevation": "ALB",
        "LanguageAbbrevation": "SQI",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1052,
        "CultureName": "sq-AL",
        "LocaleName": "Albanian (Albania)",
        "LocaleEnglishName": "Albanian",
        "LocaleNativeName": "shqipe (Shqipëria)",
        "CountryAbbrevation": "ALB",
        "LanguageAbbrevation": "SQI",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 132,
        "CultureName": "gsw",
        "LocaleName": "Alsatian",
        "LocaleEnglishName": "Alsatian",
        "LocaleNativeName": "Elsässisch",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "GSW",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1156,
        "CultureName": "gsw-FR",
        "LocaleName": "Alsatian (France)",
        "LocaleEnglishName": "Alsatian",
        "LocaleNativeName": "Elsässisch (Frànkrisch)",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "GSW",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 94,
        "CultureName": "am",
        "LocaleName": "Amharic",
        "LocaleEnglishName": "Amharic",
        "LocaleNativeName": "አማርኛ",
        "CountryAbbrevation": "ETH",
        "LanguageAbbrevation": "AMH",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1118,
        "CultureName": "am-ET",
        "LocaleName": "Amharic (Ethiopia)",
        "LocaleEnglishName": "Amharic",
        "LocaleNativeName": "አማርኛ (ኢትዮጵያ)",
        "CountryAbbrevation": "ETH",
        "LanguageAbbrevation": "AMH",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1,
        "CultureName": "ar",
        "LocaleName": "Arabic‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية‏",
        "CountryAbbrevation": "SAU",
        "LanguageAbbrevation": "ARA",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 5121,
        "CultureName": "ar-DZ",
        "LocaleName": "Arabic (Algeria)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (الجزائر)‏",
        "CountryAbbrevation": "DZA",
        "LanguageAbbrevation": "ARG",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 15361,
        "CultureName": "ar-BH",
        "LocaleName": "Arabic (Bahrain)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (البحرين)‏",
        "CountryAbbrevation": "BHR",
        "LanguageAbbrevation": "ARH",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 3073,
        "CultureName": "ar-EG",
        "LocaleName": "Arabic (Egypt)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (مصر)‏",
        "CountryAbbrevation": "EGY",
        "LanguageAbbrevation": "ARE",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 2049,
        "CultureName": "ar-IQ",
        "LocaleName": "Arabic (Iraq)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (العراق)‏",
        "CountryAbbrevation": "IRQ",
        "LanguageAbbrevation": "ARI",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 11265,
        "CultureName": "ar-JO",
        "LocaleName": "Arabic (Jordan)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (الأردن)‏",
        "CountryAbbrevation": "JOR",
        "LanguageAbbrevation": "ARJ",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 13313,
        "CultureName": "ar-KW",
        "LocaleName": "Arabic (Kuwait)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (الكويت)‏",
        "CountryAbbrevation": "KWT",
        "LanguageAbbrevation": "ARK",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 12289,
        "CultureName": "ar-LB",
        "LocaleName": "Arabic (Lebanon)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (لبنان)‏",
        "CountryAbbrevation": "LBN",
        "LanguageAbbrevation": "ARB",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 4097,
        "CultureName": "ar-LY",
        "LocaleName": "Arabic (Libya)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (ليبيا)‏",
        "CountryAbbrevation": "LBY",
        "LanguageAbbrevation": "ARL",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 6145,
        "CultureName": "ar-MA",
        "LocaleName": "Arabic (Morocco)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (المملكة المغربية)‏",
        "CountryAbbrevation": "MAR",
        "LanguageAbbrevation": "ARM",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 8193,
        "CultureName": "ar-OM",
        "LocaleName": "Arabic (Oman)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (عمان)‏",
        "CountryAbbrevation": "OMN",
        "LanguageAbbrevation": "ARO",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 16385,
        "CultureName": "ar-QA",
        "LocaleName": "Arabic (Qatar)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (قطر)‏",
        "CountryAbbrevation": "QAT",
        "LanguageAbbrevation": "ARQ",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 1025,
        "CultureName": "ar-SA",
        "LocaleName": "Arabic (Saudi Arabia)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (المملكة العربية السعودية)‏",
        "CountryAbbrevation": "SAU",
        "LanguageAbbrevation": "ARA",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 10241,
        "CultureName": "ar-SY",
        "LocaleName": "Arabic (Syria)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (سوريا)‏",
        "CountryAbbrevation": "SYR",
        "LanguageAbbrevation": "ARS",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 7169,
        "CultureName": "ar-TN",
        "LocaleName": "Arabic (Tunisia)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (تونس)‏",
        "CountryAbbrevation": "TUN",
        "LanguageAbbrevation": "ART",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 14337,
        "CultureName": "ar-AE",
        "LocaleName": "Arabic (U.A.E.)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (الإمارات العربية المتحدة)‏",
        "CountryAbbrevation": "ARE",
        "LanguageAbbrevation": "ARU",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 9217,
        "CultureName": "ar-YE",
        "LocaleName": "Arabic (Yemen)‎",
        "LocaleEnglishName": "Arabic",
        "LocaleNativeName": "العربية (اليمن)‏",
        "CountryAbbrevation": "YEM",
        "LanguageAbbrevation": "ARY",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 43,
        "CultureName": "hy",
        "LocaleName": "Armenian",
        "LocaleEnglishName": "Armenian",
        "LocaleNativeName": "Հայերեն",
        "CountryAbbrevation": "ARM",
        "LanguageAbbrevation": "HYE",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1067,
        "CultureName": "hy-AM",
        "LocaleName": "Armenian (Armenia)",
        "LocaleEnglishName": "Armenian",
        "LocaleNativeName": "Հայերեն (Հայաստան)",
        "CountryAbbrevation": "ARM",
        "LanguageAbbrevation": "HYE",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 77,
        "CultureName": "as",
        "LocaleName": "Assamese",
        "LocaleEnglishName": "Assamese",
        "LocaleNativeName": "অসমীয়া",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "ASM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1101,
        "CultureName": "as-IN",
        "LocaleName": "Assamese (India)",
        "LocaleEnglishName": "Assamese",
        "LocaleNativeName": "অসমীয়া (ভাৰত)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "ASM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 44,
        "CultureName": "az",
        "LocaleName": "Azeri",
        "LocaleEnglishName": "Azeri (Latin)",
        "LocaleNativeName": "Azərbaycan­ılı",
        "CountryAbbrevation": "AZE",
        "LanguageAbbrevation": "AZE",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 29740,
        "CultureName": "az-Cyrl",
        "LocaleName": "Azeri (Cyrillic)",
        "LocaleEnglishName": "Azeri (Cyrillic)",
        "LocaleNativeName": "Азәрбајҹан дили",
        "CountryAbbrevation": "AZE",
        "LanguageAbbrevation": "AZC",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 2092,
        "CultureName": "az-Cyrl-AZ",
        "LocaleName": "Azeri (Cyrillic, Azerbaijan)",
        "LocaleEnglishName": "Azeri (Cyrillic)",
        "LocaleNativeName": "Азәрбајҹан (Азәрбајҹан)",
        "CountryAbbrevation": "AZE",
        "LanguageAbbrevation": "AZC",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 30764,
        "CultureName": "az-Latn",
        "LocaleName": "Azeri (Latin)",
        "LocaleEnglishName": "Azeri (Latin)",
        "LocaleNativeName": "Azərbaycan­ılı",
        "CountryAbbrevation": "AZE",
        "LanguageAbbrevation": "AZE",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 1068,
        "CultureName": "az-Latn-AZ",
        "LocaleName": "Azeri (Latin, Azerbaijan)",
        "LocaleEnglishName": "Azeri (Latin)",
        "LocaleNativeName": "Azərbaycan­ılı (Azərbaycan)",
        "CountryAbbrevation": "AZE",
        "LanguageAbbrevation": "AZE",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 109,
        "CultureName": "ba",
        "LocaleName": "Bashkir",
        "LocaleEnglishName": "Bashkir",
        "LocaleNativeName": "Башҡорт",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "BAS",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1133,
        "CultureName": "ba-RU",
        "LocaleName": "Bashkir (Russia)",
        "LocaleEnglishName": "Bashkir",
        "LocaleNativeName": "Башҡорт (Россия)",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "BAS",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 45,
        "CultureName": "eu",
        "LocaleName": "Basque",
        "LocaleEnglishName": "Basque",
        "LocaleNativeName": "euskara",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "EUQ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1069,
        "CultureName": "eu-ES",
        "LocaleName": "Basque (Basque)",
        "LocaleEnglishName": "Basque",
        "LocaleNativeName": "euskara (euskara)",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "EUQ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 35,
        "CultureName": "be",
        "LocaleName": "Belarusian",
        "LocaleEnglishName": "Belarusian",
        "LocaleNativeName": "Беларускі",
        "CountryAbbrevation": "BLR",
        "LanguageAbbrevation": "BEL",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1059,
        "CultureName": "be-BY",
        "LocaleName": "Belarusian (Belarus)",
        "LocaleEnglishName": "Belarusian",
        "LocaleNativeName": "Беларускі (Беларусь)",
        "CountryAbbrevation": "BLR",
        "LanguageAbbrevation": "BEL",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 69,
        "CultureName": "bn",
        "LocaleName": "Bengali",
        "LocaleEnglishName": "Bengali",
        "LocaleNativeName": "বাংলা",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "BNG",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 2117,
        "CultureName": "bn-BD",
        "LocaleName": "Bengali (Bangladesh)",
        "LocaleEnglishName": "Bengali",
        "LocaleNativeName": "বাংলা (বাংলাদেশ)",
        "CountryAbbrevation": "BGD",
        "LanguageAbbrevation": "BNB",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1093,
        "CultureName": "bn-IN",
        "LocaleName": "Bengali (India)",
        "LocaleEnglishName": "Bengali",
        "LocaleNativeName": "বাংলা (ভারত)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "BNG",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 30746,
        "CultureName": "bs",
        "LocaleName": "Bosnian",
        "LocaleEnglishName": "Bosnian (Latin)",
        "LocaleNativeName": "bosanski",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "BSB",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 25626,
        "CultureName": "bs-Cyrl",
        "LocaleName": "Bosnian (Cyrillic)",
        "LocaleEnglishName": "Bosnian (Cyrillic)",
        "LocaleNativeName": "босански (Ћирилица)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "BSC",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 8218,
        "CultureName": "bs-Cyrl-BA",
        "LocaleName": "Bosnian (Cyrillic, Bosnia and Herzegovina)",
        "LocaleEnglishName": "Bosnian (Cyrillic)",
        "LocaleNativeName": "босански (Босна и Херцеговина)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "BSC",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 26650,
        "CultureName": "bs-Latn",
        "LocaleName": "Bosnian (Latin)",
        "LocaleEnglishName": "Bosnian (Latin)",
        "LocaleNativeName": "bosanski (Latinica)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "BSB",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 5146,
        "CultureName": "bs-Latn-BA",
        "LocaleName": "Bosnian (Latin, Bosnia and Herzegovina)",
        "LocaleEnglishName": "Bosnian (Latin)",
        "LocaleNativeName": "bosanski (Bosna i Hercegovina)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "BSB",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 126,
        "CultureName": "br",
        "LocaleName": "Breton",
        "LocaleEnglishName": "Breton",
        "LocaleNativeName": "brezhoneg",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "BRE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1150,
        "CultureName": "br-FR",
        "LocaleName": "Breton (France)",
        "LocaleEnglishName": "Breton",
        "LocaleNativeName": "brezhoneg (Frañs)",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "BRE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2,
        "CultureName": "bg",
        "LocaleName": "Bulgarian",
        "LocaleEnglishName": "Bulgarian",
        "LocaleNativeName": "български",
        "CountryAbbrevation": "BGR",
        "LanguageAbbrevation": "BGR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1026,
        "CultureName": "bg-BG",
        "LocaleName": "Bulgarian (Bulgaria)",
        "LocaleEnglishName": "Bulgarian",
        "LocaleNativeName": "български (България)",
        "CountryAbbrevation": "BGR",
        "LanguageAbbrevation": "BGR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 3,
        "CultureName": "ca",
        "LocaleName": "Catalan",
        "LocaleEnglishName": "Catalan",
        "LocaleNativeName": "català",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "CAT",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1027,
        "CultureName": "ca-ES",
        "LocaleName": "Catalan (Catalan)",
        "LocaleEnglishName": "Catalan",
        "LocaleNativeName": "català (català)",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "CAT",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 30724,
        "CultureName": "zh",
        "LocaleName": "Chinese",
        "LocaleEnglishName": "Chinese (Simplified)",
        "LocaleNativeName": "中文",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "CHS",
        "OEMCodePage": 936,
        "ANSICodePage": 936
    }, {
        "LCID": 4,
        "CultureName": "zh-Hans",
        "LocaleName": "Chinese (Simplified)",
        "LocaleEnglishName": "Chinese (Simplified)",
        "LocaleNativeName": "中文(简体)",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "CHS",
        "OEMCodePage": 936,
        "ANSICodePage": 936
    }, {
        "LCID": 2052,
        "CultureName": "zh-CN",
        "LocaleName": "Chinese (Simplified, PRC)",
        "LocaleEnglishName": "Chinese (Simplified)",
        "LocaleNativeName": "中文(中华人民共和国)",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "CHS",
        "OEMCodePage": 936,
        "ANSICodePage": 936
    }, {
        "LCID": 4100,
        "CultureName": "zh-SG",
        "LocaleName": "Chinese (Simplified, Singapore)",
        "LocaleEnglishName": "Chinese (Simplified)",
        "LocaleNativeName": "中文(新加坡)",
        "CountryAbbrevation": "SGP",
        "LanguageAbbrevation": "ZHI",
        "OEMCodePage": 936,
        "ANSICodePage": 936
    }, {
        "LCID": 31748,
        "CultureName": "zh-Hant",
        "LocaleName": "Chinese (Traditional)",
        "LocaleEnglishName": "Chinese (Traditional)",
        "LocaleNativeName": "中文(繁體)",
        "CountryAbbrevation": "HKG",
        "LanguageAbbrevation": "ZHH",
        "OEMCodePage": 950,
        "ANSICodePage": 950
    }, {
        "LCID": 3076,
        "CultureName": "zh-HK",
        "LocaleName": "Chinese (Traditional, Hong Kong S.A.R.)",
        "LocaleEnglishName": "Chinese (Traditional)",
        "LocaleNativeName": "中文(香港特別行政區)",
        "CountryAbbrevation": "HKG",
        "LanguageAbbrevation": "ZHH",
        "OEMCodePage": 950,
        "ANSICodePage": 950
    }, {
        "LCID": 5124,
        "CultureName": "zh-MO",
        "LocaleName": "Chinese (Traditional, Macao S.A.R.)",
        "LocaleEnglishName": "Chinese (Traditional)",
        "LocaleNativeName": "中文(澳門特別行政區)",
        "CountryAbbrevation": "MCO",
        "LanguageAbbrevation": "ZHM",
        "OEMCodePage": 950,
        "ANSICodePage": 950
    }, {
        "LCID": 1028,
        "CultureName": "zh-TW",
        "LocaleName": "Chinese (Traditional, Taiwan)",
        "LocaleEnglishName": "Chinese (Traditional)",
        "LocaleNativeName": "中文(台灣)",
        "CountryAbbrevation": "TWN",
        "LanguageAbbrevation": "CHT",
        "OEMCodePage": 950,
        "ANSICodePage": 950
    }, {
        "LCID": 131,
        "CultureName": "co",
        "LocaleName": "Corsican",
        "LocaleEnglishName": "Corsican",
        "LocaleNativeName": "Corsu",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "COS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1155,
        "CultureName": "co-FR",
        "LocaleName": "Corsican (France)",
        "LocaleEnglishName": "Corsican",
        "LocaleNativeName": "Corsu (France)",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "COS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 26,
        "CultureName": "hr",
        "LocaleName": "Croatian",
        "LocaleEnglishName": "Croatian",
        "LocaleNativeName": "hrvatski",
        "CountryAbbrevation": "HRV",
        "LanguageAbbrevation": "HRV",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1050,
        "CultureName": "hr-HR",
        "LocaleName": "Croatian (Croatia)",
        "LocaleEnglishName": "Croatian",
        "LocaleNativeName": "hrvatski (Hrvatska)",
        "CountryAbbrevation": "HRV",
        "LanguageAbbrevation": "HRV",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 4122,
        "CultureName": "hr-BA",
        "LocaleName": "Croatian (Latin, Bosnia and Herzegovina)",
        "LocaleEnglishName": "Croatian (Latin)",
        "LocaleNativeName": "hrvatski (Bosna i Hercegovina)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "HRB",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 5,
        "CultureName": "cs",
        "LocaleName": "Czech",
        "LocaleEnglishName": "Czech",
        "LocaleNativeName": "čeština",
        "CountryAbbrevation": "CZE",
        "LanguageAbbrevation": "CSY",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1029,
        "CultureName": "cs-CZ",
        "LocaleName": "Czech (Czech Republic)",
        "LocaleEnglishName": "Czech",
        "LocaleNativeName": "čeština (Česká republika)",
        "CountryAbbrevation": "CZE",
        "LanguageAbbrevation": "CSY",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 6,
        "CultureName": "da",
        "LocaleName": "Danish",
        "LocaleEnglishName": "Danish",
        "LocaleNativeName": "dansk",
        "CountryAbbrevation": "DNK",
        "LanguageAbbrevation": "DAN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1030,
        "CultureName": "da-DK",
        "LocaleName": "Danish (Denmark)",
        "LocaleEnglishName": "Danish",
        "LocaleNativeName": "dansk (Danmark)",
        "CountryAbbrevation": "DNK",
        "LanguageAbbrevation": "DAN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 140,
        "CultureName": "prs",
        "LocaleName": "Dari‎",
        "LocaleEnglishName": "Dari",
        "LocaleNativeName": "درى‏",
        "CountryAbbrevation": "AFG",
        "LanguageAbbrevation": "PRS",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 1164,
        "CultureName": "prs-AF",
        "LocaleName": "Dari (Afghanistan)‎",
        "LocaleEnglishName": "Dari",
        "LocaleNativeName": "درى (افغانستان)‏",
        "CountryAbbrevation": "AFG",
        "LanguageAbbrevation": "PRS",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 101,
        "CultureName": "dv",
        "LocaleName": "Divehi‎",
        "LocaleEnglishName": "Divehi",
        "LocaleNativeName": "ދިވެހިބަސް‏",
        "CountryAbbrevation": "MDV",
        "LanguageAbbrevation": "DIV",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1125,
        "CultureName": "dv-MV",
        "LocaleName": "Divehi (Maldives)‎",
        "LocaleEnglishName": "Divehi",
        "LocaleNativeName": "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)‏",
        "CountryAbbrevation": "MDV",
        "LanguageAbbrevation": "DIV",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 19,
        "CultureName": "nl",
        "LocaleName": "Dutch",
        "LocaleEnglishName": "Dutch",
        "LocaleNativeName": "Nederlands",
        "CountryAbbrevation": "NLD",
        "LanguageAbbrevation": "NLD",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2067,
        "CultureName": "nl-BE",
        "LocaleName": "Dutch (Belgium)",
        "LocaleEnglishName": "Dutch",
        "LocaleNativeName": "Nederlands (België)",
        "CountryAbbrevation": "BEL",
        "LanguageAbbrevation": "NLB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1043,
        "CultureName": "nl-NL",
        "LocaleName": "Dutch (Netherlands)",
        "LocaleEnglishName": "Dutch",
        "LocaleNativeName": "Nederlands (Nederland)",
        "CountryAbbrevation": "NLD",
        "LanguageAbbrevation": "NLD",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 9,
        "CultureName": "en",
        "LocaleName": "English",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English",
        "CountryAbbrevation": "USA",
        "LanguageAbbrevation": "ENU",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 3081,
        "CultureName": "en-AU",
        "LocaleName": "English (Australia)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Australia)",
        "CountryAbbrevation": "AUS",
        "LanguageAbbrevation": "ENA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 10249,
        "CultureName": "en-BZ",
        "LocaleName": "English (Belize)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Belize)",
        "CountryAbbrevation": "BLZ",
        "LanguageAbbrevation": "ENL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 4105,
        "CultureName": "en-CA",
        "LocaleName": "English (Canada)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Canada)",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "ENC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 9225,
        "CultureName": "en-029",
        "LocaleName": "English (Caribbean)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Caribbean)",
        "CountryAbbrevation": "CAR",
        "LanguageAbbrevation": "ENB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 16393,
        "CultureName": "en-IN",
        "LocaleName": "English (India)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (India)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "ENN",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 6153,
        "CultureName": "en-IE",
        "LocaleName": "English (Ireland)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Ireland)",
        "CountryAbbrevation": "IRL",
        "LanguageAbbrevation": "ENI",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 8201,
        "CultureName": "en-JM",
        "LocaleName": "English (Jamaica)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Jamaica)",
        "CountryAbbrevation": "JAM",
        "LanguageAbbrevation": "ENJ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 17417,
        "CultureName": "en-MY",
        "LocaleName": "English (Malaysia)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Malaysia)",
        "CountryAbbrevation": "MYS",
        "LanguageAbbrevation": "ENM",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 5129,
        "CultureName": "en-NZ",
        "LocaleName": "English (New Zealand)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (New Zealand)",
        "CountryAbbrevation": "NZL",
        "LanguageAbbrevation": "ENZ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 13321,
        "CultureName": "en-PH",
        "LocaleName": "English (Republic of the Philippines)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Philippines)",
        "CountryAbbrevation": "PHL",
        "LanguageAbbrevation": "ENP",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 18441,
        "CultureName": "en-SG",
        "LocaleName": "English (Singapore)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Singapore)",
        "CountryAbbrevation": "SGP",
        "LanguageAbbrevation": "ENE",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 7177,
        "CultureName": "en-ZA",
        "LocaleName": "English (South Africa)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (South Africa)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "ENS",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 11273,
        "CultureName": "en-TT",
        "LocaleName": "English (Trinidad and Tobago)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Trinidad y Tobago)",
        "CountryAbbrevation": "TTO",
        "LanguageAbbrevation": "ENT",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2057,
        "CultureName": "en-GB",
        "LocaleName": "English (United Kingdom)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (United Kingdom)",
        "CountryAbbrevation": "GBR",
        "LanguageAbbrevation": "ENG",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1033,
        "CultureName": "en-US",
        "LocaleName": "English (United States)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (United States)",
        "CountryAbbrevation": "USA",
        "LanguageAbbrevation": "ENU",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 12297,
        "CultureName": "en-ZW",
        "LocaleName": "English (Zimbabwe)",
        "LocaleEnglishName": "English",
        "LocaleNativeName": "English (Zimbabwe)",
        "CountryAbbrevation": "ZWE",
        "LanguageAbbrevation": "ENW",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 37,
        "CultureName": "et",
        "LocaleName": "Estonian",
        "LocaleEnglishName": "Estonian",
        "LocaleNativeName": "eesti",
        "CountryAbbrevation": "EST",
        "LanguageAbbrevation": "ETI",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 1061,
        "CultureName": "et-EE",
        "LocaleName": "Estonian (Estonia)",
        "LocaleEnglishName": "Estonian",
        "LocaleNativeName": "eesti (Eesti)",
        "CountryAbbrevation": "EST",
        "LanguageAbbrevation": "ETI",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 56,
        "CultureName": "fo",
        "LocaleName": "Faroese",
        "LocaleEnglishName": "Faroese",
        "LocaleNativeName": "føroyskt",
        "CountryAbbrevation": "FRO",
        "LanguageAbbrevation": "FOS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1080,
        "CultureName": "fo-FO",
        "LocaleName": "Faroese (Faroe Islands)",
        "LocaleEnglishName": "Faroese",
        "LocaleNativeName": "føroyskt (Føroyar)",
        "CountryAbbrevation": "FRO",
        "LanguageAbbrevation": "FOS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 100,
        "CultureName": "fil",
        "LocaleName": "Filipino",
        "LocaleEnglishName": "Filipino",
        "LocaleNativeName": "Filipino",
        "CountryAbbrevation": "PHL",
        "LanguageAbbrevation": "FPO",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1124,
        "CultureName": "fil-PH",
        "LocaleName": "Filipino (Philippines)",
        "LocaleEnglishName": "Filipino",
        "LocaleNativeName": "Filipino (Pilipinas)",
        "CountryAbbrevation": "PHL",
        "LanguageAbbrevation": "FPO",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 11,
        "CultureName": "fi",
        "LocaleName": "Finnish",
        "LocaleEnglishName": "Finnish",
        "LocaleNativeName": "suomi",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "FIN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1035,
        "CultureName": "fi-FI",
        "LocaleName": "Finnish (Finland)",
        "LocaleEnglishName": "Finnish",
        "LocaleNativeName": "suomi (Suomi)",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "FIN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 12,
        "CultureName": "fr",
        "LocaleName": "French",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "FRA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2060,
        "CultureName": "fr-BE",
        "LocaleName": "French (Belgium)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (Belgique)",
        "CountryAbbrevation": "BEL",
        "LanguageAbbrevation": "FRB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 3084,
        "CultureName": "fr-CA",
        "LocaleName": "French (Canada)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (Canada)",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "FRC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1036,
        "CultureName": "fr-FR",
        "LocaleName": "French (France)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (France)",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "FRA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 5132,
        "CultureName": "fr-LU",
        "LocaleName": "French (Luxembourg)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (Luxembourg)",
        "CountryAbbrevation": "LUX",
        "LanguageAbbrevation": "FRL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 6156,
        "CultureName": "fr-MC",
        "LocaleName": "French (Monaco)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (Principauté de Monaco)",
        "CountryAbbrevation": "MCO",
        "LanguageAbbrevation": "FRM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 4108,
        "CultureName": "fr-CH",
        "LocaleName": "French (Switzerland)",
        "LocaleEnglishName": "French",
        "LocaleNativeName": "français (Suisse)",
        "CountryAbbrevation": "CHE",
        "LanguageAbbrevation": "FRS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 98,
        "CultureName": "fy",
        "LocaleName": "Frisian",
        "LocaleEnglishName": "Frisian",
        "LocaleNativeName": "Frysk",
        "CountryAbbrevation": "NLD",
        "LanguageAbbrevation": "FYN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1122,
        "CultureName": "fy-NL",
        "LocaleName": "Frisian (Netherlands)",
        "LocaleEnglishName": "Frisian",
        "LocaleNativeName": "Frysk (Nederlân)",
        "CountryAbbrevation": "NLD",
        "LanguageAbbrevation": "FYN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 86,
        "CultureName": "gl",
        "LocaleName": "Galician",
        "LocaleEnglishName": "Galician",
        "LocaleNativeName": "galego",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "GLC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1110,
        "CultureName": "gl-ES",
        "LocaleName": "Galician (Galician)",
        "LocaleEnglishName": "Galician",
        "LocaleNativeName": "galego (galego)",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "GLC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 55,
        "CultureName": "ka",
        "LocaleName": "Georgian",
        "LocaleEnglishName": "Georgian",
        "LocaleNativeName": "ქართული",
        "CountryAbbrevation": "GEO",
        "LanguageAbbrevation": "KAT",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1079,
        "CultureName": "ka-GE",
        "LocaleName": "Georgian (Georgia)",
        "LocaleEnglishName": "Georgian",
        "LocaleNativeName": "ქართული (საქართველო)",
        "CountryAbbrevation": "GEO",
        "LanguageAbbrevation": "KAT",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 7,
        "CultureName": "de",
        "LocaleName": "German",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch",
        "CountryAbbrevation": "DEU",
        "LanguageAbbrevation": "DEU",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 3079,
        "CultureName": "de-AT",
        "LocaleName": "German (Austria)",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch (Österreich)",
        "CountryAbbrevation": "AUT",
        "LanguageAbbrevation": "DEA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1031,
        "CultureName": "de-DE",
        "LocaleName": "German (Germany)",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch (Deutschland)",
        "CountryAbbrevation": "DEU",
        "LanguageAbbrevation": "DEU",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 5127,
        "CultureName": "de-LI",
        "LocaleName": "German (Liechtenstein)",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch (Liechtenstein)",
        "CountryAbbrevation": "LIE",
        "LanguageAbbrevation": "DEC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 4103,
        "CultureName": "de-LU",
        "LocaleName": "German (Luxembourg)",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch (Luxemburg)",
        "CountryAbbrevation": "LUX",
        "LanguageAbbrevation": "DEL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2055,
        "CultureName": "de-CH",
        "LocaleName": "German (Switzerland)",
        "LocaleEnglishName": "German",
        "LocaleNativeName": "Deutsch (Schweiz)",
        "CountryAbbrevation": "CHE",
        "LanguageAbbrevation": "DES",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 8,
        "CultureName": "el",
        "LocaleName": "Greek",
        "LocaleEnglishName": "Greek",
        "LocaleNativeName": "Ελληνικά",
        "CountryAbbrevation": "GRC",
        "LanguageAbbrevation": "ELL",
        "OEMCodePage": 737,
        "ANSICodePage": 1253
    }, {
        "LCID": 1032,
        "CultureName": "el-GR",
        "LocaleName": "Greek (Greece)",
        "LocaleEnglishName": "Greek",
        "LocaleNativeName": "Ελληνικά (Ελλάδα)",
        "CountryAbbrevation": "GRC",
        "LanguageAbbrevation": "ELL",
        "OEMCodePage": 737,
        "ANSICodePage": 1253
    }, {
        "LCID": 111,
        "CultureName": "kl",
        "LocaleName": "Greenlandic",
        "LocaleEnglishName": "Greenlandic",
        "LocaleNativeName": "kalaallisut",
        "CountryAbbrevation": "GRL",
        "LanguageAbbrevation": "KAL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1135,
        "CultureName": "kl-GL",
        "LocaleName": "Greenlandic (Greenland)",
        "LocaleEnglishName": "Greenlandic",
        "LocaleNativeName": "kalaallisut (Kalaallit Nunaat)",
        "CountryAbbrevation": "GRL",
        "LanguageAbbrevation": "KAL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 71,
        "CultureName": "gu",
        "LocaleName": "Gujarati",
        "LocaleEnglishName": "Gujarati",
        "LocaleNativeName": "ગુજરાતી",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "GUJ",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1095,
        "CultureName": "gu-IN",
        "LocaleName": "Gujarati (India)",
        "LocaleEnglishName": "Gujarati",
        "LocaleNativeName": "ગુજરાતી (ભારત)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "GUJ",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 104,
        "CultureName": "ha",
        "LocaleName": "Hausa",
        "LocaleEnglishName": "Hausa (Latin)",
        "LocaleNativeName": "Hausa",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "HAU",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 31848,
        "CultureName": "ha-Latn",
        "LocaleName": "Hausa (Latin)",
        "LocaleEnglishName": "Hausa (Latin)",
        "LocaleNativeName": "Hausa (Latin)",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "HAU",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1128,
        "CultureName": "ha-Latn-NG",
        "LocaleName": "Hausa (Latin, Nigeria)",
        "LocaleEnglishName": "Hausa (Latin)",
        "LocaleNativeName": "Hausa (Nigeria)",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "HAU",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 13,
        "CultureName": "he",
        "LocaleName": "Hebrew‎",
        "LocaleEnglishName": "Hebrew",
        "LocaleNativeName": "עברית‏",
        "CountryAbbrevation": "ISR",
        "LanguageAbbrevation": "HEB",
        "OEMCodePage": 862,
        "ANSICodePage": 1255
    }, {
        "LCID": 1037,
        "CultureName": "he-IL",
        "LocaleName": "Hebrew (Israel)‎",
        "LocaleEnglishName": "Hebrew",
        "LocaleNativeName": "עברית (ישראל)‏",
        "CountryAbbrevation": "ISR",
        "LanguageAbbrevation": "HEB",
        "OEMCodePage": 862,
        "ANSICodePage": 1255
    }, {
        "LCID": 57,
        "CultureName": "hi",
        "LocaleName": "Hindi",
        "LocaleEnglishName": "Hindi",
        "LocaleNativeName": "हिंदी",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "HIN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1081,
        "CultureName": "hi-IN",
        "LocaleName": "Hindi (India)",
        "LocaleEnglishName": "Hindi",
        "LocaleNativeName": "हिंदी (भारत)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "HIN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 14,
        "CultureName": "hu",
        "LocaleName": "Hungarian",
        "LocaleEnglishName": "Hungarian",
        "LocaleNativeName": "magyar",
        "CountryAbbrevation": "HUN",
        "LanguageAbbrevation": "HUN",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1038,
        "CultureName": "hu-HU",
        "LocaleName": "Hungarian (Hungary)",
        "LocaleEnglishName": "Hungarian",
        "LocaleNativeName": "magyar (Magyarország)",
        "CountryAbbrevation": "HUN",
        "LanguageAbbrevation": "HUN",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 15,
        "CultureName": "is",
        "LocaleName": "Icelandic",
        "LocaleEnglishName": "Icelandic",
        "LocaleNativeName": "íslenska",
        "CountryAbbrevation": "ISL",
        "LanguageAbbrevation": "ISL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1039,
        "CultureName": "is-IS",
        "LocaleName": "Icelandic (Iceland)",
        "LocaleEnglishName": "Icelandic",
        "LocaleNativeName": "íslenska (Ísland)",
        "CountryAbbrevation": "ISL",
        "LanguageAbbrevation": "ISL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 112,
        "CultureName": "ig",
        "LocaleName": "Igbo",
        "LocaleEnglishName": "Igbo",
        "LocaleNativeName": "Igbo",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "IBO",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1136,
        "CultureName": "ig-NG",
        "LocaleName": "Igbo (Nigeria)",
        "LocaleEnglishName": "Igbo",
        "LocaleNativeName": "Igbo (Nigeria)",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "IBO",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 33,
        "CultureName": "id",
        "LocaleName": "Indonesian",
        "LocaleEnglishName": "Indonesian",
        "LocaleNativeName": "Bahasa Indonesia",
        "CountryAbbrevation": "IDN",
        "LanguageAbbrevation": "IND",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1057,
        "CultureName": "id-ID",
        "LocaleName": "Indonesian (Indonesia)",
        "LocaleEnglishName": "Indonesian",
        "LocaleNativeName": "Bahasa Indonesia (Indonesia)",
        "CountryAbbrevation": "IDN",
        "LanguageAbbrevation": "IND",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 93,
        "CultureName": "iu",
        "LocaleName": "Inuktitut",
        "LocaleEnglishName": "Inuktitut (Latin)",
        "LocaleNativeName": "Inuktitut",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "IUK",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 31837,
        "CultureName": "iu-Latn",
        "LocaleName": "Inuktitut (Latin)",
        "LocaleEnglishName": "Inuktitut (Latin)",
        "LocaleNativeName": "Inuktitut (Qaliujaaqpait)",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "IUK",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 2141,
        "CultureName": "iu-Latn-CA",
        "LocaleName": "Inuktitut (Latin, Canada)",
        "LocaleEnglishName": "Inuktitut (Latin)",
        "LocaleNativeName": "Inuktitut",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "IUK",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 30813,
        "CultureName": "iu-Cans",
        "LocaleName": "Inuktitut (Syllabics)",
        "LocaleEnglishName": "Inuktitut (Syllabics)",
        "LocaleNativeName": "ᐃᓄᒃᑎᑐᑦ (ᖃᓂᐅᔮᖅᐸᐃᑦ)",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "IUS",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1117,
        "CultureName": "iu-Cans-CA",
        "LocaleName": "Inuktitut (Syllabics, Canada)",
        "LocaleEnglishName": "Inuktitut (Syllabics)",
        "LocaleNativeName": "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "IUS",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 60,
        "CultureName": "ga",
        "LocaleName": "Irish",
        "LocaleEnglishName": "Irish",
        "LocaleNativeName": "Gaeilge",
        "CountryAbbrevation": "IRL",
        "LanguageAbbrevation": "IRE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2108,
        "CultureName": "ga-IE",
        "LocaleName": "Irish (Ireland)",
        "LocaleEnglishName": "Irish",
        "LocaleNativeName": "Gaeilge (Éire)",
        "CountryAbbrevation": "IRL",
        "LanguageAbbrevation": "IRE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 52,
        "CultureName": "xh",
        "LocaleName": "isiXhosa",
        "LocaleEnglishName": "isiXhosa",
        "LocaleNativeName": "isiXhosa",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "XHO",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1076,
        "CultureName": "xh-ZA",
        "LocaleName": "isiXhosa (South Africa)",
        "LocaleEnglishName": "isiXhosa",
        "LocaleNativeName": "isiXhosa (uMzantsi Afrika)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "XHO",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 53,
        "CultureName": "zu",
        "LocaleName": "isiZulu",
        "LocaleEnglishName": "isiZulu",
        "LocaleNativeName": "isiZulu",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "ZUL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1077,
        "CultureName": "zu-ZA",
        "LocaleName": "isiZulu (South Africa)",
        "LocaleEnglishName": "isiZulu",
        "LocaleNativeName": "isiZulu (iNingizimu Afrika)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "ZUL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 16,
        "CultureName": "it",
        "LocaleName": "Italian",
        "LocaleEnglishName": "Italian",
        "LocaleNativeName": "italiano",
        "CountryAbbrevation": "ITA",
        "LanguageAbbrevation": "ITA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1040,
        "CultureName": "it-IT",
        "LocaleName": "Italian (Italy)",
        "LocaleEnglishName": "Italian",
        "LocaleNativeName": "italiano (Italia)",
        "CountryAbbrevation": "ITA",
        "LanguageAbbrevation": "ITA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2064,
        "CultureName": "it-CH",
        "LocaleName": "Italian (Switzerland)",
        "LocaleEnglishName": "Italian",
        "LocaleNativeName": "italiano (Svizzera)",
        "CountryAbbrevation": "CHE",
        "LanguageAbbrevation": "ITS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 17,
        "CultureName": "ja",
        "LocaleName": "Japanese",
        "LocaleEnglishName": "Japanese",
        "LocaleNativeName": "日本語",
        "CountryAbbrevation": "JPN",
        "LanguageAbbrevation": "JPN",
        "OEMCodePage": 932,
        "ANSICodePage": 932
    }, {
        "LCID": 1041,
        "CultureName": "ja-JP",
        "LocaleName": "Japanese (Japan)",
        "LocaleEnglishName": "Japanese",
        "LocaleNativeName": "日本語 (日本)",
        "CountryAbbrevation": "JPN",
        "LanguageAbbrevation": "JPN",
        "OEMCodePage": 932,
        "ANSICodePage": 932
    }, {
        "LCID": 75,
        "CultureName": "kn",
        "LocaleName": "Kannada",
        "LocaleEnglishName": "Kannada",
        "LocaleNativeName": "ಕನ್ನಡ",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "KDI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1099,
        "CultureName": "kn-IN",
        "LocaleName": "Kannada (India)",
        "LocaleEnglishName": "Kannada",
        "LocaleNativeName": "ಕನ್ನಡ (ಭಾರತ)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "KDI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 63,
        "CultureName": "kk",
        "LocaleName": "Kazakh",
        "LocaleEnglishName": "Kazakh",
        "LocaleNativeName": "Қазақ",
        "CountryAbbrevation": "KAZ",
        "LanguageAbbrevation": "KKZ",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1087,
        "CultureName": "kk-KZ",
        "LocaleName": "Kazakh (Kazakhstan)",
        "LocaleEnglishName": "Kazakh",
        "LocaleNativeName": "Қазақ (Қазақстан)",
        "CountryAbbrevation": "KAZ",
        "LanguageAbbrevation": "KKZ",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 83,
        "CultureName": "km",
        "LocaleName": "Khmer",
        "LocaleEnglishName": "Khmer",
        "LocaleNativeName": "ខ្មែរ",
        "CountryAbbrevation": "KHM",
        "LanguageAbbrevation": "KHM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1107,
        "CultureName": "km-KH",
        "LocaleName": "Khmer (Cambodia)",
        "LocaleEnglishName": "Khmer",
        "LocaleNativeName": "ខ្មែរ (កម្ពុជា)",
        "CountryAbbrevation": "KHM",
        "LanguageAbbrevation": "KHM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 134,
        "CultureName": "qut",
        "LocaleName": "K'iche",
        "LocaleEnglishName": "K'iche",
        "LocaleNativeName": "K'iche",
        "CountryAbbrevation": "GTM",
        "LanguageAbbrevation": "QUT",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1158,
        "CultureName": "qut-GT",
        "LocaleName": "K'iche (Guatemala)",
        "LocaleEnglishName": "K'iche",
        "LocaleNativeName": "K'iche (Guatemala)",
        "CountryAbbrevation": "GTM",
        "LanguageAbbrevation": "QUT",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 135,
        "CultureName": "rw",
        "LocaleName": "Kinyarwanda",
        "LocaleEnglishName": "Kinyarwanda",
        "LocaleNativeName": "Kinyarwanda",
        "CountryAbbrevation": "RWA",
        "LanguageAbbrevation": "KIN",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1159,
        "CultureName": "rw-RW",
        "LocaleName": "Kinyarwanda (Rwanda)",
        "LocaleEnglishName": "Kinyarwanda",
        "LocaleNativeName": "Kinyarwanda (Rwanda)",
        "CountryAbbrevation": "RWA",
        "LanguageAbbrevation": "KIN",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 65,
        "CultureName": "sw",
        "LocaleName": "Kiswahili",
        "LocaleEnglishName": "Kiswahili",
        "LocaleNativeName": "Kiswahili",
        "CountryAbbrevation": "KEN",
        "LanguageAbbrevation": "SWK",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1089,
        "CultureName": "sw-KE",
        "LocaleName": "Kiswahili (Kenya)",
        "LocaleEnglishName": "Kiswahili",
        "LocaleNativeName": "Kiswahili (Kenya)",
        "CountryAbbrevation": "KEN",
        "LanguageAbbrevation": "SWK",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 87,
        "CultureName": "kok",
        "LocaleName": "Konkani",
        "LocaleEnglishName": "Konkani",
        "LocaleNativeName": "कोंकणी",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "KNK",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1111,
        "CultureName": "kok-IN",
        "LocaleName": "Konkani (India)",
        "LocaleEnglishName": "Konkani",
        "LocaleNativeName": "कोंकणी (भारत)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "KNK",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 18,
        "CultureName": "ko",
        "LocaleName": "Korean",
        "LocaleEnglishName": "Korean",
        "LocaleNativeName": "한국어",
        "CountryAbbrevation": "KOR",
        "LanguageAbbrevation": "KOR",
        "OEMCodePage": 949,
        "ANSICodePage": 949
    }, {
        "LCID": 1042,
        "CultureName": "ko-KR",
        "LocaleName": "Korean (Korea)",
        "LocaleEnglishName": "Korean",
        "LocaleNativeName": "한국어 (대한민국)",
        "CountryAbbrevation": "KOR",
        "LanguageAbbrevation": "KOR",
        "OEMCodePage": 949,
        "ANSICodePage": 949
    }, {
        "LCID": 64,
        "CultureName": "ky",
        "LocaleName": "Kyrgyz",
        "LocaleEnglishName": "Kyrgyz",
        "LocaleNativeName": "Кыргыз",
        "CountryAbbrevation": "KGZ",
        "LanguageAbbrevation": "KYR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1088,
        "CultureName": "ky-KG",
        "LocaleName": "Kyrgyz (Kyrgyzstan)",
        "LocaleEnglishName": "Kyrgyz",
        "LocaleNativeName": "Кыргыз (Кыргызстан)",
        "CountryAbbrevation": "KGZ",
        "LanguageAbbrevation": "KYR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 84,
        "CultureName": "lo",
        "LocaleName": "Lao",
        "LocaleEnglishName": "Lao",
        "LocaleNativeName": "ລາວ",
        "CountryAbbrevation": "LAO",
        "LanguageAbbrevation": "LAO",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1108,
        "CultureName": "lo-LA",
        "LocaleName": "Lao (Lao P.D.R.)",
        "LocaleEnglishName": "Lao",
        "LocaleNativeName": "ລາວ (ສ.ປ.ປ. ລາວ)",
        "CountryAbbrevation": "LAO",
        "LanguageAbbrevation": "LAO",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 38,
        "CultureName": "lv",
        "LocaleName": "Latvian",
        "LocaleEnglishName": "Latvian",
        "LocaleNativeName": "latviešu",
        "CountryAbbrevation": "LVA",
        "LanguageAbbrevation": "LVI",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 1062,
        "CultureName": "lv-LV",
        "LocaleName": "Latvian (Latvia)",
        "LocaleEnglishName": "Latvian",
        "LocaleNativeName": "latviešu (Latvija)",
        "CountryAbbrevation": "LVA",
        "LanguageAbbrevation": "LVI",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 39,
        "CultureName": "lt",
        "LocaleName": "Lithuanian",
        "LocaleEnglishName": "Lithuanian",
        "LocaleNativeName": "lietuvių",
        "CountryAbbrevation": "LTU",
        "LanguageAbbrevation": "LTH",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 1063,
        "CultureName": "lt-LT",
        "LocaleName": "Lithuanian (Lithuania)",
        "LocaleEnglishName": "Lithuanian",
        "LocaleNativeName": "lietuvių (Lietuva)",
        "CountryAbbrevation": "LTU",
        "LanguageAbbrevation": "LTH",
        "OEMCodePage": 775,
        "ANSICodePage": 1257
    }, {
        "LCID": 31790,
        "CultureName": "dsb",
        "LocaleName": "Lower Sorbian",
        "LocaleEnglishName": "Lower Sorbian",
        "LocaleNativeName": "dolnoserbšćina",
        "CountryAbbrevation": "GER",
        "LanguageAbbrevation": "DSB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2094,
        "CultureName": "dsb-DE",
        "LocaleName": "Lower Sorbian (Germany)",
        "LocaleEnglishName": "Lower Sorbian",
        "LocaleNativeName": "dolnoserbšćina (Nimska)",
        "CountryAbbrevation": "GER",
        "LanguageAbbrevation": "DSB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 110,
        "CultureName": "lb",
        "LocaleName": "Luxembourgish",
        "LocaleEnglishName": "Luxembourgish",
        "LocaleNativeName": "Lëtzebuergesch",
        "CountryAbbrevation": "LUX",
        "LanguageAbbrevation": "LBX",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1134,
        "CultureName": "lb-LU",
        "LocaleName": "Luxembourgish (Luxembourg)",
        "LocaleEnglishName": "Luxembourgish",
        "LocaleNativeName": "Lëtzebuergesch (Luxembourg)",
        "CountryAbbrevation": "LUX",
        "LanguageAbbrevation": "LBX",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1071,
        "CultureName": "mk-MK",
        "LocaleName": "Macedonian (Former Yugoslav Republic of Macedonia)",
        "LocaleEnglishName": "Macedonian (FYROM)",
        "LocaleNativeName": "македонски јазик (Македонија)",
        "CountryAbbrevation": "MKD",
        "LanguageAbbrevation": "MKI",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 47,
        "CultureName": "mk",
        "LocaleName": "Macedonian (FYROM)",
        "LocaleEnglishName": "Macedonian (FYROM)",
        "LocaleNativeName": "македонски јазик",
        "CountryAbbrevation": "MKD",
        "LanguageAbbrevation": "MKI",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 62,
        "CultureName": "ms",
        "LocaleName": "Malay",
        "LocaleEnglishName": "Malay",
        "LocaleNativeName": "Bahasa Melayu",
        "CountryAbbrevation": "MYS",
        "LanguageAbbrevation": "MSL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2110,
        "CultureName": "ms-BN",
        "LocaleName": "Malay (Brunei Darussalam)",
        "LocaleEnglishName": "Malay",
        "LocaleNativeName": "Bahasa Melayu (Brunei Darussalam)",
        "CountryAbbrevation": "BRN",
        "LanguageAbbrevation": "MSB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1086,
        "CultureName": "ms-MY",
        "LocaleName": "Malay (Malaysia)",
        "LocaleEnglishName": "Malay",
        "LocaleNativeName": "Bahasa Melayu (Malaysia)",
        "CountryAbbrevation": "MYS",
        "LanguageAbbrevation": "MSL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 76,
        "CultureName": "ml",
        "LocaleName": "Malayalam",
        "LocaleEnglishName": "Malayalam",
        "LocaleNativeName": "മലയാളം",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "MYM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1100,
        "CultureName": "ml-IN",
        "LocaleName": "Malayalam (India)",
        "LocaleEnglishName": "Malayalam",
        "LocaleNativeName": "മലയാളം (ഭാരതം)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "MYM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 58,
        "CultureName": "mt",
        "LocaleName": "Maltese",
        "LocaleEnglishName": "Maltese",
        "LocaleNativeName": "Malti",
        "CountryAbbrevation": "MLT",
        "LanguageAbbrevation": "MLT",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1082,
        "CultureName": "mt-MT",
        "LocaleName": "Maltese (Malta)",
        "LocaleEnglishName": "Maltese",
        "LocaleNativeName": "Malti (Malta)",
        "CountryAbbrevation": "MLT",
        "LanguageAbbrevation": "MLT",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 129,
        "CultureName": "mi",
        "LocaleName": "Maori",
        "LocaleEnglishName": "Maori",
        "LocaleNativeName": "Reo Māori",
        "CountryAbbrevation": "NZL",
        "LanguageAbbrevation": "MRI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1153,
        "CultureName": "mi-NZ",
        "LocaleName": "Maori (New Zealand)",
        "LocaleEnglishName": "Maori",
        "LocaleNativeName": "Reo Māori (Aotearoa)",
        "CountryAbbrevation": "NZL",
        "LanguageAbbrevation": "MRI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 122,
        "CultureName": "arn",
        "LocaleName": "Mapudungun",
        "LocaleEnglishName": "Mapudungun",
        "LocaleNativeName": "Mapudungun",
        "CountryAbbrevation": "CHL",
        "LanguageAbbrevation": "MPD",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1146,
        "CultureName": "arn-CL",
        "LocaleName": "Mapudungun (Chile)",
        "LocaleEnglishName": "Mapudungun",
        "LocaleNativeName": "Mapudungun (Chile)",
        "CountryAbbrevation": "CHL",
        "LanguageAbbrevation": "MPD",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 78,
        "CultureName": "mr",
        "LocaleName": "Marathi",
        "LocaleEnglishName": "Marathi",
        "LocaleNativeName": "मराठी",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "MAR",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1102,
        "CultureName": "mr-IN",
        "LocaleName": "Marathi (India)",
        "LocaleEnglishName": "Marathi",
        "LocaleNativeName": "मराठी (भारत)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "MAR",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 124,
        "CultureName": "moh",
        "LocaleName": "Mohawk",
        "LocaleEnglishName": "Mohawk",
        "LocaleNativeName": "Kanien'kéha",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "MWK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1148,
        "CultureName": "moh-CA",
        "LocaleName": "Mohawk (Mohawk)",
        "LocaleEnglishName": "Mohawk",
        "LocaleNativeName": "Kanien'kéha",
        "CountryAbbrevation": "CAN",
        "LanguageAbbrevation": "MWK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 80,
        "CultureName": "mn",
        "LocaleName": "Mongolian (Cyrillic)",
        "LocaleEnglishName": "Mongolian (Cyrillic)",
        "LocaleNativeName": "Монгол хэл",
        "CountryAbbrevation": "MNG",
        "LanguageAbbrevation": "MNN",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 30800,
        "CultureName": "mn-Cyrl",
        "LocaleName": "Mongolian (Cyrillic)",
        "LocaleEnglishName": "Mongolian (Cyrillic)",
        "LocaleNativeName": "Монгол хэл",
        "CountryAbbrevation": "MNG",
        "LanguageAbbrevation": "MNN",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1104,
        "CultureName": "mn-MN",
        "LocaleName": "Mongolian (Cyrillic, Mongolia)",
        "LocaleEnglishName": "Mongolian (Cyrillic)",
        "LocaleNativeName": "Монгол хэл (Монгол улс)",
        "CountryAbbrevation": "MNG",
        "LanguageAbbrevation": "MNN",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 31824,
        "CultureName": "mn-Mong",
        "LocaleName": "Mongolian (Traditional Mongolian)",
        "LocaleEnglishName": "Mongolian (Traditional Mongolian)",
        "LocaleNativeName": "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "MNG",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 2128,
        "CultureName": "mn-Mong-CN",
        "LocaleName": "Mongolian (Traditional Mongolian, PRC)",
        "LocaleEnglishName": "Mongolian (Traditional Mongolian)",
        "LocaleNativeName": "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "MNG",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 97,
        "CultureName": "ne",
        "LocaleName": "Nepali",
        "LocaleEnglishName": "Nepali",
        "LocaleNativeName": "नेपाली",
        "CountryAbbrevation": "NEP",
        "LanguageAbbrevation": "NEP",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1121,
        "CultureName": "ne-NP",
        "LocaleName": "Nepali (Nepal)",
        "LocaleEnglishName": "Nepali",
        "LocaleNativeName": "नेपाली (नेपाल)",
        "CountryAbbrevation": "NEP",
        "LanguageAbbrevation": "NEP",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 20,
        "CultureName": "no",
        "LocaleName": "Norwegian",
        "LocaleEnglishName": "Norwegian (Bokmål)",
        "LocaleNativeName": "norsk",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "NOR",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 31764,
        "CultureName": "nb",
        "LocaleName": "Norwegian (Bokmål)",
        "LocaleEnglishName": "Norwegian (Bokmål)",
        "LocaleNativeName": "norsk (bokmål)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "NOR",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 30740,
        "CultureName": "nn",
        "LocaleName": "Norwegian (Nynorsk)",
        "LocaleEnglishName": "Norwegian (Nynorsk)",
        "LocaleNativeName": "norsk (nynorsk)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "NON",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1044,
        "CultureName": "nb-NO",
        "LocaleName": "Norwegian, Bokmål (Norway)",
        "LocaleEnglishName": "Norwegian (Bokmål)",
        "LocaleNativeName": "norsk, bokmål (Norge)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "NOR",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2068,
        "CultureName": "nn-NO",
        "LocaleName": "Norwegian, Nynorsk (Norway)",
        "LocaleEnglishName": "Norwegian (Nynorsk)",
        "LocaleNativeName": "norsk, nynorsk (Noreg)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "NON",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 130,
        "CultureName": "oc",
        "LocaleName": "Occitan",
        "LocaleEnglishName": "Occitan",
        "LocaleNativeName": "Occitan",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "OCI",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1154,
        "CultureName": "oc-FR",
        "LocaleName": "Occitan (France)",
        "LocaleEnglishName": "Occitan",
        "LocaleNativeName": "Occitan (França)",
        "CountryAbbrevation": "FRA",
        "LanguageAbbrevation": "OCI",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 72,
        "CultureName": "or",
        "LocaleName": "Oriya",
        "LocaleEnglishName": "Oriya",
        "LocaleNativeName": "ଓଡ଼ିଆ",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "ORI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1096,
        "CultureName": "or-IN",
        "LocaleName": "Oriya (India)",
        "LocaleEnglishName": "Oriya",
        "LocaleNativeName": "ଓଡ଼ିଆ (ଭାରତ)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "ORI",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 99,
        "CultureName": "ps",
        "LocaleName": "Pashto‎",
        "LocaleEnglishName": "Pashto",
        "LocaleNativeName": "پښتو‏",
        "CountryAbbrevation": "AFG",
        "LanguageAbbrevation": "PAS",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1123,
        "CultureName": "ps-AF",
        "LocaleName": "Pashto (Afghanistan)‎",
        "LocaleEnglishName": "Pashto",
        "LocaleNativeName": "پښتو (افغانستان)‏",
        "CountryAbbrevation": "AFG",
        "LanguageAbbrevation": "PAS",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 41,
        "CultureName": "fa",
        "LocaleName": "Persian‎",
        "LocaleEnglishName": "Persian",
        "LocaleNativeName": "فارسى‏",
        "CountryAbbrevation": "IRN",
        "LanguageAbbrevation": "FAR",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 1065,
        "CultureName": "fa-IR",
        "LocaleName": "Persian‎",
        "LocaleEnglishName": "Persian",
        "LocaleNativeName": "فارسى (ایران)‏",
        "CountryAbbrevation": "IRN",
        "LanguageAbbrevation": "FAR",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 21,
        "CultureName": "pl",
        "LocaleName": "Polish",
        "LocaleEnglishName": "Polish",
        "LocaleNativeName": "polski",
        "CountryAbbrevation": "POL",
        "LanguageAbbrevation": "PLK",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1045,
        "CultureName": "pl-PL",
        "LocaleName": "Polish (Poland)",
        "LocaleEnglishName": "Polish",
        "LocaleNativeName": "polski (Polska)",
        "CountryAbbrevation": "POL",
        "LanguageAbbrevation": "PLK",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 22,
        "CultureName": "pt",
        "LocaleName": "Portuguese",
        "LocaleEnglishName": "Portuguese",
        "LocaleNativeName": "Português",
        "CountryAbbrevation": "BRA",
        "LanguageAbbrevation": "PTB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1046,
        "CultureName": "pt-BR",
        "LocaleName": "Portuguese (Brazil)",
        "LocaleEnglishName": "Portuguese",
        "LocaleNativeName": "Português (Brasil)",
        "CountryAbbrevation": "BRA",
        "LanguageAbbrevation": "PTB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2070,
        "CultureName": "pt-PT",
        "LocaleName": "Portuguese (Portugal)",
        "LocaleEnglishName": "Portuguese",
        "LocaleNativeName": "português (Portugal)",
        "CountryAbbrevation": "PRT",
        "LanguageAbbrevation": "PTG",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 70,
        "CultureName": "pa",
        "LocaleName": "Punjabi",
        "LocaleEnglishName": "Punjabi",
        "LocaleNativeName": "ਪੰਜਾਬੀ",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "PAN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1094,
        "CultureName": "pa-IN",
        "LocaleName": "Punjabi (India)",
        "LocaleEnglishName": "Punjabi",
        "LocaleNativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "PAN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 107,
        "CultureName": "quz",
        "LocaleName": "Quechua",
        "LocaleEnglishName": "Quechua",
        "LocaleNativeName": "runasimi",
        "CountryAbbrevation": "BOL",
        "LanguageAbbrevation": "QUB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1131,
        "CultureName": "quz-BO",
        "LocaleName": "Quechua (Bolivia)",
        "LocaleEnglishName": "Quechua",
        "LocaleNativeName": "runasimi (Qullasuyu)",
        "CountryAbbrevation": "BOL",
        "LanguageAbbrevation": "QUB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2155,
        "CultureName": "quz-EC",
        "LocaleName": "Quechua (Ecuador)",
        "LocaleEnglishName": "Quechua",
        "LocaleNativeName": "runasimi (Ecuador)",
        "CountryAbbrevation": "ECU",
        "LanguageAbbrevation": "QUE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 3179,
        "CultureName": "quz-PE",
        "LocaleName": "Quechua (Peru)",
        "LocaleEnglishName": "Quechua",
        "LocaleNativeName": "runasimi (Piruw)",
        "CountryAbbrevation": "PER",
        "LanguageAbbrevation": "QUP",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 24,
        "CultureName": "ro",
        "LocaleName": "Romanian",
        "LocaleEnglishName": "Romanian",
        "LocaleNativeName": "română",
        "CountryAbbrevation": "ROM",
        "LanguageAbbrevation": "ROM",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1048,
        "CultureName": "ro-RO",
        "LocaleName": "Romanian (Romania)",
        "LocaleEnglishName": "Romanian",
        "LocaleNativeName": "română (România)",
        "CountryAbbrevation": "ROM",
        "LanguageAbbrevation": "ROM",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 23,
        "CultureName": "rm",
        "LocaleName": "Romansh",
        "LocaleEnglishName": "Romansh",
        "LocaleNativeName": "Rumantsch",
        "CountryAbbrevation": "CHE",
        "LanguageAbbrevation": "RMC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1047,
        "CultureName": "rm-CH",
        "LocaleName": "Romansh (Switzerland)",
        "LocaleEnglishName": "Romansh",
        "LocaleNativeName": "Rumantsch (Svizra)",
        "CountryAbbrevation": "CHE",
        "LanguageAbbrevation": "RMC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 25,
        "CultureName": "ru",
        "LocaleName": "Russian",
        "LocaleEnglishName": "Russian",
        "LocaleNativeName": "русский",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "RUS",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1049,
        "CultureName": "ru-RU",
        "LocaleName": "Russian (Russia)",
        "LocaleEnglishName": "Russian",
        "LocaleNativeName": "русский (Россия)",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "RUS",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 28731,
        "CultureName": "smn",
        "LocaleName": "Sami (Inari)",
        "LocaleEnglishName": "Sami (Inari)",
        "LocaleNativeName": "sämikielâ",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SMN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 31803,
        "CultureName": "smj",
        "LocaleName": "Sami (Lule)",
        "LocaleEnglishName": "Sami (Lule)",
        "LocaleNativeName": "julevusámegiella",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SMK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 59,
        "CultureName": "se",
        "LocaleName": "Sami (Northern)",
        "LocaleEnglishName": "Sami (Northern)",
        "LocaleNativeName": "davvisámegiella",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "SME",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 29755,
        "CultureName": "sms",
        "LocaleName": "Sami (Skolt)",
        "LocaleEnglishName": "Sami (Skolt)",
        "LocaleNativeName": "sääm´ǩiõll",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SMS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 30779,
        "CultureName": "sma",
        "LocaleName": "Sami (Southern)",
        "LocaleEnglishName": "Sami (Southern)",
        "LocaleNativeName": "åarjelsaemiengiele",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SMB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 9275,
        "CultureName": "smn-FI",
        "LocaleName": "Sami, Inari (Finland)",
        "LocaleEnglishName": "Sami (Inari)",
        "LocaleNativeName": "sämikielâ (Suomâ)",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SMN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 4155,
        "CultureName": "smj-NO",
        "LocaleName": "Sami, Lule (Norway)",
        "LocaleEnglishName": "Sami (Lule)",
        "LocaleNativeName": "julevusámegiella (Vuodna)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "SMJ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 5179,
        "CultureName": "smj-SE",
        "LocaleName": "Sami, Lule (Sweden)",
        "LocaleEnglishName": "Sami (Lule)",
        "LocaleNativeName": "julevusámegiella (Svierik)",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SMK",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 3131,
        "CultureName": "se-FI",
        "LocaleName": "Sami, Northern (Finland)",
        "LocaleEnglishName": "Sami (Northern)",
        "LocaleNativeName": "davvisámegiella (Suopma)",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SMG",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1083,
        "CultureName": "se-NO",
        "LocaleName": "Sami, Northern (Norway)",
        "LocaleEnglishName": "Sami (Northern)",
        "LocaleNativeName": "davvisámegiella (Norga)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "SME",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2107,
        "CultureName": "se-SE",
        "LocaleName": "Sami, Northern (Sweden)",
        "LocaleEnglishName": "Sami (Northern)",
        "LocaleNativeName": "davvisámegiella (Ruoŧŧa)",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SMF",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 8251,
        "CultureName": "sms-FI",
        "LocaleName": "Sami, Skolt (Finland)",
        "LocaleEnglishName": "Sami (Skolt)",
        "LocaleNativeName": "sääm´ǩiõll (Lää´ddjânnam)",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SMS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 6203,
        "CultureName": "sma-NO",
        "LocaleName": "Sami, Southern (Norway)",
        "LocaleEnglishName": "Sami (Southern)",
        "LocaleNativeName": "åarjelsaemiengiele (Nöörje)",
        "CountryAbbrevation": "NOR",
        "LanguageAbbrevation": "SMA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 7227,
        "CultureName": "sma-SE",
        "LocaleName": "Sami, Southern (Sweden)",
        "LocaleEnglishName": "Sami (Southern)",
        "LocaleNativeName": "åarjelsaemiengiele (Sveerje)",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SMB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 79,
        "CultureName": "sa",
        "LocaleName": "Sanskrit",
        "LocaleEnglishName": "Sanskrit",
        "LocaleNativeName": "संस्कृत",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "SAN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1103,
        "CultureName": "sa-IN",
        "LocaleName": "Sanskrit (India)",
        "LocaleEnglishName": "Sanskrit",
        "LocaleNativeName": "संस्कृत (भारतम्)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "SAN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 145,
        "CultureName": "gd",
        "LocaleName": "Scottish Gaelic",
        "LocaleEnglishName": "Scottish Gaelic",
        "LocaleNativeName": "Gàidhlig",
        "CountryAbbrevation": "GBR",
        "LanguageAbbrevation": "GLA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1169,
        "CultureName": "gd-GB",
        "LocaleName": "Scottish Gaelic (United Kingdom)",
        "LocaleEnglishName": "Scottish Gaelic",
        "LocaleNativeName": "Gàidhlig (An Rìoghachd Aonaichte)",
        "CountryAbbrevation": "GBR",
        "LanguageAbbrevation": "GLA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 31770,
        "CultureName": "sr",
        "LocaleName": "Serbian",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski",
        "CountryAbbrevation": "SRB",
        "LanguageAbbrevation": "SRM",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 27674,
        "CultureName": "sr-Cyrl",
        "LocaleName": "Serbian (Cyrillic)",
        "LocaleEnglishName": "Serbian (Cyrillic)",
        "LocaleNativeName": "српски (Ћирилица)",
        "CountryAbbrevation": "SRB",
        "LanguageAbbrevation": "SRO",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 7194,
        "CultureName": "sr-Cyrl-BA",
        "LocaleName": "Serbian (Cyrillic, Bosnia and Herzegovina)",
        "LocaleEnglishName": "Serbian (Cyrillic)",
        "LocaleNativeName": "српски (Босна и Херцеговина)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "SRN",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 12314,
        "CultureName": "sr-Cyrl-ME",
        "LocaleName": "Serbian (Cyrillic, Montenegro)",
        "LocaleEnglishName": "Serbian (Cyrillic)",
        "LocaleNativeName": "српски (Црна Гора)",
        "CountryAbbrevation": "MNE",
        "LanguageAbbrevation": "SRQ",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 3098,
        "CultureName": "sr-Cyrl-CS",
        "LocaleName": "Serbian (Cyrillic, Serbia and Montenegro (Former))",
        "LocaleEnglishName": "Serbian (Cyrillic)",
        "LocaleNativeName": "српски (Србија и Црна Гора (Претходно))",
        "CountryAbbrevation": "SCG",
        "LanguageAbbrevation": "SRB",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 10266,
        "CultureName": "sr-Cyrl-RS",
        "LocaleName": "Serbian (Cyrillic, Serbia)",
        "LocaleEnglishName": "Serbian (Cyrillic)",
        "LocaleNativeName": "српски (Србија)",
        "CountryAbbrevation": "SRB",
        "LanguageAbbrevation": "SRO",
        "OEMCodePage": 855,
        "ANSICodePage": 1251
    }, {
        "LCID": 28698,
        "CultureName": "sr-Latn",
        "LocaleName": "Serbian (Latin)",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski (Latinica)",
        "CountryAbbrevation": "SRB",
        "LanguageAbbrevation": "SRM",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 6170,
        "CultureName": "sr-Latn-BA",
        "LocaleName": "Serbian (Latin, Bosnia and Herzegovina)",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski (Bosna i Hercegovina)",
        "CountryAbbrevation": "BIH",
        "LanguageAbbrevation": "SRS",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 11290,
        "CultureName": "sr-Latn-ME",
        "LocaleName": "Serbian (Latin, Montenegro)",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski (Crna Gora)",
        "CountryAbbrevation": "MNE",
        "LanguageAbbrevation": "SRP",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 2074,
        "CultureName": "sr-Latn-CS",
        "LocaleName": "Serbian (Latin, Serbia and Montenegro (Former))",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski (Srbija i Crna Gora (Prethodno))",
        "CountryAbbrevation": "SCG",
        "LanguageAbbrevation": "SRL",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 9242,
        "CultureName": "sr-Latn-RS",
        "LocaleName": "Serbian (Latin, Serbia)",
        "LocaleEnglishName": "Serbian (Latin)",
        "LocaleNativeName": "srpski (Srbija)",
        "CountryAbbrevation": "SRB",
        "LanguageAbbrevation": "SRM",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 108,
        "CultureName": "nso",
        "LocaleName": "Sesotho sa Leboa",
        "LocaleEnglishName": "Sesotho sa Leboa",
        "LocaleNativeName": "Sesotho sa Leboa",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "NSO",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1132,
        "CultureName": "nso-ZA",
        "LocaleName": "Sesotho sa Leboa (South Africa)",
        "LocaleEnglishName": "Sesotho sa Leboa",
        "LocaleNativeName": "Sesotho sa Leboa (Afrika Borwa)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "NSO",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 50,
        "CultureName": "tn",
        "LocaleName": "Setswana",
        "LocaleEnglishName": "Setswana",
        "LocaleNativeName": "Setswana",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "TSN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1074,
        "CultureName": "tn-ZA",
        "LocaleName": "Setswana (South Africa)",
        "LocaleEnglishName": "Setswana",
        "LocaleNativeName": "Setswana (Aforika Borwa)",
        "CountryAbbrevation": "ZAF",
        "LanguageAbbrevation": "TSN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 91,
        "CultureName": "si",
        "LocaleName": "Sinhala",
        "LocaleEnglishName": "Sinhala",
        "LocaleNativeName": "සිංහ",
        "CountryAbbrevation": "LKA",
        "LanguageAbbrevation": "SIN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1115,
        "CultureName": "si-LK",
        "LocaleName": "Sinhala (Sri Lanka)",
        "LocaleEnglishName": "Sinhala",
        "LocaleNativeName": "සිංහ (ශ්‍රී ලංකා)",
        "CountryAbbrevation": "LKA",
        "LanguageAbbrevation": "SIN",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 27,
        "CultureName": "sk",
        "LocaleName": "Slovak",
        "LocaleEnglishName": "Slovak",
        "LocaleNativeName": "slovenčina",
        "CountryAbbrevation": "SVK",
        "LanguageAbbrevation": "SKY",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1051,
        "CultureName": "sk-SK",
        "LocaleName": "Slovak (Slovakia)",
        "LocaleEnglishName": "Slovak",
        "LocaleNativeName": "slovenčina (Slovenská republika)",
        "CountryAbbrevation": "SVK",
        "LanguageAbbrevation": "SKY",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 36,
        "CultureName": "sl",
        "LocaleName": "Slovenian",
        "LocaleEnglishName": "Slovenian",
        "LocaleNativeName": "slovenski",
        "CountryAbbrevation": "SVN",
        "LanguageAbbrevation": "SLV",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1060,
        "CultureName": "sl-SI",
        "LocaleName": "Slovenian (Slovenia)",
        "LocaleEnglishName": "Slovenian",
        "LocaleNativeName": "slovenski (Slovenija)",
        "CountryAbbrevation": "SVN",
        "LanguageAbbrevation": "SLV",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 10,
        "CultureName": "es",
        "LocaleName": "Spanish",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "español",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "ESN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 11274,
        "CultureName": "es-AR",
        "LocaleName": "Spanish (Argentina)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Argentina)",
        "CountryAbbrevation": "ARG",
        "LanguageAbbrevation": "ESS",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 16394,
        "CultureName": "es-BO",
        "LocaleName": "Spanish (Bolivia)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Bolivia)",
        "CountryAbbrevation": "BOL",
        "LanguageAbbrevation": "ESB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 13322,
        "CultureName": "es-CL",
        "LocaleName": "Spanish (Chile)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Chile)",
        "CountryAbbrevation": "CHL",
        "LanguageAbbrevation": "ESL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 9226,
        "CultureName": "es-CO",
        "LocaleName": "Spanish (Colombia)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Colombia)",
        "CountryAbbrevation": "COL",
        "LanguageAbbrevation": "ESO",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 5130,
        "CultureName": "es-CR",
        "LocaleName": "Spanish (Costa Rica)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Costa Rica)",
        "CountryAbbrevation": "CRI",
        "LanguageAbbrevation": "ESC",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 7178,
        "CultureName": "es-DO",
        "LocaleName": "Spanish (Dominican Republic)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (República Dominicana)",
        "CountryAbbrevation": "DOM",
        "LanguageAbbrevation": "ESD",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 12298,
        "CultureName": "es-EC",
        "LocaleName": "Spanish (Ecuador)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Ecuador)",
        "CountryAbbrevation": "ECU",
        "LanguageAbbrevation": "ESF",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 17418,
        "CultureName": "es-SV",
        "LocaleName": "Spanish (El Salvador)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (El Salvador)",
        "CountryAbbrevation": "SLV",
        "LanguageAbbrevation": "ESE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 4106,
        "CultureName": "es-GT",
        "LocaleName": "Spanish (Guatemala)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Guatemala)",
        "CountryAbbrevation": "GTM",
        "LanguageAbbrevation": "ESG",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 18442,
        "CultureName": "es-HN",
        "LocaleName": "Spanish (Honduras)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Honduras)",
        "CountryAbbrevation": "HND",
        "LanguageAbbrevation": "ESH",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2058,
        "CultureName": "es-MX",
        "LocaleName": "Spanish (Mexico)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (México)",
        "CountryAbbrevation": "MEX",
        "LanguageAbbrevation": "ESM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 19466,
        "CultureName": "es-NI",
        "LocaleName": "Spanish (Nicaragua)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Nicaragua)",
        "CountryAbbrevation": "NIC",
        "LanguageAbbrevation": "ESI",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 6154,
        "CultureName": "es-PA",
        "LocaleName": "Spanish (Panama)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Panamá)",
        "CountryAbbrevation": "PAN",
        "LanguageAbbrevation": "ESA",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 15370,
        "CultureName": "es-PY",
        "LocaleName": "Spanish (Paraguay)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Paraguay)",
        "CountryAbbrevation": "PRY",
        "LanguageAbbrevation": "ESZ",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 10250,
        "CultureName": "es-PE",
        "LocaleName": "Spanish (Peru)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Perú)",
        "CountryAbbrevation": "PER",
        "LanguageAbbrevation": "ESR",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 20490,
        "CultureName": "es-PR",
        "LocaleName": "Spanish (Puerto Rico)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Puerto Rico)",
        "CountryAbbrevation": "PRI",
        "LanguageAbbrevation": "ESU",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 3082,
        "CultureName": "es-ES",
        "LocaleName": "Spanish (Spain, International Sort)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (España, alfabetización internacional)",
        "CountryAbbrevation": "ESP",
        "LanguageAbbrevation": "ESN",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 21514,
        "CultureName": "es-US",
        "LocaleName": "Spanish (United States)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Estados Unidos)",
        "CountryAbbrevation": "USA",
        "LanguageAbbrevation": "EST",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 14346,
        "CultureName": "es-UY",
        "LocaleName": "Spanish (Uruguay)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Uruguay)",
        "CountryAbbrevation": "URY",
        "LanguageAbbrevation": "ESY",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 8202,
        "CultureName": "es-VE",
        "LocaleName": "Spanish (Venezuela)",
        "LocaleEnglishName": "Spanish",
        "LocaleNativeName": "Español (Republica Bolivariana de Venezuela)",
        "CountryAbbrevation": "VEN",
        "LanguageAbbrevation": "ESV",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 29,
        "CultureName": "sv",
        "LocaleName": "Swedish",
        "LocaleEnglishName": "Swedish",
        "LocaleNativeName": "svenska",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SVE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2077,
        "CultureName": "sv-FI",
        "LocaleName": "Swedish (Finland)",
        "LocaleEnglishName": "Swedish",
        "LocaleNativeName": "svenska (Finland)",
        "CountryAbbrevation": "FIN",
        "LanguageAbbrevation": "SVF",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1053,
        "CultureName": "sv-SE",
        "LocaleName": "Swedish (Sweden)",
        "LocaleEnglishName": "Swedish",
        "LocaleNativeName": "svenska (Sverige)",
        "CountryAbbrevation": "SWE",
        "LanguageAbbrevation": "SVE",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 90,
        "CultureName": "syr",
        "LocaleName": "Syriac‎",
        "LocaleEnglishName": "Syriac",
        "LocaleNativeName": "ܣܘܪܝܝܐ‏",
        "CountryAbbrevation": "SYR",
        "LanguageAbbrevation": "SYR",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1114,
        "CultureName": "syr-SY",
        "LocaleName": "Syriac (Syria)‎",
        "LocaleEnglishName": "Syriac",
        "LocaleNativeName": "ܣܘܪܝܝܐ (سوريا)‏",
        "CountryAbbrevation": "SYR",
        "LanguageAbbrevation": "SYR",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 40,
        "CultureName": "tg",
        "LocaleName": "Tajik (Cyrillic)",
        "LocaleEnglishName": "Tajik (Cyrillic)",
        "LocaleNativeName": "Тоҷикӣ",
        "CountryAbbrevation": "TAJ",
        "LanguageAbbrevation": "TAJ",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 31784,
        "CultureName": "tg-Cyrl",
        "LocaleName": "Tajik (Cyrillic)",
        "LocaleEnglishName": "Tajik (Cyrillic)",
        "LocaleNativeName": "Тоҷикӣ",
        "CountryAbbrevation": "TAJ",
        "LanguageAbbrevation": "TAJ",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1064,
        "CultureName": "tg-Cyrl-TJ",
        "LocaleName": "Tajik (Cyrillic, Tajikistan)",
        "LocaleEnglishName": "Tajik (Cyrillic)",
        "LocaleNativeName": "Тоҷикӣ (Тоҷикистон)",
        "CountryAbbrevation": "TAJ",
        "LanguageAbbrevation": "TAJ",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 95,
        "CultureName": "tzm",
        "LocaleName": "Tamazight",
        "LocaleEnglishName": "Tamazight (Latin)",
        "LocaleNativeName": "Tamazight",
        "CountryAbbrevation": "DZA",
        "LanguageAbbrevation": "TZM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 31839,
        "CultureName": "tzm-Latn",
        "LocaleName": "Tamazight (Latin)",
        "LocaleEnglishName": "Tamazight (Latin)",
        "LocaleNativeName": "Tamazight (Latin)",
        "CountryAbbrevation": "DZA",
        "LanguageAbbrevation": "TZM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 2143,
        "CultureName": "tzm-Latn-DZ",
        "LocaleName": "Tamazight (Latin, Algeria)",
        "LocaleEnglishName": "Tamazight (Latin)",
        "LocaleNativeName": "Tamazight (Djazaïr)",
        "CountryAbbrevation": "DZA",
        "LanguageAbbrevation": "TZM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 73,
        "CultureName": "ta",
        "LocaleName": "Tamil",
        "LocaleEnglishName": "Tamil",
        "LocaleNativeName": "தமிழ்",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "TAM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1097,
        "CultureName": "ta-IN",
        "LocaleName": "Tamil (India)",
        "LocaleEnglishName": "Tamil",
        "LocaleNativeName": "தமிழ் (இந்தியா)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "TAM",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 68,
        "CultureName": "tt",
        "LocaleName": "Tatar",
        "LocaleEnglishName": "Tatar",
        "LocaleNativeName": "Татар",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "TTT",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1092,
        "CultureName": "tt-RU",
        "LocaleName": "Tatar (Russia)",
        "LocaleEnglishName": "Tatar",
        "LocaleNativeName": "Татар (Россия)",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "TTT",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 74,
        "CultureName": "te",
        "LocaleName": "Telugu",
        "LocaleEnglishName": "Telugu",
        "LocaleNativeName": "తెలుగు",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "TEL",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1098,
        "CultureName": "te-IN",
        "LocaleName": "Telugu (India)",
        "LocaleEnglishName": "Telugu",
        "LocaleNativeName": "తెలుగు (భారత దేశం)",
        "CountryAbbrevation": "IND",
        "LanguageAbbrevation": "TEL",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 30,
        "CultureName": "th",
        "LocaleName": "Thai",
        "LocaleEnglishName": "Thai",
        "LocaleNativeName": "ไทย",
        "CountryAbbrevation": "THA",
        "LanguageAbbrevation": "THA",
        "OEMCodePage": 874,
        "ANSICodePage": 874
    }, {
        "LCID": 1054,
        "CultureName": "th-TH",
        "LocaleName": "Thai (Thailand)",
        "LocaleEnglishName": "Thai",
        "LocaleNativeName": "ไทย (ไทย)",
        "CountryAbbrevation": "THA",
        "LanguageAbbrevation": "THA",
        "OEMCodePage": 874,
        "ANSICodePage": 874
    }, {
        "LCID": 81,
        "CultureName": "bo",
        "LocaleName": "Tibetan",
        "LocaleEnglishName": "Tibetan",
        "LocaleNativeName": "བོད་ཡིག",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "BOB",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1105,
        "CultureName": "bo-CN",
        "LocaleName": "Tibetan (PRC)",
        "LocaleEnglishName": "Tibetan",
        "LocaleNativeName": "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "BOB",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 31,
        "CultureName": "tr",
        "LocaleName": "Turkish",
        "LocaleEnglishName": "Turkish",
        "LocaleNativeName": "Türkçe",
        "CountryAbbrevation": "TUR",
        "LanguageAbbrevation": "TRK",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 1055,
        "CultureName": "tr-TR",
        "LocaleName": "Turkish (Turkey)",
        "LocaleEnglishName": "Turkish",
        "LocaleNativeName": "Türkçe (Türkiye)",
        "CountryAbbrevation": "TUR",
        "LanguageAbbrevation": "TRK",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 66,
        "CultureName": "tk",
        "LocaleName": "Turkmen",
        "LocaleEnglishName": "Turkmen",
        "LocaleNativeName": "türkmençe",
        "CountryAbbrevation": "TKM",
        "LanguageAbbrevation": "TUK",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 1090,
        "CultureName": "tk-TM",
        "LocaleName": "Turkmen (Turkmenistan)",
        "LocaleEnglishName": "Turkmen",
        "LocaleNativeName": "türkmençe (Türkmenistan)",
        "CountryAbbrevation": "TKM",
        "LanguageAbbrevation": "TUK",
        "OEMCodePage": 852,
        "ANSICodePage": 1250
    }, {
        "LCID": 34,
        "CultureName": "uk",
        "LocaleName": "Ukrainian",
        "LocaleEnglishName": "Ukrainian",
        "LocaleNativeName": "українська",
        "CountryAbbrevation": "UKR",
        "LanguageAbbrevation": "UKR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1058,
        "CultureName": "uk-UA",
        "LocaleName": "Ukrainian (Ukraine)",
        "LocaleEnglishName": "Ukrainian",
        "LocaleNativeName": "українська (Україна)",
        "CountryAbbrevation": "UKR",
        "LanguageAbbrevation": "UKR",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 46,
        "CultureName": "hsb",
        "LocaleName": "Upper Sorbian",
        "LocaleEnglishName": "Upper Sorbian",
        "LocaleNativeName": "hornjoserbšćina",
        "CountryAbbrevation": "GER",
        "LanguageAbbrevation": "HSB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1070,
        "CultureName": "hsb-DE",
        "LocaleName": "Upper Sorbian (Germany)",
        "LocaleEnglishName": "Upper Sorbian",
        "LocaleNativeName": "hornjoserbšćina (Němska)",
        "CountryAbbrevation": "GER",
        "LanguageAbbrevation": "HSB",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 32,
        "CultureName": "ur",
        "LocaleName": "Urdu‎",
        "LocaleEnglishName": "Urdu",
        "LocaleNativeName": "اُردو‏",
        "CountryAbbrevation": "PAK",
        "LanguageAbbrevation": "URD",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 1056,
        "CultureName": "ur-PK",
        "LocaleName": "Urdu (Islamic Republic of Pakistan)‎",
        "LocaleEnglishName": "Urdu",
        "LocaleNativeName": "اُردو (پاکستان)‏",
        "CountryAbbrevation": "PAK",
        "LanguageAbbrevation": "URD",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 128,
        "CultureName": "ug",
        "LocaleName": "Uyghur‎",
        "LocaleEnglishName": "Uyghur",
        "LocaleNativeName": "ئۇيغۇر يېزىقى‏",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "UIG",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 1152,
        "CultureName": "ug-CN",
        "LocaleName": "Uyghur (PRC)‎",
        "LocaleEnglishName": "Uyghur",
        "LocaleNativeName": "(ئۇيغۇر يېزىقى (جۇڭخۇا خەلق جۇمھۇرىيىتى‏",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "UIG",
        "OEMCodePage": 720,
        "ANSICodePage": 1256
    }, {
        "LCID": 30787,
        "CultureName": "uz-Cyrl",
        "LocaleName": "Uzbek (Cyrillic)",
        "LocaleEnglishName": "Uzbek (Cyrillic)",
        "LocaleNativeName": "Ўзбек",
        "CountryAbbrevation": "UZB",
        "LanguageAbbrevation": "UZB",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 2115,
        "CultureName": "uz-Cyrl-UZ",
        "LocaleName": "Uzbek (Cyrillic, Uzbekistan)",
        "LocaleEnglishName": "Uzbek (Cyrillic)",
        "LocaleNativeName": "Ўзбек (Ўзбекистон)",
        "CountryAbbrevation": "UZB",
        "LanguageAbbrevation": "UZB",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 67,
        "CultureName": "uz",
        "LocaleName": "Uzbek (Latin)",
        "LocaleEnglishName": "Uzbek (Latin)",
        "LocaleNativeName": "U'zbek",
        "CountryAbbrevation": "UZB",
        "LanguageAbbrevation": "UZB",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 31811,
        "CultureName": "uz-Latn",
        "LocaleName": "Uzbek (Latin)",
        "LocaleEnglishName": "Uzbek (Latin)",
        "LocaleNativeName": "U'zbek",
        "CountryAbbrevation": "UZB",
        "LanguageAbbrevation": "UZB",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 1091,
        "CultureName": "uz-Latn-UZ",
        "LocaleName": "Uzbek (Latin, Uzbekistan)",
        "LocaleEnglishName": "Uzbek (Latin)",
        "LocaleNativeName": "U'zbek (U'zbekiston Respublikasi)",
        "CountryAbbrevation": "UZB",
        "LanguageAbbrevation": "UZB",
        "OEMCodePage": 857,
        "ANSICodePage": 1254
    }, {
        "LCID": 42,
        "CultureName": "vi",
        "LocaleName": "Vietnamese",
        "LocaleEnglishName": "Vietnamese",
        "LocaleNativeName": "Tiếng Việt",
        "CountryAbbrevation": "VNM",
        "LanguageAbbrevation": "VIT",
        "OEMCodePage": 1258,
        "ANSICodePage": 1258
    }, {
        "LCID": 1066,
        "CultureName": "vi-VN",
        "LocaleName": "Vietnamese (Vietnam)",
        "LocaleEnglishName": "Vietnamese",
        "LocaleNativeName": "Tiếng Việt (Việt Nam)",
        "CountryAbbrevation": "VNM",
        "LanguageAbbrevation": "VIT",
        "OEMCodePage": 1258,
        "ANSICodePage": 1258
    }, {
        "LCID": 82,
        "CultureName": "cy",
        "LocaleName": "Welsh",
        "LocaleEnglishName": "Welsh",
        "LocaleNativeName": "Cymraeg",
        "CountryAbbrevation": "GBR",
        "LanguageAbbrevation": "CYM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1106,
        "CultureName": "cy-GB",
        "LocaleName": "Welsh (United Kingdom)",
        "LocaleEnglishName": "Welsh",
        "LocaleNativeName": "Cymraeg (y Deyrnas Unedig)",
        "CountryAbbrevation": "GBR",
        "LanguageAbbrevation": "CYM",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 136,
        "CultureName": "wo",
        "LocaleName": "Wolof",
        "LocaleEnglishName": "Wolof",
        "LocaleNativeName": "Wolof",
        "CountryAbbrevation": "SEN",
        "LanguageAbbrevation": "WOL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 1160,
        "CultureName": "wo-SN",
        "LocaleName": "Wolof (Senegal)",
        "LocaleEnglishName": "Wolof",
        "LocaleNativeName": "Wolof (Sénégal)",
        "CountryAbbrevation": "SEN",
        "LanguageAbbrevation": "WOL",
        "OEMCodePage": 850,
        "ANSICodePage": 1252
    }, {
        "LCID": 133,
        "CultureName": "sah",
        "LocaleName": "Yakut",
        "LocaleEnglishName": "Yakut",
        "LocaleNativeName": "саха",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "SAH",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 1157,
        "CultureName": "sah-RU",
        "LocaleName": "Yakut (Russia)",
        "LocaleEnglishName": "Yakut",
        "LocaleNativeName": "саха (Россия)",
        "CountryAbbrevation": "RUS",
        "LanguageAbbrevation": "SAH",
        "OEMCodePage": 866,
        "ANSICodePage": 1251
    }, {
        "LCID": 120,
        "CultureName": "ii",
        "LocaleName": "Yi",
        "LocaleEnglishName": "Yi",
        "LocaleNativeName": "ꆈꌠꁱꂷ",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "III",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 1144,
        "CultureName": "ii-CN",
        "LocaleName": "Yi (PRC)",
        "LocaleEnglishName": "Yi",
        "LocaleNativeName": "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)",
        "CountryAbbrevation": "CHN",
        "LanguageAbbrevation": "III",
        "OEMCodePage": 1,
        "ANSICodePage": 0
    }, {
        "LCID": 106,
        "CultureName": "yo",
        "LocaleName": "Yoruba",
        "LocaleEnglishName": "Yoruba",
        "LocaleNativeName": "Yoruba",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "YOR",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }, {
        "LCID": 1130,
        "CultureName": "yo-NG",
        "LocaleName": "Yoruba (Nigeria)",
        "LocaleEnglishName": "Yoruba",
        "LocaleNativeName": "Yoruba (Nigeria)",
        "CountryAbbrevation": "NGA",
        "LanguageAbbrevation": "YOR",
        "OEMCodePage": 437,
        "ANSICodePage": 1252
    }];

    // Get Culture Inof based on LCID for e.g. 1033
    $.getCultureInfoByLCID = function (lcid) {
        var result = $.grep(cultureDetails, function (item, index) {
            return item.LCID == lcid;
        });

        if (result != undefined) {
            return result[0];
        }

        return undefined;
    };

    // Get Culture Info based on Culture name for e.g. en-Us 
    $.GetCultureInfoByCultureName = function (cultureName) {
        // Check with lower case
        cultureName = cultureName.toLowerCase();
        var result = $.grep(cultureDetails, function (item, index) {
            return item.CultureName.toLowerCase() == cultureName;
        });

        if (result != undefined) {
            return result[0];
        }

        return undefined;
    }
})(jQuery);