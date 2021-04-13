webpackHotUpdate_N_E("pages/createParty",{

/***/ "./pages/createParty.js":
/*!******************************!*\
  !*** ./pages/createParty.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\createParty.js",
    _this = undefined;






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "createParty__Wrapper",
  componentId: "sc-1dm7k0j-0"
})(["background:white;min-height:100vh;width:100%;"]);
_c = Wrapper;
var BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.withConfig({
  displayName: "createParty__BackBtn",
  componentId: "sc-1dm7k0j-1"
})([""]);
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "createParty__FormWrapper",
  componentId: "sc-1dm7k0j-2"
})(["display:flex;justify-content:center;align-items:center;"]);
_c2 = FormWrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form.withConfig({
  displayName: "createParty__Form",
  componentId: "sc-1dm7k0j-3"
})(["background:tomato;border-radius:15px;padding:30px;max-width:500px;width:100%;"]);
_c3 = Form;
var InputField = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "createParty__InputField",
  componentId: "sc-1dm7k0j-4"
})(["display:flex;flex-direction:column;margin-bottom:15px;"]);
_c4 = InputField;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({
  displayName: "createParty__Input",
  componentId: "sc-1dm7k0j-5"
})(["width:100%;display:flex;border:1px solid yellow;box-sizing:border-box;border-radius:5px;outline:none;padding:5px 10px;"]);
_c5 = Input;
var TextLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "createParty__TextLabel",
  componentId: "sc-1dm7k0j-6"
})(["font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#222222;margin-bottom:5px;"]);
_c6 = TextLabel;
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].textarea.withConfig({
  displayName: "createParty__TextArea",
  componentId: "sc-1dm7k0j-7"
})(["width:100%;display:flex;border:1px solid yellow;box-sizing:border-box;border-radius:5px;margin-bottom:5px;outline:none;padding:5px 10px;min-height:150px;resize:none;"]);
_c7 = TextArea;
var FormBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "createParty__FormBtn",
  componentId: "sc-1dm7k0j-8"
})(["border:2px solid;background:none;display:block;width:180px;margin:25px auto;margin-bottom:0px;margin-top:5px;text-align:center;padding:14px 40px;outline:none;color:#afd447;letter-spacing:4px;border-radius:25px;transition:0.25s;cursor:pointer;box-shadow:0 0 5px #2ecc71,0 0 25px #2ecc71;&:hover{background:#2ecc71;}"]);
_c8 = FormBtn;

var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
    _React$useState2 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
    title = _React$useState2[0],
    setTitle = _React$useState2[1];

var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
    _React$useState4 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
    text = _React$useState4[0],
    setText = _React$useState4[1];

var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
    _React$useState6 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
    imgUrl = _React$useState6[0],
    setImgUrl = _React$useState6[1];

var nameHandler = function nameHandler() {};

var CreateParty = function CreateParty() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Chillax:Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Name of your party"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              onChange: function onChange(e) {
                return setTitle(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Some Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
              onChange: function onChange(e) {
                return setText(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Url of your page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              onChange: function onChange(e) {
                return setImgUrl(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormBtn, {
            children: "Create"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c9 = CreateParty;
/* harmony default export */ __webpack_exports__["default"] = (CreateParty);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "Form");
$RefreshReg$(_c4, "InputField");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "TextLabel");
$RefreshReg$(_c7, "TextArea");
$RefreshReg$(_c8, "FormBtn");
$RefreshReg$(_c9, "CreateParty");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlUGFydHkuanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkJhY2tCdG4iLCJhIiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiZm9ybSIsIklucHV0RmllbGQiLCJJbnB1dCIsImlucHV0IiwiVGV4dExhYmVsIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIkZvcm1CdG4iLCJidXR0b24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsInRleHQiLCJzZXRUZXh0IiwiaW1nVXJsIiwic2V0SW1nVXJsIiwibmFtZUhhbmRsZXIiLCJDcmVhdGVQYXJ0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUFiO0tBQU1GLE87QUFLTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLENBQVY7QUFBQTtBQUFBO0FBQUEsUUFBYjtBQUNBLElBQU1DLFdBQVcsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBakI7TUFBTUcsVztBQUtOLElBQU1DLElBQUksR0FBR0wseURBQU0sQ0FBQ00sSUFBVjtBQUFBO0FBQUE7QUFBQSxxRkFBVjtNQUFNRCxJO0FBT04sSUFBTUUsVUFBVSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUFoQjtNQUFNTSxVO0FBS04sSUFBTUMsS0FBSyxHQUFHUix5REFBTSxDQUFDUyxLQUFWO0FBQUE7QUFBQTtBQUFBLDhIQUFYO01BQU1ELEs7QUFTTixJQUFNRSxTQUFTLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEdBQWY7TUFBTVMsUztBQVFOLElBQU1DLFFBQVEsR0FBR1gseURBQU0sQ0FBQ1ksUUFBVjtBQUFBO0FBQUE7QUFBQSw2S0FBZDtNQUFNRCxRO0FBWU4sSUFBTUUsT0FBTyxHQUFHYix5REFBTSxDQUFDYyxNQUFWO0FBQUE7QUFBQTtBQUFBLGtVQUFiO01BQU1ELE87O3NCQXNCb0JFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLEM7O0lBQW5CQyxLO0lBQU9DLFE7O3VCQUNVSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDOztJQUFqQkcsSTtJQUFNQyxPOzt1QkFDZUwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQzs7SUFBckJLLE07SUFBUUMsUzs7QUFFZixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNLENBQUUsQ0FBNUI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFDbEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLFdBQUQ7QUFBQSwrQkFDRSxxRUFBQyxJQUFEO0FBQUEsa0NBQ0UscUVBQUMsVUFBRDtBQUFBLG9DQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPUCxRQUFRLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLFVBQUQ7QUFBQSxvQ0FDRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsUUFBRDtBQUFVLHNCQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSx1QkFBT0wsT0FBTyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFTRSxxRUFBQyxVQUFEO0FBQUEsb0NBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLEtBQUQ7QUFBTyxzQkFBUSxFQUFFLGtCQUFDRixDQUFEO0FBQUEsdUJBQU9ILFNBQVMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQWFFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURrQjtBQUFBLENBQXBCOztNQUFNSCxXO0FBMkJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGVQYXJ0eS40YmZiZTNjMGFiZTkzNzBjNjIzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBCYWNrQnRuID0gc3R5bGVkLmFgYFxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBiYWNrZ3JvdW5kOiB0b21hdG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgSW5wdXRGaWVsZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmBcclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuYFxyXG5jb25zdCBUZXh0TGFiZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbmBcclxuY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG5gXHJcbmNvbnN0IEZvcm1CdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggNDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjYWZkNDQ3O1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMmVjYzcxLCAwIDAgMjVweCAjMmVjYzcxO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbmNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5jb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG5jb25zdCBuYW1lSGFuZGxlciA9ICgpID0+IHt9XHJcblxyXG5jb25zdCBDcmVhdGVQYXJ0eSA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5DaGlsbGF4OkxvZ2luPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZiYXI+PC9OYXZiYXI+XHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0RmllbGQ+XHJcbiAgICAgICAgICAgIDxUZXh0TGFiZWw+TmFtZSBvZiB5b3VyIHBhcnR5PC9UZXh0TGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0+PC9JbnB1dD5cclxuICAgICAgICAgIDwvSW5wdXRGaWVsZD5cclxuICAgICAgICAgIDxJbnB1dEZpZWxkPlxyXG4gICAgICAgICAgICA8VGV4dExhYmVsPlNvbWUgRGVzY3JpcHRpb248L1RleHRMYWJlbD5cclxuICAgICAgICAgICAgPFRleHRBcmVhIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9PjwvVGV4dEFyZWE+XHJcbiAgICAgICAgICA8L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICA8SW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgPFRleHRMYWJlbD5Vcmwgb2YgeW91ciBwYWdlPC9UZXh0TGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEltZ1VybChlLnRhcmdldC52YWx1ZSl9PjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICA8Rm9ybUJ0bj5DcmVhdGU8L0Zvcm1CdG4+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIDwvPlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBhcnR5XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=