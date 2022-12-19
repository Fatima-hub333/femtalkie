"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// interface IProps {\n//   videos: \n// }\nconst Home = ({ videos  })=>{\n    console.log(videos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-3xl font-bold underline\",\n        children: \"Hello world!\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Microverse_Local_files\\\\femtalkie\\\\pages\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 4\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://localhost:3000/api/post`);\n    return {\n        props: {\n            videos: data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDeUI7QUFFekIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixJQUFJO0FBRUosTUFBTUMsSUFBSSxHQUFhLENBQUMsRUFBRUMsTUFBTSxHQUFFLEdBQUs7SUFDckNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7SUFDbkIscUJBQ0MsOERBQUNHLElBQUU7UUFBQ0MsU0FBUyxFQUFDLDhCQUE4QjtrQkFBQyxjQUU1Qzs7Ozs7aUJBQUssQ0FFTjtDQUNGO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUcsVUFBWTtJQUM1QyxNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHLE1BQU1SLGdEQUFTLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2hFLE9BQU87UUFDTFUsS0FBSyxFQUFFO1lBQ0xSLE1BQU0sRUFBRU0sSUFBSTtTQUNiO0tBQ0Y7Q0FDRjtBQUVELGlFQUFlUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVtdGFsa2llLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIGludGVyZmFjZSBJUHJvcHMge1xuLy8gICB2aWRlb3M6IFxuLy8gfVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICh7IHZpZGVvcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHZpZGVvcylcbiAgcmV0dXJuIChcbiAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdW5kZXJsaW5lXCI+XG4gICAgICBIZWxsbyB3b3JsZCFcbiAgICA8L2gxPlxuXG4gIClcbn1cbiBcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0YCk7IFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aWRlb3M6IGRhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSG9tZSIsInZpZGVvcyIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImNsYXNzTmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImRhdGEiLCJnZXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();