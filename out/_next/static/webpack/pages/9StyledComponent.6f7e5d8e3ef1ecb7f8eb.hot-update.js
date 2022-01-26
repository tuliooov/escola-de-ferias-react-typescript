webpackHotUpdate_N_E("pages/9StyledComponent",{

/***/ "./pages/9StyledComponent.tsx":
/*!************************************!*\
  !*** ./pages/9StyledComponent.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginaExemploStyledComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contexts/ContextGlobal */ "./components/contexts/ContextGlobal.tsx");
/* harmony import */ var _components_Footers_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footers/Footer */ "./components/Footers/Footer.tsx");
/* harmony import */ var _components_Inicio_BannerProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Inicio/BannerProps */ "./components/Inicio/BannerProps.tsx");
/* harmony import */ var _components_Inicio_Exemplos_ExemploStyledComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Inicio/Exemplos/ExemploStyledComponent */ "./components/Inicio/Exemplos/ExemploStyledComponent.tsx");
/* harmony import */ var _components_Navbars_IndexNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbars/IndexNavbar */ "./components/Navbars/IndexNavbar.tsx");



var _jsxFileName = "D:\\www\\escola-de-ferias\\escola-de-ferias-react-typescript\\pages\\9StyledComponent.tsx",
    _s = $RefreshSig$();







function PaginaExemploStyledComponent() {
  _s();

  console.log("Renderizei Componente PaginaExemploStyledComponent");
  const {
    exibir,
    abrirExemplo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_2__["ContextGlobal"]);
  console.log("exibirExemploProps é ", exibir);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbars_IndexNavbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Inicio_BannerProps__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Qual \xE9 o uso de styled-components?",
      description: "Componentes estilizados ajudam a manter as preocupa\xE7\xF5es de estilo e arquitetura de elementos separadas e tornam os componentes mais leg\xEDveis. Al\xE9m disso, quando voc\xEA tem componentes que dependem do JavaScript para seu estilo, os Componentes com estilo devolvem o controle desses estados ao CSS em vez de usar uma infinidade de nomes de classes condicionais.",
      buttonAction: {
        text: "Abrir Exemplo",
        action: abrirExemplo
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Inicio_Exemplos_ExemploStyledComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footers_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(PaginaExemploStyledComponent, "dYOjCUhWF+szS4viogIxQosEN7U=");

_c = PaginaExemploStyledComponent;

var _c;

$RefreshReg$(_c, "PaginaExemploStyledComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvOVN0eWxlZENvbXBvbmVudC50c3giXSwibmFtZXMiOlsiUGFnaW5hRXhlbXBsb1N0eWxlZENvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJleGliaXIiLCJhYnJpckV4ZW1wbG8iLCJ1c2VDb250ZXh0IiwiQ29udGV4dEdsb2JhbCIsInRleHQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLDRCQUFULEdBQXdDO0FBQUE7O0FBRXJEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtBQUVBLFFBQU07QUFDSkMsVUFESTtBQUVKQztBQUZJLE1BR0ZDLHdEQUFVLENBQUNDLGdGQUFELENBSGQ7QUFLQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNDLE1BQXJDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDSSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxzRUFBRDtBQUNFLFdBQUssRUFBQyx1Q0FEUjtBQUVFLGlCQUFXLEVBQUMsc1hBRmQ7QUFHRSxrQkFBWSxFQUFFO0FBQ1pJLFlBQUksRUFBRSxlQURNO0FBRVpDLGNBQU0sRUFBRUo7QUFGSTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFVSSxxRUFBQywwRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosZUFXSSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQSxrQkFERjtBQWVEOztHQTFCdUJKLDRCOztLQUFBQSw0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy85U3R5bGVkQ29tcG9uZW50LjZmN2U1ZDhlM2VmMWVjYjdmOGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250ZXh0R2xvYmFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dHMvQ29udGV4dEdsb2JhbFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyXCI7XHJcbmltcG9ydCBCYW5uZXJQcm9wcyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmljaW8vQmFubmVyUHJvcHNcIjtcclxuaW1wb3J0IEV4ZW1wbG9TdHlsZWRDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5pY2lvL0V4ZW1wbG9zL0V4ZW1wbG9TdHlsZWRDb21wb25lbnRcIjtcclxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUV4ZW1wbG9TdHlsZWRDb21wb25lbnQoKSB7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiUmVuZGVyaXplaSBDb21wb25lbnRlIFBhZ2luYUV4ZW1wbG9TdHlsZWRDb21wb25lbnRcIilcclxuIFxyXG4gIGNvbnN0IHtcclxuICAgIGV4aWJpcixcclxuICAgIGFicmlyRXhlbXBsbyxcclxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0R2xvYmFsKVxyXG5cclxuICBjb25zb2xlLmxvZyhcImV4aWJpckV4ZW1wbG9Qcm9wcyDDqSBcIiwgZXhpYmlyKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8SW5kZXhOYXZiYXIgLz5cclxuICAgICAgICA8QmFubmVyUHJvcHMgXHJcbiAgICAgICAgICB0aXRsZT1cIlF1YWwgw6kgbyB1c28gZGUgc3R5bGVkLWNvbXBvbmVudHM/XCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29tcG9uZW50ZXMgZXN0aWxpemFkb3MgYWp1ZGFtIGEgbWFudGVyIGFzIHByZW9jdXBhw6fDtWVzIGRlIGVzdGlsbyBlIGFycXVpdGV0dXJhIGRlIGVsZW1lbnRvcyBzZXBhcmFkYXMgZSB0b3JuYW0gb3MgY29tcG9uZW50ZXMgbWFpcyBsZWfDrXZlaXMuIEFsw6ltIGRpc3NvLCBxdWFuZG8gdm9jw6ogdGVtIGNvbXBvbmVudGVzIHF1ZSBkZXBlbmRlbSBkbyBKYXZhU2NyaXB0IHBhcmEgc2V1IGVzdGlsbywgb3MgQ29tcG9uZW50ZXMgY29tIGVzdGlsbyBkZXZvbHZlbSBvIGNvbnRyb2xlIGRlc3NlcyBlc3RhZG9zIGFvIENTUyBlbSB2ZXogZGUgdXNhciB1bWEgaW5maW5pZGFkZSBkZSBub21lcyBkZSBjbGFzc2VzIGNvbmRpY2lvbmFpcy5cIlxyXG4gICAgICAgICAgYnV0dG9uQWN0aW9uPXt7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiQWJyaXIgRXhlbXBsb1wiLFxyXG4gICAgICAgICAgICBhY3Rpb246IGFicmlyRXhlbXBsb1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxFeGVtcGxvU3R5bGVkQ29tcG9uZW50IC8+ICBcclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=