"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./src/speaker/speaker.js":
    /*!********************************!*\
  !*** ./src/speaker/speaker.js ***!
  \********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ SpeakerCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/index.js");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/speaker/accordion.js");\n\n\n\n\n\n\n\n\n\nfunction SpeakerCard(param) {\n    let { profile } = param;\n    const { id, first, last, company, favorite, twitterHandle, sessions, bio } = profile;\n    console.log(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        sx: {\n            maxWidth: 345\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {\n                sx: {\n                    height: 200\n                },\n                image: "/images/speaker-".concat(1001, ".webp"),\n                title: "".concat(first, " ").concat(last)\n            }, void 0, false, {\n                fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                        gutterBottom: true,\n                        variant: "h5",\n                        component: "div",\n                        children: [\n                            first,\n                            " ",\n                            last\n                        ]\n                    }, void 0, true, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                        variant: "body2",\n                        color: "text.secondary",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                    profile: true\n                }, void 0, false, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__["default"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {\n                        size: "small",\n                        children: "Share"\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {\n                        size: "small",\n                        children: "Learn More"\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/the/Documents/programming/next/src/speaker/speaker.js",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = SpeakerCard;\nvar _c;\n$RefreshReg$(_c, "SpeakerCard");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlci9zcGVha2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUNjO0FBQ0E7QUFDSjtBQUNOO0FBQ1E7QUFDUDtBQUU1QixTQUFTUSxZQUFZLEtBQVM7UUFBVCxFQUFDQyxPQUFPLEVBQUMsR0FBVDtJQUNoQyxNQUFNLEVBQUNDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFDLEdBQUdSO0lBQzNFUyxRQUFRQyxHQUFHLENBQUNUO0lBQ2QscUJBQ0UsOERBQUNULDBEQUFJQTtRQUFDbUIsSUFBSTtZQUFFQyxVQUFVO1FBQUk7OzBCQUN4Qiw4REFBQ2pCLCtEQUFTQTtnQkFDUmdCLElBQUk7b0JBQUVFLFFBQVE7Z0JBQUk7Z0JBQ2xCQyxPQUFPLG1CQUF3QixPQUFMLE1BQUs7Z0JBQy9CQyxPQUFPLEdBQVlaLE9BQVRELE9BQU0sS0FBUSxPQUFMQzs7Ozs7OzBCQUVyQiw4REFBQ1QsaUVBQVdBOztrQ0FDViw4REFBQ0csZ0VBQVVBO3dCQUFDbUIsWUFBWTt3QkFBQ0MsU0FBUTt3QkFBS0MsV0FBVTs7NEJBQzdDaEI7NEJBQU07NEJBQUVDOzs7Ozs7O2tDQUVYLDhEQUFDTixnRUFBVUE7d0JBQUNvQixTQUFRO3dCQUFRRSxPQUFNO2tDQUMvQlg7Ozs7Ozs7Ozs7OzswQkFHTCw4REFBQ2QsaUVBQVdBOzBCQUNWLDRFQUFDSSxrREFBZ0JBO29CQUFDRSxPQUFPOzs7Ozs7Ozs7OzswQkFFM0IsOERBQUNQLGlFQUFXQTs7a0NBQ1YsOERBQUNHLDREQUFNQTt3QkFBQ3dCLE1BQUs7a0NBQVE7Ozs7OztrQ0FDckIsOERBQUN4Qiw0REFBTUE7d0JBQUN3QixNQUFLO2tDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0I7S0EzQndCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXIvc3BlYWtlci5qcz8yY2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBTZXNzaW9uQWNjb3JkaW9uIGZyb20gJy4vYWNjb3JkaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlckNhcmQoe3Byb2ZpbGV9KSB7XG4gICAgY29uc3Qge2lkLCBmaXJzdCwgbGFzdCwgY29tcGFueSwgZmF2b3JpdGUsIHR3aXR0ZXJIYW5kbGUsIHNlc3Npb25zLCBiaW99ID0gcHJvZmlsZVxuICAgIGNvbnNvbGUubG9nKGlkKVxuICByZXR1cm4gKFxuICAgIDxDYXJkIHN4PXt7IG1heFdpZHRoOiAzNDUgfX0+XG4gICAgICA8Q2FyZE1lZGlhXG4gICAgICAgIHN4PXt7IGhlaWdodDogMjAwIH19XG4gICAgICAgIGltYWdlPXtgL2ltYWdlcy9zcGVha2VyLSR7MTAwMX0ud2VicGB9XG4gICAgICAgIHRpdGxlPXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2Jpb31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFNlc3Npb25BY2NvcmRpb24gcHJvZmlsZS8+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPlNoYXJlPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+TGVhcm4gTW9yZTwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJTZXNzaW9uQWNjb3JkaW9uIiwiU3BlYWtlckNhcmQiLCJwcm9maWxlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJjb21wYW55IiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwic2Vzc2lvbnMiLCJiaW8iLCJjb25zb2xlIiwibG9nIiwic3giLCJtYXhXaWR0aCIsImhlaWdodCIsImltYWdlIiwidGl0bGUiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/speaker/speaker.js\n',
        ),
      );

      /***/
    },
});
