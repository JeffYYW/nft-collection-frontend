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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n/* harmony import */ var _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typechain-types/factories/contracts/OrigamiNFT__factory */ \"./typechain-types/factories/contracts/OrigamiNFT__factory.ts\");\n/* harmony import */ var _hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetTokensByAddress */ \"./hooks/useGetTokensByAddress.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), nftContract = ref1[0], setNftContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Wallet connection effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    // Get contract on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ethereum = window.ethereum;\n        if (ethereum) {\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(ethereum);\n            var signer = provider.getSigner();\n            var origamiNFTContract = _typechain_types_factories_contracts_OrigamiNFT_factory__WEBPACK_IMPORTED_MODULE_5__.OrigamiNFT__factory.connect(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, signer);\n            setNftContract(origamiNFTContract);\n        } else {\n            console.log(\"Ethereum object no found\");\n        }\n    }, []);\n    var nftObjects = (0,_hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(nftContract, currentAccount).nftObjects;\n    console.log(\"from custom hook\", nftObjects);\n    // Contract effects\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // const getNFTs = async () => {\n        //   console.log(\"trying to get nfts\");\n        //   try {\n        //     const tokens: ethers.BigNumber[] =\n        //       (await nftContract?.getTokensByAddress(\n        //         currentAccount\n        //       )) as ethers.BigNumber[];\n        //     console.log(\"tokens\", tokens);\n        //     const readableTokens: number[] = tokens?.map((token) =>\n        //       token.toNumber()\n        //     );\n        //     console.log(\"readable tokens\", readableTokens);\n        //     if (readableTokens.length !== 0) {\n        //       console.log(\"readableTokens in get\", readableTokens);\n        //       const getUris = async () => {\n        //         const uriList: string[] = [];\n        //         await Promise.all(\n        //           readableTokens.map(async (token) => {\n        //             const URI: string = (await nftContract?.tokenURI(\n        //               token\n        //             )) as string;\n        //             uriList.push(URI);\n        //           })\n        //         );\n        //         const jsonObjectList = uriList.map((uri) => {\n        //           const json = atob(uri.substring(29));\n        //           const result = JSON.parse(json);\n        //           return result;\n        //         });\n        //         console.log(jsonObjectList);\n        //       };\n        //       getUris();\n        //     }\n        //   } catch (error) {\n        //     console.log(\"cannot get nfts\");\n        //     console.log(error);\n        //   }\n        // };\n        // if (nftContract) getNFTs();\n        var onNFTMint = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender, tokenId) {\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"CharacterNFTMinted - sender: \".concat(sender, \" tokenId: \").concat(tokenId, \"}\"));\n                            if (nftContract) {\n                                console.log(\"Your NFT is all done -- see it here: https://testnets.opensea.io/assets/\".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.CONTRACT_ADDRESS, \"/\").concat(tokenId));\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function onNFTMint(sender, tokenId) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nftContract) {\n            // Setup NFT Minted Listener\n            nftContract.on(\"NewOrigamiNFTMinted\", onNFTMint);\n        }\n        return function() {\n            // When your component unmounts, let's make sure to clean up this listener\n            if (nftContract) {\n                nftContract.off(\"NewOrigamiNFTMinted\", onNFTMint);\n            }\n        };\n    }, [\n        nftContract\n    ]);\n    var minNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txn;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!nftContract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return nftContract === null || nftContract === void 0 ? void 0 : nftContract.mintOrigamiNFT();\n                    case 4:\n                        txn = _ctx.sent;\n                        _ctx.next = 7;\n                        return txn === null || txn === void 0 ? void 0 : txn.wait();\n                    case 7:\n                        console.log(\"mint txn\", txn);\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error minting nft\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function minNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 201,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, _this),\n            !currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"cta-button connect-wallet-button\",\n                onClick: connectWalletAction,\n                children: \"Connect Wallet To Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 206,\n                columnNumber: 9\n            }, _this),\n            currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"\".concat(currentAccount.slice(0, 4), \"...\").concat(currentAccount.slice(currentAccount.length - 4, currentAccount.length))\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 214,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: minNft,\n                children: \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n                lineNumber: 220,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/pages/index.tsx\",\n        lineNumber: 199,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"tSiXdryxtOPegm2bWUBIQq4ndKc=\", false, function() {\n    return [\n        _hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsVUFBUTs7Ozs7cUJBQVM7Ozs7OzthQUN0QyxDQUNOO0NBQ0g7R0ExTUtoQyxJQUFJOztRQW1GZUQsb0VBQXFCOzs7QUFuRnhDQyxLQUFBQSxJQUFJO0FBNE1WLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBvcmlnYW1pTkZUIGZyb20gXCIuLi91dGlscy9PcmlnYW1pTkZULmpzb25cIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPcmlnYW1pTkZUX19mYWN0b3J5IH0gZnJvbSBcIi4uL3R5cGVjaGFpbi10eXBlcy9mYWN0b3JpZXMvY29udHJhY3RzL09yaWdhbWlORlRfX2ZhY3RvcnlcIjtcbmltcG9ydCB7IE9yaWdhbWlORlQgfSBmcm9tIFwiLi4vdHlwZWNoYWluLXR5cGVzL2NvbnRyYWN0cy9PcmlnYW1pTkZUXCI7XG5pbXBvcnQgdXNlR2V0VG9rZW5zQnlBZGRyZXNzIGZyb20gXCIuLi9ob29rcy91c2VHZXRUb2tlbnNCeUFkZHJlc3NcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZnRDb250cmFjdCwgc2V0TmZ0Q29udHJhY3RdID0gdXNlU3RhdGU8T3JpZ2FtaU5GVD4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gKGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50KTtcbiAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSAoYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICB9KSkgYXMgc3RyaW5nW107XG5cbiAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIiwgYWNjb3VudHNbMF0pO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvLyBXYWxsZXQgY29ubmVjdGlvbiBlZmZlY3RzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpO1xuICAgIGNvbm5lY3RXYWxsZXRBY3Rpb24oKTtcbiAgfSwgW10pO1xuXG4gIC8vIEdldCBjb250cmFjdCBvbiBjb21wb25lbnQgbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtIGFzIGFueSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IG9yaWdhbWlORlRDb250cmFjdCA9IE9yaWdhbWlORlRfX2ZhY3RvcnkuY29ubmVjdChcbiAgICAgICAgQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgc2lnbmVyXG4gICAgICApO1xuXG4gICAgICBzZXROZnRDb250cmFjdChvcmlnYW1pTkZUQ29udHJhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkV0aGVyZXVtIG9iamVjdCBubyBmb3VuZFwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IG5mdE9iamVjdHMgfSA9IHVzZUdldFRva2Vuc0J5QWRkcmVzcyhcbiAgICBuZnRDb250cmFjdCBhcyBPcmlnYW1pTkZULFxuICAgIGN1cnJlbnRBY2NvdW50XG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJmcm9tIGN1c3RvbSBob29rXCIsIG5mdE9iamVjdHMpO1xuXG4gIC8vIENvbnRyYWN0IGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCBnZXRORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJ0cnlpbmcgdG8gZ2V0IG5mdHNcIik7XG4gICAgLy8gICB0cnkge1xuICAgIC8vICAgICBjb25zdCB0b2tlbnM6IGV0aGVycy5CaWdOdW1iZXJbXSA9XG4gICAgLy8gICAgICAgKGF3YWl0IG5mdENvbnRyYWN0Py5nZXRUb2tlbnNCeUFkZHJlc3MoXG4gICAgLy8gICAgICAgICBjdXJyZW50QWNjb3VudFxuICAgIC8vICAgICAgICkpIGFzIGV0aGVycy5CaWdOdW1iZXJbXTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0b2tlbnNcIiwgdG9rZW5zKTtcblxuICAgIC8vICAgICBjb25zdCByZWFkYWJsZVRva2VuczogbnVtYmVyW10gPSB0b2tlbnM/Lm1hcCgodG9rZW4pID0+XG4gICAgLy8gICAgICAgdG9rZW4udG9OdW1iZXIoKVxuICAgIC8vICAgICApO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlYWRhYmxlIHRva2Vuc1wiLCByZWFkYWJsZVRva2Vucyk7XG5cbiAgICAvLyAgICAgaWYgKHJlYWRhYmxlVG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicmVhZGFibGVUb2tlbnMgaW4gZ2V0XCIsIHJlYWRhYmxlVG9rZW5zKTtcbiAgICAvLyAgICAgICBjb25zdCBnZXRVcmlzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgdXJpTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgLy8gICAgICAgICAgIHJlYWRhYmxlVG9rZW5zLm1hcChhc3luYyAodG9rZW4pID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBVUkk6IHN0cmluZyA9IChhd2FpdCBuZnRDb250cmFjdD8udG9rZW5VUkkoXG4gICAgLy8gICAgICAgICAgICAgICB0b2tlblxuICAgIC8vICAgICAgICAgICAgICkpIGFzIHN0cmluZztcbiAgICAvLyAgICAgICAgICAgICB1cmlMaXN0LnB1c2goVVJJKTtcbiAgICAvLyAgICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgICk7XG5cbiAgICAvLyAgICAgICAgIGNvbnN0IGpzb25PYmplY3RMaXN0ID0gdXJpTGlzdC5tYXAoKHVyaSkgPT4ge1xuICAgIC8vICAgICAgICAgICBjb25zdCBqc29uID0gYXRvYih1cmkuc3Vic3RyaW5nKDI5KSk7XG4gICAgLy8gICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgLy8gICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coanNvbk9iamVjdExpc3QpO1xuICAgIC8vICAgICAgIH07XG5cbiAgICAvLyAgICAgICBnZXRVcmlzKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IGdldCBuZnRzXCIpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICB9XG4gICAgLy8gfTtcbiAgICAvLyBpZiAobmZ0Q29udHJhY3QpIGdldE5GVHMoKTtcblxuICAgIGNvbnN0IG9uTkZUTWludCA9IGFzeW5jIChzZW5kZXI6IHN0cmluZywgdG9rZW5JZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYENoYXJhY3Rlck5GVE1pbnRlZCAtIHNlbmRlcjogJHtzZW5kZXJ9IHRva2VuSWQ6ICR7dG9rZW5JZH19YFxuICAgICAgKTtcblxuICAgICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGBZb3VyIE5GVCBpcyBhbGwgZG9uZSAtLSBzZWUgaXQgaGVyZTogaHR0cHM6Ly90ZXN0bmV0cy5vcGVuc2VhLmlvL2Fzc2V0cy8ke0NPTlRSQUNUX0FERFJFU1N9LyR7dG9rZW5JZH1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgLy8gU2V0dXAgTkZUIE1pbnRlZCBMaXN0ZW5lclxuICAgICAgbmZ0Q29udHJhY3Qub24oXCJOZXdPcmlnYW1pTkZUTWludGVkXCIsIG9uTkZUTWludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIFdoZW4geW91ciBjb21wb25lbnQgdW5tb3VudHMsIGxldCdzIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCB0aGlzIGxpc3RlbmVyXG5cbiAgICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgICBuZnRDb250cmFjdC5vZmYoXCJOZXdPcmlnYW1pTkZUTWludGVkXCIsIG9uTkZUTWludCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW25mdENvbnRyYWN0XSk7XG5cbiAgY29uc3QgbWluTmZ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgbGV0IHR4biA9IGF3YWl0IG5mdENvbnRyYWN0Py5taW50T3JpZ2FtaU5GVCgpO1xuICAgICAgICBhd2FpdCB0eG4/LndhaXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaW50IHR4blwiLCB0eG4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIG1pbnRpbmcgbmZ0XCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7IWN1cnJlbnRBY2NvdW50ICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImN0YS1idXR0b24gY29ubmVjdC13YWxsZXQtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0QWN0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXQgVG8gR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge2N1cnJlbnRBY2NvdW50ICYmIChcbiAgICAgICAgPHNwYW4+e2Ake2N1cnJlbnRBY2NvdW50LnNsaWNlKDAsIDQpfS4uLiR7Y3VycmVudEFjY291bnQuc2xpY2UoXG4gICAgICAgICAgY3VycmVudEFjY291bnQubGVuZ3RoIC0gNCxcbiAgICAgICAgICBjdXJyZW50QWNjb3VudC5sZW5ndGhcbiAgICAgICAgKX1gfTwvc3Bhbj5cbiAgICAgICl9XG5cbiAgICAgIDxidXR0b24gb25DbGljaz17bWluTmZ0fT5NaW50IE5GVDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJldGhlcnMiLCJDT05UUkFDVF9BRERSRVNTIiwiT3JpZ2FtaU5GVF9fZmFjdG9yeSIsInVzZUdldFRva2Vuc0J5QWRkcmVzcyIsIkhvbWUiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwibmZ0Q29udHJhY3QiLCJzZXROZnRDb250cmFjdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJhY2NvdW50Iiwid2luZG93IiwiYWxlcnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RXYWxsZXRBY3Rpb24iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsIm9yaWdhbWlORlRDb250cmFjdCIsImNvbm5lY3QiLCJuZnRPYmplY3RzIiwib25ORlRNaW50Iiwic2VuZGVyIiwidG9rZW5JZCIsIm9uIiwib2ZmIiwibWluTmZ0IiwidHhuIiwibWludE9yaWdhbWlORlQiLCJ3YWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});