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
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\createParty.js",
    _this = undefined,
    _s = $RefreshSig$();








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "createParty__Wrapper",
  componentId: "sc-1dm7k0j-0"
})(["margin-top:20px;background:#140c0c;min-height:100vh;width:100%;"]);
_c = Wrapper;
var BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "createParty__BackBtn",
  componentId: "sc-1dm7k0j-1"
})([""]);
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "createParty__FormWrapper",
  componentId: "sc-1dm7k0j-2"
})(["display:flex;justify-content:center;align-items:center;"]);
_c2 = FormWrapper;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "createParty__Form",
  componentId: "sc-1dm7k0j-3"
})(["background:linear-gradient(#1aece2,#000d1a);border-radius:15px;padding:30px;max-width:500px;width:100%;"]);
_c3 = Form;
var InputField = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "createParty__InputField",
  componentId: "sc-1dm7k0j-4"
})(["display:flex;flex-direction:column;margin-bottom:15px;background:transparent;border:none;"]);
_c4 = InputField;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "createParty__Input",
  componentId: "sc-1dm7k0j-5"
})(["width:100%;display:flex;border:1px solid yellow;box-sizing:border-box;border-radius:5px;outline:none;padding:5px 10px;background:transparent;border:none;"]);
_c5 = Input;
var TextLabel = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "createParty__TextLabel",
  componentId: "sc-1dm7k0j-6"
})(["font-style:normal;font-weight:300;font-size:18px;line-height:21px;color:#222222;margin-bottom:5px;"]);
_c6 = TextLabel;
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].textarea.withConfig({
  displayName: "createParty__TextArea",
  componentId: "sc-1dm7k0j-7"
})(["width:100%;display:flex;border:1px solid yellow;box-sizing:border-box;border-radius:5px;margin-bottom:5px;outline:none;padding:5px 10px;min-height:150px;resize:none;"]);
_c7 = TextArea;
var FormBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "createParty__FormBtn",
  componentId: "sc-1dm7k0j-8"
})(["border:2px solid;background:none;display:block;width:180px;margin:25px auto;margin-bottom:0px;margin-top:5px;text-align:center;padding:14px 40px;outline:none;color:#afd447;letter-spacing:4px;border-radius:25px;transition:0.25s;cursor:pointer;box-shadow:0 0 5px #2ecc71,0 0 25px #2ecc71;&:hover{background:#2ecc71;}"]);
_c8 = FormBtn;
var InputStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "createParty__InputStyled",
  componentId: "sc-1dm7k0j-9"
})(["padding:10px 10px 10px 5px;display:block;width:300px;border:none;border-bottom:1px solid #000000;background:transparent;&:focus{outline:none;}"]);
_c9 = InputStyled;
var LabelStyled = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].label.withConfig({
  displayName: "createParty__LabelStyled",
  componentId: "sc-1dm7k0j-10"
})(["color:#999;font-size:18px;font-weight:normal;position:absolute;pointer-events:none;left:5px;top:10px;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all;", ":focus ~ &,", ":valid ~ &{top:-20px;font-size:14px;color:#5264ae;border:none;}"], Input, Input);
_c10 = LabelStyled;

var addPost = /*#__PURE__*/function () {
  var _ref = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    return D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('http://localhost:5000/api/post/add', {
              title: title,
              text: text,
              imgUrl: imgUrl
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function addPost() {
    return _ref.apply(this, arguments);
  };
}();

var Bar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "createParty__Bar",
  componentId: "sc-1dm7k0j-11"
})(["position:relative;display:block;width:300px;&:before,&:after{content:'';height:2px;width:0;bottom:1px;position:absolute;background:#5264ae;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all;}&:before{left:50%;}&:after{right:50%;}"]);
_c11 = Bar;
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "createParty__InputWrapper",
  componentId: "sc-1dm7k0j-12"
})(["position:relative;margin-bottom:45px;background:transparent;"]);
_c12 = InputWrapper;

