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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ SessionAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/index.js");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/index.js");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/index.js");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SessionAccordion(param) {\n    let { sessions } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { title, eventYear } = sessions[0];\n    console.log(title);\n    console.log(sessions[0]);\n    const handleChange = (panel)=>(event, isExpanded)=>{\n            setExpanded(isExpanded ? panel : false);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {\n            expanded: expanded === "panel1",\n            onChange: handleChange("panel1"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                    expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, void 0, void 0),\n                    "aria-controls": "panel1bh-content",\n                    id: "panel1bh-header",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                width: "33%",\n                                flexShrink: 0\n                            },\n                            children: eventYear\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                color: "text.secondary"\n                            }\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                        children: title\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SessionAccordion, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");\n_c = SessionAccordion;\nvar _c;\n$RefreshReg$(_c, "SessionAccordion");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlci9hY2NvcmRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2M7QUFDQTtBQUNaO0FBQ1U7QUFDM0I7QUFFbEIsU0FBU00saUJBQWlCLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBQ0ssS0FBSyxFQUFFQyxTQUFTLEVBQUMsR0FBR0osUUFBUSxDQUFDLEVBQUU7SUFDdENLLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWkUsUUFBUUMsR0FBRyxDQUFDTixRQUFRLENBQUMsRUFBRTtJQUV2QixNQUFNTyxlQUFlLENBQUNDLFFBQVUsQ0FBQ0MsT0FBT0M7WUFDdENSLFlBQVlRLGFBQWFGLFFBQVE7UUFDbkM7SUFFQSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNsQiwrREFBU0E7WUFBQ1EsVUFBVUEsYUFBYTtZQUFVVyxVQUFVTCxhQUFhOzs4QkFDakUsOERBQUNaLHNFQUFnQkE7b0JBQ2ZrQiwwQkFBWSw4REFBQ2hCLHNFQUFjQTtvQkFDM0JpQixpQkFBYztvQkFDZEMsSUFBRzs7c0NBRUgsOERBQUNuQixnRUFBVUE7NEJBQUNvQixJQUFJO2dDQUFFQyxPQUFPO2dDQUFPQyxZQUFZOzRCQUFFO3NDQUMzQ2Q7Ozs7OztzQ0FFSCw4REFBQ1IsZ0VBQVVBOzRCQUFDb0IsSUFBSTtnQ0FBRUcsT0FBTzs0QkFBaUI7Ozs7Ozs7Ozs7Ozs4QkFJNUMsOERBQUN6QixzRUFBZ0JBOzhCQUNmLDRFQUFDRSxnRUFBVUE7a0NBQ1JPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2I7R0FsQ3dCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3BlYWtlci9hY2NvcmRpb24uanM/ZTRkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWNjb3JkaW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlc3Npb25BY2NvcmRpb24oe3Nlc3Npb25zfSkge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RpdGxlLCBldmVudFllYXJ9ID0gc2Vzc2lvbnNbMF1cbiAgY29uc29sZS5sb2codGl0bGUpXG4gIGNvbnNvbGUubG9nKHNlc3Npb25zWzBdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBY2NvcmRpb24gZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwxJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwxJyl9PlxuICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYmgtY29udGVudFwiXG4gICAgICAgICAgaWQ9XCJwYW5lbDFiaC1oZWFkZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgd2lkdGg6ICczMyUnLCBmbGV4U2hyaW5rOiAwIH19PlxuICAgICAgICAgICAge2V2ZW50WWVhcn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIkFjY29yZGlvbkRldGFpbHMiLCJBY2NvcmRpb25TdW1tYXJ5IiwiVHlwb2dyYXBoeSIsIkV4cGFuZE1vcmVJY29uIiwidXNlU3RhdGUiLCJTZXNzaW9uQWNjb3JkaW9uIiwic2Vzc2lvbnMiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwidGl0bGUiLCJldmVudFllYXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJkaXYiLCJvbkNoYW5nZSIsImV4cGFuZEljb24iLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJzeCIsIndpZHRoIiwiZmxleFNocmluayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/speaker/accordion.js\n',
        ),
      );

      /***/
    },
});
