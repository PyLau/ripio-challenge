/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/background-footer.png */ "./src/images/background-footer.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/background-valores.png */ "./src/images/background-valores.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/resource42@3x.png */ "./src/images/resource42@3x.png");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/img-header@3x.png */ "./src/images/img-header@3x.png");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../images/wallet@3x.png */ "./src/images/wallet@3x.png");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../images/exchange@3x.png */ "./src/images/exchange@3x.png");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../images/otc@3x.png */ "./src/images/otc@3x.png");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../images/fb_logo.svg */ "./src/images/fb_logo.svg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../images/twitter_logo.svg */ "./src/images/twitter_logo.svg");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../images/instagram_logo.svg */ "./src/images/instagram_logo.svg");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../images/youtube_logo.svg */ "./src/images/youtube_logo.svg");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../images/linkedin_logo.svg */ "./src/images/linkedin_logo.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700,900);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
// Module
exports.push([module.i, ":root {\n  --white: #fff;\n  --black: #000;\n  --gray: #373744;\n  --purple: #4B1FA7;\n  --violet: #6D07E6\r\n; }\n\n@media only screen and (max-width: 1200px) {\n  .hide-mobile {\n    display: none !important; } }\n\nbody {\n  font-family: 'Lato';\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n  font-style: normal; }\n  body a {\n    cursor: pointer;\n    text-decoration: none;\n    color: var(--gray); }\n    body a.button {\n      font-weight: normal;\n      font-size: 13.4564px;\n      text-align: center;\n      color: var(--white);\n      width: 182px;\n      height: 42px;\n      line-height: 2.75; }\n    body a.gradient {\n      background: linear-gradient(0deg, var(--violet), var(--violet));\n      border-radius: 48.0586px; }\n    body a.outline {\n      border: 1px solid var(--black);\n      box-sizing: border-box;\n      border-radius: 50px;\n      background-color: transparent;\n      background-image: none;\n      line-height: 17px;\n      padding: 9px 18px;\n      color: var(--gray); }\n  body.bg__content {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: center bottom, 0 2500px, 50vw 158px, right top;\n    background-size: 100vw 790px, 100vw 1654px, 439px 541px, 100vw 1592px;\n    z-index: -1; }\n    @media only screen and (max-width: 1200px) {\n      body.bg__content {\n        background-position: center bottom, 0 2500px, center 350px, 0 190px;\n        background-size: 100vw 790px, 100vw 1654px, 439px 541px, 100vw 14%; } }\n  body.content__wrapper {\n    color: var(--gray);\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: repeat(12, 60px);\n    justify-content: center;\n    margin: auto;\n    padding: 0 32px 32px 32px;\n    max-width: 1329px; }\n    @media only screen and (max-width: 1200px) {\n      body.content__wrapper {\n        grid-template-columns: repeat(2, 1fr);\n        padding: 25px 30px 0 30px; } }\n    body.content__wrapper .menu {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 20px;\n      z-index: 99999; }\n      @media only screen and (max-width: 1200px) {\n        body.content__wrapper .menu {\n          justify-content: center; } }\n    body.content__wrapper .menu__left .menu__item, body.content__wrapper .menu__right .menu__item {\n      font-weight: 500;\n      font-style: normal;\n      font-size: 14px;\n      line-height: 17px; }\n      body.content__wrapper .menu__left .menu__item:first-child, body.content__wrapper .menu__right .menu__item:first-child {\n        margin-right: 36px; }\n      body.content__wrapper .menu__left .menu__item:nth-child(2), body.content__wrapper .menu__right .menu__item:nth-child(2) {\n        margin-right: 27px; }\n      body.content__wrapper .menu__left .menu__item:nth-child(3), body.content__wrapper .menu__right .menu__item:nth-child(3) {\n        margin-right: 30px; }\n      body.content__wrapper .menu__left .menu__item:last-child, body.content__wrapper .menu__right .menu__item:last-child {\n        margin-right: 0; }\n      body.content__wrapper .menu__left .menu__item .dropdown, body.content__wrapper .menu__right .menu__item .dropdown {\n        position: relative;\n        padding: .5rem; }\n        body.content__wrapper .menu__left .menu__item .dropdown .dropdown__button, body.content__wrapper .menu__right .menu__item .dropdown .dropdown__button {\n          padding-top: 1rem;\n          padding-bottom: 1rem; }\n          body.content__wrapper .menu__left .menu__item .dropdown .dropdown__button svg.icon-chevron, body.content__wrapper .menu__right .menu__item .dropdown .dropdown__button svg.icon-chevron {\n            margin-left: .5rem; }\n    body.content__wrapper .land__content {\n      display: contents; }\n      body.content__wrapper .land__content .content__left {\n        display: flex;\n        flex-direction: column;\n        grid-column: auto / span 7; }\n        @media only screen and (max-width: 1200px) {\n          body.content__wrapper .land__content .content__left {\n            grid-column: 6 / span 4;\n            text-align: center;\n            font-size: 34px; } }\n        body.content__wrapper .land__content .content__left h1 {\n          font-weight: 900;\n          font-size: 50px;\n          line-height: 60px;\n          margin-top: 133px;\n          margin-bottom: 0; }\n          @media only screen and (max-width: 1200px) {\n            body.content__wrapper .land__content .content__left h1 {\n              margin-top: 0;\n              line-height: 41px;\n              font-size: 34px;\n              align-items: center; } }\n        body.content__wrapper .land__content .content__left p.subtitle {\n          font-weight: 300;\n          font-size: 20px;\n          line-height: 24px; }\n        body.content__wrapper .land__content .content__left a.button {\n          border-radius: 50px;\n          background: var(--violet);\n          font-weight: 500;\n          font-size: 14px;\n          text-align: center;\n          color: var(--white);\n          margin-top: 44px;\n          width: 182px;\n          height: 42px; }\n      body.content__wrapper .land__content .content__right {\n        display: flex;\n        grid-column: auto / span 5; }\n    body.content__wrapper .land__products {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column; }\n      @media only screen and (max-width: 1200px) {\n        body.content__wrapper .land__products {\n          grid-column: 6 / span 4 !important; } }\n      body.content__wrapper .land__products .content__product {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 50px 0 0 0; }\n        body.content__wrapper .land__products .content__product:nth-child(odd) {\n          flex-direction: row; }\n        body.content__wrapper .land__products .content__product:nth-child(even) {\n          flex-direction: row-reverse; }\n        @media only screen and (max-width: 1200px) {\n          body.content__wrapper .land__products .content__product {\n            flex-direction: column-reverse !important; } }\n        body.content__wrapper .land__products .content__product .info__img {\n          margin-top: 30px; }\n          body.content__wrapper .land__products .content__product .info__img.wallet {\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n            background-repeat: no-repeat;\n            width: 327px;\n            height: 241px; }\n          body.content__wrapper .land__products .content__product .info__img.exchange {\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n            background-repeat: no-repeat;\n            width: 397px;\n            height: 257px; }\n          body.content__wrapper .land__products .content__product .info__img.otc {\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n            background-repeat: no-repeat;\n            width: 341px;\n            height: 253px; }\n        body.content__wrapper .land__products .content__product .info-description {\n          flex: 1; }\n          body.content__wrapper .land__products .content__product .info-description .info-title {\n            font-weight: 900;\n            font-size: 30px;\n            line-height: 36px;\n            text-align: center;\n            padding: 30px 0; }\n          body.content__wrapper .land__products .content__product .info-description div.description-text {\n            font-weight: 300;\n            font-size: 18px;\n            line-height: 22px;\n            text-align: center;\n            padding-bottom: 30px; }\n          body.content__wrapper .land__products .content__product .info-description a.button.gradient {\n            margin: 0 auto;\n            display: block; }\n    body.content__wrapper .land__cripto .content__cripto {\n      margin-bottom: 7rem;\n      margin-top: 5rem; }\n      body.content__wrapper .land__cripto .content__cripto h2.middle-title {\n        font-weight: 900;\n        font-size: 34px;\n        line-height: 41px;\n        text-align: center; }\n    body.content__wrapper section.ellipse {\n      position: absolute;\n      width: 298px;\n      height: 298px;\n      left: -179px;\n      top: 2550px;\n      background: linear-gradient(315deg, rgba(255, 255, 255, 0) 0%, rgba(109, 7, 230, 0.1) 100%);\n      transform: rotate(90deg);\n      border-radius: 50%; }\n    body.content__wrapper .land__cards {\n      display: contents; }\n      body.content__wrapper .land__cards .cards__container:first-child {\n        grid-column: 1 / span 3; }\n      body.content__wrapper .land__cards .cards__container:nth-child(2) {\n        grid-column: 5 / span 4;\n        margin-top: 100px; }\n      body.content__wrapper .land__cards .cards__container:nth-child(3) {\n        grid-column: 9 / span 4;\n        display: flex;\n        flex-direction: column;\n        justify-content: center; }\n      body.content__wrapper .land__cards .cards__container .card__cell {\n        color: var(--white); }\n        body.content__wrapper .land__cards .cards__container .card__cell h1.side-text {\n          font-weight: 900;\n          font-size: 34px;\n          line-height: 41px; }\n        body.content__wrapper .land__cards .cards__container .card__cell h3.side-description {\n          font-weight: 300;\n          font-size: 20px;\n          line-height: 24px; }\n        body.content__wrapper .land__cards .cards__container .card__cell a.card-link {\n          font-size: 16px;\n          line-height: 19px;\n          color: var(--violet); }\n        body.content__wrapper .land__cards .cards__container .card__cell.card {\n          background: var(--white);\n          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n          border-radius: 15px;\n          padding: 48px 30px;\n          margin-bottom: 20px;\n          color: var(--gray); }\n    body.content__wrapper footer.footer__container {\n      color: var(--white);\n      display: contents; }\n      body.content__wrapper footer.footer__container .footer__block:first-child {\n        grid-column: auto / span 3; }\n      body.content__wrapper footer.footer__container .footer__block:nth-child(2) {\n        grid-column: 6 / span 2; }\n      body.content__wrapper footer.footer__container .footer__block:nth-child(3) {\n        grid-column: 8 / span 2; }\n      body.content__wrapper footer.footer__container .footer__block:nth-child(4) {\n        grid-column: 10 / span 3; }\n      body.content__wrapper footer.footer__container h1.footer__title {\n        font-weight: 900;\n        font-size: 24px;\n        line-height: 29px; }\n      body.content__wrapper footer.footer__container h2.footer__subtitle {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 19px; }\n      body.content__wrapper footer.footer__container h3.footer__items {\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 17px; }\n      body.content__wrapper footer.footer__container a.button.gradient {\n        color: var(--purple);\n        background: var(--white);\n        display: block;\n        width: 100%; }\n      body.content__wrapper footer.footer__container a.button.outline {\n        display: block;\n        width: 100%;\n        color: var(--white);\n        border: var(--white) solid 1px; }\n      body.content__wrapper footer.footer__container hr {\n        margin: 57px 0px 0px 0px; }\n      body.content__wrapper footer.footer__container .disclaimer {\n        grid-column: auto / span 7; }\n        body.content__wrapper footer.footer__container .disclaimer h3.footer__items {\n          margin: 0;\n          font-weight: bold; }\n      body.content__wrapper footer.footer__container .social-networks {\n        grid-column: auto / span 5;\n        display: flex;\n        flex-direction: row;\n        margin-bottom: 144px; }\n        body.content__wrapper footer.footer__container .social-networks .icon {\n          background-repeat: no-repeat;\n          width: 34px;\n          height: 34px;\n          border: 1px solid var(--white);\n          border-radius: 50%;\n          background-position: 50%;\n          margin-right: 10px; }\n        body.content__wrapper footer.footer__container .social-networks .facebook {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "); }\n        body.content__wrapper footer.footer__container .social-networks .twitter {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "); }\n        body.content__wrapper footer.footer__container .social-networks .instagram {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "); }\n        body.content__wrapper footer.footer__container .social-networks .youtube {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + "); }\n        body.content__wrapper footer.footer__container .social-networks .linkedin {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + "); }\n        body.content__wrapper footer.footer__container .social-networks :last-child {\n          margin-left: auto; }\n    body.content__wrapper .col__12 {\n      grid-column: auto / span 12; }\n    body.content__wrapper .flex {\n      display: flex; }\n    body.content__wrapper .justify-start {\n      align-items: flex-start; }\n    body.content__wrapper .items-center {\n      align-items: center; }\n    body.content__wrapper .white__space {\n      height: 600px; }\n    body.content__wrapper .white__space--150 {\n      height: 150px; }\n    body.content__wrapper .justify-center {\n      justify-content: center; }\n    body.content__wrapper .side-margins-0 {\n      margin-right: 0;\n      margin-left: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/background-footer.png":
/*!******************************************!*\
  !*** ./src/images/background-footer.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "684cd8420226bf313c3cd6ac6a15061e.png");

/***/ }),

