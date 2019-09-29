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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/components/MainFooter.js";



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
  }, ".footer.jsx-4198576928{background:#000000;grid-area:footer;z-index:100;height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL01haW5Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2dCLEFBRzRCLG1CQUNGLGlCQUNMLFlBQ0EsWUFDZCIsImZpbGUiOiIvaG9tZS9yZW5hdG9hbXJlaXMvRGVza3RvcC9jdWV2YS1uZXh0anMvY29tcG9uZW50cy9NYWluRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNYWluRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXG4gICAgPHA+dGVzdDwvcD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Gb290ZXI7XG4iXX0= */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/MainFooter.js */"));
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
var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/components/MainHeader.js";



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
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.cueva-logo.jsx-1595415702{position:absolute;max-width:220px;padding-top:40px;padding-left:0px;opacity:0.7;}.main-overview.jsx-1595415702{background:url(\"https://i.ibb.co/jRcPgqs/bg6.jpg\");background-color:aqua;background-size:cover;background-position:center center;margin-top:2rem;left:0;width:100%;height:35vh;z-index:-1;}.main-overview__text-h1.jsx-1595415702{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;text-align:center;font-size:4.2rem;font-weight:600;opacity:0.9;padding-top:4rem;color:#ffffff;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;text-shadow:4px 4px 0px #505050,7px 7px 0px rgba(131,131,131,0.2);}.main-overview__text-h2.jsx-1595415702{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;text-align:center;font-weight:500;font-size:2rem;opacity:0.9;color:#ffffff;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;text-shadow:4px 4px 0px #505050,7px 7px 0px rgba(131,131,131,0.2);}@media (max-width:950px){.main-overview__text-h1.jsx-1595415702{font-size:2.5rem;opacity:0.9;display:none;}.main-overview__text-h2.jsx-1595415702{font-size:1rem;opacity:0.9;font-weight:600;display:none;}.cueva-logo.jsx-1595415702{position:relative;display:block;margin:0 auto;opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL01haW5IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBSTJFLEFBS2hELEFBUWlDLEFBWVcsQUFZQSxBQWN6QyxBQU1GLEFBT0csZUFOTixFQU5BLENBOUNBLEFBMkRFLFNBTkUsRUFOSCxHQWFDLEVBM0RELFFBK0NmLENBTWUsR0FPSCxLQTNERyxBQU1LLEtBK0NwQixBQU9BLEdBbEVILEFBQUMsQUF3QmtCLEFBWUEsU0E3Qk4sS0FNVSxJQVlMLEFBWUQsR0E3QmxCLGFBOEJpQixDQVpDLENBWmtCLGFBeUJ0QixFQVpBLFVBYUUsRUFaRyxPQWJELEtBMEJNLEtBWlIsTUFiUCxPQUNJLENBYVcsVUFaVixZQUNELFdBQ2IscURBc0J3RSxtQkFYQSwrQ0FZeEUsbUJBWEEiLCJmaWxlIjoiL2hvbWUvcmVuYXRvYW1yZWlzL0Rlc2t0b3AvY3VldmEtbmV4dGpzL2NvbXBvbmVudHMvTWFpbkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTWFpbkhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW92ZXJ2aWV3XCI+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3VldmEtbG9nb1wiIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vWmdGN25iYy9sb2dvLnBuZ1wiIC8+XG5cbiAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi1vdmVydmlld19fdGV4dC1oMVwiPkN1ZXZhIGRlIEvDvG4geSBIZWJsZXM8L2gxPlxuICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLW92ZXJ2aWV3X190ZXh0LWgyXCI+XG4gICAgICBBc29jaWFjacOzbiBEZXBvcnRpdmEgeSBSZWNyZWF0aXZhIGRlIFBpbnRvXG4gICAgPC9oMj5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXG4gICAgICAgIH1cblxuICAgICAgLmN1ZXZhLWxvZ28ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1heC13aWR0aDogMjIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfSAgXG5cbiAgICAgIC5tYWluLW92ZXJ2aWV3IHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9qUmNQZ3FzL2JnNi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICAubWFpbi1vdmVydmlld19fdGV4dC1oMSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDBweCAjNTA1MDUwLCA3cHggN3B4IDBweCByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMik7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW92ZXJ2aWV3X190ZXh0LWgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMHB4ICM1MDUwNTAsIDdweCA3cHggMHB4IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG5cbiAgICAgICAgXG4gICAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQtaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQtaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmN1ZXZhLWxvZ28ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgfVxuXG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/MainHeader.js */"));
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
var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/components/MainNav.js";



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
  }, "\xBFQuienes Somos?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
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
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.backdrop.jsx-3111417215{position:fixed;display:none;opacity:0;top:0;left:0;z-index:100;width:100vw;height:100vh;background:rgba(0,0,0,0.5);-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear;}.main-header.jsx-3111417215{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;width:100%;position:fixed;overflow:hidden;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#f96332;padding:0.2rem 1rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-height:45px;z-index:100;}.main-header__brand.jsx-3111417215{-webkit-text-decoration:inherit;text-decoration:inherit;color:#ffffff;font-weight:500;text-transform:uppercase;cursor:pointer;}.main-nav.jsx-3111417215{display:block;}.main-header__brand-movil.jsx-3111417215{display:none;}.main-nav__brand.jsx-3111417215{-webkit-text-decoration:inherit;text-decoration:inherit;color:inherit;font-size:1.1rem;font-weight:700;color:#000000;}.main-nav__items.jsx-3111417215{margin:0;padding:0;padding-right:0.5rem;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#FFFFFF;cursor:pointer;}.main-nav__item.jsx-3111417215{margin:0 0.8rem;}.main-nav__item-names.jsx-3111417215{text-transform:uppercase;padding:7px;font-weight:400;font-size:0.8rem;}.main-nav__item-names.jsx-3111417215:hover{background-color:#fa865f;color:white;padding:7px;border-radius:5px;}.main-nav__item.jsx-3111417215 a.jsx-3111417215,.mobile-nav__item.jsx-3111417215 a.jsx-3111417215{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;font-weight:bold 200;}@media (max-width:950px){body.jsx-3111417215{margin:0;width:100%;display:grid;font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-template-rows:1.5rem auto auto auto;grid-template-columns:100%;grid-template-areas: \"header\" \"main-image\" \"main-one\" \"footer\";}.container.jsx-3111417215{max-width:800px;}.main-overview__text.jsx-3111417215{text-align:center;color:#ffffff;margin-top:5.5rem;}.main-overview__text.jsx-3111417215 h1.jsx-3111417215{font-size:2em;opacity:0.9;}.main-overview__text.jsx-3111417215 h2.jsx-3111417215{font-size:1em;opacity:0.9;}.main-nav.jsx-3111417215{display:none;}.main-header.jsx-3111417215{width:100%;}.main-header__brand.jsx-3111417215{display:none;}.main-header__brand-movil.jsx-3111417215{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;padding:7px;font-weight:400;font-size:0.8rem;-webkit-text-decoration:none;text-decoration:none;color:#ffffff;font-weight:bold 200;}.main-header__brand-movil.jsx-3111417215:hover{background-color:#fa865f;color:white;padding:7px;border-radius:5px;}.main-info.jsx-3111417215{display:grid;grid-area:main-one;justify-self:center;grid-template-rows:auto auto auto auto auto auto;grid-template-columns:100%;grid-column-gap:15px;grid-row-gap:15px;grid-template-areas:\"next-event-1\" \"event-content-1\" \"event-content-2\" \"unete-1\" \"unete-content-1\";margin-top:10px;}.main-info__eventos-content.jsx-3111417215 p.jsx-3111417215{margin:0.5rem 2rem;}.main-unete__title.jsx-3111417215{-webkit-transform:translateY(1rem);-ms-transform:translateY(1rem);transform:translateY(1rem);}.main-unete__div.jsx-3111417215{margin:0 1rem 1rem 1rem;padding:0.1rem 1rem;}.main-unete__div.jsx-3111417215 p.jsx-3111417215{color:black;font-size:1rem;font-weight:700;}.main-unete__div.jsx-3111417215 p.jsx-3111417215:last-of-type{-webkit-text-decoration:underline;text-decoration:underline;}.main-unete__div.jsx-3111417215 button.jsx-3111417215{border-width:2px;font-weight:400;font-size:0.8571em;font-family:inherit;border:none;border-radius:0.1875rem;padding:11px 22px;cursor:pointer;background-color:#f96332;color:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL01haW5OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUkyRSxBQUtqRCxBQWE2QyxBQWdCdEMsQUFRVixBQUlELEFBSVcsQUFPZixBQVVPLEFBSVMsQUFPQSxBQVFKLEFBT1YsQUFjTyxBQUlFLEFBTUosQUFLQSxBQUtELEFBSUYsQUFLRSxBQUlBLEFBV1ksQUFRWixBQWFNLEFBSVEsQUFJSCxBQUtaLEFBTWMsQUFJVCxTQXpJVCxBQW9DRyxFQXVDYixDQXFEaUIsQ0EzSW5CLEFBaUZFLEFBU0EsQUF1QnFCLENBckh2QixBQTJFZ0IsQUFLQSxDQXJIQyxDQThEakIsQUF3Q0UsQ0F3RmtCLENBcEZGLENBckRLLEFBa0hyQixDQTlFZSxJQXNGTyxDQTdHVixBQU9BLEFBeUVFLENBakNkLEFBS0EsQ0ErRGtCLENBcExOLElBMEdRLEFBZ0RFLENBakUwQyxBQXFHM0MsSUE1SEwsQUFPSixBQXlFRSxDQWpKTixFQW9EUSxHQWdJaEIsQ0FuTFMsQUE2S1QsS0FyR2tCLEFBeUVFLENBbkVOLEFBMkJkLENBeEdjLENBeUpxQyxBQW1DN0IsQ0E1SEwsR0F2Q0gsQUFnQkEsQUFVRCxHQTNEZCxBQUFDLEFBaUJXLENBNktYLEdBckxjLENBNkVPLEdBTnZCLEFBeUVFLEdBdkllLEFBZ0JDLEFBZ0JDLEFBdUJuQixFQThIZ0IsRUE1RGEsQ0FqSVosU0E4TFcsQ0FyTFYsQUFvRWxCLENBcEQyQixDQWdCVCxDQXhDZ0IsSUFvRlcsQ0FnRjNDLE1BbkNjLEVBeEhSLEFBOEl1QixFQTlHZixJQS9CUCxDQW9MYSxHQXJLTCxBQXlHRyxHQXZITCxDQVZvQixFQXlDbkMsU0FoQkEsQUFxS21CLENBNURFLENBcUJJLEVBdkdULEdBb0NlLFFBMkdGLEdBOUlaLEFBa0ZRLEtBcUJILFVBdEd0QixDQXVDYyxNQXVHRSxDQXZDdUYsV0F3Q3JHLE9BaE1BLEdBVW1CLE1BeUhILGFBeEhJLENBeUhHLGVBM0N2QixJQTdFbUIsRUF5SG5CLHFDQW9Ca0IsZ0JBQ2xCLHNDQTdJOEIsbUhBQ2QsZ0JBQ0osWUFDZCIsImZpbGUiOiIvaG9tZS9yZW5hdG9hbXJlaXMvRGVza3RvcC9jdWV2YS1uZXh0anMvY29tcG9uZW50cy9NYWluTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNpbXBsZU1lbnUgZnJvbSBcIi4vU2ltcGxlTWVudVwiXG4vLyBpbXBvcnQgXCIuLi9zdGF0aWMvc2hhcmVkLmNzc1wiXG5cbmNvbnN0IE1haW5OYXYgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cbiAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fYnJhbmRcIj4gQ3VldmEgZGUgS3VuIHkgSGVibGVzPC9wPlxuICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2JyYW5kLW1vdmlsXCI+XG4gICAgICAgIDxTaW1wbGVNZW51IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW1zXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdl9faXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRvc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj5FdmVudG9zPC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxlcmlhXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLW5hdl9faXRlbS1uYW1lc1wiPkdhbGVyaWE8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiLi9wYXRyb2NpbmFkb3Jlc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj5QYXRyb2NpbmFkb3JlczwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYWluLW5hdl9faXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIuL3F1aWVuZS1zb21vc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi1uYXZfX2l0ZW0tbmFtZXNcIj7Cv1F1aWVuZXMgU29tb3M/PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi4vY29udGFjdG9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tbmF2X19pdGVtLW5hbWVzXCI+Q29udMOhY3Rhbm9zPC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBzcmM6IGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMFxuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2tkcm9wIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAubWFpbi1oZWFkZXIge1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5NjMzMjtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgfVxuXG4gICAgICAubWFpbi1oZWFkZXJfX2JyYW5kIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubWFpbi1uYXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLm1haW4taGVhZGVyX19icmFuZC1tb3ZpbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdl9fYnJhbmQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG4gICAgICAubWFpbi1uYXZfX2l0ZW1zIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdl9faXRlbSB7XG4gICAgICAgIG1hcmdpbjogMCAwLjhyZW07XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdl9faXRlbS1uYW1lcyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdl9faXRlbS1uYW1lczpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTg2NWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLW5hdl9faXRlbSBhLFxuICAgICAgLm1vYmlsZS1uYXZfX2l0ZW0gYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIDIwMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNXJlbSBhdXRvIGF1dG8gYXV0bztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICAgIFwibWFpbi1pbWFnZVwiXG4gICAgICAgICAgICBcIm1haW4tb25lXCJcbiAgICAgICAgICAgIFwiZm9vdGVyXCI7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1LjVyZW07XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFpbi1vdmVydmlld19fdGV4dCBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1haW4tb3ZlcnZpZXdfX3RleHQgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tYWluLW5hdiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tYWluLWhlYWRlcl9fYnJhbmQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFpbi1oZWFkZXJfX2JyYW5kLW1vdmlsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIDIwMDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tYWluLWhlYWRlcl9fYnJhbmQtbW92aWw6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTg2NWY7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFpbi1pbmZvIHtcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kOjsgKi9cbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTVweDtcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuZXh0LWV2ZW50LTFcIiBcImV2ZW50LWNvbnRlbnQtMVwiIFwiZXZlbnQtY29udGVudC0yXCIgXCJ1bmV0ZS0xXCIgXCJ1bmV0ZS1jb250ZW50LTFcIjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1haW4taW5mb19fZXZlbnRvcy1jb250ZW50IHAge1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDJyZW07XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFpbi11bmV0ZV9fdGl0bGUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tYWluLXVuZXRlX19kaXYge1xuICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tYWluLXVuZXRlX19kaXYgcCB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLm1haW4tdW5ldGVfX2RpdiBwOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubWFpbi11bmV0ZV9fZGl2IGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODU3MWVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIC8qIGxpbmUtaGVpZ2h0OiAxLjM1ZW07ICovXG4gICAgICAgICAgLyogbWFyZ2luOiAxMHB4IDFweDsgKi9cbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDExcHggMjJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7XG4iXX0= */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/MainNav.js */"));
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

var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/components/SimpleMenu.js";






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
  }, ".menu-decoration.jsx-3351420141{-webkit-text-decoration:none;text-decoration:none;color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL1NpbXBsZU1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUk0QixrREFDWCxVQUNaIiwiZmlsZSI6Ii9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL1NpbXBsZU1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZU1lbnUoKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICBNZW51XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+PE1lbnVJdGVtPjxhIGNsYXNzTmFtZT1cIm1lbnUtZGVjb3JhdGlvblwiPkluaWNpbzwvYT48L01lbnVJdGVtPjwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudG9zXCI+PE1lbnVJdGVtPjxhIGNsYXNzTmFtZT1cIm1lbnUtZGVjb3JhdGlvblwiPkV2ZW50b3M8L2E+PC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FsZXJpYVwiPjxNZW51SXRlbT48YSBjbGFzc05hbWU9XCJtZW51LWRlY29yYXRpb25cIj5HYWxlcmlhPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3BhdHJvY2luYWRvcmVzXCI+PE1lbnVJdGVtPjxhIGNsYXNzTmFtZT1cIm1lbnUtZGVjb3JhdGlvblwiPlBhdHJvY2luYWRvcmVzPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3F1aWVuZS1zb21vc1wiPjxNZW51SXRlbT48YSBjbGFzc05hbWU9XCJtZW51LWRlY29yYXRpb25cIj7Cv1F1aWVuZSBTb21vcz88L2E+PC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj48TWVudUl0ZW0+PGEgY2xhc3NOYW1lPVwibWVudS1kZWNvcmF0aW9uXCI+Q29udMOhY3Rhbm9zPC9hPjwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgPC9NZW51PlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIC5tZW51LWRlY29yYXRpb24ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbmB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/SimpleMenu.js */"));
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

