"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nft",{

/***/ "./views/Nft/hooks/useGetRecentlyMintedTokens.tsx":
/*!********************************************************!*\
  !*** ./views/Nft/hooks/useGetRecentlyMintedTokens.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n\nvar useGetRecentlyMintedTokens = function(contract) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), recentlyMintedTokens = ref[0], setRecentlyMintedTokens = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var getTokens = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokens, readableTokens;\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return contract === null || contract === void 0 ? void 0 : contract.getAllMintedTokens();\n                        case 3:\n                            tokens = _ctx.sent;\n                            readableTokens = tokens.map(function(token) {\n                                return token.toNumber();\n                            });\n                            if (readableTokens.length !== 0) {\n                                console.log(\"readable tokens from func 2\", readableTokens);\n                            // const getUris = async (params:type) => {\n                            //   const uriList: string = [];\n                            // }\n                            }\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        8\n                    ]\n                ]);\n            }));\n            return function getTokens() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (contract) {\n            getTokens;\n        }\n    }, [\n        contract\n    ]);\n    return {\n        recentlyMintedTokens: recentlyMintedTokens\n    };\n};\n_s(useGetRecentlyMintedTokens, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetRecentlyMintedTokens);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aWV3cy9OZnQvaG9va3MvdXNlR2V0UmVjZW50bHlNaW50ZWRUb2tlbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBNEM7QUFJNUMsSUFBTUUsMEJBQTBCLEdBQUcsU0FBQ0MsUUFBb0IsRUFBSzs7SUFDM0QsSUFBd0RILEdBRXZELEdBRnVEQSwrQ0FBUSxDQUM5RCxFQUFFLENBQ0gsRUFGTUksb0JBQW9CLEdBQTZCSixHQUV2RCxHQUYwQixFQUFFSyx1QkFBdUIsR0FBSUwsR0FFdkQsR0FGbUQ7SUFJcERDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1LLFNBQVM7dUJBQUcsb1FBQVk7b0JBRXBCQyxNQUFNLEVBR05DLGNBQWM7Ozs7OzttQ0FGWEwsUUFBUSxhQUFSQSxRQUFRLFdBQW9CLEdBQTVCQSxLQUFBQSxDQUE0QixHQUE1QkEsUUFBUSxDQUFFTSxrQkFBa0IsRUFBRTs7NEJBRGpDRixNQUFNLFlBQ2tEOzRCQUV4REMsY0FBYyxHQUFhRCxNQUFNLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO3VDQUNoREEsS0FBSyxDQUFDQyxRQUFRLEVBQUU7NkJBQUEsQ0FDakIsQ0FBQzs0QkFFRixJQUFJSixjQUFjLENBQUNLLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0NBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRVAsY0FBYyxDQUFDLENBQUM7NEJBQzNELDJDQUEyQzs0QkFDM0MsZ0NBQWdDOzRCQUNoQyxJQUFJOzZCQUNMOzs7Ozs7NEJBRURNLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O2FBRXRCOzRCQWxCS1QsU0FBUzs7O1dBa0JkO1FBRUQsSUFBSUgsUUFBUSxFQUFFO1lBQ1pHLFNBQVMsQ0FBQztTQUNYO0tBQ0YsRUFBRTtRQUFDSCxRQUFRO0tBQUMsQ0FBQyxDQUFDO0lBRWYsT0FBTztRQUFFQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtLQUFFLENBQUM7Q0FDakM7R0FoQ0tGLDBCQUEwQjtBQWtDaEMsK0RBQWVBLDBCQUEwQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3ZpZXdzL05mdC9ob29rcy91c2VHZXRSZWNlbnRseU1pbnRlZFRva2Vucy50c3g/NjE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPcmlnYW1pTkZUIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVjaGFpbi10eXBlcy9jb250cmFjdHMvT3JpZ2FtaU5GVFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5jb25zdCB1c2VHZXRSZWNlbnRseU1pbnRlZFRva2VucyA9IChjb250cmFjdDogT3JpZ2FtaU5GVCkgPT4ge1xuICBjb25zdCBbcmVjZW50bHlNaW50ZWRUb2tlbnMsIHNldFJlY2VudGx5TWludGVkVG9rZW5zXSA9IHVzZVN0YXRlPG51bWJlcltdPihcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0VG9rZW5zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5zOiBldGhlcnMuQmlnTnVtYmVyW10gPVxuICAgICAgICAgIChhd2FpdCBjb250cmFjdD8uZ2V0QWxsTWludGVkVG9rZW5zKCkpIGFzIGV0aGVycy5CaWdOdW1iZXJbXTtcblxuICAgICAgICBjb25zdCByZWFkYWJsZVRva2VuczogbnVtYmVyW10gPSB0b2tlbnMubWFwKCh0b2tlbikgPT5cbiAgICAgICAgICB0b2tlbi50b051bWJlcigpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlYWRhYmxlVG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhZGFibGUgdG9rZW5zIGZyb20gZnVuYyAyXCIsIHJlYWRhYmxlVG9rZW5zKTtcbiAgICAgICAgICAvLyBjb25zdCBnZXRVcmlzID0gYXN5bmMgKHBhcmFtczp0eXBlKSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zdCB1cmlMaXN0OiBzdHJpbmcgPSBbXTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbnRyYWN0KSB7XG4gICAgICBnZXRUb2tlbnM7XG4gICAgfVxuICB9LCBbY29udHJhY3RdKTtcblxuICByZXR1cm4geyByZWNlbnRseU1pbnRlZFRva2VucyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlR2V0UmVjZW50bHlNaW50ZWRUb2tlbnM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VHZXRSZWNlbnRseU1pbnRlZFRva2VucyIsImNvbnRyYWN0IiwicmVjZW50bHlNaW50ZWRUb2tlbnMiLCJzZXRSZWNlbnRseU1pbnRlZFRva2VucyIsImdldFRva2VucyIsInRva2VucyIsInJlYWRhYmxlVG9rZW5zIiwiZ2V0QWxsTWludGVkVG9rZW5zIiwibWFwIiwidG9rZW4iLCJ0b051bWJlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./views/Nft/hooks/useGetRecentlyMintedTokens.tsx\n"));

/***/ })

});