webpackHotUpdate_N_E("pages/parties",{

/***/ "./components/CardParty.js":
/*!*********************************!*\
  !*** ./components/CardParty.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\Projects\\Chillax\\client\\components\\CardParty.js",
    _this = undefined;




var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "CardParty__CardWrapper",
  componentId: "sc-17s2e3r-0"
})(["display:flex;align-items:center;justify-content:center;padding:20px;"]);
_c = CardWrapper;
var CardSquare = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "CardParty__CardSquare",
  componentId: "sc-17s2e3r-1"
})(["&:hover{border:1px solid black;-webkit-box-shadow:0 20px 40px rgba(255,251,29,0.952);box-shadow:0 20px 40px rgba(3,247,255,0.822);}width:460px;height:430px;background:white;border-radius:4px;box-shadow:0px 20px 50px #0f47b6;-webkit-transition:all 0.3s ease;-o-transition:all 0.3s ease;transition:all 0.3s ease;"]);
_c2 = CardSquare;
var CardImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "CardParty__CardImg",
  componentId: "sc-17s2e3r-2"
})(["border:0;clip:rect(0px,460px,220px,0px);border-radius:4px;display:block;height:200px;width:200px;"]);
_c3 = CardImg;
var CardH = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "CardParty__CardH",
  componentId: "sc-17s2e3r-3"
})(["margin:auto;text-align:left;margin-top:240px;padding-left:30px;font-family:'Merriweather',serif;font-size:24px;"]);
_c4 = CardH;
var CardP = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "CardParty__CardP",
  componentId: "sc-17s2e3r-4"
})(["text-align:justify;padding-left:30px;padding-right:30px;font-family:'Open Sans',sans-serif;font-size:12px;color:#c8c8c8;line-height:18px;"]);
_c5 = CardP;
var CardBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "CardParty__CardBtn",
  componentId: "sc-17s2e3r-5"
})(["background-color:#3edd84;color:white;width:90px;padding:10px 18px;border-radius:3px;text-align:center;text-decoration:none;display:block;margin-top:20px;margin-left:30px;margin-right:70px;font-size:12px;cursor:pointer;"]);
_c6 = CardBtn;

var textHandler = function textHandler(text) {
  if (text.length > 200) return text.substring(0, 200) + '...';
};

var CardParty = function CardParty(_ref) {
  var imageUrl = _ref.imageUrl,
      title = _ref.title,
      text = _ref.text;
  var cutText = textHandler(text);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardSquare, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardImg, {
          src: imageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardH, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardP, {
          children: cutText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '460px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardBtn, {
            href: "https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261",
            target: "_",
            children: "Read More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this);
};

_c7 = CardParty;
/* harmony default export */ __webpack_exports__["default"] = (CardParty);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "CardSquare");
$RefreshReg$(_c3, "CardImg");
$RefreshReg$(_c4, "CardH");
$RefreshReg$(_c5, "CardP");
$RefreshReg$(_c6, "CardBtn");
$RefreshReg$(_c7, "CardParty");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkUGFydHkuanMiXSwibmFtZXMiOlsiQ2FyZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDYXJkU3F1YXJlIiwiQ2FyZEltZyIsImltZyIsIkNhcmRIIiwiQ2FyZFAiLCJwIiwiQ2FyZEJ0biIsImEiLCJ0ZXh0SGFuZGxlciIsInRleHQiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJDYXJkUGFydHkiLCJpbWFnZVVybCIsInRpdGxlIiwiY3V0VGV4dCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBakI7S0FBTUYsVztBQU1OLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4VEFBaEI7TUFBTUMsVTtBQWVOLElBQU1DLE9BQU8sR0FBR0gseURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBYjtNQUFNRCxPO0FBUU4sSUFBTUUsS0FBSyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUFYO01BQU1JLEs7QUFTTixJQUFNQyxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsaUpBQVg7TUFBTUQsSztBQVVOLElBQU1FLE9BQU8sR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxrT0FBYjtNQUFNRCxPOztBQWVOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUM1QixNQUFJQSxJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFsQixFQUF1QixPQUFPRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLElBQXlCLEtBQWhDO0FBQ3hCLENBRkQ7O0FBR0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBK0I7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhMLElBQVcsUUFBWEEsSUFBVztBQUMvQyxNQUFNTSxPQUFPLEdBQUdQLFdBQVcsQ0FBQ0MsSUFBRCxDQUEzQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsV0FBRDtBQUFBLDZCQUNFLHFFQUFDLFVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxPQUFEO0FBQVMsYUFBRyxFQUFFSTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxLQUFEO0FBQUEsb0JBQVFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLEtBQUQ7QUFBQSxvQkFBUUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBS0U7QUFBSyxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBQVo7QUFBQSxpQ0FDRSxxRUFBQyxPQUFEO0FBQ0UsZ0JBQUksRUFBQyxvRUFEUDtBQUVFLGtCQUFNLEVBQUMsR0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXRCRDs7TUFBTUosUztBQXdCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFydGllcy4yNGI0MzA4YjZmMzI5M2UxN2JiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuYFxyXG5jb25zdCBDYXJkU3F1YXJlID0gc3R5bGVkLmRpdmBcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDI1NSwgMjUxLCAyOSwgMC45NTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgzLCAyNDcsIDI1NSwgMC44MjIpO1xyXG4gIH1cclxuICB3aWR0aDogNDYwcHg7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNTBweCAjMGY0N2I2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbmBcclxuY29uc3QgQ2FyZEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNsaXA6IHJlY3QoMHB4LCA0NjBweCwgMjIwcHgsIDBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG5gXHJcbmNvbnN0IENhcmRIID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAyNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG5gXHJcbmNvbnN0IENhcmRQID0gc3R5bGVkLnBgXHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjYzhjOGM4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBDYXJkQnRuID0gc3R5bGVkLmFgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlZGQ4NDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuY29uc3QgdGV4dEhhbmRsZXIgPSAodGV4dCkgPT4ge1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCA+IDIwMCkgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJ1xyXG59XHJcbmNvbnN0IENhcmRQYXJ0eSA9ICh7IGltYWdlVXJsLCB0aXRsZSwgdGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgY3V0VGV4dCA9IHRleHRIYW5kbGVyKHRleHQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgICA8Q2FyZFNxdWFyZT5cclxuICAgICAgICAgIDxDYXJkSW1nIHNyYz17aW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgICA8Q2FyZEg+e3RpdGxlfTwvQ2FyZEg+XHJcbiAgICAgICAgICA8Q2FyZFA+e2N1dFRleHR9PC9DYXJkUD5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNDYwcHgnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZEJ0blxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGxhaGVzaGsvaXMtYXBwbGUtYS1kZXNpZ24tY29tcGFueS1mNWM4MzUxNGUyNjFcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgICAgIDwvQ2FyZEJ0bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZFNxdWFyZT5cclxuICAgICAgPC9DYXJkV3JhcHBlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBhcnR5XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=