module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainFooter.js":
/*!**********************************!*\
  !*** ./components/MainFooter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainFooter.js";



var MainFooter = function MainFooter() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4198576928" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4198576928",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "test"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4198576928",
    __self: this
  }, ".footer.jsx-4198576928{background:#000000;grid-area:footer;z-index:100;height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxNYWluRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUc0QixtQkFDRixpQkFDTCxZQUNBLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxjdWV2YS1uZXh0anNcXGNvbXBvbmVudHNcXE1haW5Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYWluRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblxyXG4gICAgPHA+dGVzdDwvcD5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainFooter.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainFooter);

/***/ }),

/***/ "./components/MainHeader.js":
/*!**********************************!*\
  !*** ./components/MainHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainHeader.js";



var MainHeader = function MainHeader() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1595415702" + " " + "main-overview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://i.ibb.co/ZgF7nbc/logo.png",
    className: "jsx-1595415702" + " " + "cueva-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1595415702" + " " + "main-overview__text-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Cueva de K\xFCn y Hebles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1595415702" + " " + "main-overview__text-h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Asociaci\xF3n Deportiva y Recreativa de Pinto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1595415702",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.cueva-logo.jsx-1595415702{position:absolute;max-width:220px;padding-top:40px;padding-left:0px;opacity:0.7;}.main-overview.jsx-1595415702{background:url(\"https://i.ibb.co/jRcPgqs/bg6.jpg\");background-color:aqua;background-size:cover;background-position:center center;margin-top:2rem;left:0;width:100%;height:35vh;z-index:-1;}.main-overview__text-h1.jsx-1595415702{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;text-align:center;font-size:4.2rem;font-weight:600;opacity:0.9;padding-top:4rem;color:#ffffff;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;text-shadow:4px 4px 0px #505050,7px 7px 0px rgba(131,131,131,0.2);}.main-overview__text-h2.jsx-1595415702{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;text-align:center;font-weight:500;font-size:2rem;opacity:0.9;color:#ffffff;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;text-shadow:4px 4px 0px #505050,7px 7px 0px rgba(131,131,131,0.2);}@media (max-width:950px){.main-overview__text-h1.jsx-1595415702{font-size:2.5rem;opacity:0.9;display:none;}.main-overview__text-h2.jsx-1595415702{font-size:1rem;opacity:0.9;font-weight:600;display:none;}.cueva-logo.jsx-1595415702{position:relative;display:block;margin:0 auto;opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxNYWluSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUkyRSxBQUtoRCxBQVFpQyxBQVlXLEFBWUEsQUFjekMsQUFNRixBQU9HLGVBTk4sRUFOQSxDQTlDQSxBQTJERSxTQU5FLEVBTkgsR0FhQyxFQTNERCxRQStDZixDQU1lLEdBT0gsS0EzREcsQUFNSyxLQStDcEIsQUFPQSxHQWxFSCxBQUFDLEFBd0JrQixBQVlBLFNBN0JOLEtBTVUsSUFZTCxBQVlELEdBN0JsQixhQThCaUIsQ0FaQyxDQVprQixhQXlCdEIsRUFaQSxVQWFFLEVBWkcsT0FiRCxLQTBCTSxLQVpSLE1BYlAsT0FDSSxDQWFXLFVBWlYsWUFDRCxXQUNiLHFEQXNCd0UsbUJBWEEsK0NBWXhFLG1CQVhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxNYWluSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFpbkhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tb3ZlcnZpZXdcIj5cclxuXHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3VldmEtbG9nb1wiIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vWmdGN25iYy9sb2dvLnBuZ1wiIC8+XHJcblxyXG4gICAgPGgxIGNsYXNzTmFtZT1cIm1haW4tb3ZlcnZpZXdfX3RleHQtaDFcIj5DdWV2YSBkZSBLw7xuIHkgSGVibGVzPC9oMT5cclxuICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLW92ZXJ2aWV3X190ZXh0LWgyXCI+XHJcbiAgICAgIEFzb2NpYWNpw7NuIERlcG9ydGl2YSB5IFJlY3JlYXRpdmEgZGUgUGludG9cclxuICAgIDwvaDI+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBzcmM6IGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5jdWV2YS1sb2dvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgLm1haW4tb3ZlcnZpZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5pYmIuY28valJjUGdxcy9iZzYuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLW92ZXJ2aWV3X190ZXh0LWgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMHB4ICM1MDUwNTAsIDdweCA3cHggMHB4IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQtaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMHB4ICM1MDUwNTAsIDdweCA3cHggMHB4IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQtaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQtaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY3VldmEtbG9nbyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SimpleMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleMenu */ "./components/SimpleMenu.js");
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainNav.js";



 // import "../static/shared.css"

