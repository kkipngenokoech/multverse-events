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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ SessionAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/index.js");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/index.js");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/index.js");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SessionAccordion(param) {\n    let { sessions } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { title, eventYear } = sessions[0];\n    console.log(sessions[0]);\n    const handleChange = (panel)=>(event, isExpanded)=>{\n            setExpanded(isExpanded ? panel : false);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {\n            expanded: expanded === "panel1",\n            onChange: handleChange("panel1"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                    expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, void 0, void 0),\n                    "aria-controls": "panel1bh-content",\n                    id: "panel1bh-header",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                width: "33%",\n                                flexShrink: 0\n                            },\n                            children: "General settings"\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                            sx: {\n                                color: "text.secondary"\n                            },\n                            children: "I am an accordion"\n                        }, void 0, false, {\n                            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                        children: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."\n                    }, void 0, false, {\n                        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/home/the/Documents/programming/next/src/speaker/accordion.js",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SessionAccordion, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");\n_c = SessionAccordion;\nvar _c;\n$RefreshReg$(_c, "SessionAccordion");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3BlYWtlci9hY2NvcmRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2M7QUFDQTtBQUNaO0FBQ1U7QUFDM0I7QUFFbEIsU0FBU00saUJBQWlCLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFDdkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBQ0ssS0FBSyxFQUFFQyxTQUFTLEVBQUMsR0FBR0osUUFBUSxDQUFDLEVBQUU7SUFDdENLLFFBQVFDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDLEVBQUU7SUFFdkIsTUFBTU8sZUFBZSxDQUFDQyxRQUFVLENBQUNDLE9BQU9DO1lBQ3RDUixZQUFZUSxhQUFhRixRQUFRO1FBQ25DO0lBRUEscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDbEIsK0RBQVNBO1lBQUNRLFVBQVVBLGFBQWE7WUFBVVcsVUFBVUwsYUFBYTs7OEJBQ2pFLDhEQUFDWixzRUFBZ0JBO29CQUNma0IsMEJBQVksOERBQUNoQixzRUFBY0E7b0JBQzNCaUIsaUJBQWM7b0JBQ2RDLElBQUc7O3NDQUVILDhEQUFDbkIsZ0VBQVVBOzRCQUFDb0IsSUFBSTtnQ0FBRUMsT0FBTztnQ0FBT0MsWUFBWTs0QkFBRTtzQ0FBRzs7Ozs7O3NDQUdqRCw4REFBQ3RCLGdFQUFVQTs0QkFBQ29CLElBQUk7Z0NBQUVHLE9BQU87NEJBQWlCO3NDQUFHOzs7Ozs7Ozs7Ozs7OEJBRS9DLDhEQUFDekIsc0VBQWdCQTs4QkFDZiw0RUFBQ0UsZ0VBQVVBO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBaEN3Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXIvYWNjb3JkaW9uLmpzP2U0ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXNzaW9uQWNjb3JkaW9uKHtzZXNzaW9uc30pIHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0aXRsZSwgZXZlbnRZZWFyfSA9IHNlc3Npb25zWzBdXG4gIGNvbnNvbGUubG9nKHNlc3Npb25zWzBdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBY2NvcmRpb24gZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwxJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwxJyl9PlxuICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYmgtY29udGVudFwiXG4gICAgICAgICAgaWQ9XCJwYW5lbDFiaC1oZWFkZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgd2lkdGg6ICczMyUnLCBmbGV4U2hyaW5rOiAwIH19PlxuICAgICAgICAgICAgR2VuZXJhbCBzZXR0aW5nc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5JIGFtIGFuIGFjY29yZGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIE51bGxhIGZhY2lsaXNpLiBQaGFzZWxsdXMgc29sbGljaXR1ZGluIG51bGxhIGV0IHF1YW0gbWF0dGlzIGZldWdpYXQuXG4gICAgICAgICAgICBBbGlxdWFtIGVnZXQgbWF4aW11cyBlc3QsIGlkIGRpZ25pc3NpbSBxdWFtLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgPC9BY2NvcmRpb24+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIlR5cG9ncmFwaHkiLCJFeHBhbmRNb3JlSWNvbiIsInVzZVN0YXRlIiwiU2Vzc2lvbkFjY29yZGlvbiIsInNlc3Npb25zIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsInRpdGxlIiwiZXZlbnRZZWFyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwiZGl2Iiwib25DaGFuZ2UiLCJleHBhbmRJY29uIiwiYXJpYS1jb250cm9scyIsImlkIiwic3giLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/speaker/accordion.js\n',
        ),
      );

      /***/
    },
});
