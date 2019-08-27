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
    className: "jsx-1449493514" + " " + "container main-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1449493514" + " " + "reglamento-h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " Galeria de Fotos "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1449493514" + " " + "main-info-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, console.log(props.galeria), props.galeria.map(function (galeria) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: galeria.id,
      className: "jsx-1449493514" + " " + "patrocinadores-div patrocinadores-text",
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
      className: "jsx-1449493514",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, galeria.evento === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: galeria.image,
      alt: "",
      className: "jsx-1449493514" + " " + "patrocinadores-div-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1449493514" + " " + "patrocinadores-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, galeria.evento))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1449493514",
    __self: this
  }, "@font-face{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;}.reglamento-data.jsx-1449493514{-webkit-transform:translateY(-2rem);-ms-transform:translateY(-2rem);transform:translateY(-2rem);text-align:center;}.main-info.jsx-1449493514{font-family:\"Montserrat\",\"Helvetica Neue\",Arial,sans-serif;grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-info-1.jsx-1449493514{grid-area:main-one;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.reglamento.jsx-1449493514{font-weight:400;border-width:2px;border-style:solid;border-color:#f96332;padding:1rem;}.reglamento-h2.jsx-1449493514{color:#f96332;-webkit-transform:translateY(2.6rem);-ms-transform:translateY(2.6rem);transform:translateY(2.6rem);z-index:1000;background:white;width:10.2rem;}.reglamento-h1.jsx-1449493514{color:#f96332;text-align:center;}.patrocinadores-div.jsx-1449493514{border-left:6px;border-right:0;border-top:0;border-bottom:0;border-style:solid;border-color:#f96332;background:#ffc5b2;width:17rem;height:20rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:1rem;margin:0.5rem;}.patrocinadores-text.jsx-1449493514{font-weight:400;font-size:1.2rem;text-align:center;color:black;}a.jsx-1449493514{-webkit-text-decoration:none;text-decoration:none;}.patrocinadores-div-img.jsx-1449493514{max-width:15rem;max-height:18rem;padding:10px;border-radius:5%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.patrocinadores-div-img.jsx-1449493514:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.patrocinadores-padding.jsx-1449493514{padding:1rem;}@media (max-width:950px){.patrocinadores-div.jsx-1449493514{width:21rem;}}@media (max-width:785px){.patrocinadores-div.jsx-1449493514{width:30rem;}}@media (max-width:535px){.patrocinadores-div.jsx-1449493514{width:21rem;}}.event-neg.jsx-1449493514{font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL0dhbGVyaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUd1RSxBQUtsQyxBQUtrQyxBQVEzQyxBQVdILEFBUUYsQUFRQSxBQUtFLEFBa0JBLEFBUUssQUFNTCxBQVFLLEFBSVIsQUFLQyxBQU1BLEFBTUEsQUFLRSxZQWhCaEIsQUFNQSxBQU1BLENBakJGLENBekQrQixBQVFYLEVBaEJELEFBcUJGLEFBbUJFLEFBYUEsQUFrQ25CLEdBbEdlLFlBaUNBLENBTGYsQ0FoQnFCLEFBd0NELEFBYUwsV0EvQkcsRUFnQ0MsSUFOakIsQ0FQWSxDQXhDUyxPQTlCdEIsQUFBQyxBQVNtQixDQTJDQSxHQW1CckIsQUFha0MsVUFyRG5CLEVBMERmLEdBL0VlLENBMkNRLE9BckJ2QixPQWRxQixHQWRELElBa0RDLGFBakJOLENBaENmLEtBa0RjLE9BakJLLEtBa0JKLElBNkJmLFFBOUNnQixDQWtCRCxRQTlDUyxLQTZCeEIsS0FwQjZCLHdEQXNDTCxZQTlDUCwwQkFTQSwrQkFSakIsU0E4Q3FCLGlCQXJDSSw0RUFzQ0EsdUJBckN6Qiw0RUFzQ3FCLG1CQUNMLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL3JlbmF0b2FtcmVpcy9EZXNrdG9wL2N1ZXZhLW5leHRqcy9jb21wb25lbnRzL0dhbGVyaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEdhbGVyaWEgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1haW4taW5mb1wiPlxuICAgIDxoMSBjbGFzc05hbWU9XCJyZWdsYW1lbnRvLWgxXCI+IEdhbGVyaWEgZGUgRm90b3MgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mby0xXCI+XG4gICAgICB7Y29uc29sZS5sb2cocHJvcHMuZ2FsZXJpYSl9XG4gICAgICB7cHJvcHMuZ2FsZXJpYS5tYXAoZ2FsZXJpYSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2dhbGVyaWEuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtZGl2IHBhdHJvY2luYWRvcmVzLXRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2FsZXJpYS5ocmVmfT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICB7Z2FsZXJpYS5ldmVudG8gPT09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtZGl2LWltZ1wiXG4gICAgICAgICAgICAgICAgICBzcmM9e2dhbGVyaWEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF0cm9jaW5hZG9yZXMtdGV4dFwiPntnYWxlcmlhLmV2ZW50b308L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgc3JjOiBodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCw3MDBcbiAgICAgICAgfVxuXG4gICAgICAucmVnbGFtZW50by1kYXRhIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubWFpbi1pbmZvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBncmlkLWFyZWE6IG1haW4tb25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWluZm8tMSB7XG4gICAgICAgIGdyaWQtYXJlYTogbWFpbi1vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC8qIHBhZGRpbmc6IDFyZW07ICovXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnJlZ2xhbWVudG8ge1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiA7ICovXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmOTYzMzI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5yZWdsYW1lbnRvLWgyIHtcbiAgICAgICAgY29sb3I6ICNmOTYzMzI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjZyZW0pO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwLjJyZW07XG4gICAgICB9XG5cbiAgICAgIC5yZWdsYW1lbnRvLWgxIHtcbiAgICAgICAgY29sb3I6ICNmOTYzMzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk2MzMyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjNWIyO1xuICAgICAgICB3aWR0aDogMTdyZW07XG4gICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnBhdHJvY2luYWRvcmVzLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBcblxuICAgICAgICB9XG5cbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYtaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMThyZW07XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdi1pbWc6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG5cbiAgICAgIC5wYXRyb2NpbmFkb3Jlcy1wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gICAgICAgIC5wYXRyb2NpbmFkb3Jlcy1kaXYge1xuICAgICAgICAgIHdpZHRoOiAyMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcbiAgICAgICAgLnBhdHJvY2luYWRvcmVzLWRpdiB7XG4gICAgICAgICAgd2lkdGg6IDMwcmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MzVweCkge1xuICAgICAgICAucGF0cm9jaW5hZG9yZXMtZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmV2ZW50LW5lZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGVyaWE7XG4iXX0= */\n/*@ sourceURL=/home/renatoamreis/Desktop/cueva-nextjs/components/Galeria.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Galeria);

/***/ })

})
//# sourceMappingURL=galeria.js.122217564b8652413140.hot-update.js.map