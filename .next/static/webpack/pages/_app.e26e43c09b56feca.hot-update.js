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

/***/ "./contexts/ConnectWalletContext.tsx":
/*!*******************************************!*\
  !*** ./contexts/ConnectWalletContext.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWalletProvider\": function() { return /* binding */ ConnectWalletProvider; },\n/* harmony export */   \"useConnectWallet\": function() { return /* binding */ useConnectWallet; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar ConnectWalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction useConnectWallet() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ConnectWalletContext);\n}\n_s(useConnectWallet, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar ConnectWalletProvider = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isWalletLoading = ref1[0], setWalletIsLoading = ref1[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setWalletIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setWalletIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setWalletIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setWalletIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    var value = {\n        currentAccount: currentAccount,\n        walletConnecting: isWalletLoading,\n        setCurrentAccount: setCurrentAccount,\n        setWalletIsLoading: setWalletIsLoading\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ConnectWalletContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/contexts/ConnectWalletContext.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ConnectWalletProvider, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = ConnectWalletProvider;\nvar _c;\n$RefreshReg$(_c, \"ConnectWalletProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Db25uZWN0V2FsbGV0Q29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQThFO0FBYTlFLElBQU1LLG9CQUFvQixpQkFBR0osb0RBQWEsQ0FBa0IsSUFBSSxDQUFDO0FBRTFELFNBQVNLLGdCQUFnQixHQUFHOztJQUNqQyxPQUFPSixpREFBVSxDQUFDRyxvQkFBb0IsQ0FBQyxDQUFDO0NBQ3pDO0dBRmVDLGdCQUFnQjtBQUl6QixJQUFNQyxxQkFBcUIsR0FBcUIsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDaEUsSUFBNENKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBakRLLGNBQWMsR0FBdUJMLEdBQVksR0FBbkMsRUFBRU0saUJBQWlCLEdBQUlOLEdBQVksR0FBaEI7SUFDeEMsSUFBOENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdERPLGVBQWUsR0FBd0JQLElBQWUsR0FBdkMsRUFBRVEsa0JBQWtCLEdBQUlSLElBQWUsR0FBbkI7SUFFMUMsSUFBTVMsd0JBQXdCO21CQUFHLG9RQUFZO2dCQUVqQ0MsUUFBUSxFQVFWQyxRQUFRLEVBS05DLE9BQU87Ozs7O3dCQWJULFFBQVUsR0FBS0MsTUFBTSxDQUFuQkgsUUFBUSxDQUFZOzRCQUV2QkEsUUFBUTs7Ozt3QkFDWEksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ2pDTixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OzsrQkFJSkUsUUFBUSxDQUFDSyxPQUFPLENBQUM7NEJBQ3ZDQyxNQUFNLEVBQUUsY0FBYzt5QkFDdkIsQ0FBQzs7d0JBRklMLFFBQVEsWUFFQzt3QkFFZixJQUFJQSxRQUFRLENBQUNNLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQ25CTCxPQUFPLEdBQUdELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRVAsT0FBTyxDQUFDLENBQUM7NEJBQ2xDTixpQkFBaUIsQ0FBQ00sT0FBTyxDQUFDLENBQUM7eUJBQzVCLE1BQU07NEJBQ0xNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7eUJBQzVDOzs7Ozs7d0JBRURELE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7O3dCQUdyQlgsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1NBQzNCO3dCQTFCS0Msd0JBQXdCOzs7T0EwQjdCO0lBRUQsSUFBTVcsbUJBQW1CO21CQUFHLG9RQUFZO2dCQUU1QlYsUUFBUSxFQVFWQyxRQUFROzs7Ozt3QkFSUixRQUFVLEdBQUtFLE1BQU0sQ0FBbkJILFFBQVEsQ0FBWTs0QkFFdkJBLFFBQVE7Ozs7d0JBQ1hJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNqQ04sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7K0JBSUpFLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDOzRCQUN2Q0MsTUFBTSxFQUFFLHFCQUFxQjt5QkFDOUIsQ0FBQzs7d0JBRklMLFFBQVEsWUFFQzt3QkFFZixJQUFJQSxRQUFRLENBQUNNLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVSLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0Q0wsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNoQyxNQUFNOzRCQUNMTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO3lCQUM1Qzs7Ozs7O3dCQUVERCxPQUFPLENBQUNDLEdBQUcsU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUV0Qjt3QkF2QktDLG1CQUFtQjs7O09BdUJ4QjtJQUVEckIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzNCVyxtQkFBbUIsRUFBRSxDQUFDO0tBQ3ZCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNQyxLQUFLLEdBQUc7UUFDWmhCLGNBQWMsRUFBZEEsY0FBYztRQUNkaUIsZ0JBQWdCLEVBQUVmLGVBQWU7UUFDakNELGlCQUFpQixFQUFqQkEsaUJBQWlCO1FBQ2pCRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtLQUNuQjtJQUVELHFCQUNFLDhEQUFDUCxvQkFBb0IsQ0FBQ3NCLFFBQVE7UUFBQ0YsS0FBSyxFQUFFQSxLQUFLO2tCQUN4Q2pCLFFBQVE7Ozs7O2FBQ3FCLENBQ2hDO0NBQ0gsQ0FBQztJQTNFV0QscUJBQXFCO0FBQXJCQSxLQUFBQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ29ubmVjdFdhbGxldENvbnRleHQudHN4P2RmNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElDb250ZXh0IHtcbiAgY3VycmVudEFjY291bnQ6IHN0cmluZztcbiAgd2FsbGV0Q29ubmVjdGluZzogYm9vbGVhbjtcbiAgc2V0Q3VycmVudEFjY291bnQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICBzZXRXYWxsZXRJc0xvYWRpbmc6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IENvbm5lY3RXYWxsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQ29udGV4dCB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29ubmVjdFdhbGxldCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQ29ubmVjdFdhbGxldENvbnRleHQpO1xufVxuXG5leHBvcnQgY29uc3QgQ29ubmVjdFdhbGxldFByb3ZpZGVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNXYWxsZXRMb2FkaW5nLCBzZXRXYWxsZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgIHNldFdhbGxldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSAoYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcbiAgICAgIH0pKSBhcyBzdHJpbmdbXTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnQpO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgc2V0V2FsbGV0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0QWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgc2V0V2FsbGV0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IChhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgIH0pKSBhcyBzdHJpbmdbXTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2FsbGV0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuICAgIGNvbm5lY3RXYWxsZXRBY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGN1cnJlbnRBY2NvdW50LFxuICAgIHdhbGxldENvbm5lY3Rpbmc6IGlzV2FsbGV0TG9hZGluZyxcbiAgICBzZXRDdXJyZW50QWNjb3VudCxcbiAgICBzZXRXYWxsZXRJc0xvYWRpbmcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29ubmVjdFdhbGxldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Nvbm5lY3RXYWxsZXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25uZWN0V2FsbGV0Q29udGV4dCIsInVzZUNvbm5lY3RXYWxsZXQiLCJDb25uZWN0V2FsbGV0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJpc1dhbGxldExvYWRpbmciLCJzZXRXYWxsZXRJc0xvYWRpbmciLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwiYWNjb3VudCIsIndpbmRvdyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0QWN0aW9uIiwidmFsdWUiLCJ3YWxsZXRDb25uZWN0aW5nIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/ConnectWalletContext.tsx\n"));

/***/ })

});