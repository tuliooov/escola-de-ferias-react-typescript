webpackHotUpdate_N_E("pages/9StyledComponent",{

/***/ "./components/Inicio/Exemplos/exemplos.styles.tsx":
/*!********************************************************!*\
  !*** ./components/Inicio/Exemplos/exemplos.styles.tsx ***!
  \********************************************************/
/*! exports provided: DivBlackAbsolute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivBlackAbsolute", function() { return DivBlackAbsolute; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const DivBlackAbsolute = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    ${({
  color
}) => {
  css`
            position: fixed;
            height: 100vh;
            width: 100%;
            top: 0px;
            background: ${color};
            opacity: 0.9;
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: white;
            font-weight: 900;

            & h1{
                margin-bottom: 0.5em;
                font-size: 64px;
            }

            & p{
                margin-bottom: 0.5em;
                font-size: 40px;
            }

            &  button{
                padding: 10px 40px;
                border-radius: 10px;
                background-color: red;
            }
        `;
}}
`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vRXhlbXBsb3MvZXhlbXBsb3Muc3R5bGVzLnRzeCJdLCJuYW1lcyI6WyJEaXZCbGFja0Fic29sdXRlIiwic3R5bGVkIiwiZGl2IiwiY29sb3IiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxHQUF1QjtBQUM5RCxNQUFNLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDYkMsS0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCRCxLQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBOUJRO0FBK0JILENBQUM7QUFDTixDQWxDTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy85U3R5bGVkQ29tcG9uZW50LjRlZWYyZTFjNTQ3YTVkYWI5MWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdkJsYWNrQWJzb2x1dGUgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcclxuICAgICR7KHsgY29sb3IgfSkgPT4ge1xyXG4gICAgICAgIGNzc2BcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuICAgICAgICAgICAgJiBoMXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJiAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIH19XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9