webpackHotUpdate_N_E("pages/_app",{

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
  const Layout = Component.getLayout || (page => page);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_6__["ContextGlobalProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Escola de Ferias"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Layout, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MeuAppSw, {
        Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiTWV1QXBwU3ciLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzY29wZSIsImVyciIsIkFwcCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImdldExheW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQVdBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUFpQztBQUFBOztBQUMvQkMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBRyxtQkFBbUJDLFNBQXRCLEVBQWlDO0FBQy9CQyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDM0NGLGlCQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDLEVBQTJDQyxJQUEzQyxDQUNHLFVBQVVDLFlBQVYsRUFBd0I7QUFDdEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxREFBWixFQUFtRUYsWUFBWSxDQUFDRyxLQUFoRjtBQUNELFNBSEosRUFJRyxVQUFVQyxHQUFWLEVBQWU7QUFDYkgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaLEVBQW9ERSxHQUFwRDtBQUNELFNBTko7QUFRQSxPQVREO0FBVUQ7QUFDRixHQWJRLEVBYU4sRUFiTSxDQUFUO0FBZUEsU0FBT1osU0FBUDtBQUNEOztHQWpCUUQsUTs7S0FBQUEsUTtBQTJCTSxTQUFTYyxHQUFULENBQWE7QUFDMUJiLFdBRDBCO0FBRTFCYztBQUYwQixDQUFiLEVBR0w7QUFDUixRQUFNQyxNQUFNLEdBQUdmLFNBQVMsQ0FBQ2dCLFNBQVYsS0FBeUJDLElBQUQsSUFBVUEsSUFBbEMsQ0FBZjs7QUFFQSxzQkFDRSxxRUFBQyx3RkFBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsVUFBVjtBQUFxQixZQUFJLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFTSSxxRUFBQyxNQUFEO0FBQUEsNkJBQ0kscUVBQUMsUUFBRDtBQUFVLGlCQUFTLGVBQUUscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDtNQXJCdUJELEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYTMwMTRiMjY2YTZkMjI0ZjhkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XHJcbmltcG9ydCB7IENvbnRleHRHbG9iYWxQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRzL0NvbnRleHRHbG9iYWxcIjtcclxuXHJcblxyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIGFzIE5leHRBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG50eXBlIEFwcFByb3BzPFAgPSBhbnk+ID0ge1xyXG4gIHBhZ2VQcm9wczogUDtcclxufSAmIE9taXQ8TmV4dEFwcFByb3BzPFA+LCBcInBhZ2VQcm9wc1wiPjtcclxuXHJcblxyXG5mdW5jdGlvbiBNZXVBcHBTdyh7IENvbXBvbmVudCB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc3cuanNcIikudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiBcIiwgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiBDb21wb25lbnRcclxufVxyXG5cclxudHlwZSBQYWdlPFAgPSB7fT4gPSBOZXh0UGFnZTxQPiAmIHtcclxuICBnZXRMYXlvdXQ/OiAocGFnZTogUmVhY3ROb2RlKSA9PiBSZWFjdE5vZGU7XHJcbn07XHJcblxyXG50eXBlIFByb3BzID0gQXBwUHJvcHMgJiB7XHJcbiAgQ29tcG9uZW50OiBQYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcclxuICBDb21wb25lbnQsXHJcbiAgcGFnZVByb3BzLFxyXG59OiBQcm9wcykge1xyXG4gIGNvbnN0IExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgfHwgKChwYWdlKSA9PiBwYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0R2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDx0aXRsZT5Fc2NvbGEgZGUgRmVyaWFzPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPE1ldUFwcFN3IENvbXBvbmVudD17PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn0vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9Db250ZXh0R2xvYmFsUHJvdmlkZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=