/***/ "./src/images/background-valores.png":
/*!*******************************************!*\
  !*** ./src/images/background-valores.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cf81bdafec8c7e97c7da5926de4c5d3c.png");

/***/ }),

/***/ "./src/images/exchange@3x.png":
/*!************************************!*\
  !*** ./src/images/exchange@3x.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d2e2e680c7a8c0bba9c397b87c022f0.png");

/***/ }),

/***/ "./src/images/fb_logo.svg":
/*!********************************!*\
  !*** ./src/images/fb_logo.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1038f21c405e78dfbb678aa6709c85d8.svg");

/***/ }),

/***/ "./src/images/img-header@3x.png":
/*!**************************************!*\
  !*** ./src/images/img-header@3x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f09c7eb966553f420f9dbce6e785d714.png");

/***/ }),

/***/ "./src/images/instagram_logo.svg":
/*!***************************************!*\
  !*** ./src/images/instagram_logo.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "808441a4f74f53f83dec70756ed63a20.svg");

/***/ }),

/***/ "./src/images/linkedin_logo.svg":
/*!**************************************!*\
  !*** ./src/images/linkedin_logo.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "713d6b58c8fda99cd27ca7aecd6f1ca5.svg");

/***/ }),

/***/ "./src/images/otc@3x.png":
/*!*******************************!*\
  !*** ./src/images/otc@3x.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "139a6179c9c470cfdd8b099d38c750a5.png");

/***/ }),

