"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typechain-types/factories/contracts/OrigamiNFT__factory */ \"./typechain-types/factories/contracts/OrigamiNFT__factory.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), nftContract = ref1[0], setNftContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Wallet connection effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    // Get contract on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ethereum = window.ethereum;\n        if (ethereum) {\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(ethereum);\n            var signer = provider.getSigner();\n            var origamiNFTContract = _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__.OrigamiNFT__factory.connect(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, signer);\n            setNftContract(origamiNFTContract);\n        // const getCode = async () => {\n        //   const code = await provider.getCode(CONTRACT_ADDRESS);\n        //   console.log(\"code\", code);\n        // };\n        // getCode();\n        } else {\n            console.log(\"Ethereum object no found\");\n        }\n    }, []);\n    // Contract effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getNFTs = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokens;\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"trying to get nfts\");\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return nftContract === null || nftContract === void 0 ? void 0 : nftContract.getTokensByAddress(currentAccount);\n                        case 4:\n                            tokens = _ctx.sent;\n                            console.log(tokens);\n                            _ctx.next = 12;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(\"cannot get nfts\");\n                            console.log(_ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        8\n                    ]\n                ]);\n            }));\n            return function getNFTs() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNFTs();\n        var onNFTMint = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender, tokenId) {\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"CharacterNFTMinted - sender: \".concat(sender, \" tokenId: \").concat(tokenId, \"}\"));\n                            if (nftContract) {\n                                console.log(\"Your NFT is all done -- see it here: https://testnets.opensea.io/assets/\".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, \"/\").concat(tokenId));\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function onNFTMint(sender, tokenId) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nftContract) {\n            // Setup NFT Minted Listener\n            nftContract.on(\"NewOrigamiNFTMinted\", onNFTMint);\n        }\n        return function() {\n            // When your component unmounts, let;s make sure to clean up this listener\n            if (nftContract) {\n                nftContract.off(\"NewOrigamiNFTMinted\", onNFTMint);\n            }\n        };\n    }, [\n        nftContract\n    ]);\n    var minNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txn;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!nftContract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return nftContract === null || nftContract === void 0 ? void 0 : nftContract.mintOrigamiNFT();\n                    case 4:\n                        txn = _ctx.sent;\n                        _ctx.next = 7;\n                        return txn === null || txn === void 0 ? void 0 : txn.wait();\n                    case 7:\n                        console.log(\"mint txn\", txn);\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error minting nft\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function minNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, _this),\n            !currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"cta-button connect-wallet-button\",\n                onClick: connectWalletAction,\n                children: \"Connect Wallet To Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 171,\n                columnNumber: 9\n            }, _this),\n            currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"\".concat(currentAccount.slice(0, 4), \"...\").concat(currentAccount.slice(currentAccount.length - 4, currentAccount.length))\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 179,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: minNft,\n                children: \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1BrqjG1TGP9qzURfVSR2K/q/0RE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CLENBQUMsQ0FBQzt3QkFDakNELE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO3dCQVhLaUIsTUFBTTs7O09BV1g7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUUzQywwRUFBZ0I7OzBCQUM5Qiw4REFBQ0gsa0RBQUk7O2tDQUNILDhEQUFDZ0QsT0FBSztrQ0FBQyxpQkFBZTs7Ozs7NkJBQVE7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NkJBQUc7a0NBQ2xFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDO1lBQ04sQ0FBQzlDLGNBQWMsa0JBQ2QsOERBQUMrQyxRQUFNO2dCQUNMVCxTQUFTLEVBQUMsa0NBQWtDO2dCQUM1Q1UsT0FBTyxFQUFFL0IsbUJBQW1COzBCQUM3QiwrQkFFRDs7Ozs7cUJBQVM7WUFFVmpCLGNBQWMsa0JBQ2IsOERBQUNpRCxNQUFJOzBCQUFFLEVBQUMsQ0FBa0NqRCxNQUd6QyxDQUhTQSxjQUFjLENBQUNrRCxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEtBQUcsQ0FHdEMsUUFId0NsRCxjQUFjLENBQUNrRCxLQUFLLENBQzVEbEQsY0FBYyxDQUFDYyxNQUFNLEdBQUcsQ0FBQyxFQUN6QmQsY0FBYyxDQUFDYyxNQUFNLENBQ3RCLENBQUU7Ozs7O3FCQUFROzBCQUdiLDhEQUFDaUMsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFZixNQUFNOzBCQUFFLFVBQVE7Ozs7O3FCQUFTOzs7Ozs7YUFDdEMsQ0FDTjtDQUNIO0dBeEtLbEMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBMEtWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBvcmlnYW1pTkZUIGZyb20gXCIuLi91dGlscy9PcmlnYW1pTkZULmpzb25cIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPcmlnYW1pTkZUX19mYWN0b3J5IH0gZnJvbSBcIi4uL3R5cGVjaGFpbi10eXBlcy9mYWN0b3JpZXMvY29udHJhY3RzL09yaWdhbWlORlRfX2ZhY3RvcnlcIjtcbmltcG9ydCB7IE9yaWdhbWlORlQgfSBmcm9tIFwiLi4vdHlwZWNoYWluLXR5cGVzL2NvbnRyYWN0cy9PcmlnYW1pTkZUXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZXRoZXJldW0/OiBNZXRhTWFza0lucGFnZVByb3ZpZGVyO1xuICB9XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmZ0Q29udHJhY3QsIHNldE5mdENvbnRyYWN0XSA9IHVzZVN0YXRlPE9yaWdhbWlORlQ+KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IChhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLFxuICAgICAgfSkpIGFzIHN0cmluZ1tdO1xuXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudCk7XG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnQgZm91bmRcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXRBY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gKGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgfSkpIGFzIHN0cmluZ1tdO1xuXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnRzWzBdKTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnQgZm91bmRcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gV2FsbGV0IGNvbm5lY3Rpb24gZWZmZWN0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQoKTtcbiAgICBjb25uZWN0V2FsbGV0QWN0aW9uKCk7XG4gIH0sIFtdKTtcblxuICAvLyBHZXQgY29udHJhY3Qgb24gY29tcG9uZW50IG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSBhcyBhbnkpO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBvcmlnYW1pTkZUQ29udHJhY3QgPSBPcmlnYW1pTkZUX19mYWN0b3J5LmNvbm5lY3QoXG4gICAgICAgIENPTlRSQUNUX0FERFJFU1MsXG4gICAgICAgIHNpZ25lclxuICAgICAgKTtcblxuICAgICAgc2V0TmZ0Q29udHJhY3Qob3JpZ2FtaU5GVENvbnRyYWN0KTtcblxuICAgICAgLy8gY29uc3QgZ2V0Q29kZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vICAgY29uc3QgY29kZSA9IGF3YWl0IHByb3ZpZGVyLmdldENvZGUoQ09OVFJBQ1RfQUREUkVTUyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiY29kZVwiLCBjb2RlKTtcbiAgICAgIC8vIH07XG5cbiAgICAgIC8vIGdldENvZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFdGhlcmV1bSBvYmplY3Qgbm8gZm91bmRcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gQ29udHJhY3QgZWZmZWN0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5GVHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInRyeWluZyB0byBnZXQgbmZ0c1wiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IG5mdENvbnRyYWN0Py5nZXRUb2tlbnNCeUFkZHJlc3MoY3VycmVudEFjY291bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbnMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IG5mdHNcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldE5GVHMoKTtcblxuICAgIGNvbnN0IG9uTkZUTWludCA9IGFzeW5jIChzZW5kZXI6IHN0cmluZywgdG9rZW5JZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYENoYXJhY3Rlck5GVE1pbnRlZCAtIHNlbmRlcjogJHtzZW5kZXJ9IHRva2VuSWQ6ICR7dG9rZW5JZH19YFxuICAgICAgKTtcblxuICAgICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBZb3VyIE5GVCBpcyBhbGwgZG9uZSAtLSBzZWUgaXQgaGVyZTogaHR0cHM6Ly90ZXN0bmV0cy5vcGVuc2VhLmlvL2Fzc2V0cy8ke0NPTlRSQUNUX0FERFJFU1N9LyR7dG9rZW5JZH1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgLy8gU2V0dXAgTkZUIE1pbnRlZCBMaXN0ZW5lclxuICAgICAgbmZ0Q29udHJhY3Qub24oXCJOZXdPcmlnYW1pTkZUTWludGVkXCIsIG9uTkZUTWludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFdoZW4geW91ciBjb21wb25lbnQgdW5tb3VudHMsIGxldDtzIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCB0aGlzIGxpc3RlbmVyXG5cbiAgICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgICBuZnRDb250cmFjdC5vZmYoXCJOZXdPcmlnYW1pTkZUTWludGVkXCIsIG9uTkZUTWludCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW25mdENvbnRyYWN0XSk7XG5cbiAgY29uc3QgbWluTmZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgbGV0IHR4biA9IGF3YWl0IG5mdENvbnRyYWN0Py5taW50T3JpZ2FtaU5GVCgpO1xuICAgICAgICBhd2FpdCB0eG4/LndhaXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaW50IHR4blwiLCB0eG4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIG1pbnRpbmcgbmZ0XCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7IWN1cnJlbnRBY2NvdW50ICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImN0YS1idXR0b24gY29ubmVjdC13YWxsZXQtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0QWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXQgVG8gR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge2N1cnJlbnRBY2NvdW50ICYmIChcbiAgICAgICAgPHNwYW4+e2Ake2N1cnJlbnRBY2NvdW50LnNsaWNlKDAsIDQpfS4uLiR7Y3VycmVudEFjY291bnQuc2xpY2UoXG4gICAgICAgICAgY3VycmVudEFjY291bnQubGVuZ3RoIC0gNCxcbiAgICAgICAgICBjdXJyZW50QWNjb3VudC5sZW5ndGhcbiAgICAgICAgKX1gfTwvc3Bhbj5cbiAgICAgICl9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17bWluTmZ0fT5NaW50IE5GVDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJldGhlcnMiLCJDT05UUkFDVF9BRERSRVNTIiwiT3JpZ2FtaU5GVF9fZmFjdG9yeSIsIkhvbWUiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwibmZ0Q29udHJhY3QiLCJzZXROZnRDb250cmFjdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJhY2NvdW50Iiwid2luZG93IiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RXYWxsZXRBY3Rpb24iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIm9yaWdhbWlORlRDb250cmFjdCIsImNvbm5lY3QiLCJnZXRORlRzIiwidG9rZW5zIiwiZ2V0VG9rZW5zQnlBZGRyZXNzIiwib25ORlRNaW50Iiwic2VuZGVyIiwidG9rZW5JZCIsIm9uIiwib2ZmIiwibWluTmZ0IiwidHhuIiwibWludE9yaWdhbWlORlQiLCJ3YWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});