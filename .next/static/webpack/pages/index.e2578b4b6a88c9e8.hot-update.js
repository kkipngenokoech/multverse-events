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
  /***/ "./src/speaker/accordion.js":
    /*!**********************************!*\
  !*** ./src/speaker/accordion.js ***!
  \**********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ SessionAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/index.js");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/index.js");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/index.js");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SessionAccordion(param) {\n    let { sessions } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { title, eventYear, room } = sessions[0];\n    console.log(title);\n    console.log(sessions[0]);\n    const handleChange = (panel)=>(event, isExpanded)=>{\n            setExpanded(isExpanded ? panel : false);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {\n            expanded: expanded === "panel1",\n            onChange: handleChange("panel1"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                    expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, void 0, void 0),\n                    "aria-controls": "panel1bh-content",\n                    id: "panel1bh-header",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                width: "33%",\n                                flexShrink: 0\n                            },\n                            children: eventYear\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                color: "text.secondary"\n                            },\n                            children: room\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                        children: title\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SessionAccordion, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");\n_c = SessionAccordion;\nvar _c;\n$RefreshReg$(_c, "SessionAccordion");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlci9hY2NvcmRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2M7QUFDQTtBQUNaO0FBQ1U7QUFDM0I7QUFFbEIsU0FBU00saUJBQWlCLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBQ0ssS0FBSyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBQyxHQUFHTCxRQUFRLENBQUMsRUFBRTtJQUM1Q00sUUFBUUMsR0FBRyxDQUFDSjtJQUNaRyxRQUFRQyxHQUFHLENBQUNQLFFBQVEsQ0FBQyxFQUFFO0lBRXZCLE1BQU1RLGVBQWUsQ0FBQ0MsUUFBVSxDQUFDQyxPQUFPQztZQUN0Q1QsWUFBWVMsYUFBYUYsUUFBUTtRQUNuQztJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ25CLCtEQUFTQTtZQUFDUSxVQUFVQSxhQUFhO1lBQVVZLFVBQVVMLGFBQWE7OzhCQUNqRSw4REFBQ2Isc0VBQWdCQTtvQkFDZm1CLDBCQUFZLDhEQUFDakIsc0VBQWNBO29CQUMzQmtCLGlCQUFjO29CQUNkQyxJQUFHOztzQ0FFSCw4REFBQ3BCLGdFQUFVQTs0QkFBQ3FCLElBQUk7Z0NBQUVDLE9BQU87Z0NBQU9DLFlBQVk7NEJBQUU7c0NBQzNDZjs7Ozs7O3NDQUVILDhEQUFDUixnRUFBVUE7NEJBQUNxQixJQUFJO2dDQUFFRyxPQUFPOzRCQUFpQjtzQ0FDdkNmOzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNYLHNFQUFnQkE7OEJBQ2YsNEVBQUNFLGdFQUFVQTtrQ0FDUk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYjtHQWxDd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zcGVha2VyL2FjY29yZGlvbi5qcz9lNGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvbkFjY29yZGlvbih7c2Vzc2lvbnN9KSB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7dGl0bGUsIGV2ZW50WWVhciwgcm9vbX0gPSBzZXNzaW9uc1swXVxuICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgY29uc29sZS5sb2coc2Vzc2lvbnNbMF0pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIGlzRXhwYW5kZWQpID0+IHtcbiAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEFjY29yZGlvbiBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDEnfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYW5lbDEnKX0+XG4gICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFiaC1jb250ZW50XCJcbiAgICAgICAgICBpZD1cInBhbmVsMWJoLWhlYWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyB3aWR0aDogJzMzJScsIGZsZXhTaHJpbms6IDAgfX0+XG4gICAgICAgICAgICB7ZXZlbnRZZWFyfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgIHtyb29tfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvblN1bW1hcnkiLCJUeXBvZ3JhcGh5IiwiRXhwYW5kTW9yZUljb24iLCJ1c2VTdGF0ZSIsIlNlc3Npb25BY2NvcmRpb24iLCJzZXNzaW9ucyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ0aXRsZSIsImV2ZW50WWVhciIsInJvb20iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJkaXYiLCJvbkNoYW5nZSIsImV4cGFuZEljb24iLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJzeCIsIndpZHRoIiwiZmxleFNocmluayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/speaker/accordion.js\n',
        ),
      );

      /***/
    },
});