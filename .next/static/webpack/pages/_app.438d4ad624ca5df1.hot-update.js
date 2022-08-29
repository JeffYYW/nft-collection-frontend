"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/connectWalletSlice.ts":
/*!*************************************!*\
  !*** ./store/connectWalletSlice.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectWalletSlice\": function() { return /* binding */ connectWalletSlice; },\n/* harmony export */   \"selectConnectWalletState\": function() { return /* binding */ selectConnectWalletState; },\n/* harmony export */   \"setConnectWalletState\": function() { return /* binding */ setConnectWalletState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\n\n\n// Initial state\nvar initialState = {\n    connectWalletState: false\n};\n// Slice\nvar connectWalletSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"connectWallet\",\n    initialState: initialState,\n    reducers: {\n        // Action to set connected wallet\n        setConnectWalletState: function setConnectWalletState(state, action) {\n            state.connectWalletState = action.payload;\n        }\n    },\n    // Special reducer for hydrating the state. Special case for next-redux-wrapper\n    extraReducers: (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE, function(state, action) {\n        return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, state, action.payload.connectWallet);\n    })\n});\nvar setConnectWalletState = connectWalletSlice.actions.setConnectWalletState;\nvar selectConnectWalletState = function(state) {\n    return state.connectWallet.connectWalletState;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectWalletSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb25uZWN0V2FsbGV0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUErQztBQUVGO0FBUTdDLGdCQUFnQjtBQUNoQixJQUFNRSxZQUFZLEdBQXVCO0lBQ3ZDQyxrQkFBa0IsRUFBRSxLQUFLO0NBQzFCO0FBRUQsUUFBUTtBQUNELElBQU1DLGtCQUFrQixHQUFHSiw2REFBVyxDQUFDO0lBQzVDSyxJQUFJLEVBQUUsZUFBZTtJQUNyQkgsWUFBWSxFQUFaQSxZQUFZO0lBQ1pJLFFBQVEsRUFBRTtRQUNSLGlDQUFpQztRQUNqQ0MscUJBQXFCLEVBQXJCQSxTQUFBQSxxQkFBcUIsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7WUFDbkNELEtBQUssQ0FBQ0wsa0JBQWtCLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQzNDO0tBQ0Y7SUFFRCwrRUFBK0U7SUFDL0VDLGFBQWEsRUFDWCxxRkFBQ1YsdURBQU8sRUFBRyxTQUFDTyxLQUFLLEVBQUVDLE1BQU0sRUFBSztRQUM1QixPQUFPLG1GQUNGRCxLQUFLLEVBQ0xDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRSxhQUFhLENBQ2hDLENBQUM7S0FDSDtDQUVKLENBQUMsQ0FBQztBQUVJLElBQU0scUJBQXVCLEdBQUtSLGtCQUFrQixDQUFDUyxPQUFPLENBQXBETixxQkFBcUIsQ0FBZ0M7QUFFN0QsSUFBTU8sd0JBQXdCLEdBQUcsU0FBQ04sS0FBZTtXQUN0REEsS0FBSyxDQUFDSSxhQUFhLENBQUNULGtCQUFrQjtDQUFBLENBQUM7QUFFekMsK0RBQWVDLGtCQUFrQixDQUFDVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29ubmVjdFdhbGxldFNsaWNlLnRzPzNiOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuLy8gU2xpY2U6IGEgY29sbGVjdGlvbiBvZiBSZWR1eCByZWR1Y2VyIGxvZ2ljIGFuZCBhY3Rpb25zIGZvciBhIHNpbmdsZSBmZWF0dXJlIGluIG91ciBhcHAuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdFdhbGxldFN0YXRlIHtcbiAgY29ubmVjdFdhbGxldFN0YXRlOiBib29sZWFuO1xufVxuXG4vLyBJbml0aWFsIHN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGU6IENvbm5lY3RXYWxsZXRTdGF0ZSA9IHtcbiAgY29ubmVjdFdhbGxldFN0YXRlOiBmYWxzZSxcbn07XG5cbi8vIFNsaWNlXG5leHBvcnQgY29uc3QgY29ubmVjdFdhbGxldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImNvbm5lY3RXYWxsZXRcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vIEFjdGlvbiB0byBzZXQgY29ubmVjdGVkIHdhbGxldFxuICAgIHNldENvbm5lY3RXYWxsZXRTdGF0ZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5jb25uZWN0V2FsbGV0U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxuXG4gIC8vIFNwZWNpYWwgcmVkdWNlciBmb3IgaHlkcmF0aW5nIHRoZSBzdGF0ZS4gU3BlY2lhbCBjYXNlIGZvciBuZXh0LXJlZHV4LXdyYXBwZXJcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtIWURSQVRFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jb25uZWN0V2FsbGV0LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldENvbm5lY3RXYWxsZXRTdGF0ZSB9ID0gY29ubmVjdFdhbGxldFNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb25uZWN0V2FsbGV0U3RhdGUgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxuICBzdGF0ZS5jb25uZWN0V2FsbGV0LmNvbm5lY3RXYWxsZXRTdGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFdhbGxldFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJIWURSQVRFIiwiaW5pdGlhbFN0YXRlIiwiY29ubmVjdFdhbGxldFN0YXRlIiwiY29ubmVjdFdhbGxldFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0Q29ubmVjdFdhbGxldFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImNvbm5lY3RXYWxsZXQiLCJhY3Rpb25zIiwic2VsZWN0Q29ubmVjdFdhbGxldFN0YXRlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/connectWalletSlice.ts\n"));

/***/ })

});