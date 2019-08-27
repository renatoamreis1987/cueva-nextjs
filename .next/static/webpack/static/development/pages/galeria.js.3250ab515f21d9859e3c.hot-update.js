webpackHotUpdate("static/development/pages/galeria.js",{

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
var _jsxFileName = "/home/renatoamreis/Desktop/cueva-nextjs/components/Galeria.js";




var Galeria = function Galeria(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200930561" + " " + "container main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4200930561" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " Galeria de Fotos "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4200930561" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, console.log(props.galeria), props.galeria.map(function (galeria) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: galeria.id,
      className: "jsx-4200930561" + " " + "patrocinadores-div patrocinadores-text",
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
      className: "jsx-4200930561",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, galeria.evento === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: galeria.image,
      alt: "",
      className: "jsx-4200930561" + " " + "patrocinadores-div-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4200930561" + " " + "patrocinadores-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, galeria.evento))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4200930561",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.reglamento-data.jsx-4200930561{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-4200930561{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-4200930561{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-4200930561{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-4200930561{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-4200930561{color:#f96332;text-align:center;}.patrocinadores-div.jsx-4200930561{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:20rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:1rem;margin:0.5rem;}.patrocinadores-text.jsx-4200930561{font-weight:400;font-style:italic;font-size:1.2rem;text-align:center;color:black;}a.jsx-4200930561{-webkit-text-decoration:none;text-decoration:none;}.patrocinadores-div-img.jsx-4200930561{max-width:15rem;max-height:18rem;padding:10px;border-radius:5%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.patrocinadores-div-img.jsx-4200930561:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.patrocinadores-padding.jsx-4200930561{padding:1rem;}@media (max-width:950px){.patrocinadores-div.jsx-4200930561{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-4200930561{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-4200930561{width:21rem;}}.event-neg.jsx-4200930561{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL0dhbGVyaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUd1RSxBQUtsQyxBQUtrQyxBQVEzQyxBQVdILEFBUUYsQUFRQSxBQUtFLEFBa0JBLEFBUUssQUFNTCxBQVFLLEFBSVIsQUFLQyxBQU1BLEFBTUEsQUFLRSxZQWhCaEIsQUFNQSxBQU1BLENBakJGLENBekQrQixBQVFYLEVBaEJELEFBcUJGLEFBa0JHLEFBY0QsQUFrQ25CLEdBbEdlLFlBaUNBLENBTGYsQ0FoQnFCLEFBcUROLENBZEksVUFqQkQsRUFnQ0MsSUFOakIsQ0FSa0IsQ0F2Q0csT0E5QnRCLEFBQUMsQUFTbUIsQ0EyQ0EsR0FnQ2EsTUFkcEIsSUF2Q0MsRUEwRGYsR0EvRWUsQ0EyQ1EsRUFrQnZCLEtBdkNBLE9BZHFCLEdBZEQsSUFrREMsYUFqQk4sQ0FoQ2YsS0FrRGMsT0FqQkssS0FrQkosSUE2QmYsUUE5Q2dCLENBa0JELFFBOUNTLEtBNkJ4QixLQXBCNkIsd0RBc0NMLFlBOUNQLDBCQVNBLCtCQVJqQixTQThDcUIsaUJBckNJLDRFQXNDQSx1QkFyQ3pCLDRFQXNDcUIsbUJBQ0wsY0FDaEIiLCJmaWxlIjoiL2hvbWUvcmVuYXRvYW1yZWlzL0Rlc2t0b3AvY3VldmEtbmV4dGpzL2NvbXBvbmVudHMvR2FsZXJpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgR2FsZXJpYSA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWFpbi1pbmZvXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInJlZ2xhbWVudG8taDFcIj4gR2FsZXJpYSBkZSBGb3RvcyA8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvLTFcIj5cbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5nYWxlcmlhKX1cbiAgICAgIHtwcm9wcy5nYWxlcmlhLm1hcChnYWxlcmlhID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17Z2FsZXJpYS5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYgcGF0cm9jaW5hZG9yZXMtdGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtnYWxlcmlhLmhyZWZ9PlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIHtnYWxlcmlhLmV2ZW50byA9PT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy1kaXYtaW1nXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17Z2FsZXJpYS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXRyb2NpbmFkb3Jlcy10ZXh0XCI+e2dhbGVyaWEuZXZlbnRvfTwvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBzcmM6IGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwLDcwMFxuICAgICAgICB9XG5cbiAgICAgIC5yZWdsYW1lbnRvLWRhdGEge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWluZm8ge1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgLm1haW4taW5mby0xIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLyogcGFkZGluZzogMXJlbTsgKi9cbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucmVnbGFtZW50byB7XG4gICAgICAgIC8qIHRleHQtYWxpZ246IDsgKi9cbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnJlZ2xhbWVudG8taDIge1xuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNnJlbSk7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAuMnJlbTtcbiAgICAgIH1cblxuICAgICAgLnJlZ2xhbWVudG8taDEge1xuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM1YjI7XG4gICAgICAgIHdpZHRoOiAxN3JlbTtcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAucGF0cm9jaW5hZG9yZXMtdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBcblxuICAgICAgICB9XG5cbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYtaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMThyZW07XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdi1pbWc6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG5cbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xuICAgICAgICAgIHdpZHRoOiAyMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XG4gICAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmV2ZW50LW5lZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGVyaWE7XG4iXX0= */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/Galeria.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=galeria.js.3250ab515f21d9859e3c.hot-update.js.map