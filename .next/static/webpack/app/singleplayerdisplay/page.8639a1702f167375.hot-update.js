"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/singleplayerdisplay/page",{

/***/ "(app-pages-browser)/./components/AlienCard.jsx":
/*!**********************************!*\
  !*** ./components/AlienCard.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlienCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction AlienCard(param) {\n    let { alien, setAlienObjects } = param;\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClickFn = ()=>{\n        if (!clicked) {\n            setClicked(true);\n            alien.isActive = false;\n            console.log(alien._id);\n        } else {\n            setClicked(false);\n            alien.isActive = true;\n            console.log(alien._id);\n        }\n    // Also Edit alien object to set \n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: clicked ? \"inactive\" : \"aliencard\",\n        onClick: ()=>{\n            handleClickFn();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"alien-body\",\n                src: \"assets/alien-layers/body-\".concat(alien.skinColour, \"-\").concat(alien.skinTexture, \".png\")\n            }, void 0, false, {\n                fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"alien-eyes\",\n                src: \"assets/alien-layers/eyes-\".concat(alien.eyeColour, \"-\").concat(alien.eyes, \".png\")\n            }, void 0, false, {\n                fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"alien-mouth\",\n                src: \"assets/alien-layers/mouth-\".concat(alien.isFriendly ? \"friendly\" : \"unfriendly-a\", \".png\")\n            }, void 0, false, {\n                fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            alien.horns ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"alien-horns\",\n                src: \"assets/alien-layers/horns-\".concat(alien.horns, \".png\")\n            }, void 0, false, {\n                fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n                lineNumber: 39,\n                columnNumber: 22\n            }, this) : null,\n            alien.hasAntenna ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"alien-antenna\",\n                src: \"assets/alien-layers/antenna.png\"\n            }, void 0, false, {\n                fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mike/Documents/Northcoders/Project-phase/guess-what-fe/components/AlienCard.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(AlienCard, \"NL05b5J4z4O/U6wEzhVGl+YEdv8=\");\n_c = AlienCard;\nvar _c;\n$RefreshReg$(_c, \"AlienCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWxpZW5DYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0MsVUFBVSxLQUEwQjtRQUExQixFQUFFQyxLQUFLLEVBQUVDLGVBQWUsRUFBRSxHQUExQjs7SUFHaEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1NLGdCQUFnQjtRQUNwQixJQUFJLENBQUNGLFNBQVM7WUFDWkMsV0FBVztZQUNYSCxNQUFNSyxRQUFRLEdBQUc7WUFDakJDLFFBQVFDLEdBQUcsQ0FBQ1AsTUFBTVEsR0FBRztRQUN2QixPQUFPO1lBQ0xMLFdBQVc7WUFDWEgsTUFBTUssUUFBUSxHQUFHO1lBQ2pCQyxRQUFRQyxHQUFHLENBQUNQLE1BQU1RLEdBQUc7UUFDdkI7SUFDQSxpQ0FBaUM7SUFDbkM7SUFJQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1IsVUFBVSxhQUFhO1FBQWFTLFNBQVM7WUFBS1A7UUFBZTs7MEJBQy9FLDhEQUFDUTtnQkFDQ0YsV0FBVTtnQkFDVkcsS0FBSyw0QkFBZ0RiLE9BQXBCQSxNQUFNYyxVQUFVLEVBQUMsS0FBcUIsT0FBbEJkLE1BQU1lLFdBQVcsRUFBQzs7Ozs7OzBCQUV6RSw4REFBQ0g7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLEtBQUssNEJBQStDYixPQUFuQkEsTUFBTWdCLFNBQVMsRUFBQyxLQUFjLE9BQVhoQixNQUFNaUIsSUFBSSxFQUFDOzs7Ozs7MEJBRWpFLDhEQUFDTDtnQkFDQ0YsV0FBVTtnQkFDVkcsS0FBSyw2QkFFSixPQURDYixNQUFNa0IsVUFBVSxHQUFHLGFBQWEsZ0JBQ2pDOzs7Ozs7WUFFRmxCLE1BQU1tQixLQUFLLGlCQUFHLDhEQUFDUDtnQkFDZEYsV0FBVTtnQkFDVkcsS0FBSyw2QkFBeUMsT0FBWmIsTUFBTW1CLEtBQUssRUFBQzs7Ozs7dUJBQzNDO1lBQ0puQixNQUFNb0IsVUFBVSxpQkFDZiw4REFBQ1I7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLEtBQUs7Ozs7O3VCQUVMOzs7Ozs7O0FBR1Y7R0FoRHdCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsaWVuQ2FyZC5qc3g/MDcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGllbkNhcmQoeyBhbGllbiwgc2V0QWxpZW5PYmplY3RzIH0pIHtcblxuXG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRm4gPSAoKSA9PiB7XG4gICAgaWYgKCFjbGlja2VkKSB7XG4gICAgICBzZXRDbGlja2VkKHRydWUpXG4gICAgICBhbGllbi5pc0FjdGl2ZSA9IGZhbHNlXG4gICAgICBjb25zb2xlLmxvZyhhbGllbi5faWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENsaWNrZWQoZmFsc2UpXG4gICAgICBhbGllbi5pc0FjdGl2ZSA9IHRydWVcbiAgICAgIGNvbnNvbGUubG9nKGFsaWVuLl9pZClcbiAgICB9XG4gICAgLy8gQWxzbyBFZGl0IGFsaWVuIG9iamVjdCB0byBzZXQgXG4gIH1cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xpY2tlZCA/IFwiaW5hY3RpdmVcIiA6IFwiYWxpZW5jYXJkXCJ9IG9uQ2xpY2s9eygpPT57aGFuZGxlQ2xpY2tGbigpfX0+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImFsaWVuLWJvZHlcIlxuICAgICAgICBzcmM9e2Bhc3NldHMvYWxpZW4tbGF5ZXJzL2JvZHktJHthbGllbi5za2luQ29sb3VyfS0ke2FsaWVuLnNraW5UZXh0dXJlfS5wbmdgfVxuICAgICAgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYWxpZW4tZXllc1wiXG4gICAgICAgIHNyYz17YGFzc2V0cy9hbGllbi1sYXllcnMvZXllcy0ke2FsaWVuLmV5ZUNvbG91cn0tJHthbGllbi5leWVzfS5wbmdgfVxuICAgICAgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwiYWxpZW4tbW91dGhcIlxuICAgICAgICBzcmM9e2Bhc3NldHMvYWxpZW4tbGF5ZXJzL21vdXRoLSR7XG4gICAgICAgICAgYWxpZW4uaXNGcmllbmRseSA/ICdmcmllbmRseScgOiAndW5mcmllbmRseS1hJ1xuICAgICAgICB9LnBuZ2B9XG4gICAgICAvPlxuICAgICAge2FsaWVuLmhvcm5zID8gPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJhbGllbi1ob3Juc1wiXG4gICAgICAgIHNyYz17YGFzc2V0cy9hbGllbi1sYXllcnMvaG9ybnMtJHthbGllbi5ob3Juc30ucG5nYH1cbiAgICAgIC8+IDogbnVsbH1cbiAgICAgIHthbGllbi5oYXNBbnRlbm5hID8gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZW4tYW50ZW5uYVwiXG4gICAgICAgICAgc3JjPXsnYXNzZXRzL2FsaWVuLWxheWVycy9hbnRlbm5hLnBuZyd9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFsaWVuQ2FyZCIsImFsaWVuIiwic2V0QWxpZW5PYmplY3RzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJoYW5kbGVDbGlja0ZuIiwiaXNBY3RpdmUiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsInNraW5Db2xvdXIiLCJza2luVGV4dHVyZSIsImV5ZUNvbG91ciIsImV5ZXMiLCJpc0ZyaWVuZGx5IiwiaG9ybnMiLCJoYXNBbnRlbm5hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AlienCard.jsx\n"));

/***/ })

});