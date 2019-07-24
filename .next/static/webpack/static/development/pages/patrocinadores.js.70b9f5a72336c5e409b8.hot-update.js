webpackHotUpdate("static\\development\\pages\\patrocinadores.js",{

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
    className: "jsx-2517740681" + " " + "main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2517740681" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Los patrocinadores habituales de nuestros eventos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2517740681" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, console.log(props.patrocinadores), props.patrocinadores.map(function (patrocinadores) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: patrocinadores.id,
      className: "jsx-2517740681" + " " + "patrocinadores-div",
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
      className: "jsx-2517740681",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: patrocinadores.image,
      className: "jsx-2517740681" + " " + "patrocinadores-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2517740681",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, patrocinadores.name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2517740681",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.main-info.jsx-2517740681{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-2517740681{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-2517740681{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-2517740681{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-2517740681{color:#f96332;text-align:center;}.patrocinadores-div.jsx-2517740681{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:1rem;margin:0.5rem;}h2.jsx-2517740681{font-weight:500;font-style:italic;font-size:1.5rem;text-align:center;}.patrocinadores-text.jsx-2517740681{font-weight:500;font-style:italic;font-size:1.5rem;text-align:center;}.patrocinadores-img.jsx-2517740681{max-width:95%;max-height:180px;padding-left:0.5rem;padding-right:0.5rem;}@media (max-width:950px){.patrocinadores-div.jsx-2517740681{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-2517740681{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-2517740681{width:21rem;}}.event-neg.jsx-2517740681{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxQYXRyb2NpbmFkb3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBSTJFLEFBS0osQUFRM0MsQUFXSCxBQVFGLEFBUUEsQUFLRSxBQW1CQSxBQU9BLEFBT0YsQUFRQSxBQU1BLEFBTUEsQUFLRSxZQWhCaEIsQUFNQSxBQU1BLEVBbEU2QixBQVFYLEFBc0NELEVBdERBLEFBcUJGLEFBbUJHLEFBT0EsQUFnQ3BCLEdBMUZlLFlBaUNBLEFBaUNPLENBdEN0QixDQWhCcUIsQ0F3Q0YsQUFPQSxVQXpCRCxPQW1CRSxBQU9BLEFBT0csQ0F0REEsT0F6QnRCLEFBQUMsQUFJbUIsQ0EyQ0EsU0FtQnJCLEFBT0EsR0FPQSxDQXREZSxLQXJCQSxDQTJDUSxPQXJCdkIsT0FkcUIsT0FvQ0EsYUFqQk4sTUFrQkQsT0FqQkssS0FrQkosWUFqQkMsQ0FrQkQsUUE5Q1MsS0E2QnhCLEtBcEI2Qix3REFzQ0wsWUE5Q1AsMEJBU0EsK0JBUmpCLFNBOEN5QixpQkFyQ0Esa0ZBc0NKLGlCQXJDckIsNEVBc0NxQixtQkFDTCxjQUVoQiIsImZpbGUiOiJDOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXGN1ZXZhLW5leHRqc1xcY29tcG9uZW50c1xcUGF0cm9jaW5hZG9yZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFBhdHJvY2luYWRvcmVzID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwicmVnbGFtZW50by1oMVwiPlxyXG4gICAgICBMb3MgcGF0cm9jaW5hZG9yZXMgaGFiaXR1YWxlcyBkZSBudWVzdHJvcyBldmVudG9zXHJcbiAgICA8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm8tMVwiPlxyXG4gICAgICB7Y29uc29sZS5sb2cocHJvcHMucGF0cm9jaW5hZG9yZXMpfVxyXG4gICAgICB7cHJvcHMucGF0cm9jaW5hZG9yZXMubWFwKHBhdHJvY2luYWRvcmVzID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cGF0cm9jaW5hZG9yZXMuaWR9IGNsYXNzTmFtZT1cInBhdHJvY2luYWRvcmVzLWRpdlwiPlxyXG4gICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdHJvY2luYWRvcmVzLmxpbmt9PlxyXG4gICAgICAgICAgICAge3BhdHJvY2luYWRvcmVzLmltYWdlICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1pbWdcIiBzcmM9e3BhdHJvY2luYWRvcmVzLmltYWdlfT48L2ltZz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICA8aDI+e3BhdHJvY2luYWRvcmVzLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICkgfVxyXG4gICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHNyYzogaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLm1haW4taW5mbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4taW5mby0xIHtcclxuICAgICAgICBncmlkLWFyZWE6IG1haW4tb25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvIHtcclxuICAgICAgICAvKiB0ZXh0LWFsaWduOiA7ICovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVnbGFtZW50by1oMiB7XHJcbiAgICAgICAgY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNnJlbSk7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogMTAuMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8taDEge1xyXG4gICAgICAgIGNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM1YjI7XHJcbiAgICAgICAgd2lkdGg6IDE3cmVtO1xyXG4gICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy10ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1pbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xyXG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDIxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmV2ZW50LW5lZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0cm9jaW5hZG9yZXM7Il19 */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Patrocinadores.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Patrocinadores);

/***/ })

})
//# sourceMappingURL=patrocinadores.js.70b9f5a72336c5e409b8.hot-update.js.map