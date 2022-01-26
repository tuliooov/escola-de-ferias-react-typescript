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
        setProducts(response.data.produtos);
      }).catch(() => {
        setProducts([]);
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
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "do ConexaoBackEnd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), products === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Buscando dados..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 27
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "descricao"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "marca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Nenhum produto encontradoF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 41
          }, this) : products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.descricao
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.marca
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 45
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 27
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: fecharExemplo,
        children: "Fechar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vRXhlbXBsb3MvRXhlbXBsb0NvbmV4YW9CYWNrRW5kLnRzeCJdLCJuYW1lcyI6WyJFeGVtcGxvQ29uZXhhb0JhY2tFbmQiLCJleGliaXIiLCJmZWNoYXJFeGVtcGxvIiwidXNlQ29udGV4dCIsIkNvbnRleHRHbG9iYWwiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInByb2R1dG9zIiwiY2F0Y2giLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJkZXNjcmljYW8iLCJtYXJjYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBWWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFHNUM7QUFFQSxRQUFNO0FBQ0ZDLFVBREU7QUFFRkM7QUFGRSxNQUdGQyx3REFBVSxDQUFDQyxxRUFBRCxDQUhkO0FBS0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSVAsTUFBTSxLQUFLLElBQVgsSUFBbUJJLFFBQVEsS0FBSyxJQUFwQyxFQUEwQztBQUN0Q0ksMkRBQUcsQ0FBQ0MsR0FBSixDQUFRLFdBQVIsRUFDS0MsSUFETCxDQUNXQyxRQUFELElBQW1EO0FBQ3JEQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsUUFBakM7QUFDQU4sbUJBQVcsQ0FBQ00sUUFBUSxDQUFDRyxJQUFULENBQWNDLFFBQWYsQ0FBWDtBQUNILE9BSkwsRUFLS0MsS0FMTCxDQUtXLE1BQU07QUFDVFgsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDSCxPQVBMO0FBUUg7QUFDSixHQVhRLEVBV04sQ0FBQ0QsUUFBRCxFQUFXSixNQUFYLENBWE0sQ0FBVDs7QUFjQSxNQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix3QkFBTyx1SkFBUDtBQUNIOztBQUVELHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxRQUFFLEVBQUUsa0JBQVQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNRSSxRQUFRLEtBQUssSUFBYixnQkFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROLGdCQUlNO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBQSxvQkFFUUEsUUFBUSxDQUFDYSxNQUFULEtBQW9CLENBQXBCLGdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEdBRU1iLFFBQVEsQ0FBQ2MsR0FBVCxDQUFjQyxPQUFELGlCQUNYO0FBQUEsb0NBQ0k7QUFBQSx3QkFDS0EsT0FBTyxDQUFDQztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFBLHdCQUNLRCxPQUFPLENBQUNFO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQU9JO0FBQUEsd0JBQ0tGLE9BQU8sQ0FBQ0c7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYmQsZUEyQ0k7QUFBUSxlQUFPLEVBQUVyQixhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlESDs7R0EvRXVCRixxQjs7S0FBQUEscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvOENvbmV4YW9CYWNrZW5kLjFmZTlkMTk5YzA5NjMxNGYxZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBDb250ZXh0R2xvYmFsIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NvbnRleHRHbG9iYWxcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNUeXBlIHtcclxuICAgIGlkOiBudW1iZXJcclxuICAgIGRlc2NyaWNhbzogc3RyaW5nXHJcbiAgICBtYXJjYTogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFJlc3BvbnNlUHJvZHV0b3NUeXBlIHtcclxuICAgIHByb2R1dG9zOiBQcm9kdWN0c1R5cGVbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVtcGxvQ29uZXhhb0JhY2tFbmQoKSB7XHJcblxyXG5cclxuICAgIC8vQ2VydGlmaXF1ZS1zZSBxdWUgbyBiYWNrZW5kIGVzdMOhIGZ1bmNpb25hbmRvLCB1c2FuZG8gYSBleHRlbnPDo28gVGh1bmRlckNsaWVudFxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBleGliaXIsXHJcbiAgICAgICAgZmVjaGFyRXhlbXBsb1xyXG4gICAgfSA9IHVzZUNvbnRleHQoQ29udGV4dEdsb2JhbClcclxuXHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKG51bGwgYXMgUHJvZHVjdHNUeXBlW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZXhpYmlyID09PSB0cnVlICYmIHByb2R1Y3RzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFwaS5nZXQoJy9wcm9kdXRvcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8UmVzcG9uc2VQcm9kdXRvc1R5cGU+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBwcm9kdXRvc1wiLCByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1dG9zKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMoW10pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9kdWN0cywgZXhpYmlyXSlcclxuXHJcblxyXG4gICAgaWYgKGV4aWJpciAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiA8PjwvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBpZD17XCJkaXZCbGFja0Fic29sdXRlXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIE9Mw4EgTVVORE8gIVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIGRvIENvbmV4YW9CYWNrRW5kXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVzY2FuZG8gZGFkb3MuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+aWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ZGVzY3JpY2FvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPm1hcmNhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZW5odW0gcHJvZHV0byBlbmNvbnRyYWRvRjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHMubWFwKChwcm9kdWN0OiBQcm9kdWN0c1R5cGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmljYW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm1hcmNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZWNoYXJFeGVtcGxvfT5GZWNoYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9