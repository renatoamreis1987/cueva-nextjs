webpackHotUpdate("static\\development\\pages\\patrocinadores.js",{

/***/ "./pages/patrocinadores.js":
/*!*********************************!*\
  !*** ./pages/patrocinadores.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainNav */ "./components/MainNav.js");
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainHeader */ "./components/MainHeader.js");
/* harmony import */ var _components_Patrocinadores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Patrocinadores */ "./components/Patrocinadores.js");
/* harmony import */ var _components_MainFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainFooter */ "./components/MainFooter.js");





var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cueva-nextjs\\pages\\patrocinadores.js";






var patrocinadores =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(patrocinadores, _Component);

  function patrocinadores() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, patrocinadores);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(patrocinadores).call(this));
    _this.state = {
      patrocinadores: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(patrocinadores, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("../data/patrocinadoresLista.json").then(function (response) {
        return response.json();
      }).then(function (patrocinadoresLista) {
        return _this2.setState({
          patrocinadores: patrocinadoresLista
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var patrocinadores = this.state.patrocinadores;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Patrocinadores__WEBPACK_IMPORTED_MODULE_8__["default"], {
        patrocinadores: patrocinadores,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_MainFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }
  }]);

  return patrocinadores;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (patrocinadores);

/***/ })

})
//# sourceMappingURL=patrocinadores.js.c14fc8586bade34ece1f.hot-update.js.map