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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typechain-types/factories/contracts/OrigamiNFT__factory */ \"./typechain-types/factories/contracts/OrigamiNFT__factory.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), nftContract = ref1[0], setNftContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Wallet connection effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    // Get contract on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ethereum = window.ethereum;\n        if (ethereum) {\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(ethereum);\n            var signer = provider.getSigner();\n            var origamiNFTContract = _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__.OrigamiNFT__factory.connect(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, signer);\n            setNftContract(origamiNFTContract);\n        } else {\n            console.log(\"Ethereum object no found\");\n        }\n    }, []);\n    // Contract effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getNFTs = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var tokens, readableTokens, tokenURI, json, result;\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"trying to get nfts\");\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return nftContract === null || nftContract === void 0 ? void 0 : nftContract.getTokensByAddress(currentAccount);\n                        case 4:\n                            tokens = _ctx.sent;\n                            console.log(\"tokens\", tokens);\n                            readableTokens = tokens === null || tokens === void 0 ? void 0 : tokens.map(function(token) {\n                                return token.toNumber();\n                            });\n                            console.log(\"readable tokens\", readableTokens);\n                            _ctx.next = 10;\n                            return nftContract === null || nftContract === void 0 ? void 0 : nftContract.tokenURI(readableTokens[0]);\n                        case 10:\n                            tokenURI = _ctx.sent;\n                            console.log(\"token URI\", tokenURI);\n                            json = atob(tokenURI.substring(29)); // 29 = length of \"data:application/json;base64,\"\n                            result = JSON.parse(json);\n                            console.log(\"result\", result);\n                            _ctx.next = 21;\n                            break;\n                        case 17:\n                            _ctx.prev = 17;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(\"cannot get nfts\");\n                            console.log(_ctx.t0);\n                        case 21:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        17\n                    ]\n                ]);\n            }));\n            return function getNFTs() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getNFTs();\n        var onNFTMint = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender, tokenId) {\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"CharacterNFTMinted - sender: \".concat(sender, \" tokenId: \").concat(tokenId, \"}\"));\n                            if (nftContract) {\n                                console.log(\"Your NFT is all done -- see it here: https://testnets.opensea.io/assets/\".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, \"/\").concat(tokenId));\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function onNFTMint(sender, tokenId) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nftContract) {\n            // Setup NFT Minted Listener\n            nftContract.on(\"NewOrigamiNFTMinted\", onNFTMint);\n        }\n        return function() {\n            // When your component unmounts, let's make sure to clean up this listener\n            if (nftContract) {\n                nftContract.off(\"NewOrigamiNFTMinted\", onNFTMint);\n            }\n        };\n    }, [\n        nftContract\n    ]);\n    var minNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txn;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!nftContract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return nftContract === null || nftContract === void 0 ? void 0 : nftContract.mintOrigamiNFT();\n                    case 4:\n                        txn = _ctx.sent;\n                        _ctx.next = 7;\n                        return txn === null || txn === void 0 ? void 0 : txn.wait();\n                    case 7:\n                        console.log(\"mint txn\", txn);\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error minting nft\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function minNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 172,\n                columnNumber: 7\n            }, _this),\n            !currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"cta-button connect-wallet-button\",\n                onClick: connectWalletAction,\n                children: \"Connect Wallet To Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 178,\n                columnNumber: 9\n            }, _this),\n            currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"\".concat(currentAccount.slice(0, 4), \"...\").concat(currentAccount.slice(currentAccount.length - 4, currentAccount.length))\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: minNft,\n                children: \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n        lineNumber: 171,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1BrqjG1TGP9qzURfVSR2K/q/0RE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7WUFDTixDQUFDekQsY0FBYyxrQkFDZCw4REFBQzBELFFBQU07Z0JBQ0xULFNBQVMsRUFBQyxrQ0FBa0M7Z0JBQzVDVSxPQUFPLEVBQUUxQyxtQkFBbUI7MEJBQzdCLCtCQUVEOzs7OztxQkFBUztZQUVWakIsY0FBYyxrQkFDYiw4REFBQzRELE1BQUk7MEJBQUUsRUFBQyxDQUFrQzVELE1BR3pDLENBSFNBLGNBQWMsQ0FBQzZELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsS0FBRyxDQUd0QyxRQUh3QzdELGNBQWMsQ0FBQzZELEtBQUssQ0FDNUQ3RCxjQUFjLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQ3pCZCxjQUFjLENBQUNjLE1BQU0sQ0FDdEIsQ0FBRTs7Ozs7cUJBQVE7MEJBR2IsOERBQUM0QyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVmLE1BQU07MEJBQUUsVUFBUTs7Ozs7cUJBQVM7Ozs7OzthQUN0QyxDQUNOO0NBQ0g7R0EvS0s3QyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpTFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IG9yaWdhbWlORlQgZnJvbSBcIi4uL3V0aWxzL09yaWdhbWlORlQuanNvblwiO1xuaW1wb3J0IHsgQ09OVFJBQ1RfQUREUkVTUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9yaWdhbWlORlRfX2ZhY3RvcnkgfSBmcm9tIFwiLi4vdHlwZWNoYWluLXR5cGVzL2ZhY3Rvcmllcy9jb250cmFjdHMvT3JpZ2FtaU5GVF9fZmFjdG9yeVwiO1xuaW1wb3J0IHsgT3JpZ2FtaU5GVCB9IGZyb20gXCIuLi90eXBlY2hhaW4tdHlwZXMvY29udHJhY3RzL09yaWdhbWlORlRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZnRDb250cmFjdCwgc2V0TmZ0Q29udHJhY3RdID0gdXNlU3RhdGU8T3JpZ2FtaU5GVD4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gKGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50KTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSAoYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBXYWxsZXQgY29ubmVjdGlvbiBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuICAgIGNvbm5lY3RXYWxsZXRBY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCBjb250cmFjdCBvbiBjb21wb25lbnQgbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtIGFzIGFueSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IG9yaWdhbWlORlRDb250cmFjdCA9IE9yaWdhbWlORlRfX2ZhY3RvcnkuY29ubmVjdChcbiAgICAgICAgQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgc2lnbmVyXG4gICAgICApO1xuXG4gICAgICBzZXROZnRDb250cmFjdChvcmlnYW1pTkZUQ29udHJhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBubyBmb3VuZFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBDb250cmFjdCBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIGdldCBuZnRzXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgbmZ0Q29udHJhY3Q/LmdldFRva2Vuc0J5QWRkcmVzcyhjdXJyZW50QWNjb3VudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5zXCIsIHRva2Vucyk7XG5cbiAgICAgICAgY29uc3QgcmVhZGFibGVUb2tlbnM6IG51bWJlcltdID0gdG9rZW5zPy5tYXAoKHRva2VuKSA9PlxuICAgICAgICAgIHRva2VuLnRvTnVtYmVyKClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkYWJsZSB0b2tlbnNcIiwgcmVhZGFibGVUb2tlbnMpO1xuXG4gICAgICAgIGNvbnN0IHRva2VuVVJJID0gKGF3YWl0IG5mdENvbnRyYWN0Py50b2tlblVSSShcbiAgICAgICAgICByZWFkYWJsZVRva2Vuc1swXVxuICAgICAgICApKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gVVJJXCIsIHRva2VuVVJJKTtcblxuICAgICAgICBjb25zdCBqc29uID0gYXRvYih0b2tlblVSSS5zdWJzdHJpbmcoMjkpKTsgLy8gMjkgPSBsZW5ndGggb2YgXCJkYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgbmZ0c1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0TkZUcygpO1xuXG4gICAgY29uc3Qgb25ORlRNaW50ID0gYXN5bmMgKHNlbmRlcjogc3RyaW5nLCB0b2tlbklkOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgQ2hhcmFjdGVyTkZUTWludGVkIC0gc2VuZGVyOiAke3NlbmRlcn0gdG9rZW5JZDogJHt0b2tlbklkfX1gXG4gICAgICApO1xuXG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYFlvdXIgTkZUIGlzIGFsbCBkb25lIC0tIHNlZSBpdCBoZXJlOiBodHRwczovL3Rlc3RuZXRzLm9wZW5zZWEuaW8vYXNzZXRzLyR7Q09OVFJBQ1RfQUREUkVTU30vJHt0b2tlbklkfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAvLyBTZXR1cCBORlQgTWludGVkIExpc3RlbmVyXG4gICAgICBuZnRDb250cmFjdC5vbihcIk5ld09yaWdhbWlORlRNaW50ZWRcIiwgb25ORlRNaW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gV2hlbiB5b3VyIGNvbXBvbmVudCB1bm1vdW50cywgbGV0J3MgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHRoaXMgbGlzdGVuZXJcblxuICAgICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAgIG5mdENvbnRyYWN0Lm9mZihcIk5ld09yaWdhbWlORlRNaW50ZWRcIiwgb25ORlRNaW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbbmZ0Q29udHJhY3RdKTtcblxuICBjb25zdCBtaW5OZnQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgICBsZXQgdHhuID0gYXdhaXQgbmZ0Q29udHJhY3Q/Lm1pbnRPcmlnYW1pTkZUKCk7XG4gICAgICAgIGF3YWl0IHR4bj8ud2FpdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1pbnQgdHhuXCIsIHR4bik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbWludGluZyBuZnRcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHshY3VycmVudEFjY291bnQgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3RhLWJ1dHRvbiBjb25uZWN0LXdhbGxldC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRBY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICBDb25uZWN0IFdhbGxldCBUbyBHZXQgU3RhcnRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7Y3VycmVudEFjY291bnQgJiYgKFxuICAgICAgICA8c3Bhbj57YCR7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNCl9Li4uJHtjdXJyZW50QWNjb3VudC5zbGljZShcbiAgICAgICAgICBjdXJyZW50QWNjb3VudC5sZW5ndGggLSA0LFxuICAgICAgICAgIGN1cnJlbnRBY2NvdW50Lmxlbmd0aFxuICAgICAgICApfWB9PC9zcGFuPlxuICAgICAgKX1cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW5OZnR9Pk1pbnQgTkZUPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImV0aGVycyIsIkNPTlRSQUNUX0FERFJFU1MiLCJPcmlnYW1pTkZUX19mYWN0b3J5IiwiSG9tZSIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJuZnRDb250cmFjdCIsInNldE5mdENvbnRyYWN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwiZXRoZXJldW0iLCJhY2NvdW50cyIsImFjY291bnQiLCJ3aW5kb3ciLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdFdhbGxldEFjdGlvbiIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwib3JpZ2FtaU5GVENvbnRyYWN0IiwiY29ubmVjdCIsImdldE5GVHMiLCJ0b2tlbnMiLCJyZWFkYWJsZVRva2VucyIsInRva2VuVVJJIiwianNvbiIsInJlc3VsdCIsImdldFRva2Vuc0J5QWRkcmVzcyIsIm1hcCIsInRva2VuIiwidG9OdW1iZXIiLCJhdG9iIiwic3Vic3RyaW5nIiwiSlNPTiIsInBhcnNlIiwib25ORlRNaW50Iiwic2VuZGVyIiwidG9rZW5JZCIsIm9uIiwib2ZmIiwibWluTmZ0IiwidHhuIiwibWludE9yaWdhbWlORlQiLCJ3YWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});