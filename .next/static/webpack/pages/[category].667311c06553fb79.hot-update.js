"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[category]",{

/***/ "./components/layouts/ClientLayout.js":
/*!********************************************!*\
  !*** ./components/layouts/ClientLayout.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head.js */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _stores_actions_actionCategory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/actions/actionCategory.js */ \"./stores/actions/actionCategory.js\");\n/* harmony import */ var _common_client_NavBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/client/NavBar.js */ \"./components/common/client/NavBar.js\");\n/* harmony import */ var _common_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Footer.js */ \"./components/common/Footer.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ClientLayout = function(param) {\n    var children = param.children;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var categorys = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.reducerCategory;\n    }).categorys;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_stores_actions_actionCategory_js__WEBPACK_IMPORTED_MODULE_4__.actionCategoryGets)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head_js__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        content: \"INDEX,FOLLOW\",\n                        name: \"robots\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"copyright\",\n                        content: \"website tin tức hanoitime.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"website tin tức hanoitime.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        \"http-equiv\": \"audience\",\n                        content: \"General\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"resource-type\",\n                        content: \"Document\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"distribution\",\n                        content: \"Global\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"revisit-after\",\n                        content: \"1 days\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"GENERATOR\",\n                        content: \"website tin tức hanoitime.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        \"http-equiv\": \"X-UA-Compatible\",\n                        content: \"IE=edge,chrome=1\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"hanoitimes.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"vi_VN\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"fb:pages\",\n                        content: \"214993791879039\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        \"http-equiv\": \"x-dns-prefetch-control\",\n                        content: \"on\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_client_NavBar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: categorys\n            }, void 0, false, {\n                fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container m-auto\",\n                children: children\n            }, void 0, false, {\n                fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Footer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: categorys\n            }, void 0, false, {\n                fileName: \"E:\\\\evanto\\\\1.news paper\\\\app\\\\components\\\\layouts\\\\ClientLayout.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ClientLayout, \"4W1pkeUFlOoiT7j/6E7bWMab1Ss=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = ClientLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientLayout);\nvar _c;\n$RefreshReg$(_c, \"ClientLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvQ2xpZW50TGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFnQztBQUNTO0FBQ2M7QUFDcUI7QUFFNUI7QUFDUDtBQUV6QyxJQUFNUSxZQUFZLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDOUIsSUFBTUMsUUFBUSxHQUFHUCx3REFBVyxFQUFFO0lBQzlCLElBQU0sU0FBVyxHQUFLQyx3REFBVyxDQUFDLFNBQUNRLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxlQUFlO0tBQUEsQ0FBQyxDQUEzREYsU0FBUztJQUdqQlQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RRLFFBQVEsQ0FBQ0wscUZBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFOzswQkFDRSw4REFBQ0wscURBQUk7O2tDQUVELDhEQUFDYyxNQUFJO3dCQUFDQyxPQUFPLEVBQUMsY0FBYzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7Ozs7OzZCQUFHO2tDQUM3Qyw4REFBQ0YsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLFVBQVU7d0JBQUNELE9BQU8sRUFBQyxvQkFBb0I7Ozs7OzZCQUFHO2tDQUNyRCw4REFBQ0QsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLFdBQVc7d0JBQUNELE9BQU8sRUFBQywrQkFBK0I7Ozs7OzZCQUFHO2tDQUNqRSw4REFBQ0QsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLFFBQVE7d0JBQUNELE9BQU8sRUFBQywrQkFBK0I7Ozs7OzZCQUFHO2tDQUM5RCw4REFBQ0QsTUFBSTt3QkFBQ0csWUFBVSxFQUFDLFVBQVU7d0JBQUNGLE9BQU8sRUFBQyxTQUFTOzs7Ozs2QkFBRztrQ0FDaEQsOERBQUNELE1BQUk7d0JBQUNFLElBQUksRUFBQyxlQUFlO3dCQUFDRCxPQUFPLEVBQUMsVUFBVTs7Ozs7NkJBQUc7a0NBQ2hELDhEQUFDRCxNQUFJO3dCQUFDRSxJQUFJLEVBQUMsY0FBYzt3QkFBQ0QsT0FBTyxFQUFDLFFBQVE7Ozs7OzZCQUFHO2tDQUM3Qyw4REFBQ0QsTUFBSTt3QkFBQ0UsSUFBSSxFQUFDLGVBQWU7d0JBQUNELE9BQU8sRUFBQyxRQUFROzs7Ozs2QkFBRztrQ0FDOUMsOERBQUNELE1BQUk7d0JBQUNFLElBQUksRUFBQyxXQUFXO3dCQUFDRCxPQUFPLEVBQUMsK0JBQStCOzs7Ozs2QkFBRztrQ0FDakUsOERBQUNELE1BQUk7d0JBQUNHLFlBQVUsRUFBQyxpQkFBaUI7d0JBQUNGLE9BQU8sRUFBQyxrQkFBa0I7Ozs7OzZCQUFHO2tDQUNoRSw4REFBQ0QsTUFBSTt3QkFBQ0ksUUFBUSxFQUFDLGNBQWM7d0JBQUNILE9BQU8sRUFBQyxnQkFBZ0I7Ozs7OzZCQUFHO2tDQUN6RCw4REFBQ0QsTUFBSTt3QkFBQ0ksUUFBUSxFQUFDLFNBQVM7d0JBQUNILE9BQU8sRUFBQyxTQUFTOzs7Ozs2QkFBRztrQ0FDN0MsOERBQUNELE1BQUk7d0JBQUNJLFFBQVEsRUFBQyxXQUFXO3dCQUFDSCxPQUFPLEVBQUMsT0FBTzs7Ozs7NkJBQUc7a0NBQzdDLDhEQUFDRCxNQUFJO3dCQUFDSSxRQUFRLEVBQUMsVUFBVTt3QkFBQ0gsT0FBTyxFQUFDLGlCQUFpQjs7Ozs7NkJBQUc7a0NBQ3RELDhEQUFDRCxNQUFJO3dCQUFDRyxZQUFVLEVBQUMsd0JBQXdCO3dCQUFDRixPQUFPLEVBQUMsSUFBSTs7Ozs7NkJBQVE7Ozs7OztxQkFFM0Q7MEJBQ1AsOERBQUNULGdFQUFNO2dCQUFDYSxJQUFJLEVBQUVSLFNBQVM7Ozs7O3FCQUFJOzBCQUMzQiw4REFBQ1MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjswQkFBRVosUUFBUTs7Ozs7cUJBQVE7MEJBQ3BELDhEQUFDRix5REFBTTtnQkFBQ1ksSUFBSSxFQUFFUixTQUFTOzs7OztxQkFBSTs7b0JBQzFCLENBQ0g7QUFDSixDQUFDO0dBbENLSCxZQUFZOztRQUNDTCxvREFBVztRQUNOQyxvREFBVzs7O0FBRjdCSSxLQUFBQSxZQUFZO0FBb0NsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9DbGllbnRMYXlvdXQuanM/OTU0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkLmpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFjdGlvbkNhdGVnb3J5R2V0cyB9IGZyb20gXCIuLi8uLi9zdG9yZXMvYWN0aW9ucy9hY3Rpb25DYXRlZ29yeS5qc1wiO1xyXG5cclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tbW9uL2NsaWVudC9OYXZCYXIuanNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tbW9uL0Zvb3Rlci5qc1wiO1xyXG5cclxuY29uc3QgQ2xpZW50TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGNhdGVnb3J5cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZWR1Y2VyQ2F0ZWdvcnkpO1xyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWN0aW9uQ2F0ZWdvcnlHZXRzKCkpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgIFxyXG4gICAgICAgICAgPG1ldGEgY29udGVudD1cIklOREVYLEZPTExPV1wiIG5hbWU9XCJyb2JvdHNcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiY29weXJpZ2h0XCIgY29udGVudD1cIndlYnNpdGUgdGluIHThu6ljIGhhbm9pdGltZS5jb21cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJ3ZWJzaXRlIHRpbiB04bupYyBoYW5vaXRpbWUuY29tXCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJhdWRpZW5jZVwiIGNvbnRlbnQ9XCJHZW5lcmFsXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyZXNvdXJjZS10eXBlXCIgY29udGVudD1cIkRvY3VtZW50XCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkaXN0cmlidXRpb25cIiBjb250ZW50PVwiR2xvYmFsXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyZXZpc2l0LWFmdGVyXCIgY29udGVudD1cIjEgZGF5c1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiR0VORVJBVE9SXCIgY29udGVudD1cIndlYnNpdGUgdGluIHThu6ljIGhhbm9pdGltZS5jb21cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlLGNocm9tZT0xXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cImhhbm9pdGltZXMuY29tXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cInZpX1ZOXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6cGFnZXNcIiBjb250ZW50PVwiMjE0OTkzNzkxODc5MDM5XCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJ4LWRucy1wcmVmZXRjaC1jb250cm9sXCIgY29udGVudD1cIm9uXCI+PC9tZXRhPlxyXG4gICAgXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdkJhciBkYXRhPXtjYXRlZ29yeXN9IC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIGRhdGE9e2NhdGVnb3J5c30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiYWN0aW9uQ2F0ZWdvcnlHZXRzIiwiTmF2QmFyIiwiRm9vdGVyIiwiQ2xpZW50TGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImNhdGVnb3J5cyIsInN0YXRlIiwicmVkdWNlckNhdGVnb3J5IiwibWV0YSIsImNvbnRlbnQiLCJuYW1lIiwiaHR0cC1lcXVpdiIsInByb3BlcnR5IiwiZGF0YSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/ClientLayout.js\n"));

/***/ })

});