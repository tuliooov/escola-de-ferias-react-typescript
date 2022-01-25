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
    console.log('USE EFFECT');
    setTimeout(function () {
      setCarregando(!carregando);
    }, 2000);
  }, [valor]); // if(carregando === true){
  //   return (<h1 style={{textAlign:"center", fontSize: '48px'}}> Caregando... </h1>)
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Number2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      valor: valor,
      setValor: setValor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Outros__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlbXBsbzIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25zb2xlIiwibG9nIiwidmFsb3IiLCJzZXRWYWxvciIsInVzZVN0YXRlIiwiY2FycmVnYW5kbyIsInNldENhcnJlZ2FuZG8iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUEsUUFBTTtBQUFBLE9BQUVDLEtBQUY7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBRUMsVUFBRjtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NGLHNEQUFRLENBQUMsSUFBRCxDQUE5QztBQUdBRyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FPLGNBQVUsQ0FBQyxZQUFVO0FBQ25CRixtQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNELEtBRlMsRUFFUixJQUZRLENBQVY7QUFHRCxHQU5RLEVBTU4sQ0FBQ0gsS0FBRCxDQU5NLENBQVQsQ0FQOEIsQ0FlOUI7QUFDQTtBQUNBOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0kscUVBQUMseUVBQUQ7QUFBYSxXQUFLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLGlFQUFEO0FBQVMsV0FBSyxFQUFFQSxLQUFoQjtBQUF1QixjQUFRLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBLGtCQURGO0FBU0Q7O0dBNUJ1QkosSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGVtcGxvMi45MGM0ZWEzOGEzZDk5YzljNGM4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tICdjb21wb25lbnRzL0luaWNpby9CYW5uZXInXHJcbmltcG9ydCBPdXRyb3MgZnJvbSAnY29tcG9uZW50cy9JbmljaW8vT3V0cm9zJ1xyXG5pbXBvcnQgTnVtYmVyMiBmcm9tICdjb21wb25lbnRzL0luaWNpby9OdW1iZXIyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zb2xlLmxvZygnUk9ERUkgRVhFTVBMTyAyJylcclxuXHJcbiAgY29uc3QgWyB2YWxvciwgc2V0VmFsb3IgXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgWyBjYXJyZWdhbmRvLCBzZXRDYXJyZWdhbmRvIF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vYWd1YXJkYXIgMiBzZWd1bmRvc1xyXG4gICAgY29uc29sZS5sb2coJ1VTRSBFRkZFQ1QnKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBzZXRDYXJyZWdhbmRvKCFjYXJyZWdhbmRvKVxyXG4gICAgfSwyMDAwKVxyXG4gIH0sIFt2YWxvcl0pXHJcblxyXG4gIC8vIGlmKGNhcnJlZ2FuZG8gPT09IHRydWUpe1xyXG4gIC8vICAgcmV0dXJuICg8aDEgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgZm9udFNpemU6ICc0OHB4J319PiBDYXJlZ2FuZG8uLi4gPC9oMT4pXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cclxuICAgICAgICA8QmFubmVyLz5cclxuICAgICAgICA8TnVtYmVyMiB2YWxvcj17dmFsb3J9IHNldFZhbG9yPXtzZXRWYWxvcn0vPlxyXG4gICAgICAgIDxPdXRyb3MvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==