var MainNav = function MainNav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3111417215" + " " + "main-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-header__brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " Cueva de Kun y Hebles")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3111417215" + " " + "main-header__brand-movil",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SimpleMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3111417215" + " " + "main-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3111417215" + " " + "main-nav__items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3111417215" + " " + "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/eventos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-nav__item-names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Eventos"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3111417215" + " " + "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-nav__item-names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Galeria"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3111417215" + " " + "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "./patrocinadores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-nav__item-names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Patrocinadores"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3111417215" + " " + "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "./quiene-somos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-nav__item-names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\xBFQuiene Somos?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3111417215" + " " + "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "./contacto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3111417215" + " " + "main-nav__item-names",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Cont\xE1ctanos"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3111417215",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.backdrop.jsx-3111417215{position:fixed;display:none;opacity:0;top:0;left:0;z-index:100;width:100vw;height:100vh;background:rgba(0,0,0,0.5);-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}.main-header.jsx-3111417215{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;width:100%;position:fixed;overflow:hidden;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#f96332;padding:0.2rem 1rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-height:45px;z-index:100;}.main-header__brand.jsx-3111417215{-webkit-text-decoration:inherit;text-decoration:inherit;color:#ffffff;font-weight:500;text-transform:uppercase;cursor:pointer;}.main-nav.jsx-3111417215{display:block;}.main-header__brand-movil.jsx-3111417215{display:none;}.main-nav__brand.jsx-3111417215{-webkit-text-decoration:inherit;text-decoration:inherit;color:inherit;font-size:1.1rem;font-weight:700;color:#000000;}.main-nav__items.jsx-3111417215{margin:0;padding:0;padding-right:0.5rem;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#FFFFFF;cursor:pointer;}.main-nav__item.jsx-3111417215{margin:0 0.8rem;}.main-nav__item-names.jsx-3111417215{text-transform:uppercase;padding:7px;font-weight:400;font-size:0.8rem;}.main-nav__item-names.jsx-3111417215:hover{background-color:#fa865f;color:white;padding:7px;border-radius:5px;}.main-nav__item.jsx-3111417215 a.jsx-3111417215,.mobile-nav__item.jsx-3111417215 a.jsx-3111417215{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;font-weight:bold 200;}@media (max-width:950px){body.jsx-3111417215{margin:0;width:100%;display:grid;font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-template-rows:1.5rem auto auto auto;grid-template-columns:100%;grid-template-areas: \"header\" \"main-image\" \"main-one\" \"footer\";}.container.jsx-3111417215{max-width:800px;}.main-overview__text.jsx-3111417215{text-align:center;color:#ffffff;margin-top:5.5rem;}.main-overview__text.jsx-3111417215 h1.jsx-3111417215{font-size:2em;opacity:0.9;}.main-overview__text.jsx-3111417215 h2.jsx-3111417215{font-size:1em;opacity:0.9;}.main-nav.jsx-3111417215{display:none;}.main-header.jsx-3111417215{width:100%;}.main-header__brand.jsx-3111417215{display:none;}.main-header__brand-movil.jsx-3111417215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;padding:7px;font-weight:400;font-size:0.8rem;-webkit-text-decoration:none;text-decoration:none;color:#ffffff;font-weight:bold 200;}.main-header__brand-movil.jsx-3111417215:hover{background-color:#fa865f;color:white;padding:7px;border-radius:5px;}.main-info.jsx-3111417215{display:grid;grid-area:main-one;justify-self:center;grid-template-rows:auto auto auto auto auto auto;grid-template-columns:100%;grid-column-gap:15px;grid-row-gap:15px;grid-template-areas:\"next-event-1\" \"event-content-1\" \"event-content-2\" \"unete-1\" \"unete-content-1\";margin-top:10px;}.main-info__eventos-content.jsx-3111417215 p.jsx-3111417215{margin:0.5rem 2rem;}.main-unete__title.jsx-3111417215{-webkit-transform:translateY(1rem);-ms-transform:translateY(1rem);transform:translateY(1rem);}.main-unete__div.jsx-3111417215{margin:0 1rem 1rem 1rem;padding:0.1rem 1rem;}.main-unete__div.jsx-3111417215 p.jsx-3111417215{color:black;font-size:1rem;font-weight:700;}.main-unete__div.jsx-3111417215 p.jsx-3111417215:last-of-type{-webkit-text-decoration:underline;text-decoration:underline;}.main-unete__div.jsx-3111417215 button.jsx-3111417215{border-width:2px;font-weight:400;font-size:0.8571em;font-family:inherit;border:none;border-radius:0.1875rem;padding:11px 22px;cursor:pointer;background-color:#f96332;color:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxNYWluTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDZ0IsQUFJMkUsQUFLakQsQUFhNkMsQUFnQnRDLEFBUVYsQUFJRCxBQUlXLEFBT2YsQUFVTyxBQUlTLEFBT0EsQUFRSixBQU9WLEFBY08sQUFJRSxBQU1KLEFBS0EsQUFLRCxBQUlGLEFBS0UsQUFJQSxBQVdZLEFBUVosQUFhTSxBQUlRLEFBSUgsQUFLWixBQU1jLEFBSVQsU0F6SVQsQUFvQ0csRUF1Q2IsQ0FxRGlCLENBM0luQixBQWlGRSxBQVNBLEFBdUJxQixDQXJIdkIsQUEyRWdCLEFBS0EsQ0FySEMsQ0E4RGpCLEFBd0NFLENBd0ZrQixDQXBGRixDQXJESyxBQWtIckIsQ0E5RWUsSUFzRk8sQ0E3R1YsQUFPQSxBQXlFRSxDQWpDZCxBQUtBLENBK0RrQixDQXBMTixJQTBHUSxBQWdERSxDQWpFMEMsQUFxRzNDLElBNUhMLEFBT0osQUF5RUUsQ0FqSk4sRUFvRFEsR0FnSWhCLENBbkxTLEFBNktULEtBckdrQixBQXlFRSxDQW5FTixBQTJCZCxDQXhHYyxDQXlKcUMsQUFtQzdCLENBNUhMLEdBdkNILEFBZ0JBLEFBVUQsR0EzRGQsQUFBQyxBQWlCVyxDQTZLWCxHQXJMYyxDQTZFTyxHQU52QixBQXlFRSxHQXZJZSxBQWdCQyxBQWdCQyxBQXVCbkIsRUE4SGdCLEVBNURhLENBaklaLFNBOExXLENBckxWLEFBb0VsQixDQXBEMkIsQ0FnQlQsQ0F4Q2dCLElBb0ZXLENBZ0YzQyxNQW5DYyxFQXhIUixBQThJdUIsRUE5R2YsSUEvQlAsQ0FvTGEsR0FyS0wsQUF5R0csR0F2SEwsQ0FWb0IsRUF5Q25DLFNBaEJBLEFBcUttQixDQTVERSxDQXFCSSxFQXZHVCxHQW9DZSxRQTJHRixHQTlJWixBQWtGUSxLQXFCSCxVQXRHdEIsQ0F1Q2MsTUF1R0UsQ0F2Q3VGLFdBd0NyRyxPQWhNQSxHQVVtQixNQXlISCxhQXhISSxDQXlIRyxlQTNDdkIsSUE3RW1CLEVBeUhuQixxQ0FvQmtCLGdCQUNsQixzQ0E3SThCLG1IQUNkLGdCQUNKLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxjdWV2YS1uZXh0anNcXGNvbXBvbmVudHNcXE1haW5OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNpbXBsZU1lbnUgZnJvbSBcIi4vU2ltcGxlTWVudVwiXHJcbi8vIGltcG9ydCBcIi4uL3N0YXRpYy9zaGFyZWQuY3NzXCJcclxuXHJcbmNvbnN0IE1haW5OYXYgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fYnJhbmRcIj4gQ3VldmEgZGUgS3VuIHkgSGVibGVzPC9wPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19icmFuZC1tb3ZpbFwiPlxyXG4gICAgICAgIDxTaW1wbGVNZW51IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW1zXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50b3NcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj5FdmVudG9zPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2dhbGVyaWFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj5HYWxlcmlhPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiLi9wYXRyb2NpbmFkb3Jlc1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLW5hdl9faXRlbS1uYW1lc1wiPlBhdHJvY2luYWRvcmVzPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiLi9xdWllbmUtc29tb3NcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj7Cv1F1aWVuZSBTb21vcz88L3A+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIuL2NvbnRhY3RvXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtLW5hbWVzXCI+Q29udMOhY3Rhbm9zPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLm1haW4taGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjk2MzMyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1oZWFkZXJfX2JyYW5kIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4taGVhZGVyX19icmFuZC1tb3ZpbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tbmF2X19icmFuZCB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tbmF2X19pdGVtcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLW5hdl9faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuOHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tbmF2X19pdGVtLW5hbWVzIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1uYXZfX2l0ZW0tbmFtZXM6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTg2NWY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLW5hdl9faXRlbSBhLFxyXG4gICAgICAubW9iaWxlLW5hdl9faXRlbSBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgMjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgXCJoZWFkZXJcIlxyXG4gICAgICAgICAgICBcIm1haW4taW1hZ2VcIlxyXG4gICAgICAgICAgICBcIm1haW4tb25lXCJcclxuICAgICAgICAgICAgXCJmb290ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLW92ZXJ2aWV3X190ZXh0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAubWFpbi1vdmVydmlld19fdGV4dCBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4taGVhZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLWhlYWRlcl9fYnJhbmQge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLWhlYWRlcl9fYnJhbmQtbW92aWwge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIDIwMDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLWhlYWRlcl9fYnJhbmQtbW92aWw6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhODY1ZjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLWluZm8ge1xyXG4gICAgICAgICAgLyogYmFja2dyb3VuZDo7ICovXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcclxuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTVweDtcclxuICAgICAgICAgIGdyaWQtcm93LWdhcDogMTVweDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmV4dC1ldmVudC0xXCIgXCJldmVudC1jb250ZW50LTFcIiBcImV2ZW50LWNvbnRlbnQtMlwiIFwidW5ldGUtMVwiIFwidW5ldGUtY29udGVudC0xXCI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLm1haW4taW5mb19fZXZlbnRvcy1jb250ZW50IHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5tYWluLXVuZXRlX190aXRsZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAubWFpbi11bmV0ZV9fZGl2IHtcclxuICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLm1haW4tdW5ldGVfX2RpdiBwIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAubWFpbi11bmV0ZV9fZGl2IHA6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLm1haW4tdW5ldGVfX2RpdiBidXR0b24ge1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1NzFlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgLyogbGluZS1oZWlnaHQ6IDEuMzVlbTsgKi9cclxuICAgICAgICAgIC8qIG1hcmdpbjogMTBweCAxcHg7ICovXHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMXB4IDIycHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\MainNav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainNav);

/***/ }),

