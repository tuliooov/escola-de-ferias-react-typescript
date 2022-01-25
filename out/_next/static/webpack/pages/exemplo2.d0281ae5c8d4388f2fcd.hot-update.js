webpackHotUpdate_N_E("pages/exemplo2",{

/***/ "./pages/exemplo2.js":
/*!***************************!*\
  !*** ./pages/exemplo2.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Navbars/IndexNavbar.js */ "./components/Navbars/IndexNavbar.js");
/* harmony import */ var components_Inicio_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Inicio/Banner */ "./components/Inicio/Banner.js");
/* harmony import */ var components_Inicio_Outros__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Inicio/Outros */ "./components/Inicio/Outros.js");
/* harmony import */ var components_Inicio_Number2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Inicio/Number2 */ "./components/Inicio/Number2.js");
/* harmony import */ var components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footers/Footer.js */ "./components/Footers/Footer.js");



var _jsxFileName = "D:\\www\\escola-de-ferias\\nextjs-escola-de-ferias-v2\\pages\\exemplo2.js",
    _s = $RefreshSig$();

/* eslint-disable react/jsx-no-target-blank */






function Index() {
  _s();

  console.log('RODEI EXEMPLO 2');
  const {
    0: valor,
    1: setValor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: carregando,
    1: setCarregando
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //aguardar 2 segundos
    setTimeout(function () {
      setCarregando(!carregando);
    }, 2000);
  }, [valor]);

  if (carregando === true) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        textAlign: "center",
        fontSize: '48px'
      },
      children: " Caregando... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Number2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      valor: valor,
      setValor: setValor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Outros__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Index, "T6k1NbLwnBwiDBTHBrP9KYb2Euc=");

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlbXBsbzIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJzZXRWYWxvciIsInVzZVN0YXRlIiwiY2FycmVnYW5kbyIsInNldENhcnJlZ2FuZG8iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwidGV4dEFsaWduIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFFQSxRQUFNO0FBQUEsT0FBRUMsS0FBRjtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFFQyxVQUFGO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBR0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0FDLGNBQVUsQ0FBQyxZQUFVO0FBQ25CRixtQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNELEtBRlMsRUFFUixJQUZRLENBQVY7QUFHRCxHQUxRLEVBS04sQ0FBQ0gsS0FBRCxDQUxNLENBQVQ7O0FBT0EsTUFBR0csVUFBVSxLQUFLLElBQWxCLEVBQXVCO0FBQ3JCLHdCQUFRO0FBQUksV0FBSyxFQUFFO0FBQUNJLGlCQUFTLEVBQUMsUUFBWDtBQUFxQkMsZ0JBQVEsRUFBRTtBQUEvQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNJLHFFQUFDLHlFQUFEO0FBQWEsV0FBSztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxpRUFBRDtBQUFTLFdBQUssRUFBRVIsS0FBaEI7QUFBdUIsY0FBUSxFQUFFQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQSxrQkFERjtBQVNEOztHQTNCdUJKLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhlbXBsbzIuZDAyODFhZTVjOGQ0Mzg4ZjJmY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnY29tcG9uZW50cy9JbmljaW8vQmFubmVyJ1xyXG5pbXBvcnQgT3V0cm9zIGZyb20gJ2NvbXBvbmVudHMvSW5pY2lvL091dHJvcydcclxuaW1wb3J0IE51bWJlcjIgZnJvbSAnY29tcG9uZW50cy9JbmljaW8vTnVtYmVyMidcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc29sZS5sb2coJ1JPREVJIEVYRU1QTE8gMicpXHJcblxyXG4gIGNvbnN0IFsgdmFsb3IsIHNldFZhbG9yIF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFsgY2FycmVnYW5kbywgc2V0Q2FycmVnYW5kbyBdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2FndWFyZGFyIDIgc2VndW5kb3NcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgc2V0Q2FycmVnYW5kbyghY2FycmVnYW5kbylcclxuICAgIH0sMjAwMClcclxuICB9LCBbdmFsb3JdKVxyXG5cclxuICBpZihjYXJyZWdhbmRvID09PSB0cnVlKXtcclxuICAgIHJldHVybiAoPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIGZvbnRTaXplOiAnNDhweCd9fT4gQ2FyZWdhbmRvLi4uIDwvaDE+KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPEluZGV4TmF2YmFyIGZpeGVkIC8+XHJcbiAgICAgICAgPEJhbm5lci8+XHJcbiAgICAgICAgPE51bWJlcjIgdmFsb3I9e3ZhbG9yfSBzZXRWYWxvcj17c2V0VmFsb3J9Lz5cclxuICAgICAgICA8T3V0cm9zLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=