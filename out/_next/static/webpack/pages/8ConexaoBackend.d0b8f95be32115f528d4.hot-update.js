webpackHotUpdate_N_E("pages/8ConexaoBackend",{

/***/ "./components/Inicio/Exemplos/ExemploConexaoBackEnd.tsx":
/*!**************************************************************!*\
  !*** ./components/Inicio/Exemplos/ExemploConexaoBackEnd.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExemploConexaoBackEnd; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "./services/api.ts");
/* harmony import */ var _contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ContextGlobal */ "./components/contexts/ContextGlobal.tsx");



var _jsxFileName = "D:\\www\\escola-de-ferias\\escola-de-ferias-react-typescript\\components\\Inicio\\Exemplos\\ExemploConexaoBackEnd.tsx",
    _s = $RefreshSig$();




function ExemploConexaoBackEnd() {
  _s();

  //Certifique-se que o backend está funcionando, usando a extensão ThunderClient
  const {
    exibir,
    fecharExemplo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_3__["ContextGlobal"]);
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (exibir === true) {
      _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/produtos').then(response => {
        console.log("response produtos", response);
      });
    }
  }, [products, exibir]);

  if (exibir !== true) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "divBlackAbsolute",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "OL\xC1 MUNDO !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "do ConexaoBackEnd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: fecharExemplo,
        children: "Fechar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(ExemploConexaoBackEnd, "6HWg5IZeiFeHuMT+SaXwOt8lJ4g=");

_c = ExemploConexaoBackEnd;

var _c;

$RefreshReg$(_c, "ExemploConexaoBackEnd");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vRXhlbXBsb3MvRXhlbXBsb0NvbmV4YW9CYWNrRW5kLnRzeCJdLCJuYW1lcyI6WyJFeGVtcGxvQ29uZXhhb0JhY2tFbmQiLCJleGliaXIiLCJmZWNoYXJFeGVtcGxvIiwidXNlQ29udGV4dCIsIkNvbnRleHRHbG9iYWwiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxxQkFBVCxHQUFpQztBQUFBOztBQUc1QztBQUVBLFFBQU07QUFDRkMsVUFERTtBQUVGQztBQUZFLE1BR0ZDLHdEQUFVLENBQUNDLHFFQUFELENBSGQ7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUdBQyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFHUCxNQUFNLEtBQUssSUFBZCxFQUFtQjtBQUNmUSwyREFBRyxDQUFDQyxHQUFKLENBQVEsV0FBUixFQUNDQyxJQURELENBQ09DLFFBQUQsSUFBYztBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLFFBQWpDO0FBQ0gsT0FIRDtBQUlIO0FBQ0osR0FQUSxFQU9OLENBQUNQLFFBQUQsRUFBV0osTUFBWCxDQVBNLENBQVQ7O0FBVUEsTUFBSUEsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakIsd0JBQU8sdUpBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDJCQUNJO0FBQUssUUFBRSxFQUFFLGtCQUFUO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFRLGVBQU8sRUFBRUMsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWFIOztHQXhDdUJGLHFCOztLQUFBQSxxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy84Q29uZXhhb0JhY2tlbmQuZDBiOGY5NWJlMzIxMTVmNTI4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IENvbnRleHRHbG9iYWwgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ29udGV4dEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlbXBsb0NvbmV4YW9CYWNrRW5kKCkge1xyXG5cclxuXHJcbiAgICAvL0NlcnRpZmlxdWUtc2UgcXVlIG8gYmFja2VuZCBlc3TDoSBmdW5jaW9uYW5kbywgdXNhbmRvIGEgZXh0ZW5zw6NvIFRodW5kZXJDbGllbnRcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZXhpYmlyLFxyXG4gICAgICAgIGZlY2hhckV4ZW1wbG9cclxuICAgIH0gPSB1c2VDb250ZXh0KENvbnRleHRHbG9iYWwpXHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZXhpYmlyID09PSB0cnVlKXtcclxuICAgICAgICAgICAgYXBpLmdldCgnL3Byb2R1dG9zJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIHByb2R1dG9zXCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9kdWN0cywgZXhpYmlyXSlcclxuXHJcblxyXG4gICAgaWYgKGV4aWJpciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBpZD17XCJkaXZCbGFja0Fic29sdXRlXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIE9Mw4EgTVVORE8gIVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIGRvIENvbmV4YW9CYWNrRW5kXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZlY2hhckV4ZW1wbG99PkZlY2hhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=