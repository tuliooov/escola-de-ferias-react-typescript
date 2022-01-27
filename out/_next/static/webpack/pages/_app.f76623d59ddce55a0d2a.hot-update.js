webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/app.js":
false,

/***/ "./node_modules/next/dist/pages/_app.js":
false,

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var D_www_escola_de_ferias_escola_de_ferias_react_typescript_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contexts/ContextGlobal */ "./components/contexts/ContextGlobal.tsx");




var _jsxFileName = "D:\\www\\escola-de-ferias\\escola-de-ferias-react-typescript\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_www_escola_de_ferias_escola_de_ferias_react_typescript_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MeuAppSw({
  Component
}) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(function (registration) {
          console.log("Service Worker registration successful with scope: ", registration.scope);
        }, function (err) {
          console.log("Service Worker registration failed: ", err);
        });
      });
    }
  }, []);
  return Component;
}

_s(MeuAppSw, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MeuAppSw;
function App({
  Component,
  pageProps
}) {
  const Layout = Component.layout || (({
    children
  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: children
  }, void 0, false));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_6__["ContextGlobalProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Escola de Ferias"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Layout, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MeuAppSw, {
        Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_c2 = App;

var _c, _c2;

$RefreshReg$(_c, "MeuAppSw");
$RefreshReg$(_c2, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiTWV1QXBwU3ciLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzY29wZSIsImVyciIsIkFwcCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBVUEsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWlDO0FBQUE7O0FBQy9CQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFHLG1CQUFtQkMsU0FBdEIsRUFBaUM7QUFDL0JDLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtBQUMzQ0YsaUJBQVMsQ0FBQ0csYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakMsRUFBMkNDLElBQTNDLENBQ0csVUFBVUMsWUFBVixFQUF3QjtBQUN0QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFEQUFaLEVBQW1FRixZQUFZLENBQUNHLEtBQWhGO0FBQ0QsU0FISixFQUlHLFVBQVVDLEdBQVYsRUFBZTtBQUNiSCxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFBb0RFLEdBQXBEO0FBQ0QsU0FOSjtBQVFBLE9BVEQ7QUFVRDtBQUNGLEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxTQUFPWixTQUFQO0FBQ0Q7O0dBakJRRCxROztLQUFBQSxRO0FBbUJNLFNBQVNjLEdBQVQsQ0FBYTtBQUMxQmIsV0FEMEI7QUFFMUJjO0FBRjBCLENBQWIsRUFHRjtBQUNYLFFBQU1DLE1BQU0sR0FBR2YsU0FBUyxDQUFDZ0IsTUFBVixLQUFxQixDQUFDO0FBQUVDO0FBQUYsR0FBRCxrQkFBa0I7QUFBQSxjQUFHQTtBQUFILG1CQUF2QyxDQUFmOztBQUVBLHNCQUNFLHFFQUFDLHdGQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFdBQUcsRUFBQyxVQUFWO0FBQXFCLFlBQUksRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVNJLHFFQUFDLE1BQUQ7QUFBQSw2QkFDSSxxRUFBQyxRQUFEO0FBQVUsaUJBQVMsZUFBRSxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEO01BckJ1QkQsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY3NjYyM2Q1OWRkY2U1NWEwZDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XHJcbmltcG9ydCB7IENvbnRleHRHbG9iYWxQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRzL0NvbnRleHRHbG9iYWxcIjtcclxuXHJcblxyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIGFzIE5leHRBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5cclxudHlwZSBBcHBQcm9wczxQID0gYW55PiA9IHtcclxuICBwYWdlUHJvcHM6IFA7XHJcbn0gJiBPbWl0PE5leHRBcHBQcm9wczxQPiwgXCJwYWdlUHJvcHNcIj47XHJcblxyXG5cclxuZnVuY3Rpb24gTWV1QXBwU3coeyBDb21wb25lbnQgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3N3LmpzXCIpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gQ29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XHJcbiAgQ29tcG9uZW50LFxyXG4gIHBhZ2VQcm9wcyxcclxufTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBMYXlvdXQgPSBDb21wb25lbnQubGF5b3V0IHx8ICgoeyBjaGlsZHJlbiB9KSA9PiA8PntjaGlsZHJlbn08Lz4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHRpdGxlPkVzY29sYSBkZSBGZXJpYXM8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TWV1QXBwU3cgQ29tcG9uZW50PXs8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fS8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0NvbnRleHRHbG9iYWxQcm92aWRlcj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==