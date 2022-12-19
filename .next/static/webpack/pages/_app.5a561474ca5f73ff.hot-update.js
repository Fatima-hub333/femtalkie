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

/***/ "./components/Discover.tsx":
/*!*********************************!*\
  !*** ./components/Discover.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Discover = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var topic = router.query.topic;\n    var activeTopicStyle = \"xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]\";\n    var topicStyle = \"xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:border-b-2 xl:border-gray-200 pb-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-500 font-semibold m-3 mt-4 hidden xl:block\",\n                children: \"Popular Topics\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 flex-wrap\",\n                children: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.topics.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/?topic=\".concat(item.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: topicStyle,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold text-2xl xl:text-md\",\n                                    children: item.icon\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-medium text-md hidden xl:block capitalize\",\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, _this1)\n                    }, item.name, false, {\n                        fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\components\\\\Discover.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Discover, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Discover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discover);\nvar _c;\n$RefreshReg$(_c, \"Discover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rpc2NvdmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQ0k7QUFDVztBQUNJOztBQUU1QyxJQUFNSSxRQUFRLEdBQUcsV0FBTTs7O0lBQ3JCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFNLEtBQU8sR0FBS0csTUFBTSxDQUFDRSxLQUFLLENBQXRCRCxLQUFLO0lBRWIsSUFBTUUsZ0JBQWdCLEdBQUcseUpBQXlKO0lBQ2xMLElBQU1DLFVBQVUsR0FBRyxvSkFBb0o7SUFFdksscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVDQUF1Qzs7MEJBQ3BELDhEQUFDQyxHQUFDO2dCQUFDRCxTQUFTLEVBQUMsc0RBQXNEOzBCQUFDLGdCQUFjOzs7OztxQkFBSTswQkFDdEYsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7MEJBQ2xDUix3REFBVSxDQUFDLFNBQUNXLElBQUk7eUNBQ2YsOERBQUNiLGtEQUFJO3dCQUFDYyxJQUFJLEVBQUUsVUFBUyxDQUFZLE9BQVZELElBQUksQ0FBQ0UsSUFBSSxDQUFFO2tDQUNoQyw0RUFBQ04sS0FBRzs0QkFBQ0MsU0FBUyxFQUFFRixVQUFVOzs4Q0FDeEIsOERBQUNRLE1BQUk7b0NBQUNOLFNBQVMsRUFBQywrQkFBK0I7OENBQzVDRyxJQUFJLENBQUNJLElBQUk7Ozs7OzBDQUNMOzhDQUNQLDhEQUFDRCxNQUFJO29DQUFDTixTQUFTLEVBQUMsZ0RBQWdEOzhDQUM3REcsSUFBSSxDQUFDRSxJQUFJOzs7OzswQ0FDTDs7Ozs7O2tDQUNIO3VCQVJpQ0YsSUFBSSxDQUFDRSxJQUFJOzs7OzhCQVMzQztpQkFDUixDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBMUJLWixRQUFROztRQUNHRixrREFBUzs7O0FBRHBCRSxLQUFBQSxRQUFRO0FBNEJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlzY292ZXIudHN4P2RmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHRvcGljcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBEaXNjb3ZlciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHRvcGljIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVRvcGljU3R5bGUgPSBcInhsOmJvcmRlci0yIGhvdmVyOmJnLXByaW1hcnkgeGw6Ym9yZGVyLVsjRjUxOTk3XSBweC0zIHB5LTIgcm91bmRlZCB4bDpyb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdGV4dC1bI0Y1MTk5N11cIlxyXG4gIGNvbnN0IHRvcGljU3R5bGUgPSBcInhsOmJvcmRlci0yIGhvdmVyOmJnLXByaW1hcnkgeGw6Ym9yZGVyLWdyYXktMzAwIHB4LTMgcHktMiByb3VuZGVkIHhsOnJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd4bDpib3JkZXItYi0yIHhsOmJvcmRlci1ncmF5LTIwMCBwYi02Jz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQgbS0zIG10LTQgaGlkZGVuIHhsOmJsb2NrJz5Qb3B1bGFyIFRvcGljczwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgZmxleC13cmFwJz5cclxuICAgICAgICB7dG9waWNzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8/dG9waWM9JHtpdGVtLm5hbWV9YH0ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dG9waWNTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwgeGw6dGV4dC1tZCc+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtbWQgaGlkZGVuIHhsOmJsb2NrIGNhcGl0YWxpemUnPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlUm91dGVyIiwidG9waWNzIiwiRGlzY292ZXIiLCJyb3V0ZXIiLCJ0b3BpYyIsInF1ZXJ5IiwiYWN0aXZlVG9waWNTdHlsZSIsInRvcGljU3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImhyZWYiLCJuYW1lIiwic3BhbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Discover.tsx\n");

/***/ })

});