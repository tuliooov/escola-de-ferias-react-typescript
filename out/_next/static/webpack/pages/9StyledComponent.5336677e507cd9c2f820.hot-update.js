webpackHotUpdate_N_E("pages/9StyledComponent",{

/***/ "./components/Inicio/Exemplos/ExemploStyledComponent.tsx":
/*!***************************************************************!*\
  !*** ./components/Inicio/Exemplos/ExemploStyledComponent.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExemploStyledComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "./services/api.ts");
/* harmony import */ var _contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ContextGlobal */ "./components/contexts/ContextGlobal.tsx");
/* harmony import */ var _exemplos_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exemplos.styles */ "./components/Inicio/Exemplos/exemplos.styles.tsx");



var _jsxFileName = "D:\\www\\escola-de-ferias\\escola-de-ferias-react-typescript\\components\\Inicio\\Exemplos\\ExemploStyledComponent.tsx",
    _s = $RefreshSig$();





function ExemploStyledComponent() {
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_exemplos_styles__WEBPACK_IMPORTED_MODULE_4__["DivBlackAbsolute"], {
      color: "pink",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "OL\xC1 MUNDO !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "do ConexaoBackEnd"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), products === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Buscando dados..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }, this) : products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Nenhum produto encontrado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "id"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "descricao"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "marca"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: products.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.descricao
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: product.marca
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 31
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: fecharExemplo,
        children: "Fechar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(ExemploStyledComponent, "K424PHPFDBwuWygbWcAquP4U1dc=");

_c = ExemploStyledComponent;

var _c;

$RefreshReg$(_c, "ExemploStyledComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vRXhlbXBsb3MvRXhlbXBsb1N0eWxlZENvbXBvbmVudC50c3giXSwibmFtZXMiOlsiRXhlbXBsb1N0eWxlZENvbXBvbmVudCIsImV4aWJpciIsImZlY2hhckV4ZW1wbG8iLCJ1c2VDb250ZXh0IiwiQ29udGV4dEdsb2JhbCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFwaSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHJvZHV0b3MiLCJjYXRjaCIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImRlc2NyaWNhbyIsIm1hcmNhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhZSxTQUFTQSxzQkFBVCxHQUFrQztBQUFBOztBQUc3QztBQUVBLFFBQU07QUFDRkMsVUFERTtBQUVGQztBQUZFLE1BR0ZDLHdEQUFVLENBQUNDLHFFQUFELENBSGQ7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsSUFBRCxDQUF4QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJUCxNQUFNLEtBQUssSUFBWCxJQUFtQkksUUFBUSxLQUFLLElBQXBDLEVBQTBDO0FBQ3RDSSwyREFBRyxDQUFDQyxHQUFKLENBQVEsV0FBUixFQUNLQyxJQURMLENBQ1dDLFFBQUQsSUFBbUQ7QUFDckRDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDRixRQUFqQztBQUNBTixtQkFBVyxDQUFDTSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsUUFBZixDQUFYO0FBQ0gsT0FKTCxFQUtLQyxLQUxMLENBS1csTUFBTTtBQUNUWCxtQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILE9BUEw7QUFRSDtBQUNKLEdBWFEsRUFXTixDQUFDRCxRQUFELEVBQVdKLE1BQVgsQ0FYTSxDQUFUOztBQWNBLE1BQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLHdCQUFPLHVKQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyxpRUFBRDtBQUFrQixXQUFLLEVBQUMsTUFBeEI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVFRSSxRQUFRLEtBQUssSUFBYixnQkFDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROLEdBSU1BLFFBQVEsQ0FBQ2EsTUFBVCxLQUFvQixDQUFwQixnQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGdCQUVJO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBQSxvQkFFUWIsUUFBUSxDQUFDYyxHQUFULENBQWNDLE9BQUQsaUJBQ1Q7QUFBQSxvQ0FDSTtBQUFBLHdCQUNLQSxPQUFPLENBQUNDO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUlJO0FBQUEsd0JBQ0tELE9BQU8sQ0FBQ0U7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBT0k7QUFBQSx3QkFDS0YsT0FBTyxDQUFDRztBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkbEIsZUEwQ0k7QUFBUSxlQUFPLEVBQUVyQixhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlESDs7R0EvRXVCRixzQjs7S0FBQUEsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvOVN0eWxlZENvbXBvbmVudC41MzM2Njc3ZTUwN2NkOWMyZjgyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgQ29udGV4dEdsb2JhbCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Db250ZXh0R2xvYmFsXCI7XHJcbmltcG9ydCB7IERpdkJsYWNrQWJzb2x1dGUgfSBmcm9tIFwiLi9leGVtcGxvcy5zdHlsZXNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNUeXBlIHtcclxuICAgIGlkOiBudW1iZXJcclxuICAgIGRlc2NyaWNhbzogc3RyaW5nXHJcbiAgICBtYXJjYTogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFJlc3BvbnNlUHJvZHV0b3NUeXBlIHtcclxuICAgIHByb2R1dG9zOiBQcm9kdWN0c1R5cGVbXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlbXBsb1N0eWxlZENvbXBvbmVudCgpIHtcclxuXHJcblxyXG4gICAgLy9DZXJ0aWZpcXVlLXNlIHF1ZSBvIGJhY2tlbmQgZXN0w6EgZnVuY2lvbmFuZG8sIHVzYW5kbyBhIGV4dGVuc8OjbyBUaHVuZGVyQ2xpZW50XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGV4aWJpcixcclxuICAgICAgICBmZWNoYXJFeGVtcGxvXHJcbiAgICB9ID0gdXNlQ29udGV4dChDb250ZXh0R2xvYmFsKVxyXG5cclxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUobnVsbCBhcyBQcm9kdWN0c1R5cGVbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChleGliaXIgPT09IHRydWUgJiYgcHJvZHVjdHMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYXBpLmdldCgnL3Byb2R1dG9zJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogQXhpb3NSZXNwb25zZTxSZXNwb25zZVByb2R1dG9zVHlwZT4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIHByb2R1dG9zXCIsIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHV0b3MpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0cyhbXSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb2R1Y3RzLCBleGliaXJdKVxyXG5cclxuXHJcbiAgICBpZiAoZXhpYmlyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIDw+PC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RGl2QmxhY2tBYnNvbHV0ZSBjb2xvcj1cInBpbmtcIiA+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgT0zDgSBNVU5ETyAhXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgZG8gQ29uZXhhb0JhY2tFbmRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhbmRvIGRhZG9zLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdHMubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5lbmh1bSBwcm9kdXRvIGVuY29udHJhZG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5pZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ZGVzY3JpY2FvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5tYXJjYTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdDogUHJvZHVjdHNUeXBlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpY2FvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5tYXJjYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZmVjaGFyRXhlbXBsb30+RmVjaGFyPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L0RpdkJsYWNrQWJzb2x1dGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9