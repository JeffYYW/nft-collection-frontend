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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typechain-types/factories/contracts/OrigamiNFT__factory */ \"./typechain-types/factories/contracts/OrigamiNFT__factory.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), nftContract = ref1[0], setNftContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Wallet connection effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    // Get contract on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ethereum = window.ethereum;\n        if (ethereum) {\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(ethereum);\n            var signer = provider.getSigner();\n            var origamiNFTContract = _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__.OrigamiNFT__factory.connect(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, signer);\n            setNftContract(origamiNFTContract);\n        // const getCode = async () => {\n        //   const code = await provider.getCode(CONTRACT_ADDRESS);\n        //   console.log(\"code\", code);\n        // };\n        // getCode();\n        } else {\n            console.log(\"Ethereum object no found\");\n        }\n    }, []);\n    // Contract effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // const getNFTs = async () => {\n        //   console.log(\"trying to get nfts\");\n        //   try {\n        //     const tokens = await nftContract?.getTokensByAddress(\n        //       \"0xB1735231ddF55b1D0f1a324E8b9c9A961d6d16F2\"\n        //     );\n        //     console.log(tokens);\n        //   } catch (error) {\n        //     console.log(\"cannot get nfts\");\n        //     console.log(error);\n        //   }\n        // };\n        // getNFTs();\n        var onNFTMint = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender, tokenId) {\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"CharacterNFTMinted - sender: \".concat(sender, \" tokenId: \").concat(tokenId, \"}\"));\n                            if (nftContract) {\n                                console.log(\"Your NFT is all done -- see it here: https://testnets.opensea.io/assets/\".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, \"/\").concat(tokenId.toNumber()));\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function onNFTMint(sender, tokenId) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nftContract) {\n            // Setup NFT Minted Listener\n            nftContract.on(\"NewOrigamiNFTMinted\", onNFTMint);\n        }\n        return function() {\n            // When your component unmounts, let;s make sure to clean up this listener\n            if (nftContract) {\n                nftContract.off(\"NewOrigamiNFTMinted\", onNFTMint);\n            }\n        };\n    }, [\n        nftContract\n    ]);\n    var minNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txn;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!nftContract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return nftContract === null || nftContract === void 0 ? void 0 : nftContract.mintOrigamiNFT();\n                    case 4:\n                        txn = _ctx.sent;\n                        _ctx.next = 7;\n                        return txn === null || txn === void 0 ? void 0 : txn.wait();\n                    case 7:\n                        console.log(\"mint txn\", txn);\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error minting nft\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function minNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, _this),\n            !currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"cta-button connect-wallet-button\",\n                onClick: connectWalletAction,\n                children: \"Connect Wallet To Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 173,\n                columnNumber: 9\n            }, _this),\n            currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"\".concat(currentAccount.slice(0, 4), \"...\").concat(currentAccount.slice(currentAccount.length - 4, currentAccount.length))\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 181,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: minNft,\n                children: \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n        lineNumber: 166,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1BrqjG1TGP9qzURfVSR2K/q/0RE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsOEJBQThCOzs7Ozs2QkFBRztrQ0FDbEUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7Ozs7OztxQkFDbEM7WUFDTixDQUFDNUMsY0FBYyxrQkFDZCw4REFBQzZDLFFBQU07Z0JBQ0xULFNBQVMsRUFBQyxrQ0FBa0M7Z0JBQzVDVSxPQUFPLEVBQUU3QixtQkFBbUI7MEJBQzdCLCtCQUVEOzs7OztxQkFBUztZQUVWakIsY0FBYyxrQkFDYiw4REFBQytDLE1BQUk7MEJBQUUsRUFBQyxDQUFrQy9DLE1BR3pDLENBSFNBLGNBQWMsQ0FBQ2dELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsS0FBRyxDQUd0QyxRQUh3Q2hELGNBQWMsQ0FBQ2dELEtBQUssQ0FDNURoRCxjQUFjLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQ3pCZCxjQUFjLENBQUNjLE1BQU0sQ0FDdEIsQ0FBRTs7Ozs7cUJBQVE7MEJBR2IsOERBQUMrQixRQUFNO2dCQUFDQyxPQUFPLEVBQUVmLE1BQU07MEJBQUUsVUFBUTs7Ozs7cUJBQVM7Ozs7OzthQUN0QyxDQUNOO0NBQ0g7R0ExS0toQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE0S1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IG9yaWdhbWlORlQgZnJvbSBcIi4uL3V0aWxzL09yaWdhbWlORlQuanNvblwiO1xuaW1wb3J0IHsgQ09OVFJBQ1RfQUREUkVTUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9yaWdhbWlORlRfX2ZhY3RvcnkgfSBmcm9tIFwiLi4vdHlwZWNoYWluLXR5cGVzL2ZhY3Rvcmllcy9jb250cmFjdHMvT3JpZ2FtaU5GVF9fZmFjdG9yeVwiO1xuaW1wb3J0IHsgT3JpZ2FtaU5GVCB9IGZyb20gXCIuLi90eXBlY2hhaW4tdHlwZXMvY29udHJhY3RzL09yaWdhbWlORlRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZnRDb250cmFjdCwgc2V0TmZ0Q29udHJhY3RdID0gdXNlU3RhdGU8T3JpZ2FtaU5GVD4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gKGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50KTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSAoYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBXYWxsZXQgY29ubmVjdGlvbiBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuICAgIGNvbm5lY3RXYWxsZXRBY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCBjb250cmFjdCBvbiBjb21wb25lbnQgbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtIGFzIGFueSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IG9yaWdhbWlORlRDb250cmFjdCA9IE9yaWdhbWlORlRfX2ZhY3RvcnkuY29ubmVjdChcbiAgICAgICAgQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgc2lnbmVyXG4gICAgICApO1xuXG4gICAgICBzZXROZnRDb250cmFjdChvcmlnYW1pTkZUQ29udHJhY3QpO1xuXG4gICAgICAvLyBjb25zdCBnZXRDb2RlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gICBjb25zdCBjb2RlID0gYXdhaXQgcHJvdmlkZXIuZ2V0Q29kZShDT05UUkFDVF9BRERSRVNTKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJjb2RlXCIsIGNvZGUpO1xuICAgICAgLy8gfTtcblxuICAgICAgLy8gZ2V0Q29kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBubyBmb3VuZFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBDb250cmFjdCBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgZ2V0TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIGdldCBuZnRzXCIpO1xuICAgIC8vICAgdHJ5IHtcbiAgICAvLyAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgbmZ0Q29udHJhY3Q/LmdldFRva2Vuc0J5QWRkcmVzcyhcbiAgICAvLyAgICAgICBcIjB4QjE3MzUyMzFkZEY1NWIxRDBmMWEzMjRFOGI5YzlBOTYxZDZkMTZGMlwiXG4gICAgLy8gICAgICk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRva2Vucyk7XG4gICAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgbmZ0c1wiKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgfVxuICAgIC8vIH07XG4gICAgLy8gZ2V0TkZUcygpO1xuXG4gICAgY29uc3Qgb25ORlRNaW50ID0gYXN5bmMgKHNlbmRlcjogc3RyaW5nLCB0b2tlbklkOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgQ2hhcmFjdGVyTkZUTWludGVkIC0gc2VuZGVyOiAke3NlbmRlcn0gdG9rZW5JZDogJHt0b2tlbklkfX1gXG4gICAgICApO1xuXG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYFlvdXIgTkZUIGlzIGFsbCBkb25lIC0tIHNlZSBpdCBoZXJlOiBodHRwczovL3Rlc3RuZXRzLm9wZW5zZWEuaW8vYXNzZXRzLyR7Q09OVFJBQ1RfQUREUkVTU30vJHt0b2tlbklkLnRvTnVtYmVyKCl9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgIC8vIFNldHVwIE5GVCBNaW50ZWQgTGlzdGVuZXJcbiAgICAgIG5mdENvbnRyYWN0Lm9uKFwiTmV3T3JpZ2FtaU5GVE1pbnRlZFwiLCBvbk5GVE1pbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBXaGVuIHlvdXIgY29tcG9uZW50IHVubW91bnRzLCBsZXQ7cyBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgdGhpcyBsaXN0ZW5lclxuXG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgbmZ0Q29udHJhY3Qub2ZmKFwiTmV3T3JpZ2FtaU5GVE1pbnRlZFwiLCBvbk5GVE1pbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtuZnRDb250cmFjdF0pO1xuXG4gIGNvbnN0IG1pbk5mdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAgIGxldCB0eG4gPSBhd2FpdCBuZnRDb250cmFjdD8ubWludE9yaWdhbWlORlQoKTtcbiAgICAgICAgYXdhaXQgdHhuPy53YWl0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWludCB0eG5cIiwgdHhuKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBtaW50aW5nIG5mdFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgeyFjdXJyZW50QWNjb3VudCAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdGEtYnV0dG9uIGNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17Y29ubmVjdFdhbGxldEFjdGlvbn1cbiAgICAgICAgPlxuICAgICAgICAgIENvbm5lY3QgV2FsbGV0IFRvIEdldCBTdGFydGVkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHtjdXJyZW50QWNjb3VudCAmJiAoXG4gICAgICAgIDxzcGFuPntgJHtjdXJyZW50QWNjb3VudC5zbGljZSgwLCA0KX0uLi4ke2N1cnJlbnRBY2NvdW50LnNsaWNlKFxuICAgICAgICAgIGN1cnJlbnRBY2NvdW50Lmxlbmd0aCAtIDQsXG4gICAgICAgICAgY3VycmVudEFjY291bnQubGVuZ3RoXG4gICAgICAgICl9YH08L3NwYW4+XG4gICAgICApfVxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbk5mdH0+TWludCBORlQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiZXRoZXJzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIk9yaWdhbWlORlRfX2ZhY3RvcnkiLCJIb21lIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm5mdENvbnRyYWN0Iiwic2V0TmZ0Q29udHJhY3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwiYWNjb3VudCIsIndpbmRvdyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0QWN0aW9uIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJvcmlnYW1pTkZUQ29udHJhY3QiLCJjb25uZWN0Iiwib25ORlRNaW50Iiwic2VuZGVyIiwidG9rZW5JZCIsInRvTnVtYmVyIiwib24iLCJvZmYiLCJtaW5OZnQiLCJ0eG4iLCJtaW50T3JpZ2FtaU5GVCIsIndhaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});