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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (exibir === true && products === null) {
      _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/produtos').then(response => {
        console.log("response produtos", response);
        setProducts(response.data);
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
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "do ConexaoBackEnd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Month"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Savings"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: fecharExemplo,
        children: "Fechar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(ExemploConexaoBackEnd, "K424PHPFDBwuWygbWcAquP4U1dc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vRXhlbXBsb3MvRXhlbXBsb0NvbmV4YW9CYWNrRW5kLnRzeCJdLCJuYW1lcyI6WyJFeGVtcGxvQ29uZXhhb0JhY2tFbmQiLCJleGliaXIiLCJmZWNoYXJFeGVtcGxvIiwidXNlQ29udGV4dCIsIkNvbnRleHRHbG9iYWwiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBU2UsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFHNUM7QUFFQSxRQUFNO0FBQ0ZDLFVBREU7QUFFRkM7QUFGRSxNQUdGQyx3REFBVSxDQUFDQyxxRUFBRCxDQUhkO0FBS0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBR1AsTUFBTSxLQUFLLElBQVgsSUFBbUJJLFFBQVEsS0FBSyxJQUFuQyxFQUF3QztBQUNwQ0ksMkRBQUcsQ0FBQ0MsR0FBSixDQUFRLFdBQVIsRUFDQ0MsSUFERCxDQUNPQyxRQUFELElBQTZDO0FBQy9DQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsUUFBakM7QUFDQU4sbUJBQVcsQ0FBQ00sUUFBUSxDQUFDRyxJQUFWLENBQVg7QUFDSCxPQUpEO0FBS0g7QUFDSixHQVJRLEVBUU4sQ0FBQ1YsUUFBRCxFQUFXSixNQUFYLENBUk0sQ0FBVDs7QUFXQSxNQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix3QkFBTyx1SkFBUDtBQUNIOztBQUVELHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxRQUFFLEVBQUUsa0JBQVQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JO0FBQUEsK0JBQ0k7QUFBQSxpQ0FDQTtBQUFBLG9DQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURjLGVBRWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQWVJO0FBQVEsZUFBTyxFQUFFQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBcUJIOztHQWhEdUJGLHFCOztLQUFBQSxxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy84Q29uZXhhb0JhY2tlbmQuNTMwMTRhZTU1ZTVmMmRiOTYyNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IENvbnRleHRHbG9iYWwgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ29udGV4dEdsb2JhbFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c1R5cGUge1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgZGVzY3JpY2FvOiBzdHJpbmdcclxuICAgIG1hcmNhOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlbXBsb0NvbmV4YW9CYWNrRW5kKCkge1xyXG5cclxuXHJcbiAgICAvL0NlcnRpZmlxdWUtc2UgcXVlIG8gYmFja2VuZCBlc3TDoSBmdW5jaW9uYW5kbywgdXNhbmRvIGEgZXh0ZW5zw6NvIFRodW5kZXJDbGllbnRcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZXhpYmlyLFxyXG4gICAgICAgIGZlY2hhckV4ZW1wbG9cclxuICAgIH0gPSB1c2VDb250ZXh0KENvbnRleHRHbG9iYWwpXHJcblxyXG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShudWxsIGFzIFByb2R1Y3RzVHlwZVtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZXhpYmlyID09PSB0cnVlICYmIHByb2R1Y3RzID09PSBudWxsKXtcclxuICAgICAgICAgICAgYXBpLmdldCgnL3Byb2R1dG9zJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFByb2R1Y3RzVHlwZVtdPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBwcm9kdXRvc1wiLCByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb2R1Y3RzLCBleGliaXJdKVxyXG5cclxuXHJcbiAgICBpZiAoZXhpYmlyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDw+PC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtcImRpdkJsYWNrQWJzb2x1dGVcIn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgT0zDgSBNVU5ETyAhXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgZG8gQ29uZXhhb0JhY2tFbmRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICA8dGg+TW9udGg8L3RoPlxyXG4gICAgICA8dGg+U2F2aW5nczwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZWNoYXJFeGVtcGxvfT5GZWNoYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9