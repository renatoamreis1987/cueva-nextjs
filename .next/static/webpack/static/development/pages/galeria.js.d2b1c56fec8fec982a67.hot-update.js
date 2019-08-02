webpackHotUpdate("static\\development\\pages\\galeria.js",{

/***/ "./components/Galeria.js":
/*!*******************************!*\
  !*** ./components/Galeria.js ***!
  \*******************************/
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
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Galeria.js";




var Galeria = function Galeria(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4112339567" + " " + "container main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4112339567" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " Galeria de Fotos "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4112339567" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, console.log(props.galeria), props.galeria.map(function (galeria) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: galeria.id,
      className: "jsx-4112339567" + " " + "patrocinadores-div patrocinadores-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: galeria.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      className: "jsx-4112339567",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, galeria.evento === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: galeria.image,
      alt: "",
      className: "jsx-4112339567" + " " + "patrocinadores-div-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4112339567",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, galeria.evento))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4112339567",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.reglamento-data.jsx-4112339567{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-4112339567{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-4112339567{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-4112339567{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-4112339567{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-4112339567{color:#f96332;text-align:center;}.patrocinadores-div.jsx-4112339567{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:20rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:1rem;margin:0.5rem;}.patrocinadores-text.jsx-4112339567{font-weight:500;font-style:italic;font-size:1.5rem;text-align:center;}.patrocinadores-div-img.jsx-4112339567{max-width:15rem;max-height:18rem;padding:10px;border-radius:5%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.patrocinadores-div-img.jsx-4112339567:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.patrocinadores-padding.jsx-4112339567{padding:1rem;}@media (max-width:950px){.patrocinadores-div.jsx-4112339567{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-4112339567{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-4112339567{width:21rem;}}.event-neg.jsx-4112339567{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxHYWxlcmlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHdUUsQUFLbEMsQUFLa0MsQUFRM0MsQUFXSCxBQVFGLEFBUUEsQUFLRSxBQWtCQSxBQU9BLEFBUUssQUFJUixBQUtDLEFBTUEsQUFNQSxBQUtFLFlBaEJoQixBQU1BLEFBTUEsQ0FqQkYsQ0FsRCtCLEFBUVgsRUFoQkQsQUFxQkYsQUFrQkcsQUFPRCxBQWtDbkIsR0EzRmUsWUFpQ0EsQ0FMZixDQWhCcUIsQUE4Q04sQ0FQSSxVQWpCRCxFQXlCQyxLQVBDLENBdkNHLE9BOUJ0QixBQUFDLEFBU21CLENBMkNBLEdBeUJhLE1BUGxDLElBdkNlLEVBbURmLEdBeEVlLENBMkNRLE9BckJ2QixPQWRxQixHQWRELElBa0RDLGFBakJOLENBaENmLEtBa0RjLE9BakJLLEtBa0JKLElBc0JmLFFBdkNnQixDQWtCRCxRQTlDUyxLQTZCeEIsS0FwQjZCLHdEQXNDTCxZQTlDUCwwQkFTQSwrQkFSakIsU0E4Q3FCLGlCQXJDSSw0RUFzQ0EsdUJBckN6Qiw0RUFzQ3FCLG1CQUNMLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxHYWxlcmlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBHYWxlcmlhID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1haW4taW5mb1wiPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInJlZ2xhbWVudG8taDFcIj4gR2FsZXJpYSBkZSBGb3RvcyA8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm8tMVwiPlxyXG4gICAgICB7Y29uc29sZS5sb2cocHJvcHMuZ2FsZXJpYSl9XHJcbiAgICAgIHtwcm9wcy5nYWxlcmlhLm1hcChnYWxlcmlhID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2dhbGVyaWEuaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYgcGF0cm9jaW5hZG9yZXMtdGV4dFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Z2FsZXJpYS5ocmVmfT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAge2dhbGVyaWEuZXZlbnRvID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtnYWxlcmlhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHA+e2dhbGVyaWEuZXZlbnRvfTwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8tZGF0YSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWluZm8ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBncmlkLWFyZWE6IG1haW4tb25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWluZm8tMSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVnbGFtZW50byB7XHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogOyAqL1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8taDIge1xyXG4gICAgICAgIGNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjZyZW0pO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwLjJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvLWgxIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjNWIyO1xyXG4gICAgICAgIHdpZHRoOiAxN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy10ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYtaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYtaW1nOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1wYWRkaW5nIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAyMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xyXG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUzNXB4KSB7XHJcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXZlbnQtbmVnIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxlcmlhO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Galeria.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=galeria.js.d2b1c56fec8fec982a67.hot-update.js.map