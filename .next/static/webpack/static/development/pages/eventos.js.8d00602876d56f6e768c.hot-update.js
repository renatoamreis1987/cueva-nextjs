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
    className: "jsx-1252961263" + " " + "main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1252961263" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Los patrocinadores habituales de nuestros eventos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1252961263" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, console.log(props.patrocinadores), props.patrocinadores.map(function (patrocinadores) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: patrocinadores.id,
      className: "jsx-1252961263" + " " + "patrocinadores-div",
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
      className: "jsx-1252961263",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: patrocinadores.image,
      className: "jsx-1252961263" + " " + "patrocinadores-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1252961263",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, patrocinadores.name)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1252961263",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.main-info.jsx-1252961263{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-1252961263{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-1252961263{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-1252961263{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-1252961263{color:#f96332;text-align:center;}.patrocinadores-div.jsx-1252961263{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:12rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:1rem;margin:0.5rem;}h2.jsx-1252961263{font:inherit;}.patrocinadores-text.jsx-1252961263{font-weight:500;font-style:italic;font-size:1.5rem;text-align:center;}.patrocinadores-img.jsx-1252961263{max-width:95%;max-height:180px;padding-left:0.5rem;padding-right:0.5rem;}@media (max-width:950px){.patrocinadores-div.jsx-1252961263{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-1252961263{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-1252961263{width:21rem;}}.event-neg.jsx-1252961263{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxQYXRyb2NpbmFkb3Jlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBd0kyRSxBQUtKLEFBUTNDLEFBV0gsQUFRRixBQVFBLEFBS0UsQUFtQkgsQUFJRyxBQU9GLEFBUUEsQUFNQSxBQU1BLEFBS0UsWUFoQmhCLEFBTUEsQUFNQSxDQS9CRixDQWhDK0IsQUFRWCxBQW1DRCxFQW5EQSxBQXFCRixBQXVCRyxBQWdDcEIsR0F2RmUsWUFpQ0EsQUE4Qk8sQ0FuQ3RCLENBaEJxQixDQTRDRixVQXRCRCxPQXVCRSxBQU9HLENBbkRBLE9BekJ0QixBQUFDLEFBSW1CLENBMkNBLFNBdUJyQixHQU9BLENBbkRlLEtBckJBLENBMkNRLE9BckJ2QixPQWRxQixPQW9DQSxhQWpCTixNQWtCRCxPQWpCSyxLQWtCSixZQWpCQyxDQWtCRCxRQTlDUyxLQTZCeEIsS0FwQjZCLHdEQXNDTCxZQTlDUCwwQkFTQSwrQkFSakIsU0E4Q3lCLGlCQXJDQSxrRkFzQ0osaUJBckNyQiw0RUFzQ3FCLG1CQUNMLGNBRWhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcY3VldmEtbmV4dGpzXFxjb21wb25lbnRzXFxQYXRyb2NpbmFkb3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgUGF0cm9jaW5hZG9yZXMgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJyZWdsYW1lbnRvLWgxXCI+XHJcbiAgICAgIExvcyBwYXRyb2NpbmFkb3JlcyBoYWJpdHVhbGVzIGRlIG51ZXN0cm9zIGV2ZW50b3NcclxuICAgIDwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mby0xXCI+XHJcbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcy5wYXRyb2NpbmFkb3Jlcyl9XHJcbiAgICAgIHtwcm9wcy5wYXRyb2NpbmFkb3Jlcy5tYXAocGF0cm9jaW5hZG9yZXMgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtwYXRyb2NpbmFkb3Jlcy5pZH0gY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtZGl2XCI+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj17cGF0cm9jaW5hZG9yZXMubGlua30+XHJcbiAgICAgICAgICAgICB7cGF0cm9jaW5hZG9yZXMuaW1hZ2UgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhdHJvY2luYWRvcmVzLWltZ1wiIHNyYz17cGF0cm9jaW5hZG9yZXMuaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgIDxoMj57cGF0cm9jaW5hZG9yZXMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgc3JjOiBodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCw3MDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAubWFpbi1pbmZvIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluLW9uZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1pbmZvLTEge1xyXG4gICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDFyZW07ICovXHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlZ2xhbWVudG8ge1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IDsgKi9cclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk2MzMyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWdsYW1lbnRvLWgyIHtcclxuICAgICAgICBjb2xvcjogI2Y5NjMzMjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi42cmVtKTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMC4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVnbGFtZW50by1oMSB7XHJcbiAgICAgICAgY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICBib3JkZXItbGVmdDogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzViMjtcclxuICAgICAgICB3aWR0aDogMTdyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy10ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1pbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcclxuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xyXG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDIxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmV2ZW50LW5lZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0cm9jaW5hZG9yZXM7Il19 */\n/*@ sourceURL=C:\\Users\\DELL\\Desktop\\cueva-nextjs\\components\\Patrocinadores.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Patrocinadores);

/***/ })

})
//# sourceMappingURL=eventos.js.8d00602876d56f6e768c.hot-update.js.map