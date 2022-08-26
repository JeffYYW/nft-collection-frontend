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

/***/ "./views/Nft/index.tsx":
/*!*****************************!*\
  !*** ./views/Nft/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _config_constants_origamiSwords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/constants/origamiSwords */ \"./config/constants/origamiSwords.ts\");\n/* harmony import */ var _typechain_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../typechain-types */ \"./typechain-types/index.ts\");\n/* harmony import */ var _hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useGetTokensByAddress */ \"./views/Nft/hooks/useGetTokensByAddress.tsx\");\n/* harmony import */ var _hooks_useGetRecentlyMintedTokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useGetRecentlyMintedTokens */ \"./views/Nft/hooks/useGetRecentlyMintedTokens.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Nft = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), nftContract = ref1[0], setNftContract = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    var checkIfWalletIsConnected = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts, account;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_accounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            account = accounts[0];\n                            console.log(\"Connected\", account);\n                            setCurrentAccount(account);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                        setIsLoading(false);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletAction = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        ethereum = window.ethereum;\n                        if (ethereum) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        alert(\"Please install MetaMask\");\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\");\n                    case 6:\n                        _ctx.next = 8;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 8:\n                        accounts = _ctx.sent;\n                        if (accounts.length !== 0) {\n                            console.log(\"Connected\", accounts[0]);\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log(\"No authorized account found\");\n                        }\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function connectWalletAction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Wallet connection effects\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setIsLoading(true);\n        checkIfWalletIsConnected();\n        connectWalletAction();\n    }, []);\n    // Get contract on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var ethereum = window.ethereum;\n        if (ethereum) {\n            var provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(ethereum);\n            var signer = provider.getSigner();\n            var origamiNFTContract = _typechain_types__WEBPACK_IMPORTED_MODULE_6__.OrigamiNFT__factory.connect(_config_constants_origamiSwords__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, signer);\n            setNftContract(origamiNFTContract);\n        } else {\n            console.log(\"Ethereum object no found\");\n        }\n    }, []);\n    var nftObjects = (0,_hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(nftContract, currentAccount).nftObjects;\n    var recentlyMintedTokens = (0,_hooks_useGetRecentlyMintedTokens__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(nftContract).recentlyMintedTokens;\n    console.log(\"get recently minted tokens\", recentlyMintedTokens);\n    // Contract effects\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var onNFTMint = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(sender, tokenId) {\n                return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"CharacterNFTMinted - sender: \".concat(sender, \" tokenId: \").concat(tokenId, \"}\"));\n                            if (nftContract) {\n                                console.log(\"Your NFT is all done -- see it here: https://testnets.opensea.io/assets/\".concat(_config_constants_origamiSwords__WEBPACK_IMPORTED_MODULE_5__.CONTRACT_ADDRESS, \"/\").concat(tokenId));\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function onNFTMint(sender, tokenId) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (nftContract) {\n            // Setup NFT Minted Listener\n            nftContract.on(\"NewOrigamiNFTMinted\", onNFTMint);\n        }\n        return function() {\n            // When your component unmounts, let's make sure to clean up this listener\n            if (nftContract) {\n                nftContract.off(\"NewOrigamiNFTMinted\", onNFTMint);\n            }\n        };\n    }, [\n        nftContract\n    ]);\n    var minNft = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var txn;\n            return _Users_jeffyeung_Projects_nft_collection_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (!nftContract) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return nftContract === null || nftContract === void 0 ? void 0 : nftContract.mintOrigamiNFT();\n                    case 4:\n                        txn = _ctx.sent;\n                        _ctx.next = 7;\n                        return txn === null || txn === void 0 ? void 0 : txn.wait();\n                    case 7:\n                        console.log(\"mint txn\", txn);\n                    case 8:\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"error minting nft\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function minNft() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, _this),\n            !currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"cta-button connect-wallet-button\",\n                onClick: connectWalletAction,\n                children: \"Connect Wallet To Get Started\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, _this),\n            currentAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                children: \"\".concat(currentAccount.slice(0, 4), \"...\").concat(currentAccount.slice(-4))\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                lineNumber: 170,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: minNft,\n                children: \"Mint NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: recentlyMintedTokens && recentlyMintedTokens.map(function(nft) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: nft.image,\n                                alt: \"nft image\",\n                                width: 300,\n                                height: 300\n                            }, void 0, false, {\n                                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                                lineNumber: 182,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                children: nft.description\n                            }, void 0, false, {\n                                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                                lineNumber: 183,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, nft.name, true, {\n                        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                        lineNumber: 180,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeffyeung/Projects/nft-collection-frontend/views/Nft/index.tsx\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nft, \"PdgNQrsIedNcS7QB0ISh3ESD3wk=\", false, function() {\n    return [\n        _hooks_useGetTokensByAddress__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useGetRecentlyMintedTokens__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Nft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nft);\nvar _c;\n$RefreshReg$(_c, \"Nft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REMsS0FBQUEsR0FBRztBQTJLVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3ZpZXdzL05mdC9pbmRleC50c3g/NWNjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgb3JpZ2FtaU5GVCBmcm9tIFwiLi4vLi4vY29uZmlnL2FiaS9PcmlnYW1pTkZULmpzb25cIjtcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbnN0YW50cy9vcmlnYW1pU3dvcmRzXCI7XG5pbXBvcnQgeyBPcmlnYW1pTkZUX19mYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3R5cGVjaGFpbi10eXBlc1wiO1xuaW1wb3J0IHsgT3JpZ2FtaU5GVCB9IGZyb20gXCIuLi8uLi90eXBlY2hhaW4tdHlwZXMvY29udHJhY3RzL09yaWdhbWlORlRcIjtcbmltcG9ydCB1c2VHZXRUb2tlbnNCeUFkZHJlc3MgZnJvbSBcIi4vaG9va3MvdXNlR2V0VG9rZW5zQnlBZGRyZXNzXCI7XG5pbXBvcnQgdXNlR2V0UmVjZW50bHlNaW50ZWRUb2tlbnMgZnJvbSBcIi4vaG9va3MvdXNlR2V0UmVjZW50bHlNaW50ZWRUb2tlbnNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBldGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgTmZ0OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25mdENvbnRyYWN0LCBzZXROZnRDb250cmFjdF0gPSB1c2VTdGF0ZTxPcmlnYW1pTkZUPigpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWNjb3VudHMgPSAoYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcbiAgICAgIH0pKSBhcyBzdHJpbmdbXTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIsIGFjY291bnQpO1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0QWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50cyA9IChhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgIH0pKSBhcyBzdHJpbmdbXTtcblxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZFwiLCBhY2NvdW50c1swXSk7XG4gICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIFdhbGxldCBjb25uZWN0aW9uIGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKCk7XG4gICAgY29ubmVjdFdhbGxldEFjdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgLy8gR2V0IGNvbnRyYWN0IG9uIGNvbXBvbmVudCBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0gYXMgYW55KTtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgY29uc3Qgb3JpZ2FtaU5GVENvbnRyYWN0ID0gT3JpZ2FtaU5GVF9fZmFjdG9yeS5jb25uZWN0KFxuICAgICAgICBDT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG5cbiAgICAgIHNldE5mdENvbnRyYWN0KG9yaWdhbWlORlRDb250cmFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXRoZXJldW0gb2JqZWN0IG5vIGZvdW5kXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgbmZ0T2JqZWN0cyB9ID0gdXNlR2V0VG9rZW5zQnlBZGRyZXNzKFxuICAgIG5mdENvbnRyYWN0IGFzIE9yaWdhbWlORlQsXG4gICAgY3VycmVudEFjY291bnRcbiAgKTtcblxuICBjb25zdCB7IHJlY2VudGx5TWludGVkVG9rZW5zIH0gPSB1c2VHZXRSZWNlbnRseU1pbnRlZFRva2VucyhcbiAgICBuZnRDb250cmFjdCBhcyBPcmlnYW1pTkZUXG4gICk7XG4gIGNvbnNvbGUubG9nKFwiZ2V0IHJlY2VudGx5IG1pbnRlZCB0b2tlbnNcIiwgcmVjZW50bHlNaW50ZWRUb2tlbnMpO1xuXG4gIC8vIENvbnRyYWN0IGVmZmVjdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvbk5GVE1pbnQgPSBhc3luYyAoc2VuZGVyOiBzdHJpbmcsIHRva2VuSWQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBDaGFyYWN0ZXJORlRNaW50ZWQgLSBzZW5kZXI6ICR7c2VuZGVyfSB0b2tlbklkOiAke3Rva2VuSWR9fWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChuZnRDb250cmFjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgWW91ciBORlQgaXMgYWxsIGRvbmUgLS0gc2VlIGl0IGhlcmU6IGh0dHBzOi8vdGVzdG5ldHMub3BlbnNlYS5pby9hc3NldHMvJHtDT05UUkFDVF9BRERSRVNTfS8ke3Rva2VuSWR9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgIC8vIFNldHVwIE5GVCBNaW50ZWQgTGlzdGVuZXJcbiAgICAgIG5mdENvbnRyYWN0Lm9uKFwiTmV3T3JpZ2FtaU5GVE1pbnRlZFwiLCBvbk5GVE1pbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBXaGVuIHlvdXIgY29tcG9uZW50IHVubW91bnRzLCBsZXQncyBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgdGhpcyBsaXN0ZW5lclxuXG4gICAgICBpZiAobmZ0Q29udHJhY3QpIHtcbiAgICAgICAgbmZ0Q29udHJhY3Qub2ZmKFwiTmV3T3JpZ2FtaU5GVE1pbnRlZFwiLCBvbk5GVE1pbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtuZnRDb250cmFjdF0pO1xuXG4gIGNvbnN0IG1pbk5mdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKG5mdENvbnRyYWN0KSB7XG4gICAgICAgIGxldCB0eG4gPSBhd2FpdCBuZnRDb250cmFjdD8ubWludE9yaWdhbWlORlQoKTtcbiAgICAgICAgYXdhaXQgdHhuPy53YWl0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWludCB0eG5cIiwgdHhuKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBtaW50aW5nIG5mdFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHshY3VycmVudEFjY291bnQgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3RhLWJ1dHRvbiBjb25uZWN0LXdhbGxldC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRBY3Rpb259XG4gICAgICAgID5cbiAgICAgICAgICBDb25uZWN0IFdhbGxldCBUbyBHZXQgU3RhcnRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7Y3VycmVudEFjY291bnQgJiYgKFxuICAgICAgICA8c3Bhbj57YCR7Y3VycmVudEFjY291bnQuc2xpY2UoMCwgNCl9Li4uJHtjdXJyZW50QWNjb3VudC5zbGljZShcbiAgICAgICAgICAtNFxuICAgICAgICApfWB9PC9zcGFuPlxuICAgICAgKX1cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW5OZnR9Pk1pbnQgTkZUPC9idXR0b24+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge3JlY2VudGx5TWludGVkVG9rZW5zICYmXG4gICAgICAgICAgcmVjZW50bHlNaW50ZWRUb2tlbnMubWFwKChuZnQpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e25mdC5uYW1lfT5cbiAgICAgICAgICAgICAgPGgzPntuZnQubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtuZnQuaW1hZ2V9IGFsdD1cIm5mdCBpbWFnZVwiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICAgICAgICA8aDU+e25mdC5kZXNjcmlwdGlvbn08L2g1PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZnQ7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJDT05UUkFDVF9BRERSRVNTIiwiT3JpZ2FtaU5GVF9fZmFjdG9yeSIsInVzZUdldFRva2Vuc0J5QWRkcmVzcyIsInVzZUdldFJlY2VudGx5TWludGVkVG9rZW5zIiwiTmZ0IiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsIm5mdENvbnRyYWN0Iiwic2V0TmZ0Q29udHJhY3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJldGhlcmV1bSIsImFjY291bnRzIiwiYWNjb3VudCIsIndpbmRvdyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0QWN0aW9uIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJvcmlnYW1pTkZUQ29udHJhY3QiLCJjb25uZWN0IiwibmZ0T2JqZWN0cyIsInJlY2VudGx5TWludGVkVG9rZW5zIiwib25ORlRNaW50Iiwic2VuZGVyIiwidG9rZW5JZCIsIm9uIiwib2ZmIiwibWluTmZ0IiwidHhuIiwibWludE9yaWdhbWlORlQiLCJ3YWl0IiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwic2xpY2UiLCJ1bCIsIm1hcCIsIm5mdCIsImxpIiwiaDMiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/Nft/index.tsx\n"));

/***/ })

});