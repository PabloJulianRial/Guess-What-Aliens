"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gameboard/page",{

/***/ "(app-pages-browser)/./components/Timer.jsx":
/*!******************************!*\
  !*** ./components/Timer.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Timer() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [minutes, setMinutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let timer;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        timer = setInterval(()=>{\n            setSeconds(seconds + 1);\n            if (seconds === 59) {\n                setMinutes(minutes + 1);\n                setSeconds(0);\n            }\n        }, 1000);\n        return ()=>clearInterval(timer);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Timer\"\n            }, void 0, false, {\n                fileName: \"/Users/user/northcoders/Front-End2/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    minutes,\n                    \":\",\n                    String(seconds).length < 3 && 0,\n                    seconds\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/northcoders/Front-End2/guess-what-fe/components/Timer.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/northcoders/Front-End2/guess-what-fe/components/Timer.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Timer, \"3uWEPmHKPqr5lFyJfk/Nhvo1Ewk=\");\n_c = Timer;\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGltZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxJQUFJTTtJQUVKUCxnREFBU0EsQ0FBQztRQUNSTyxRQUFRQyxZQUFZO1lBQ2xCSixXQUFXRCxVQUFVO1lBRXJCLElBQUlBLFlBQVksSUFBSTtnQkFDbEJHLFdBQVdELFVBQVU7Z0JBQ3JCRCxXQUFXO1lBQ2I7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNSyxjQUFjRjtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNBOztvQkFDRU47b0JBQVE7b0JBQUVPLE9BQU9ULFNBQVNVLE1BQU0sR0FBRyxLQUFLO29CQUN4Q1Y7Ozs7Ozs7Ozs7Ozs7QUFJVDtHQTVCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGltZXIuanN4Pzg0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXIoKSB7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKTtcblxuICBsZXQgdGltZXI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFNlY29uZHMoc2Vjb25kcyArIDEpO1xuXG4gICAgICBpZiAoc2Vjb25kcyA9PT0gNTkpIHtcbiAgICAgICAgc2V0TWludXRlcyhtaW51dGVzICsgMSk7XG4gICAgICAgIHNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5UaW1lcjwvaDE+XG4gICAgICA8aDE+XG4gICAgICAgIHttaW51dGVzfTp7U3RyaW5nKHNlY29uZHMpLmxlbmd0aCA8IDMgJiYgMH1cbiAgICAgICAge3NlY29uZHN9XG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaW1lciIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImgxIiwiU3RyaW5nIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Timer.jsx\n"));

/***/ })

});