/***/ "./components/SimpleMenu.js":
/*!**********************************!*\
  !*** ./components/SimpleMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\SimpleMenu.js";






function SimpleMenu() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3351420141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Inicio"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/eventos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Eventos"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/galeria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Galeria"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/patrocinadores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Patrocinadores"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/quiene-somos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\xBFQuiene Somos?"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/contacto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-3351420141" + " " + "menu-decoration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Cont\xE1ctanos")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3351420141",
    __self: this
  }, ".menu-decoration.jsx-3351420141{-webkit-text-decoration:none;text-decoration:none;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxTaW1wbGVNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDa0IsQUFJNEIsa0RBQ1gsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXGN1ZXZhLW5leHRqc1xcY29tcG9uZW50c1xcU2ltcGxlTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVNZW51KCkge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgTWVudVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcclxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj48TWVudUl0ZW0+PGEgY2xhc3NOYW1lPVwibWVudS1kZWNvcmF0aW9uXCI+SW5pY2lvPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRvc1wiPjxNZW51SXRlbT48YSBjbGFzc05hbWU9XCJtZW51LWRlY29yYXRpb25cIj5FdmVudG9zPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FsZXJpYVwiPjxNZW51SXRlbT48YSBjbGFzc05hbWU9XCJtZW51LWRlY29yYXRpb25cIj5HYWxlcmlhPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGF0cm9jaW5hZG9yZXNcIj48TWVudUl0ZW0+PGEgY2xhc3NOYW1lPVwibWVudS1kZWNvcmF0aW9uXCI+UGF0cm9jaW5hZG9yZXM8L2E+PC9NZW51SXRlbT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9xdWllbmUtc29tb3NcIj48TWVudUl0ZW0+PGEgY2xhc3NOYW1lPVwibWVudS1kZWNvcmF0aW9uXCI+wr9RdWllbmUgU29tb3M/PC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj48TWVudUl0ZW0+PGEgY2xhc3NOYW1lPVwibWVudS1kZWNvcmF0aW9uXCI+Q29udMOhY3Rhbm9zPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxyXG4gICAgICA8L01lbnU+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgIC5tZW51LWRlY29yYXRpb24ge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\SimpleMenu.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/eventos/evento-vi-san-pintena.js":
/*!************************************************!*\
  !*** ./pages/eventos/evento-vi-san-pintena.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainNav */ "./components/MainNav.js");
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainHeader */ "./components/MainHeader.js");
/* harmony import */ var _components_MainFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MainFooter */ "./components/MainFooter.js");
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\pages\\eventos\\evento-vi-san-pintena.js";