/***/ "./pages/eventos/evento-vii.js":
/*!*************************************!*\
  !*** ./pages/eventos/evento-vii.js ***!
  \*************************************/
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
var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/pages/eventos/evento-vii.js";






var eventovii = function eventovii() {
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
  }, "VII carrera nocturna por el centro peninsular"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185" + " " + "reglamento-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "3 de Agosto de 2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185" + " " + "main-info__eventos-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/static/cartels/cartel-vii.jpeg",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/cartels/cartel-vii.jpeg",
    className: "jsx-1575430185" + " " + "eventos-main__imagem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1575430185" + " " + "reglamento-h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Reglamento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185" + " " + "reglamento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Art\xEDculo 1 (D\xEDa, lugar y hora)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "El s\xE1bado 3 de Agosto de 2019 a partir de las 20:00h (Ni\xF1os) 21:20h (Adultos) se celebrara la VII Edici\xF3n de la carrera nocturna de Pinto, que contar\xE1 con las distancias de 5 y 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "El recorrido con salida y meta junto a C/ Egido de la Fuente, se llevara a cabo por las calles de la localidad."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Tambi\xE9n se celebraran conjuntamente otras pruebas, para categor\xEDas menores, destinadas a la promoci\xF3n del atletismo en el municipio de Pinto (Madrid)."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Dicho evento deportivo cuenta con la colaboraci\xF3n del Ayuntamiento de Pinto, la organizaci\xF3n de Asociaci\xF3n \u201CCueva de Kun y Hebles\u201D de Pinto y el cronometraje y asesoramiento de Evedeport."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Art\xEDculo 2 (Participaci\xF3n)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Podr\xE1n tomar parte en la prueba todas aquellas personas que lo deseen, est\xE9n federadas o no, siempre que est\xE9n inscritas tanto en tiempo como en las formas establecidas para ello por la organizaci\xF3n de la prueba. Todo aquel participante por el hecho de tomar parte en dicha competici\xF3n, da lugar a la aceptaci\xF3n de dicho reglamento y declara estar en buenas condiciones f\xEDsicas para un normal desarrollo de la prueba."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Art\xEDculo 3 (Inscripciones)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185" + " " + "event-neg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Precio: 11 euros."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185" + " " + "event-neg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Para las dos distancias"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Se realizaran desde el d\xEDa 28 de Mayo de 2018 al d\xEDa 30 de Julio \xF3 hasta agotar los 500 dorsales, en los siguientes puntos de inscripci\xF3n:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Deportes Decimas (Centro comercial \xC9boli) en Pinto; Cafeter\xEDa Triana (Sevilla n\xBA 5) en Pinto; y por Internet en:", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://www.evedeport.es",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "www.evedeport.es"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://www.carreraspopulares.com",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "www.carreraspopulares.com"), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Las inscripciones menores son gratuitas en puntos presenciales y con un coste de 1\u20AC online."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "El d\xEDa de la prueba, solamente se admitir\xE1n inscripciones en la secretaria de la prueba, si no se hubiera alcanzado el l\xEDmite de inscripci\xF3n, previo pago de 15 euros en la carrera de 10 Km."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Art\xEDculo 4 (Recogida bolsa del corredor y dorsales)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Los dorsales chip y la bolsa del corredor , se podr\xE1n recoger:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "En el polideportivo Alberto Contador ."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Viernes dia 2 de 11:00 a 13:30 h Y de 16:00h a 20:00h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Sabado dia 3 de 11:00 a 14:00h"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Y en la zona de salida / meta presentando el justificante de inscripci\xF3n o de pago de la persona inscrita, desde las 18.00 horas hasta 30\xB4 minutos antes de la salida de la carrera."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Se descalificara a todo participante que, no lleve el dorsal colocado durante la competici\xF3n en el pecho, sin recortar, manipular, ni doblar. Todo aquel que participe con el dorsal de otra persona, as\xED como aquel que participe con otro dorsal que no sea proporcionado por la organizaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Se entregar\xE1 un chip de zapatilla que debe ser colocado sin ser aplastado y siguiendo indicaciones de la organizaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Art\xEDculo 5 (Avituallamiento)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Al paso por meta en el primera vuelta km 5 los corredores podr\xE1n disponer de avituallamiento al igual que en el momento de entrar en meta km 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
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
  }, "Art\xEDculo 6 (Ropero)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Existir\xE1 un servicio de ropero gratuito y duchas en el polideportivo Alberto Contador. Calle Isabel la Cat\xF3lica"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
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
  }, "Art\xEDculo 7 (Seguro)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Todos los participantes inscritos est\xE1n cubiertos por una p\xF3liza de seguros de responsabilidad civil por da\xF1os a terceros, etc., y siempre que se produzcan como consecuencia directa del desarrollo de la prueba, nunca como derivaci\xF3n de un padecimiento o tara latente, imprudencia, negligencia o inobservancia de las leyes y reglamento de la prueba. La organizaci\xF3n no se hace responsable de los da\xF1os o accidentes que pudieran causar o causarse los atletas participantes en esta competici\xF3n."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Art\xEDculo 8 (Categor\xEDas, distancias, horarios)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Las categor\xEDas y distancias a recorrer por los participantes son las siguientes."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "21:30H SENIOR MASCULINO Y FEMENINO (DE 16 A 34 A\xD1OS) 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "21:30H VETERANO A MASCULINO Y FEMENINO (DE 35 A 44 A\xD1OS) 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "21:30H VETERANO B MASCULINO Y FEMENINO (DE 45 a 54 a\xF1os) 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "21:30H VETERANO C MASCULINO Y FEMENINO (DE 55 EN ADELANTE) 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "TAMBIEN SE DISPUTAR\xC1 UNA CATEGORIA LOCAL ACUMULABLE CON LAS CATEGORIAS."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "CARRERAS MENORES:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "20:00H CADETE MASCULINO Y FEMENINO (14 Y 15 A\xD1OS) 1,2KM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "20:10H INFANTIL MASCULINO YN FEMENINO (12 Y 13 A\xD1OS) 1,2KM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "20:20H ALEVIN MASCULINO Y FEMENINO (10 Y 11 A\xD1OS) 800 MTS."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "20.30H BENJAMIN MASCULINO Y FEMENINO (7-8 Y 9 A\xD1OS) 600 MTS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "20:40H CHUPETIN MASCULINO Y FEMENINO ( DE 2 A 6 A\xD1OS) 200 MTS (NO COMPETITIVA-SE HAR\xC1N GRUPOS)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Art\xEDculo 9 (Premios y regalos)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Todos los corredores se llevar\xE1n una camiseta 42k, y dem\xE1s regalos que consiga la organizaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Recibir\xE1n trofeo los tres primeros clasificados de cada categor\xEDa en la carrera de 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Recibir\xE1n trofeo los tres primeros locales en la prueba de 10 km"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Recibir\xE1n trofeo los tres primeros corredores de la general de 5 km en ambos sexos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Recibir\xE1n trofeo los tres primeros clasificados desde benjam\xEDn a cadete en las carreras de menores."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Art\xEDculo 10 (Circuito)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/static/eventos/circuito-vii.png",
    target: "_blank",
    className: "jsx-1575430185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/eventos/circuito-vii.png",
    className: "jsx-1575430185" + " " + "circuito",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1575430185",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.container.jsx-1575430185{max-width:960px;}.reglamento-data.jsx-1575430185{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-1575430185{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:1rem;margin-right:auto;margin-left:auto;}.main-info__eventos-image.jsx-1575430185{grid-area:event-content-1;justify-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.eventos-main__imagem.jsx-1575430185{max-height:25rem;}.reglamento.jsx-1575430185{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-1575430185{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:8.6rem;}.reglamento-h1.jsx-1575430185{color:#f96332;text-align:center;}.event-neg.jsx-1575430185{font-weight:600;}.circuito.jsx-1575430185{display:block;margin-left:auto;margin-right:auto;max-width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9wYWdlcy9ldmVudG9zL2V2ZW50by12aWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUxnQixBQUkyRSxBQUtsRCxBQUlZLEFBS2dDLEFBVWxDLEFBTVAsQUFLSCxBQVFGLEFBUUEsQUFLRSxBQUlKLGNBaEJpQixBQVFYLEFBU0gsRUF2RGpCLEFBOEJtQixBQXFCckIsQ0ExQkUsU0FOc0IsS0FxQ0osQ0FUcEIsQ0FoQnVCLGFBWEQsR0FxQ04sR0F6QlMsT0FwQ3RCLEFBQUMsQUFhaUIsSUFpRHJCLFVBekJpQixLQXZCRixRQXdCZixVQTlCc0IsaUJBbUNMLENBbENqQixHQWdCRSxTQW1CbUIsaUJBQ0osU0E5Qk8sSUErQnhCLDBFQTlCZSxhQUNLLGtCQUNELGlCQUNuQiIsImZpbGUiOiIvaG9tZS9yZW5hdG9hbXJlaXMvRGVza3RvcC9jdWV2YS1uZXh0anMvcGFnZXMvZXZlbnRvcy9ldmVudG8tdmlpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haW5OYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbk5hdlwiO1xuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkhlYWRlclwiO1xuaW1wb3J0IE1haW5Gb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkZvb3RlclwiO1xuXG5jb25zdCBldmVudG92aWkgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPE1haW5OYXYgLz5cbiAgICA8TWFpbkhlYWRlciAvPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm8gY29udGFpbmVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwicmVnbGFtZW50by1oMVwiPlxuICAgICAgICBWSUkgY2FycmVyYSBub2N0dXJuYSBwb3IgZWwgY2VudHJvIHBlbmluc3VsYXJcbiAgICAgIDwvaDE+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicmVnbGFtZW50by1kYXRhXCI+MyBkZSBBZ29zdG8gZGUgMjAxOTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb19fZXZlbnRvcy1pbWFnZVwiPlxuICAgICAgICA8YSBocmVmPVwiL3N0YXRpYy9jYXJ0ZWxzL2NhcnRlbC12aWkuanBlZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImV2ZW50b3MtbWFpbl9faW1hZ2VtXCJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvY2FydGVscy9jYXJ0ZWwtdmlpLmpwZWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInJlZ2xhbWVudG8taDJcIj5SZWdsYW1lbnRvPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnbGFtZW50b1wiPlxuICAgICAgICA8aDM+QXJ0w61jdWxvIDEgKETDrWEsIGx1Z2FyIHkgaG9yYSk8L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFbCBzw6FiYWRvIDMgZGUgQWdvc3RvIGRlIDIwMTkgYSBwYXJ0aXIgZGUgbGFzIDIwOjAwaCAoTmnDsW9zKSAyMToyMGhcbiAgICAgICAgICAoQWR1bHRvcykgc2UgY2VsZWJyYXJhIGxhIFZJSSBFZGljacOzbiBkZSBsYSBjYXJyZXJhIG5vY3R1cm5hIGRlIFBpbnRvLFxuICAgICAgICAgIHF1ZSBjb250YXLDoSBjb24gbGFzIGRpc3RhbmNpYXMgZGUgNSB5IDEwIGttXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRWwgcmVjb3JyaWRvIGNvbiBzYWxpZGEgeSBtZXRhIGp1bnRvIGEgQy8gRWdpZG8gZGUgbGEgRnVlbnRlLCBzZVxuICAgICAgICAgIGxsZXZhcmEgYSBjYWJvIHBvciBsYXMgY2FsbGVzIGRlIGxhIGxvY2FsaWRhZC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUYW1iacOpbiBzZSBjZWxlYnJhcmFuIGNvbmp1bnRhbWVudGUgb3RyYXMgcHJ1ZWJhcywgcGFyYSBjYXRlZ29yw61hc1xuICAgICAgICAgIG1lbm9yZXMsIGRlc3RpbmFkYXMgYSBsYSBwcm9tb2Npw7NuIGRlbCBhdGxldGlzbW8gZW4gZWwgbXVuaWNpcGlvIGRlXG4gICAgICAgICAgUGludG8gKE1hZHJpZCkuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGljaG8gZXZlbnRvIGRlcG9ydGl2byBjdWVudGEgY29uIGxhIGNvbGFib3JhY2nDs24gZGVsIEF5dW50YW1pZW50byBkZVxuICAgICAgICAgIFBpbnRvLCBsYSBvcmdhbml6YWNpw7NuIGRlIEFzb2NpYWNpw7NuIOKAnEN1ZXZhIGRlIEt1biB5IEhlYmxlc+KAnSBkZSBQaW50b1xuICAgICAgICAgIHkgZWwgY3Jvbm9tZXRyYWplIHkgYXNlc29yYW1pZW50byBkZSBFdmVkZXBvcnQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMz5BcnTDrWN1bG8gMiAoUGFydGljaXBhY2nDs24pPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUG9kcsOhbiB0b21hciBwYXJ0ZSBlbiBsYSBwcnVlYmEgdG9kYXMgYXF1ZWxsYXMgcGVyc29uYXMgcXVlIGxvIGRlc2VlbixcbiAgICAgICAgICBlc3TDqW4gZmVkZXJhZGFzIG8gbm8sIHNpZW1wcmUgcXVlIGVzdMOpbiBpbnNjcml0YXMgdGFudG8gZW4gdGllbXBvIGNvbW9cbiAgICAgICAgICBlbiBsYXMgZm9ybWFzIGVzdGFibGVjaWRhcyBwYXJhIGVsbG8gcG9yIGxhIG9yZ2FuaXphY2nDs24gZGUgbGEgcHJ1ZWJhLlxuICAgICAgICAgIFRvZG8gYXF1ZWwgcGFydGljaXBhbnRlIHBvciBlbCBoZWNobyBkZSB0b21hciBwYXJ0ZSBlbiBkaWNoYVxuICAgICAgICAgIGNvbXBldGljacOzbiwgZGEgbHVnYXIgYSBsYSBhY2VwdGFjacOzbiBkZSBkaWNobyByZWdsYW1lbnRvIHkgZGVjbGFyYVxuICAgICAgICAgIGVzdGFyIGVuIGJ1ZW5hcyBjb25kaWNpb25lcyBmw61zaWNhcyBwYXJhIHVuIG5vcm1hbCBkZXNhcnJvbGxvIGRlIGxhXG4gICAgICAgICAgcHJ1ZWJhLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDM+QXJ0w61jdWxvIDMgKEluc2NyaXBjaW9uZXMpPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXZlbnQtbmVnXCI+UHJlY2lvOiAxMSBldXJvcy48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImV2ZW50LW5lZ1wiPlBhcmEgbGFzIGRvcyBkaXN0YW5jaWFzPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTZSByZWFsaXphcmFuIGRlc2RlIGVsIGTDrWEgMjggZGUgTWF5byBkZSAyMDE4IGFsIGTDrWEgMzAgZGUgSnVsaW8gw7NcbiAgICAgICAgICBoYXN0YSBhZ290YXIgbG9zIDUwMCBkb3JzYWxlcywgZW4gbG9zIHNpZ3VpZW50ZXMgcHVudG9zIGRlXG4gICAgICAgICAgaW5zY3JpcGNpw7NuOlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIERlcG9ydGVzIERlY2ltYXMgKENlbnRybyBjb21lcmNpYWwgw4lib2xpKSBlbiBQaW50bzsgQ2FmZXRlcsOtYSBUcmlhbmFcbiAgICAgICAgICAoU2V2aWxsYSBuwrogNSkgZW4gUGludG87IHkgcG9yIEludGVybmV0IGVuOntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5ldmVkZXBvcnQuZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIHd3dy5ldmVkZXBvcnQuZXNcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNhcnJlcmFzcG9wdWxhcmVzLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgd3d3LmNhcnJlcmFzcG9wdWxhcmVzLmNvbVxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGFzIGluc2NyaXBjaW9uZXMgbWVub3JlcyBzb24gZ3JhdHVpdGFzIGVuIHB1bnRvcyBwcmVzZW5jaWFsZXMgeSBjb25cbiAgICAgICAgICB1biBjb3N0ZSBkZSAx4oKsIG9ubGluZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFbCBkw61hIGRlIGxhIHBydWViYSwgc29sYW1lbnRlIHNlIGFkbWl0aXLDoW4gaW5zY3JpcGNpb25lcyBlbiBsYVxuICAgICAgICAgIHNlY3JldGFyaWEgZGUgbGEgcHJ1ZWJhLCBzaSBubyBzZSBodWJpZXJhIGFsY2FuemFkbyBlbCBsw61taXRlIGRlXG4gICAgICAgICAgaW5zY3JpcGNpw7NuLCBwcmV2aW8gcGFnbyBkZSAxNSBldXJvcyBlbiBsYSBjYXJyZXJhIGRlIDEwIEttLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDM+QXJ0w61jdWxvIDQgKFJlY29naWRhIGJvbHNhIGRlbCBjb3JyZWRvciB5IGRvcnNhbGVzKTwvaDM+XG4gICAgICAgIDxwPkxvcyBkb3JzYWxlcyBjaGlwIHkgbGEgYm9sc2EgZGVsIGNvcnJlZG9yICwgc2UgcG9kcsOhbiByZWNvZ2VyOjwvcD5cbiAgICAgICAgPHA+RW4gZWwgcG9saWRlcG9ydGl2byBBbGJlcnRvIENvbnRhZG9yIC48L3A+XG4gICAgICAgIDxwPlZpZXJuZXMgZGlhIDIgZGUgMTE6MDAgYSAxMzozMCBoIFkgZGUgMTY6MDBoIGEgMjA6MDBoPC9wPlxuICAgICAgICA8cD5TYWJhZG8gZGlhIDMgZGUgMTE6MDAgYSAxNDowMGg8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFkgZW4gbGEgem9uYSBkZSBzYWxpZGEgLyBtZXRhIHByZXNlbnRhbmRvIGVsIGp1c3RpZmljYW50ZSBkZVxuICAgICAgICAgIGluc2NyaXBjacOzbiBvIGRlIHBhZ28gZGUgbGEgcGVyc29uYSBpbnNjcml0YSwgZGVzZGUgbGFzIDE4LjAwIGhvcmFzXG4gICAgICAgICAgaGFzdGEgMzDCtCBtaW51dG9zIGFudGVzIGRlIGxhIHNhbGlkYSBkZSBsYSBjYXJyZXJhLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNlIGRlc2NhbGlmaWNhcmEgYSB0b2RvIHBhcnRpY2lwYW50ZSBxdWUsIG5vIGxsZXZlIGVsIGRvcnNhbCBjb2xvY2Fkb1xuICAgICAgICAgIGR1cmFudGUgbGEgY29tcGV0aWNpw7NuIGVuIGVsIHBlY2hvLCBzaW4gcmVjb3J0YXIsIG1hbmlwdWxhciwgbmlcbiAgICAgICAgICBkb2JsYXIuIFRvZG8gYXF1ZWwgcXVlIHBhcnRpY2lwZSBjb24gZWwgZG9yc2FsIGRlIG90cmEgcGVyc29uYSwgYXPDrVxuICAgICAgICAgIGNvbW8gYXF1ZWwgcXVlIHBhcnRpY2lwZSBjb24gb3RybyBkb3JzYWwgcXVlIG5vIHNlYSBwcm9wb3JjaW9uYWRvIHBvclxuICAgICAgICAgIGxhIG9yZ2FuaXphY2nDs24uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2UgZW50cmVnYXLDoSB1biBjaGlwIGRlIHphcGF0aWxsYSBxdWUgZGViZSBzZXIgY29sb2NhZG8gc2luIHNlclxuICAgICAgICAgIGFwbGFzdGFkbyB5IHNpZ3VpZW5kbyBpbmRpY2FjaW9uZXMgZGUgbGEgb3JnYW5pemFjacOzbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGgzPkFydMOtY3VsbyA1IChBdml0dWFsbGFtaWVudG8pPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWwgcGFzbyBwb3IgbWV0YSBlbiBlbCBwcmltZXJhIHZ1ZWx0YSBrbSA1IGxvcyBjb3JyZWRvcmVzIHBvZHLDoW5cbiAgICAgICAgICBkaXNwb25lciBkZSBhdml0dWFsbGFtaWVudG8gYWwgaWd1YWwgcXVlIGVuIGVsIG1vbWVudG8gZGUgZW50cmFyIGVuXG4gICAgICAgICAgbWV0YSBrbSAxMCBrbVxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDM+QXJ0w61jdWxvIDYgKFJvcGVybyk8L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFeGlzdGlyw6EgdW4gc2VydmljaW8gZGUgcm9wZXJvIGdyYXR1aXRvIHkgZHVjaGFzIGVuIGVsIHBvbGlkZXBvcnRpdm9cbiAgICAgICAgICBBbGJlcnRvIENvbnRhZG9yLiBDYWxsZSBJc2FiZWwgbGEgQ2F0w7NsaWNhXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMz5BcnTDrWN1bG8gNyAoU2VndXJvKTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRvZG9zIGxvcyBwYXJ0aWNpcGFudGVzIGluc2NyaXRvcyBlc3TDoW4gY3ViaWVydG9zIHBvciB1bmEgcMOzbGl6YSBkZVxuICAgICAgICAgIHNlZ3Vyb3MgZGUgcmVzcG9uc2FiaWxpZGFkIGNpdmlsIHBvciBkYcOxb3MgYSB0ZXJjZXJvcywgZXRjLiwgeSBzaWVtcHJlXG4gICAgICAgICAgcXVlIHNlIHByb2R1emNhbiBjb21vIGNvbnNlY3VlbmNpYSBkaXJlY3RhIGRlbCBkZXNhcnJvbGxvIGRlIGxhXG4gICAgICAgICAgcHJ1ZWJhLCBudW5jYSBjb21vIGRlcml2YWNpw7NuIGRlIHVuIHBhZGVjaW1pZW50byBvIHRhcmEgbGF0ZW50ZSxcbiAgICAgICAgICBpbXBydWRlbmNpYSwgbmVnbGlnZW5jaWEgbyBpbm9ic2VydmFuY2lhIGRlIGxhcyBsZXllcyB5IHJlZ2xhbWVudG8gZGVcbiAgICAgICAgICBsYSBwcnVlYmEuIExhIG9yZ2FuaXphY2nDs24gbm8gc2UgaGFjZSByZXNwb25zYWJsZSBkZSBsb3MgZGHDsW9zIG9cbiAgICAgICAgICBhY2NpZGVudGVzIHF1ZSBwdWRpZXJhbiBjYXVzYXIgbyBjYXVzYXJzZSBsb3MgYXRsZXRhcyBwYXJ0aWNpcGFudGVzIGVuXG4gICAgICAgICAgZXN0YSBjb21wZXRpY2nDs24uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMz5BcnTDrWN1bG8gOCAoQ2F0ZWdvcsOtYXMsIGRpc3RhbmNpYXMsIGhvcmFyaW9zKTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExhcyBjYXRlZ29yw61hcyB5IGRpc3RhbmNpYXMgYSByZWNvcnJlciBwb3IgbG9zIHBhcnRpY2lwYW50ZXMgc29uIGxhc1xuICAgICAgICAgIHNpZ3VpZW50ZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+MjE6MzBIIFNFTklPUiBNQVNDVUxJTk8gWSBGRU1FTklOTyAoREUgMTYgQSAzNCBBw5FPUykgMTAga208L3A+XG4gICAgICAgIDxwPjIxOjMwSCBWRVRFUkFOTyBBIE1BU0NVTElOTyBZIEZFTUVOSU5PIChERSAzNSBBIDQ0IEHDkU9TKSAxMCBrbTwvcD5cbiAgICAgICAgPHA+MjE6MzBIIFZFVEVSQU5PIEIgTUFTQ1VMSU5PIFkgRkVNRU5JTk8gKERFIDQ1IGEgNTQgYcOxb3MpIDEwIGttPC9wPlxuICAgICAgICA8cD4yMTozMEggVkVURVJBTk8gQyBNQVNDVUxJTk8gWSBGRU1FTklOTyAoREUgNTUgRU4gQURFTEFOVEUpIDEwIGttPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUQU1CSUVOIFNFIERJU1BVVEFSw4EgVU5BIENBVEVHT1JJQSBMT0NBTCBBQ1VNVUxBQkxFIENPTiBMQVNcbiAgICAgICAgICBDQVRFR09SSUFTLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPkNBUlJFUkFTIE1FTk9SRVM6PC9wPlxuICAgICAgICA8cD4yMDowMEggQ0FERVRFIE1BU0NVTElOTyBZIEZFTUVOSU5PICgxNCBZIDE1IEHDkU9TKSAxLDJLTTwvcD5cbiAgICAgICAgPHA+MjA6MTBIIElORkFOVElMIE1BU0NVTElOTyBZTiBGRU1FTklOTyAoMTIgWSAxMyBBw5FPUykgMSwyS008L3A+XG4gICAgICAgIDxwPjIwOjIwSCBBTEVWSU4gTUFTQ1VMSU5PIFkgRkVNRU5JTk8gKDEwIFkgMTEgQcORT1MpIDgwMCBNVFMuPC9wPlxuICAgICAgICA8cD4yMC4zMEggQkVOSkFNSU4gTUFTQ1VMSU5PIFkgRkVNRU5JTk8gKDctOCBZIDkgQcORT1MpIDYwMCBNVFM8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDIwOjQwSCBDSFVQRVRJTiBNQVNDVUxJTk8gWSBGRU1FTklOTyAoIERFIDIgQSA2IEHDkU9TKSAyMDAgTVRTIChOT1xuICAgICAgICAgIENPTVBFVElUSVZBLVNFIEhBUsOBTiBHUlVQT1MpXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMz5BcnTDrWN1bG8gOSAoUHJlbWlvcyB5IHJlZ2Fsb3MpPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVG9kb3MgbG9zIGNvcnJlZG9yZXMgc2UgbGxldmFyw6FuIHVuYSBjYW1pc2V0YSA0MmssIHkgZGVtw6FzIHJlZ2Fsb3MgcXVlXG4gICAgICAgICAgY29uc2lnYSBsYSBvcmdhbml6YWNpw7NuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUmVjaWJpcsOhbiB0cm9mZW8gbG9zIHRyZXMgcHJpbWVyb3MgY2xhc2lmaWNhZG9zIGRlIGNhZGEgY2F0ZWdvcsOtYSBlblxuICAgICAgICAgIGxhIGNhcnJlcmEgZGUgMTAga21cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5SZWNpYmlyw6FuIHRyb2ZlbyBsb3MgdHJlcyBwcmltZXJvcyBsb2NhbGVzIGVuIGxhIHBydWViYSBkZSAxMCBrbTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgUmVjaWJpcsOhbiB0cm9mZW8gbG9zIHRyZXMgcHJpbWVyb3MgY29ycmVkb3JlcyBkZSBsYSBnZW5lcmFsIGRlIDUga20gZW5cbiAgICAgICAgICBhbWJvcyBzZXhvcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSZWNpYmlyw6FuIHRyb2ZlbyBsb3MgdHJlcyBwcmltZXJvcyBjbGFzaWZpY2Fkb3MgZGVzZGUgYmVuamFtw61uIGFcbiAgICAgICAgICBjYWRldGUgZW4gbGFzIGNhcnJlcmFzIGRlIG1lbm9yZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoMz5BcnTDrWN1bG8gMTAgKENpcmN1aXRvKTwvaDM+XG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIDxhIGhyZWY9XCIvc3RhdGljL2V2ZW50b3MvY2lyY3VpdG8tdmlpLnBuZ1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY3VpdG9cIiBzcmM9XCIvc3RhdGljL2V2ZW50b3MvY2lyY3VpdG8tdmlpLnBuZ1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPE1haW5Gb290ZXIgLz5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXG4gICAgICAgIH0gICBcblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWdsYW1lbnRvLWRhdGEge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5tYWluLWluZm8ge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5tYWluLWluZm9fX2V2ZW50b3MtaW1hZ2Uge1xuICAgICAgICBncmlkLWFyZWE6IGV2ZW50LWNvbnRlbnQtMTtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmV2ZW50b3MtbWFpbl9faW1hZ2VtIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyNXJlbTtcbiAgICAgIH1cbiAgICBcbiAgICAucmVnbGFtZW50byB7XG4gICAgICAgIC8qIHRleHQtYWxpZ246IDsgKi9cbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLnJlZ2xhbWVudG8taDIge1xuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNnJlbSk7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogOC42cmVtO1xuICAgIH1cbiAgICBcbiAgICAucmVnbGFtZW50by1oMSB7XG4gICAgICAgIGNvbG9yOiAjZjk2MzMyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5ldmVudC1uZWcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5jaXJjdWl0byB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRvdmlpO1xuIl19 */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/pages/eventos/evento-vii.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (eventovii);

/***/ }),

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/eventos/evento-vii.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/renatoamreis/Desktop/cueva-nextjs/pages/eventos/evento-vii.js */"./pages/eventos/evento-vii.js");


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
//# sourceMappingURL=evento-vii.js.map