/***/ "./src/images/resource42@3x.png":
/*!**************************************!*\
  !*** ./src/images/resource42@3x.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "08e0b6fe475f3b5472cbb84a2bff10a6.png");

/***/ }),

/***/ "./src/images/twitter_logo.svg":
/*!*************************************!*\
  !*** ./src/images/twitter_logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "05b0d92165ad524e3e528891ec8de802.svg");

/***/ }),

/***/ "./src/images/wallet@3x.png":
/*!**********************************!*\
  !*** ./src/images/wallet@3x.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80d3b584e89e51a96d22a521ce5b7c71.png");

/***/ }),

/***/ "./src/images/youtube_logo.svg":
/*!*************************************!*\
  !*** ./src/images/youtube_logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6680c67039b41bc724e98ddedfc008c6.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8zNDJmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtZm9vdGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtdmFsb3Jlcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9leGNoYW5nZUAzeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9mYl9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ltZy1oZWFkZXJAM3gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaW5zdGFncmFtX2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbGlua2VkaW5fbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9vdGNAM3gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVzb3VyY2U0MkAzeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90d2l0dGVyX2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvd2FsbGV0QDN4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3lvdXR1YmVfbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0ZBQW1DO0FBQzdFO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZ1VBQWdVLHNCQUFzQiwyQ0FBMkMsV0FBVyw4SkFBOEosY0FBYyxHQUFHLHdFQUF3RSxtQkFBbUIsR0FBRyxzSkFBc0osbUJBQW1CLHFCQUFxQixHQUFHLG9OQUFvTiw0QkFBNEIsc0JBQXNCLDhCQUE4QixXQUFXLHVKQUF1SixzQ0FBc0MsMkJBQTJCLFdBQVcseUxBQXlMLGtDQUFrQyxHQUFHLDBKQUEwSix3QkFBd0IsdUNBQXVDLDhDQUE4QyxXQUFXLHlGQUF5Rix3QkFBd0IsR0FBRyxxS0FBcUssc0NB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b0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtZm9vdGVyLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvYmFja2dyb3VuZC12YWxvcmVzLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVzb3VyY2U0MkAzeC5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2ltZy1oZWFkZXJAM3gucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy93YWxsZXRAM3gucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9leGNoYW5nZUAzeC5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL290Y0AzeC5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2ZiX2xvZ28uc3ZnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy90d2l0dGVyX2xvZ28uc3ZnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy9pbnN0YWdyYW1fbG9nby5zdmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gcmVxdWlyZShcIi4uL2ltYWdlcy95b3V0dWJlX2xvZ28uc3ZnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbGlua2VkaW5fbG9nby5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMCw0MDAsNzAwLDkwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS1ncmF5OiAjMzczNzQ0O1xcbiAgLS1wdXJwbGU6ICM0QjFGQTc7XFxuICAtLXZpb2xldDogIzZEMDdFNlxcclxcbjsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuaGlkZS1tb2JpbGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuICBib2R5IGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpOyB9XFxuICAgIGJvZHkgYS5idXR0b24ge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAxMy40NTY0cHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgd2lkdGg6IDE4MnB4O1xcbiAgICAgIGhlaWdodDogNDJweDtcXG4gICAgICBsaW5lLWhlaWdodDogMi43NTsgfVxcbiAgICBib2R5IGEuZ3JhZGllbnQge1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB2YXIoLS12aW9sZXQpLCB2YXIoLS12aW9sZXQpKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0OC4wNTg2cHg7IH1cXG4gICAgYm9keSBhLm91dGxpbmUge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgICBwYWRkaW5nOiA5cHggMThweDtcXG4gICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gIGJvZHkuYmdfX2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tLCAwIDI1MDBweCwgNTB2dyAxNThweCwgcmlnaHQgdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3IDc5MHB4LCAxMDB2dyAxNjU0cHgsIDQzOXB4IDU0MXB4LCAxMDB2dyAxNTkycHg7XFxuICAgIHotaW5kZXg6IC0xOyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgICAgYm9keS5iZ19fY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tLCAwIDI1MDBweCwgY2VudGVyIDM1MHB4LCAwIDE5MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyA3OTBweCwgMTAwdncgMTY1NHB4LCA0MzlweCA1NDFweCwgMTAwdncgMTQlOyB9IH1cXG4gIGJvZHkuY29udGVudF9fd3JhcHBlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCA2MHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMCAzMnB4IDMycHggMzJweDtcXG4gICAgbWF4LXdpZHRoOiAxMzI5cHg7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMzBweCAwIDMwcHg7IH0gfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgei1pbmRleDogOTk5OTk7IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5tZW51IHtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH0gfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW0sIGJvZHkuY29udGVudF9fd3JhcHBlciAubWVudV9fcmlnaHQgLm1lbnVfX2l0ZW0ge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBsaW5lLWhlaWdodDogMTdweDsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubWVudV9fbGVmdCAubWVudV9faXRlbTpmaXJzdC1jaGlsZCwgYm9keS5jb250ZW50X193cmFwcGVyIC5tZW51X19yaWdodCAubWVudV9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW06bnRoLWNoaWxkKDIpLCBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX3JpZ2h0IC5tZW51X19pdGVtOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW06bnRoLWNoaWxkKDMpLCBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX3JpZ2h0IC5tZW51X19pdGVtOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW06bGFzdC1jaGlsZCwgYm9keS5jb250ZW50X193cmFwcGVyIC5tZW51X19yaWdodCAubWVudV9faXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubWVudV9fbGVmdCAubWVudV9faXRlbSAuZHJvcGRvd24sIGJvZHkuY29udGVudF9fd3JhcHBlciAubWVudV9fcmlnaHQgLm1lbnVfX2l0ZW0gLmRyb3Bkb3duIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtOyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW0gLmRyb3Bkb3duIC5kcm9wZG93bl9fYnV0dG9uLCBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX3JpZ2h0IC5tZW51X19pdGVtIC5kcm9wZG93biAuZHJvcGRvd25fX2J1dHRvbiB7XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTsgfVxcbiAgICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLm1lbnVfX2xlZnQgLm1lbnVfX2l0ZW0gLmRyb3Bkb3duIC5kcm9wZG93bl9fYnV0dG9uIHN2Zy5pY29uLWNoZXZyb24sIGJvZHkuY29udGVudF9fd3JhcHBlciAubWVudV9fcmlnaHQgLm1lbnVfX2l0ZW0gLmRyb3Bkb3duIC5kcm9wZG93bl9fYnV0dG9uIHN2Zy5pY29uLWNoZXZyb24ge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX2NvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGNvbnRlbnRzOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jb250ZW50IC5jb250ZW50X19sZWZ0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDc7IH1cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY29udGVudCAuY29udGVudF9fbGVmdCB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDYgLyBzcGFuIDQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDsgfSB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX2NvbnRlbnQgLmNvbnRlbnRfX2xlZnQgaDEge1xcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMzNweDtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAgICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY29udGVudCAuY29udGVudF9fbGVmdCBoMSB7XFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQxcHg7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9IH1cXG4gICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY29udGVudCAuY29udGVudF9fbGVmdCBwLnN1YnRpdGxlIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jb250ZW50IC5jb250ZW50X19sZWZ0IGEuYnV0dG9uIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmlvbGV0KTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDQ0cHg7XFxuICAgICAgICAgIHdpZHRoOiAxODJweDtcXG4gICAgICAgICAgaGVpZ2h0OiA0MnB4OyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jb250ZW50IC5jb250ZW50X19yaWdodCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDU7IH1cXG4gICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19wcm9kdWN0cyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19wcm9kdWN0cyB7XFxuICAgICAgICAgIGdyaWQtY29sdW1uOiA2IC8gc3BhbiA0ICFpbXBvcnRhbnQ7IH0gfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogNTBweCAwIDAgMDsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19wcm9kdWN0cyAuY29udGVudF9fcHJvZHVjdDpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG4gICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3Q6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX3Byb2R1Y3RzIC5jb250ZW50X19wcm9kdWN0IHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfSB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX3Byb2R1Y3RzIC5jb250ZW50X19wcm9kdWN0IC5pbmZvX19pbWcge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuICAgICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3QgLmluZm9fX2ltZy53YWxsZXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB3aWR0aDogMzI3cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNDFweDsgfVxcbiAgICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX3Byb2R1Y3RzIC5jb250ZW50X19wcm9kdWN0IC5pbmZvX19pbWcuZXhjaGFuZ2Uge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB3aWR0aDogMzk3cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNTdweDsgfVxcbiAgICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX3Byb2R1Y3RzIC5jb250ZW50X19wcm9kdWN0IC5pbmZvX19pbWcub3RjIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgd2lkdGg6IDM0MXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjUzcHg7IH1cXG4gICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3QgLmluZm8tZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICBmbGV4OiAxOyB9XFxuICAgICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3QgLmluZm8tZGVzY3JpcHRpb24gLmluZm8tdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7IH1cXG4gICAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19wcm9kdWN0cyAuY29udGVudF9fcHJvZHVjdCAuaW5mby1kZXNjcmlwdGlvbiBkaXYuZGVzY3JpcHRpb24tdGV4dCB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XFxuICAgICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fcHJvZHVjdHMgLmNvbnRlbnRfX3Byb2R1Y3QgLmluZm8tZGVzY3JpcHRpb24gYS5idXR0b24uZ3JhZGllbnQge1xcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY3JpcHRvIC5jb250ZW50X19jcmlwdG8ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDdyZW07XFxuICAgICAgbWFyZ2luLXRvcDogNXJlbTsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY3JpcHRvIC5jb250ZW50X19jcmlwdG8gaDIubWlkZGxlLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBmb250LXNpemU6IDM0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogNDFweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgc2VjdGlvbi5lbGxpcHNlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDI5OHB4O1xcbiAgICAgIGhlaWdodDogMjk4cHg7XFxuICAgICAgbGVmdDogLTE3OXB4O1xcbiAgICAgIHRvcDogMjU1MHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMTA5LCA3LCAyMzAsIDAuMSkgMTAwJSk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX2NhcmRzIHtcXG4gICAgICBkaXNwbGF5OiBjb250ZW50czsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY2FyZHMgLmNhcmRzX19jb250YWluZXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX2NhcmRzIC5jYXJkc19fY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogNSAvIHNwYW4gNDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jYXJkcyAuY2FyZHNfX2NvbnRhaW5lcjpudGgtY2hpbGQoMykge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDkgLyBzcGFuIDQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jYXJkcyAuY2FyZHNfX2NvbnRhaW5lciAuY2FyZF9fY2VsbCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmxhbmRfX2NhcmRzIC5jYXJkc19fY29udGFpbmVyIC5jYXJkX19jZWxsIGgxLnNpZGUtdGV4dCB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQxcHg7IH1cXG4gICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY2FyZHMgLmNhcmRzX19jb250YWluZXIgLmNhcmRfX2NlbGwgaDMuc2lkZS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG4gICAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAubGFuZF9fY2FyZHMgLmNhcmRzX19jb250YWluZXIgLmNhcmRfX2NlbGwgYS5jYXJkLWxpbmsge1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdmlvbGV0KTsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIC5sYW5kX19jYXJkcyAuY2FyZHNfX2NvbnRhaW5lciAuY2FyZF9fY2VsbC5jYXJkIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgcGFkZGluZzogNDhweCAzMHB4O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciB7XFxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICBkaXNwbGF5OiBjb250ZW50czsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciBmb290ZXIuZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYmxvY2s6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IGF1dG8gLyBzcGFuIDM7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5mb290ZXJfX2Jsb2NrOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogNiAvIHNwYW4gMjsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciBmb290ZXIuZm9vdGVyX19jb250YWluZXIgLmZvb3Rlcl9fYmxvY2s6bnRoLWNoaWxkKDMpIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiA4IC8gc3BhbiAyOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuZm9vdGVyX19ibG9jazpudGgtY2hpbGQoNCkge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEwIC8gc3BhbiAzOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciBoMS5mb290ZXJfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjlweDsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciBmb290ZXIuZm9vdGVyX19jb250YWluZXIgaDIuZm9vdGVyX19zdWJ0aXRsZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4OyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciBoMy5mb290ZXJfX2l0ZW1zIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDsgfVxcbiAgICAgIGJvZHkuY29udGVudF9fd3JhcHBlciBmb290ZXIuZm9vdGVyX19jb250YWluZXIgYS5idXR0b24uZ3JhZGllbnQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciBhLmJ1dHRvbi5vdXRsaW5lIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgYm9yZGVyOiB2YXIoLS13aGl0ZSkgc29saWQgMXB4OyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciBociB7XFxuICAgICAgICBtYXJnaW46IDU3cHggMHB4IDBweCAwcHg7IH1cXG4gICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5kaXNjbGFpbWVyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiA3OyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5kaXNjbGFpbWVyIGgzLmZvb3Rlcl9faXRlbXMge1xcbiAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuc29jaWFsLW5ldHdvcmtzIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiA1O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNDRweDsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuc29jaWFsLW5ldHdvcmtzIC5pY29uIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgd2lkdGg6IDM0cHg7XFxuICAgICAgICAgIGhlaWdodDogMzRweDtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5zb2NpYWwtbmV0d29ya3MgLmZhY2Vib29rIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuc29jaWFsLW5ldHdvcmtzIC50d2l0dGVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuc29jaWFsLW5ldHdvcmtzIC5pbnN0YWdyYW0ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpOyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5zb2NpYWwtbmV0d29ya3MgLnlvdXR1YmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTsgfVxcbiAgICAgICAgYm9keS5jb250ZW50X193cmFwcGVyIGZvb3Rlci5mb290ZXJfX2NvbnRhaW5lciAuc29jaWFsLW5ldHdvcmtzIC5saW5rZWRpbiB7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpOyB9XFxuICAgICAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgZm9vdGVyLmZvb3Rlcl9fY29udGFpbmVyIC5zb2NpYWwtbmV0d29ya3MgOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmNvbF9fMTIge1xcbiAgICAgIGdyaWQtY29sdW1uOiBhdXRvIC8gc3BhbiAxMjsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLmZsZXgge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgYm9keS5jb250ZW50X193cmFwcGVyIC5qdXN0aWZ5LXN0YXJ0IHtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLml0ZW1zLWNlbnRlciB7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLndoaXRlX19zcGFjZSB7XFxuICAgICAgaGVpZ2h0OiA2MDBweDsgfVxcbiAgICBib2R5LmNvbnRlbnRfX3dyYXBwZXIgLndoaXRlX19zcGFjZS0tMTUwIHtcXG4gICAgICBoZWlnaHQ6IDE1MHB4OyB9XFxuICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAuanVzdGlmeS1jZW50ZXIge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIGJvZHkuY29udGVudF9fd3JhcHBlciAuc2lkZS1tYXJnaW5zLTAge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4NGNkODQyMDIyNmJmMzEzYzNjZDZhYzZhMTUwNjFlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZjgxYmRhZmVjOGM3ZTk3YzdkYTU5MjZkZTRjNWQzYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWQyZTJlNjgwYzdhOGMwYmJhOWMzOTdiODdjMDIyZjAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjEwMzhmMjFjNDA1ZTc4ZGZiYjY3OGFhNjcwOWM4NWQ4LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMDljN2ViOTY2NTUzZjQyMGY5ZGJjZTZlNzg1ZDcxNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODA4NDQxYTRmNzRmNTNmODNkZWM3MDc1NmVkNjNhMjAuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcxM2Q2YjU4YzhmZGE5OWNkMjdjYTdhZWNkNmYxY2E1LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMzlhNjE3OWM5YzQ3MGNmZGQ4YjA5OWQzOGM3NTBhNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDhlMGI2ZmU0NzVmM2I1NDcyY2JiODRhMmJmZjEwYTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA1YjBkOTIxNjVhZDUyNGUzZTUyODg5MWVjOGRlODAyLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MGQzYjU4NGU4OWU1MWE5NmQyMmE1MjFjZTViN2M3MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjY4MGM2NzAzOWI0MWJjNzI0ZTk4ZGRlZGZjMDA4YzYuc3ZnXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=