var CreateParty = function CreateParty() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState2 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState4 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      imgUrl = _React$useState4[0],
      setImgUrl = _React$useState4[1];

  var router = next_router__WEBPACK_IMPORTED_MODULE_10___default.a;

  var addPost = /*#__PURE__*/function () {
    var _ref2 = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('http://127.0.0.1:5000/api/post/add', {
                title: title,
                text: text,
                imgUrl: imgUrl
              }).then(function () {
                return router.push('/');
              });

            case 3:
              _context2.next = 8;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    }));

    return function addPost() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Chillax:Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
          onSubmit: function onSubmit(e) {
            return e.preventDefault();
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "highlight"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputWrapper, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputStyled, {
              type: "text",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bar, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LabelStyled, {
              children: " Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Name of your party"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              onChange: function onChange(e) {
                return setTitle(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Some Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
              onChange: function onChange(e) {
                return setText(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputField, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextLabel, {
              children: "Url of your page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
              onChange: function onChange(e) {
                return setImgUrl(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormBtn, {
            onClick: addPost,
            children: "Create"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CreateParty, "tLPRE01QvJd2fg2W9UPTVgkblNI=");

_c13 = CreateParty;
/* harmony default export */ __webpack_exports__["default"] = (CreateParty);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "Form");
$RefreshReg$(_c4, "InputField");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "TextLabel");
$RefreshReg$(_c7, "TextArea");
$RefreshReg$(_c8, "FormBtn");
$RefreshReg$(_c9, "InputStyled");
$RefreshReg$(_c10, "LabelStyled");
$RefreshReg$(_c11, "Bar");
$RefreshReg$(_c12, "InputWrapper");
$RefreshReg$(_c13, "CreateParty");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlUGFydHkuanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkJhY2tCdG4iLCJhIiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiZm9ybSIsIklucHV0RmllbGQiLCJJbnB1dCIsImlucHV0IiwiVGV4dExhYmVsIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIkZvcm1CdG4iLCJidXR0b24iLCJJbnB1dFN0eWxlZCIsIkxhYmVsU3R5bGVkIiwibGFiZWwiLCJhZGRQb3N0IiwiYXhpb3MiLCJwb3N0IiwidGl0bGUiLCJ0ZXh0IiwiaW1nVXJsIiwiY29uc29sZSIsImxvZyIsIkJhciIsInNwYW4iLCJJbnB1dFdyYXBwZXIiLCJDcmVhdGVQYXJ0eSIsInVzZVN0YXRlIiwic2V0VGl0bGUiLCJSZWFjdCIsInNldFRleHQiLCJzZXRJbWdVcmwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aGVuIiwicHVzaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1RUFBYjtLQUFNRixPO0FBTU4sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWI7QUFDQSxJQUFNQyxXQUFXLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0RBQWpCO01BQU1HLFc7QUFLTixJQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLElBQVY7QUFBQTtBQUFBO0FBQUEsK0dBQVY7TUFBTUQsSTtBQVFOLElBQU1FLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpR0FBaEI7TUFBTU0sVTtBQU9OLElBQU1DLEtBQUssR0FBR1IseURBQU0sQ0FBQ1MsS0FBVjtBQUFBO0FBQUE7QUFBQSxpS0FBWDtNQUFNRCxLO0FBV04sSUFBTUUsU0FBUyxHQUFHVix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBHQUFmO01BQU1TLFM7QUFRTixJQUFNQyxRQUFRLEdBQUdYLHlEQUFNLENBQUNZLFFBQVY7QUFBQTtBQUFBO0FBQUEsNktBQWQ7TUFBTUQsUTtBQVlOLElBQU1FLE9BQU8sR0FBR2IseURBQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSxrVUFBYjtNQUFNRCxPO0FBcUJOLElBQU1FLFdBQVcsR0FBR2YseURBQU0sQ0FBQ1MsS0FBVjtBQUFBO0FBQUE7QUFBQSxzSkFBakI7TUFBTU0sVztBQVlOLElBQU1DLFdBQVcsR0FBR2hCLHlEQUFNLENBQUNpQixLQUFWO0FBQUE7QUFBQTtBQUFBLHdSQVliVCxLQVphLEVBWU1BLEtBWk4sQ0FBakI7T0FBTVEsVzs7QUFtQk4sSUFBTUUsT0FBTztBQUFBLDBRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRU5DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxvQ0FBWCxFQUFpRDtBQUNyREMsbUJBQUssRUFBTEEsS0FEcUQ7QUFFckRDLGtCQUFJLEVBQUpBLElBRnFEO0FBR3JEQyxvQkFBTSxFQUFOQTtBQUhxRCxhQUFqRCxDQUZNOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRWkMsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFSWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQUCxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7O0FBV0EsSUFBTVEsR0FBRyxHQUFHMUIseURBQU0sQ0FBQzJCLElBQVY7QUFBQTtBQUFBO0FBQUEsa1JBQVQ7T0FBTUQsRztBQXVCTixJQUFNRSxZQUFZLEdBQUc1Qix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUFsQjtPQUFNMkIsWTs7QUFNTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDakJULEtBRGlCO0FBQUEsTUFDVlUsUUFEVTs7QUFBQSx3QkFFQUMsNENBQUssQ0FBQ0YsUUFBTixDQUFlLEVBQWYsQ0FGQTtBQUFBO0FBQUEsTUFFakJSLElBRmlCO0FBQUEsTUFFWFcsT0FGVzs7QUFBQSx5QkFHSUQsNENBQUssQ0FBQ0YsUUFBTixDQUFlLEVBQWYsQ0FISjtBQUFBO0FBQUEsTUFHakJQLE1BSGlCO0FBQUEsTUFHVFcsU0FIUzs7QUFJeEIsTUFBTUMsTUFBTSxHQUFHQyxtREFBZjs7QUFFQSxNQUFNbEIsT0FBTztBQUFBLDZRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU5DLDRDQUFLLENBQ1JDLElBREcsQ0FDRSxvQ0FERixFQUN3QztBQUMxQ0MscUJBQUssRUFBTEEsS0FEMEM7QUFFMUNDLG9CQUFJLEVBQUpBLElBRjBDO0FBRzFDQyxzQkFBTSxFQUFOQTtBQUgwQyxlQUR4QyxFQU1IYyxJQU5HLENBTUU7QUFBQSx1QkFBTUYsTUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsZUFORixDQUZNOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVWmQscUJBQU8sQ0FBQ0MsR0FBUjs7QUFWWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQUCxPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBYUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLFdBQUQ7QUFBQSwrQkFDRSxxRUFBQyxJQUFEO0FBQU0sa0JBQVEsRUFBRSxrQkFBQ3FCLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxXQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsb0NBQ0U7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxxRUFBQyxZQUFEO0FBQUEsb0NBQ0UscUVBQUMsV0FBRDtBQUFhLGtCQUFJLEVBQUMsTUFBbEI7QUFBeUIsc0JBQVE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBWUUscUVBQUMsVUFBRDtBQUFBLG9DQUNFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sc0JBQVEsRUFBRSxrQkFBQ0QsQ0FBRDtBQUFBLHVCQUFPUixRQUFRLENBQUNRLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQWdCRSxxRUFBQyxVQUFEO0FBQUEsb0NBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLFFBQUQ7QUFBVSxzQkFBUSxFQUFFLGtCQUFDSCxDQUFEO0FBQUEsdUJBQU9OLE9BQU8sQ0FBQ00sQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRixlQW9CRSxxRUFBQyxVQUFEO0FBQUEsb0NBQ0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLEtBQUQ7QUFBTyxzQkFBUSxFQUFFLGtCQUFDSCxDQUFEO0FBQUEsdUJBQU9MLFNBQVMsQ0FBQ0ssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkYsZUF3QkUscUVBQUMsT0FBRDtBQUFTLG1CQUFPLEVBQUV4QixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURGO0FBc0NELENBekREOztHQUFNVyxXOztPQUFBQSxXO0FBMERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGVQYXJ0eS4yYjI5MjhkOTEyMTFjZjBmNGExZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxNDBjMGM7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgQmFja0J0biA9IHN0eWxlZC5hYGBcclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxYWVjZTIsICMwMDBkMWEpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBJbnB1dEZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbmBcclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbmBcclxuY29uc3QgVGV4dExhYmVsID0gc3R5bGVkLmRpdmBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5gXHJcbmNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuYFxyXG5jb25zdCBGb3JtQnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogI2FmZDQ0NztcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzJlY2M3MSwgMCAwIDI1cHggIzJlY2M3MTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZWNjNzE7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IElucHV0U3R5bGVkID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExhYmVsU3R5bGVkID0gc3R5bGVkLmxhYmVsYFxyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuXHJcbiAgJHtJbnB1dH06Zm9jdXMgfiAmLCR7SW5wdXR9OnZhbGlkIH4gJiB7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1MjY0YWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGFkZFBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcG9zdC9hZGQnLCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBpbWdVcmwsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuY29uc3QgQmFyID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzUyNjRhZTtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gIH1cclxuYFxyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5gXHJcblxyXG5jb25zdCBDcmVhdGVQYXJ0eSA9ICgpID0+IHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXJcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGkvcG9zdC9hZGQnLCB7XHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICBpbWdVcmwsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiByb3V0ZXIucHVzaCgnLycpKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2hpbGxheDpMb2dpbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdmJhcj48L05hdmJhcj5cclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPElucHV0U3R5bGVkIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+PC9JbnB1dFN0eWxlZD5cclxuICAgICAgICAgICAgICA8QmFyPjwvQmFyPlxyXG4gICAgICAgICAgICAgIDxMYWJlbFN0eWxlZD4gTmFtZTwvTGFiZWxTdHlsZWQ+XHJcbiAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgICA8VGV4dExhYmVsPk5hbWUgb2YgeW91ciBwYXJ0eTwvVGV4dExhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgICA8VGV4dExhYmVsPlNvbWUgRGVzY3JpcHRpb248L1RleHRMYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0+PC9UZXh0QXJlYT5cclxuICAgICAgICAgICAgPC9JbnB1dEZpZWxkPlxyXG4gICAgICAgICAgICA8SW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgICA8VGV4dExhYmVsPlVybCBvZiB5b3VyIHBhZ2U8L1RleHRMYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWdVcmwoZS50YXJnZXQudmFsdWUpfT48L0lucHV0PlxyXG4gICAgICAgICAgICA8L0lucHV0RmllbGQ+XHJcbiAgICAgICAgICAgIDxGb3JtQnRuIG9uQ2xpY2s9e2FkZFBvc3R9PkNyZWF0ZTwvRm9ybUJ0bj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUGFydHlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==