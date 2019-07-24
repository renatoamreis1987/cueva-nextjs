webpackHotUpdate("static\\development\\pages\\eventos.js",{

/***/ "./components/Patrocinadores.js":
/*!**************************************!*\
  !*** ./components/Patrocinadores.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Patrocinadores.js";




var Patrocinadores = function Patrocinadores(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2949536611" + " " + "main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2949536611" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Los patrocinadores habituales de nuestros eventos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2949536611" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, console.log(props.patrocinadores), props.patrocinadores.map(function (patrocinadores) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: patrocinadores.id,
      className: "jsx-2949536611" + " " + "patrocinadores-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: patrocinadores.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, patrocinadores.image !== null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      className: "jsx-2949536611",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: patrocinadores.image,
      className: "jsx-2949536611" + " " + "patrocinadores-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2949536611" + " " + "patrocinadores-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, patrocinadores.name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2949536611",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.main-info.jsx-2949536611{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-2949536611{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-2949536611{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-2949536611{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-2949536611{color:#f96332;text-align:center;}.patrocinadores-div.jsx-2949536611{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:1rem;margin:0.5rem;}.patrocinadores-text.jsx-2949536611{font-weight:500;font-style:italic;font-size:1.5rem;text-align:center;}.patrocinadores-img.jsx-2949536611{max-width:95%;max-height:180px;padding-left:0.5rem;padding-right:0.5rem;}@media (max-width:950px){.patrocinadores-div.jsx-2949536611{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-2949536611{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-2949536611{width:21rem;}}.event-neg.jsx-2949536611{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxQYXRyb2NpbmFkb3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBSTJFLEFBS0osQUFRM0MsQUFXSCxBQVFGLEFBUUEsQUFLRSxBQW1CQSxBQU9GLEFBUUEsQUFNQSxBQU1BLEFBS0UsWUFoQmhCLEFBTUEsQUFNQSxFQTNENkIsQUFRWCxBQStCRCxFQS9DQSxBQXFCRixBQW1CRyxBQWdDcEIsR0FuRmUsWUFpQ0EsQUEwQk8sQ0EvQnRCLENBaEJxQixDQXdDRixVQWxCRCxPQW1CRSxBQU9HLENBL0NBLE9BekJ0QixBQUFDLEFBSW1CLENBMkNBLFNBbUJyQixHQU9BLENBL0NlLEtBckJBLENBMkNRLE9BckJ2QixPQWRxQixPQW9DQSxhQWpCTixNQWtCRCxPQWpCSyxLQWtCSixZQWpCQyxDQWtCRCxRQTlDUyxLQTZCeEIsS0FwQjZCLHdEQXNDTCxZQTlDUCwwQkFTQSwrQkFSakIsU0E4Q3lCLGlCQXJDQSxrRkFzQ0osaUJBckNyQiw0RUFzQ3FCLG1CQUNMLGNBRWhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxQYXRyb2NpbmFkb3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgUGF0cm9jaW5hZG9yZXMgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJyZWdsYW1lbnRvLWgxXCI+XHJcbiAgICAgIExvcyBwYXRyb2NpbmFkb3JlcyBoYWJpdHVhbGVzIGRlIG51ZXN0cm9zIGV2ZW50b3NcclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mby0xXCI+XHJcbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5wYXRyb2NpbmFkb3Jlcyl9XHJcbiAgICAgIHtwcm9wcy5wYXRyb2NpbmFkb3Jlcy5tYXAocGF0cm9jaW5hZG9yZXMgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwYXRyb2NpbmFkb3Jlcy5pZH0gY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtZGl2XCI+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj17cGF0cm9jaW5hZG9yZXMubGlua30+XHJcbiAgICAgICAgICAgICB7cGF0cm9jaW5hZG9yZXMuaW1hZ2UgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhdHJvY2luYWRvcmVzLWltZ1wiIHNyYz17cGF0cm9jaW5hZG9yZXMuaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhdHJvY2luYWRvcmVzLXRleHRcIj57cGF0cm9jaW5hZG9yZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBzcmM6IGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWluZm8ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBncmlkLWFyZWE6IG1haW4tb25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWluZm8tMSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVnbGFtZW50byB7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogOyAqL1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8taDIge1xyXG4gICAgICAgIGNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjZyZW0pO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwLjJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvLWgxIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjNWIyO1xyXG4gICAgICAgIHdpZHRoOiAxN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtdGV4dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDIxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XHJcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTM1cHgpIHtcclxuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAyMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ldmVudC1uZWcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdHJvY2luYWRvcmVzOyJdfQ== */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Patrocinadores.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Patrocinadores);

/***/ })

})
//# sourceMappingURL=eventos.js.40c88277cddd05a4522d.hot-update.js.map