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
    className: "jsx-2116591190" + " " + "container main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2116591190" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " Galeria de Fotos "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2116591190" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, console.log(props.galeria), props.galeria.map(function (galeria) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: galeria.id,
      className: "jsx-2116591190" + " " + "patrocinadores-div patrocinadores-text",
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
      className: "jsx-2116591190",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, galeria.evento === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: galeria.image,
      alt: "",
      className: "jsx-2116591190" + " " + "patrocinadores-div-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2116591190" + " " + "patrocinadores-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, galeria.evento))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2116591190",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.reglamento-data.jsx-2116591190{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-2116591190{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-2116591190{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-2116591190{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-2116591190{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-2116591190{color:#f96332;text-align:center;}.patrocinadores-div.jsx-2116591190{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:20rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:1rem;margin:0.5rem;}.patrocinadores-text.jsx-2116591190{font-weight:400;font-style:italic;font-size:1.2rem;text-align:center;color:black;}a.jsx-2116591190{-webkit-text-decoration:none;text-decoration:none;}.patrocinadores-div-img.jsx-2116591190{max-width:15rem;max-height:18rem;padding:10px;border-radius:5%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.patrocinadores-div-img.jsx-2116591190:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.patrocinadores-padding.jsx-2116591190{padding:1rem;}@media (max-width:950px){.patrocinadores-div.jsx-2116591190{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-2116591190{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-2116591190{width:21rem;}}.event-neg.jsx-2116591190{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxHYWxlcmlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHdUUsQUFLbEMsQUFLa0MsQUFRM0MsQUFXSCxBQVFGLEFBUUEsQUFLRSxBQWtCQSxBQVFLLEFBS0wsQUFRSyxBQUlSLEFBS0MsQUFNQSxBQU1BLEFBS0UsWUFoQmhCLEFBTUEsQUFNQSxDQWpCRixDQXhEK0IsQUFRWCxFQWhCRCxBQXFCRixBQWtCRyxBQWFELEFBa0NuQixHQWpHZSxZQWlDQSxDQUxmLENBaEJxQixBQW9ETixDQWJJLFVBakJELEVBK0JDLElBTmpCLENBUGtCLENBdkNHLE9BOUJ0QixBQUFDLEFBU21CLENBMkNBLEdBK0JhLE1BYnBCLElBdkNDLEVBeURmLEdBOUVlLENBMkNRLEVBa0J2QixLQXZDQSxPQWRxQixHQWRELElBa0RDLGFBakJOLENBaENmLEtBa0RjLE9BakJLLEtBa0JKLElBNEJmLFFBN0NnQixDQWtCRCxRQTlDUyxLQTZCeEIsS0FwQjZCLHdEQXNDTCxZQTlDUCwwQkFTQSwrQkFSakIsU0E4Q3FCLGlCQXJDSSw0RUFzQ0EsdUJBckN6Qiw0RUFzQ3FCLG1CQUNMLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxHYWxlcmlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBHYWxlcmlhID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1haW4taW5mb1wiPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInJlZ2xhbWVudG8taDFcIj4gR2FsZXJpYSBkZSBGb3RvcyA8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm8tMVwiPlxyXG4gICAgICB7Y29uc29sZS5sb2cocHJvcHMuZ2FsZXJpYSl9XHJcbiAgICAgIHtwcm9wcy5nYWxlcmlhLm1hcChnYWxlcmlhID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2dhbGVyaWEuaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYgcGF0cm9jaW5hZG9yZXMtdGV4dFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Z2FsZXJpYS5ocmVmfT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAge2dhbGVyaWEuZXZlbnRvID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtnYWxlcmlhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtdGV4dFwiPntnYWxlcmlhLmV2ZW50b308L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBzcmM6IGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvLWRhdGEge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1pbmZvIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1pbmZvLTEge1xyXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDFyZW07ICovXHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8ge1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IDsgKi9cclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvLWgyIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi42cmVtKTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMC4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVnbGFtZW50by1oMSB7XHJcbiAgICAgICAgY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICBib3JkZXItbGVmdDogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzViMjtcclxuICAgICAgICB3aWR0aDogMTdyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtdGV4dCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtZGl2LWltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtZGl2LWltZzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtcGFkZGluZyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xyXG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDIxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmV2ZW50LW5lZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsZXJpYTtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Galeria.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=galeria.js.4a8a5f2c2a600e66e6d3.hot-update.js.map