var eventovisanpintena = function eventovisanpintena() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185" + " " + "main-info container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1575430185" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "VI San Pinte\xF1a"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185" + " " + "reglamento-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "23 de Diciembre de 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185" + " " + "main-info__eventos-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/static/cartels/san-pintena-2017.jpg",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/cartels/san-pintena-2017.jpg",
    className: "jsx-1575430185" + " " + "eventos-main__imagem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1575430185" + " " + "reglamento-h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Reglamento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185" + " " + "reglamento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "D\xEDa, lugar y hora"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "El S\xE1bado 23 de Diciembre de 2017, Se celebrara la VI Edici\xF3n de la San Pinte\xF1a. Consta de una carrera de 10 km cronometrada con salida del auditorio del parque Juan Carlos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Y de una marcha no competitiva de 4 km con salida a las 11,00 horas desde la plaza del Egido de la Fuente y llegada al auditorio del parque Juan Carlos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Art\xEDculo 1 (Participaci\xF3n, Colaboraci\xF3n y Organizaci\xF3n de la prueba)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "En la fecha arriba indicada se celebrara la VI Edici\xF3n de la carrera/marcha San Pinte\xF1a 2017, contando con el Patrocinio del Excelent\xEDsimo Ayuntamiento de Pinto (Madrid), y la colaboraci\xF3n de diversas firmas comerciales. La organizaci\xF3n corre a cargo de la Asociaci\xF3n Cueva de \u201CKun y Hebles\u201D de Pinto, y el asesoramiento t\xE9cnico de EVEDEPORT."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Art\xEDculo 2 (Participantes)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Podr\xE1n tomar parte en la prueba todas aquellas personas que lo deseen, est\xE9n federadas o no, siempre que est\xE9n inscritas tanto en tiempo como en las formas establecidas para ello por la organizaci\xF3n de la prueba. Todo aquel participante por el hecho de tomar parte en dicha competici\xF3n, da lugar a la aceptaci\xF3n de dicho reglamento y declara estar en buenas condiciones f\xEDsicas para un normal desarrollo de la prueba."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Art\xEDculo 3 (Inscripciones)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185" + " " + "event-neg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Prueba de 10 kms. (Cronometrada) \u2013 11 euros"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185" + " " + "event-neg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Prueba de 4 kms. (No competitiva) \u2013 11 euros"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Se realizaran desde el d\xEDa 6 de Noviembre de 2017 al d\xEDa 21 de Diciembre de 2017 a las 13,30 horas, \xF3 hasta agotar los 600 dorsales, en los siguientes puntos de inscripci\xF3n:", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://www.carreraspopulares.com",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "www.carreraspopulares.com"), " ", "y", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://www.evedeport.es",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "www.evedeport.es"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Las inscripciones presenciales en bar Triana y en Decimas centro comercial Plaza Eboli."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Art\xEDculo 4 (Dorsales)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Los DORSALES-CHIPS Y LA BOLSA DEL CORREDOR, Se podr\xE1n recoger en el centro comercial Plaza Eboli el viernes 22 de 11 a 14,00 y de 16,00 a 20,00 el dia de la prueba de 9,00 a las 10,15 el dorsal colocado durante la competici\xF3n en el pecho, sin recortar, manipular, ni doblar. Todo aquel que participe con el dorsal de otra persona, as\xED como aquel que participe con otro dorsal que no sea proporcionado por la organizaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Art\xEDculo 5 (Categor\xEDas, Prueba (carrera) de 10 km)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Senior Masc/Fem - de 16 39"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Vet- a Masc/Fem - de 40 a 49"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Vet- b Masc/Fem - de 50 En Adelante"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Locales Masc/Fem (Conjunta)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Los corredores locales deber\xE1n estar empadronados en la localidad de Pinto."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Art\xEDculo 6 (Premios, trofeos, regalos y sorteo)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Recibir\xE1n trofeos los tres primeros clasificados de cada categor\xEDa y los ganadores locales."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Todos los corredores tanto en la carrera como en la marcha recibir\xE1n la misma bolsa del corredor."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Art\xEDculo 8 (Avituallamiento (10 KM))"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Habr\xE1 un puesto de avituallamiento aproximadamente en el km 5 y en meta."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Art\xEDculo 9 (Ropero y duchas)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Existir\xE1 un servicio de duchas gratuito (pista de atletismo Rafael Mendoza) y de ropero en la zona Salida meta a disposici\xF3n de los participantes."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Art\xEDculo 10 (Reclamaciones)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Todas las situaciones no previstas en este reglamento quedan sujetas a las normas del Comit\xE9 Organizador de la carrera. Las reclamaciones se har\xE1n por escrito hasta una hora despu\xE9s de finalizar la prueba, depositando una fianza de 60 euros que ser\xE1n devueltos solo en caso de resolver el jurado de apelaci\xF3n de la prueba a su favor.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Art\xEDculo 11 (Seguro)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Todos los participantes inscritos est\xE1n cubiertos por una p\xF3liza de seguros de responsabilidad civil por da\xF1os a terceros, etc. y siempre que se produzcan como consecuencia directa del desarrollo de la prueba, nunca como derivaci\xF3n de un padecimiento o tara latente, imprudencia, negligencia o inobservancia de las leyes y reglamento de la prueba. La organizaci\xF3n no se hace responsable de los da\xF1os o accidentes que pudieran causar o causarse los atletas participantes en esta competici\xF3n.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Art\xEDculo 12 (Otros)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Todos los participantes, por el hecho de realizar la inscripci\xF3n aceptan la publicaci\xF3n de su nombre en la clasificaci\xF3n de la prueba, en los medios de comunicaci\xF3n y/o en Internet. En cumplimiento de la ley org\xE1nica 15/1999, de 13 de diciembre, de protecci\xF3n de datos de car\xE1cter personal, se informa que los datos de car\xE1cter personal contenidos en la inscripci\xF3n realizada, ser\xE1n introducidos en un fichero para su tratamientopor la organizaci\xF3n (elaboraci\xF3n y publicaci\xF3n de resultados en los diferentes medios utilizados por la organizaci\xF3n entre otras actuaciones propias de la organizaci\xF3n de la prueba). Asimismo dan su consentimiento para que la organizaci\xF3n por s\xED mismo o mediante terceras entidades, traten inform\xE1ticamente con finalidad exclusivamente deportiva o promocional, su imagen dentro de la prueba mediante fotograf\xEDas, videos, etc. Todos los participantes, por el hecho de tomar la salida, aceptan el presente reglamento y en caso de duda o surgir alguna situaci\xF3n no reflejada en el mismo, se resol er\xE1 con arreglo a lo que determine el Comit\xE9 Organizador de la Prueba.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Reglamento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://docs.google.com/viewerng/viewer?url=http://www.cuevakunyhebles.com/wp-content/uploads/2017/11/REGLAMENTO-2017-SAN-PINTE\xD1A-NUEVO.docx&hl=es",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Reglamento"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Informacion"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Por razones ajenas a nuestra asociacion hemos tenido que cambiar el lugar de la recogida de dorsales sera en el auditorio del parque Juan Carlos se mantiene el mismo dia de entrega y la misma hora."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Perdonar por las molestias"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1575430185",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.container.jsx-1575430185{max-width:960px;}.reglamento-data.jsx-1575430185{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-1575430185{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:1rem;margin-right:auto;margin-left:auto;}.main-info__eventos-image.jsx-1575430185{grid-area:event-content-1;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.eventos-main__imagem.jsx-1575430185{max-height:25rem;}.reglamento.jsx-1575430185{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-1575430185{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:8.6rem;}.reglamento-h1.jsx-1575430185{color:#f96332;text-align:center;}.event-neg.jsx-1575430185{font-weight:600;}.circuito.jsx-1575430185{display:block;margin-left:auto;margin-right:auto;max-width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxwYWdlc1xcZXZlbnRvc1xcZXZlbnRvLXZpLXNhbi1waW50ZW5hLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRMZ0IsQUFJMkUsQUFLbEQsQUFJWSxBQUtnQyxBQVVsQyxBQU1QLEFBS0gsQUFRRixBQVFBLEFBS0UsQUFJSixjQWhCaUIsQUFRWCxBQVNILEVBdkRqQixBQThCbUIsQUFxQnJCLENBMUJFLFNBTnNCLEtBcUNKLENBVHBCLENBaEJ1QixhQVhELEdBcUNOLEdBekJTLE9BcEN0QixBQUFDLEFBYWlCLElBaURyQixVQXpCaUIsS0F2QkYsUUF3QmYsVUE5QnNCLGlCQW1DTCxDQWxDakIsR0FnQkUsU0FtQm1CLGlCQUNKLFNBOUJPLElBK0J4QiwwRUE5QmUsYUFDSyxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxjdWV2YS1uZXh0anNcXHBhZ2VzXFxldmVudG9zXFxldmVudG8tdmktc2FuLXBpbnRlbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWluTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5OYXZcIjtcclxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkhlYWRlclwiO1xyXG5pbXBvcnQgTWFpbkZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluRm9vdGVyXCI7XHJcblxyXG5jb25zdCBldmVudG92aXNhbnBpbnRlbmEgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxNYWluTmF2IC8+XHJcbiAgICA8TWFpbkhlYWRlciAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvIGNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicmVnbGFtZW50by1oMVwiPlZJIFNhbiBQaW50ZcOxYTwvaDE+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJyZWdsYW1lbnRvLWRhdGFcIj4yMyBkZSBEaWNpZW1icmUgZGUgMjAxNzwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvX19ldmVudG9zLWltYWdlXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9zdGF0aWMvY2FydGVscy9zYW4tcGludGVuYS0yMDE3LmpwZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudG9zLW1haW5fX2ltYWdlbVwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvY2FydGVscy9zYW4tcGludGVuYS0yMDE3LmpwZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJyZWdsYW1lbnRvLWgyXCI+UmVnbGFtZW50bzwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnbGFtZW50b1wiPlxyXG4gICAgICAgIDxoMz5Ew61hLCBsdWdhciB5IGhvcmE8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgRWwgU8OhYmFkbyAyMyBkZSBEaWNpZW1icmUgZGUgMjAxNywgU2UgY2VsZWJyYXJhIGxhIFZJIEVkaWNpw7NuIGRlIGxhXHJcbiAgICAgICAgICBTYW4gUGludGXDsWEuIENvbnN0YSBkZSB1bmEgY2FycmVyYSBkZSAxMCBrbSBjcm9ub21ldHJhZGEgY29uIHNhbGlkYVxyXG4gICAgICAgICAgZGVsIGF1ZGl0b3JpbyBkZWwgcGFycXVlIEp1YW4gQ2FybG9zLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFkgZGUgdW5hIG1hcmNoYSBubyBjb21wZXRpdGl2YSBkZSA0IGttIGNvbiBzYWxpZGEgYSBsYXMgMTEsMDAgaG9yYXNcclxuICAgICAgICAgIGRlc2RlIGxhIHBsYXphIGRlbCBFZ2lkbyBkZSBsYSBGdWVudGUgeSBsbGVnYWRhIGFsIGF1ZGl0b3JpbyBkZWxcclxuICAgICAgICAgIHBhcnF1ZSBKdWFuIENhcmxvcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgQXJ0w61jdWxvIDEgKFBhcnRpY2lwYWNpw7NuLCBDb2xhYm9yYWNpw7NuIHkgT3JnYW5pemFjacOzbiBkZSBsYSBwcnVlYmEpXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEVuIGxhIGZlY2hhIGFycmliYSBpbmRpY2FkYSBzZSBjZWxlYnJhcmEgbGEgVkkgRWRpY2nDs24gZGUgbGFcclxuICAgICAgICAgIGNhcnJlcmEvbWFyY2hhIFNhbiBQaW50ZcOxYSAyMDE3LCBjb250YW5kbyBjb24gZWwgUGF0cm9jaW5pbyBkZWxcclxuICAgICAgICAgIEV4Y2VsZW50w61zaW1vIEF5dW50YW1pZW50byBkZSBQaW50byAoTWFkcmlkKSwgeSBsYSBjb2xhYm9yYWNpw7NuIGRlXHJcbiAgICAgICAgICBkaXZlcnNhcyBmaXJtYXMgY29tZXJjaWFsZXMuIExhIG9yZ2FuaXphY2nDs24gY29ycmUgYSBjYXJnbyBkZSBsYVxyXG4gICAgICAgICAgQXNvY2lhY2nDs24gQ3VldmEgZGUg4oCcS3VuIHkgSGVibGVz4oCdIGRlIFBpbnRvLCB5IGVsIGFzZXNvcmFtaWVudG9cclxuICAgICAgICAgIHTDqWNuaWNvIGRlIEVWRURFUE9SVC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyAyIChQYXJ0aWNpcGFudGVzKTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBQb2Ryw6FuIHRvbWFyIHBhcnRlIGVuIGxhIHBydWViYSB0b2RhcyBhcXVlbGxhcyBwZXJzb25hcyBxdWUgbG8gZGVzZWVuLFxyXG4gICAgICAgICAgZXN0w6luIGZlZGVyYWRhcyBvIG5vLCBzaWVtcHJlIHF1ZSBlc3TDqW4gaW5zY3JpdGFzIHRhbnRvIGVuIHRpZW1wbyBjb21vXHJcbiAgICAgICAgICBlbiBsYXMgZm9ybWFzIGVzdGFibGVjaWRhcyBwYXJhIGVsbG8gcG9yIGxhIG9yZ2FuaXphY2nDs24gZGUgbGEgcHJ1ZWJhLlxyXG4gICAgICAgICAgVG9kbyBhcXVlbCBwYXJ0aWNpcGFudGUgcG9yIGVsIGhlY2hvIGRlIHRvbWFyIHBhcnRlIGVuIGRpY2hhXHJcbiAgICAgICAgICBjb21wZXRpY2nDs24sIGRhIGx1Z2FyIGEgbGEgYWNlcHRhY2nDs24gZGUgZGljaG8gcmVnbGFtZW50byB5IGRlY2xhcmFcclxuICAgICAgICAgIGVzdGFyIGVuIGJ1ZW5hcyBjb25kaWNpb25lcyBmw61zaWNhcyBwYXJhIHVuIG5vcm1hbCBkZXNhcnJvbGxvIGRlIGxhXHJcbiAgICAgICAgICBwcnVlYmEuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMz5BcnTDrWN1bG8gMyAoSW5zY3JpcGNpb25lcyk8L2gzPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJldmVudC1uZWdcIj5QcnVlYmEgZGUgMTAga21zLiAoQ3Jvbm9tZXRyYWRhKSDigJMgMTEgZXVyb3M8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXZlbnQtbmVnXCI+XHJcbiAgICAgICAgICBQcnVlYmEgZGUgNCBrbXMuIChObyBjb21wZXRpdGl2YSkg4oCTIDExIGV1cm9zXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFNlIHJlYWxpemFyYW4gZGVzZGUgZWwgZMOtYSA2IGRlIE5vdmllbWJyZSBkZSAyMDE3IGFsIGTDrWEgMjEgZGVcclxuICAgICAgICAgIERpY2llbWJyZSBkZSAyMDE3IGEgbGFzIDEzLDMwIGhvcmFzLCDDsyBoYXN0YSBhZ290YXIgbG9zIDYwMCBkb3JzYWxlcyxcclxuICAgICAgICAgIGVuIGxvcyBzaWd1aWVudGVzIHB1bnRvcyBkZSBpbnNjcmlwY2nDs246e1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2FycmVyYXNwb3B1bGFyZXMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIHd3dy5jYXJyZXJhc3BvcHVsYXJlcy5jb21cclxuICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICB5XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5ldmVkZXBvcnQuZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgd3d3LmV2ZWRlcG9ydC5lc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExhcyBpbnNjcmlwY2lvbmVzIHByZXNlbmNpYWxlcyBlbiBiYXIgVHJpYW5hIHkgZW4gRGVjaW1hcyBjZW50cm9cclxuICAgICAgICAgIGNvbWVyY2lhbCBQbGF6YSBFYm9saS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyA0IChEb3JzYWxlcyk8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTG9zIERPUlNBTEVTLUNISVBTIFkgTEEgQk9MU0EgREVMIENPUlJFRE9SLCBTZSBwb2Ryw6FuIHJlY29nZXIgZW4gZWxcclxuICAgICAgICAgIGNlbnRybyBjb21lcmNpYWwgUGxhemEgRWJvbGkgZWwgdmllcm5lcyAyMiBkZSAxMSBhIDE0LDAwIHkgZGUgMTYsMDAgYVxyXG4gICAgICAgICAgMjAsMDAgZWwgZGlhIGRlIGxhIHBydWViYSBkZSA5LDAwIGEgbGFzIDEwLDE1IGVsIGRvcnNhbCBjb2xvY2Fkb1xyXG4gICAgICAgICAgZHVyYW50ZSBsYSBjb21wZXRpY2nDs24gZW4gZWwgcGVjaG8sIHNpbiByZWNvcnRhciwgbWFuaXB1bGFyLCBuaVxyXG4gICAgICAgICAgZG9ibGFyLiBUb2RvIGFxdWVsIHF1ZSBwYXJ0aWNpcGUgY29uIGVsIGRvcnNhbCBkZSBvdHJhIHBlcnNvbmEsIGFzw61cclxuICAgICAgICAgIGNvbW8gYXF1ZWwgcXVlIHBhcnRpY2lwZSBjb24gb3RybyBkb3JzYWwgcXVlIG5vIHNlYSBwcm9wb3JjaW9uYWRvIHBvclxyXG4gICAgICAgICAgbGEgb3JnYW5pemFjacOzbi5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyA1IChDYXRlZ29yw61hcywgUHJ1ZWJhIChjYXJyZXJhKSBkZSAxMCBrbSk8L2gzPlxyXG4gICAgICAgIDxwPlNlbmlvciBNYXNjL0ZlbSAtIGRlIDE2IDM5PC9wPlxyXG4gICAgICAgIDxwPlZldC0gYSBNYXNjL0ZlbSAtIGRlIDQwIGEgNDk8L3A+XHJcbiAgICAgICAgPHA+VmV0LSBiIE1hc2MvRmVtIC0gZGUgNTAgRW4gQWRlbGFudGU8L3A+XHJcbiAgICAgICAgPHA+TG9jYWxlcyBNYXNjL0ZlbSAoQ29uanVudGEpPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTG9zIGNvcnJlZG9yZXMgbG9jYWxlcyBkZWJlcsOhbiBlc3RhciBlbXBhZHJvbmFkb3MgZW4gbGEgbG9jYWxpZGFkIGRlXHJcbiAgICAgICAgICBQaW50by5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyA2IChQcmVtaW9zLCB0cm9mZW9zLCByZWdhbG9zIHkgc29ydGVvKTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBSZWNpYmlyw6FuIHRyb2Zlb3MgbG9zIHRyZXMgcHJpbWVyb3MgY2xhc2lmaWNhZG9zIGRlIGNhZGEgY2F0ZWdvcsOtYSB5XHJcbiAgICAgICAgICBsb3MgZ2FuYWRvcmVzIGxvY2FsZXMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVG9kb3MgbG9zIGNvcnJlZG9yZXMgdGFudG8gZW4gbGEgY2FycmVyYSBjb21vIGVuIGxhIG1hcmNoYSByZWNpYmlyw6FuXHJcbiAgICAgICAgICBsYSBtaXNtYSBib2xzYSBkZWwgY29ycmVkb3IuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMz5BcnTDrWN1bG8gOCAoQXZpdHVhbGxhbWllbnRvICgxMCBLTSkpPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEhhYnLDoSB1biBwdWVzdG8gZGUgYXZpdHVhbGxhbWllbnRvIGFwcm94aW1hZGFtZW50ZSBlbiBlbCBrbSA1IHkgZW5cclxuICAgICAgICAgIG1ldGEuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMz5BcnTDrWN1bG8gOSAoUm9wZXJvIHkgZHVjaGFzKTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBFeGlzdGlyw6EgdW4gc2VydmljaW8gZGUgZHVjaGFzIGdyYXR1aXRvIChwaXN0YSBkZSBhdGxldGlzbW8gUmFmYWVsXHJcbiAgICAgICAgICBNZW5kb3phKSB5IGRlIHJvcGVybyBlbiBsYSB6b25hIFNhbGlkYSBtZXRhIGEgZGlzcG9zaWNpw7NuIGRlIGxvc1xyXG4gICAgICAgICAgcGFydGljaXBhbnRlcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyAxMCAoUmVjbGFtYWNpb25lcyk8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVG9kYXMgbGFzIHNpdHVhY2lvbmVzIG5vIHByZXZpc3RhcyBlbiBlc3RlIHJlZ2xhbWVudG8gcXVlZGFuIHN1amV0YXMgYVxyXG4gICAgICAgICAgbGFzIG5vcm1hcyBkZWwgQ29taXTDqSBPcmdhbml6YWRvciBkZSBsYSBjYXJyZXJhLiBMYXMgcmVjbGFtYWNpb25lcyBzZVxyXG4gICAgICAgICAgaGFyw6FuIHBvciBlc2NyaXRvIGhhc3RhIHVuYSBob3JhIGRlc3B1w6lzIGRlIGZpbmFsaXphciBsYSBwcnVlYmEsXHJcbiAgICAgICAgICBkZXBvc2l0YW5kbyB1bmEgZmlhbnphIGRlIDYwIGV1cm9zIHF1ZSBzZXLDoW4gZGV2dWVsdG9zIHNvbG8gZW4gY2FzbyBkZVxyXG4gICAgICAgICAgcmVzb2x2ZXIgZWwganVyYWRvIGRlIGFwZWxhY2nDs24gZGUgbGEgcHJ1ZWJhIGEgc3UgZmF2b3Iue1wiIFwifVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aDM+QXJ0w61jdWxvIDExIChTZWd1cm8pPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFRvZG9zIGxvcyBwYXJ0aWNpcGFudGVzIGluc2NyaXRvcyBlc3TDoW4gY3ViaWVydG9zIHBvciB1bmEgcMOzbGl6YSBkZVxyXG4gICAgICAgICAgc2VndXJvcyBkZSByZXNwb25zYWJpbGlkYWQgY2l2aWwgcG9yIGRhw7FvcyBhIHRlcmNlcm9zLCBldGMuIHkgc2llbXByZVxyXG4gICAgICAgICAgcXVlIHNlIHByb2R1emNhbiBjb21vIGNvbnNlY3VlbmNpYSBkaXJlY3RhIGRlbCBkZXNhcnJvbGxvIGRlIGxhXHJcbiAgICAgICAgICBwcnVlYmEsIG51bmNhIGNvbW8gZGVyaXZhY2nDs24gZGUgdW4gcGFkZWNpbWllbnRvIG8gdGFyYSBsYXRlbnRlLFxyXG4gICAgICAgICAgaW1wcnVkZW5jaWEsIG5lZ2xpZ2VuY2lhIG8gaW5vYnNlcnZhbmNpYSBkZSBsYXMgbGV5ZXMgeSByZWdsYW1lbnRvIGRlXHJcbiAgICAgICAgICBsYSBwcnVlYmEuIExhIG9yZ2FuaXphY2nDs24gbm8gc2UgaGFjZSByZXNwb25zYWJsZSBkZSBsb3MgZGHDsW9zIG9cclxuICAgICAgICAgIGFjY2lkZW50ZXMgcXVlIHB1ZGllcmFuIGNhdXNhciBvIGNhdXNhcnNlIGxvcyBhdGxldGFzIHBhcnRpY2lwYW50ZXMgZW5cclxuICAgICAgICAgIGVzdGEgY29tcGV0aWNpw7NuLntcIiBcIn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgzPkFydMOtY3VsbyAxMiAoT3Ryb3MpPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFRvZG9zIGxvcyBwYXJ0aWNpcGFudGVzLCBwb3IgZWwgaGVjaG8gZGUgcmVhbGl6YXIgbGEgaW5zY3JpcGNpw7NuXHJcbiAgICAgICAgICBhY2VwdGFuIGxhIHB1YmxpY2FjacOzbiBkZSBzdSBub21icmUgZW4gbGEgY2xhc2lmaWNhY2nDs24gZGUgbGEgcHJ1ZWJhLFxyXG4gICAgICAgICAgZW4gbG9zIG1lZGlvcyBkZSBjb211bmljYWNpw7NuIHkvbyBlbiBJbnRlcm5ldC4gRW4gY3VtcGxpbWllbnRvIGRlIGxhXHJcbiAgICAgICAgICBsZXkgb3Jnw6FuaWNhIDE1LzE5OTksIGRlIDEzIGRlIGRpY2llbWJyZSwgZGUgcHJvdGVjY2nDs24gZGUgZGF0b3MgZGVcclxuICAgICAgICAgIGNhcsOhY3RlciBwZXJzb25hbCwgc2UgaW5mb3JtYSBxdWUgbG9zIGRhdG9zIGRlIGNhcsOhY3RlciBwZXJzb25hbFxyXG4gICAgICAgICAgY29udGVuaWRvcyBlbiBsYSBpbnNjcmlwY2nDs24gcmVhbGl6YWRhLCBzZXLDoW4gaW50cm9kdWNpZG9zIGVuIHVuXHJcbiAgICAgICAgICBmaWNoZXJvIHBhcmEgc3UgdHJhdGFtaWVudG9wb3IgbGEgb3JnYW5pemFjacOzbiAoZWxhYm9yYWNpw7NuIHlcclxuICAgICAgICAgIHB1YmxpY2FjacOzbiBkZSByZXN1bHRhZG9zIGVuIGxvcyBkaWZlcmVudGVzIG1lZGlvcyB1dGlsaXphZG9zIHBvciBsYVxyXG4gICAgICAgICAgb3JnYW5pemFjacOzbiBlbnRyZSBvdHJhcyBhY3R1YWNpb25lcyBwcm9waWFzIGRlIGxhIG9yZ2FuaXphY2nDs24gZGUgbGFcclxuICAgICAgICAgIHBydWViYSkuIEFzaW1pc21vIGRhbiBzdSBjb25zZW50aW1pZW50byBwYXJhIHF1ZSBsYSBvcmdhbml6YWNpw7NuIHBvclxyXG4gICAgICAgICAgc8OtIG1pc21vIG8gbWVkaWFudGUgdGVyY2VyYXMgZW50aWRhZGVzLCB0cmF0ZW4gaW5mb3Jtw6F0aWNhbWVudGUgY29uXHJcbiAgICAgICAgICBmaW5hbGlkYWQgZXhjbHVzaXZhbWVudGUgZGVwb3J0aXZhIG8gcHJvbW9jaW9uYWwsIHN1IGltYWdlbiBkZW50cm8gZGVcclxuICAgICAgICAgIGxhIHBydWViYSBtZWRpYW50ZSBmb3RvZ3JhZsOtYXMsIHZpZGVvcywgZXRjLiBUb2RvcyBsb3MgcGFydGljaXBhbnRlcyxcclxuICAgICAgICAgIHBvciBlbCBoZWNobyBkZSB0b21hciBsYSBzYWxpZGEsIGFjZXB0YW4gZWwgcHJlc2VudGUgcmVnbGFtZW50byB5IGVuXHJcbiAgICAgICAgICBjYXNvIGRlIGR1ZGEgbyBzdXJnaXIgYWxndW5hIHNpdHVhY2nDs24gbm8gcmVmbGVqYWRhIGVuIGVsIG1pc21vLCBzZVxyXG4gICAgICAgICAgcmVzb2wgZXLDoSBjb24gYXJyZWdsbyBhIGxvIHF1ZSBkZXRlcm1pbmUgZWwgQ29taXTDqSBPcmdhbml6YWRvciBkZSBsYVxyXG4gICAgICAgICAgUHJ1ZWJhLntcIiBcIn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgzPlJlZ2xhbWVudG88L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vdmlld2Vybmcvdmlld2VyP3VybD1odHRwOi8vd3d3LmN1ZXZha3VueWhlYmxlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTEvUkVHTEFNRU5UTy0yMDE3LVNBTi1QSU5URcORQS1OVUVWTy5kb2N4JmhsPWVzXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVnbGFtZW50b1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGgzPkluZm9ybWFjaW9uPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFBvciByYXpvbmVzIGFqZW5hcyBhIG51ZXN0cmEgYXNvY2lhY2lvbiBoZW1vcyB0ZW5pZG8gcXVlIGNhbWJpYXIgZWxcclxuICAgICAgICAgIGx1Z2FyIGRlIGxhIHJlY29naWRhIGRlIGRvcnNhbGVzIHNlcmEgZW4gZWwgYXVkaXRvcmlvIGRlbCBwYXJxdWUgSnVhblxyXG4gICAgICAgICAgQ2FybG9zIHNlIG1hbnRpZW5lIGVsIG1pc21vIGRpYSBkZSBlbnRyZWdhIHkgbGEgbWlzbWEgaG9yYS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+UGVyZG9uYXIgcG9yIGxhcyBtb2xlc3RpYXM8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPE1haW5Gb290ZXIgLz5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8tZGF0YSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLWluZm8ge1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4taW5mb19fZXZlbnRvcy1pbWFnZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBldmVudC1jb250ZW50LTE7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXZlbnRvcy1tYWluX19pbWFnZW0ge1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLnJlZ2xhbWVudG8ge1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IDsgKi9cclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWdsYW1lbnRvLWgyIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi42cmVtKTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA4LjZyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWdsYW1lbnRvLWgxIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ldmVudC1uZWcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmN1aXRvIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRvdmlzYW5waW50ZW5hO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\pages\\eventos\\evento-vi-san-pintena.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (eventovisanpintena);

/***/ }),

/***/ 10:
/*!******************************************************!*\
  !*** multi ./pages/eventos/evento-vi-san-pintena.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\cueva-nextjs\pages\eventos\evento-vi-san-pintena.js */"./pages/eventos/evento-vi-san-pintena.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=evento-vi-san-pintena.js.map