webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/ProfileInfo/ProfileInfo.js":
/*!***********************************************!*\
  !*** ./components/ProfileInfo/ProfileInfo.js ***!
  \***********************************************/
/*! exports provided: ProfileInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfo", function() { return ProfileInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ "../node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CustomTimeLine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CustomTimeLine */ "./components/CustomTimeLine.js");








var _jsxFileName = "D:\\Projects\\Chillax\\client\\components\\ProfileInfo\\ProfileInfo.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "ProfileInfo__Wrapper",
  componentId: "sc-1u95xqf-0"
})(["margin-top:20px;background:white;border-radius:6px;width:200px;text-align:center;background-color:#c300ff;"]);
_c = Wrapper;
var ProfileName = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "ProfileInfo__ProfileName",
  componentId: "sc-1u95xqf-1"
})(["line-height:18px;padding:20px;"]);
_c2 = ProfileName;
var Split = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "ProfileInfo__Split",
  componentId: "sc-1u95xqf-2"
})(["margin-top:10px;"]);
_c3 = Split;
var TypographyName = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"]).withConfig({
  displayName: "ProfileInfo__TypographyName",
  componentId: "sc-1u95xqf-3"
})(["text-transform:uppercase;font-size:17px;font-weight:bold;align-items:center;width:100%;"]);
_c4 = TypographyName;
var FormBtn = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].button.withConfig({
  displayName: "ProfileInfo__FormBtn",
  componentId: "sc-1u95xqf-4"
})(["border:2px solid;background:none;display:block;width:180px;margin:25px auto;margin-top:-10px;margin-bottom:50px;text-align:center;padding-bottom:10px;padding:14px 40px;outline:none;color:#ffffff;letter-spacing:4px;border-radius:25px;transition:0.25s;cursor:pointer;box-shadow:0 0 5px #902e99,0 0 25px #902e99;&:hover{background:#a200ff;}"]);
_c5 = FormBtn;
var TypographyTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"]).withConfig({
  displayName: "ProfileInfo__TypographyTitle",
  componentId: "sc-1u95xqf-5"
})(["font-size:13px;font-weight:bold;"]);
_c6 = TypographyTitle;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].figure.withConfig({
  displayName: "ProfileInfo__ProfileImage",
  componentId: "sc-1u95xqf-6"
})(["margin-left:5px;margin-top:-10px;img{margin-top:-10px;border-radius:10px;}"]);
_c7 = ProfileImage;
var ProfileInfo = /*#__PURE__*/function (_Component) {
  Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProfileInfo, _Component);

  var _super = _createSuper(ProfileInfo);

  function ProfileInfo() {
    Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ProfileInfo);

    return _super.apply(this, arguments);
  }

  Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfileInfo, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var session;
        return D_Projects_Chillax_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_10__["getSession"])();

              case 2:
                session = _context.sent;
                this.setState({
                  session: session
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state, _this$state2;

      var img;
      if (((_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.session.user) != null) img = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.session.user.image;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileName, {
            className: "profile_name",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypographyName, {
              className: "name",
              children: "Sam "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypographyTitle, {
              className: "title",
              children: "Sam"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImage, {
            className: "profile_image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomTimeLine__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormBtn, {
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Split, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, this);
    }
  }]);

  return ProfileInfo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ProfileInfo);
/*{this.state?.session.user.name != '' && (
          <div>
            You are logged in! Hello, {console.log(this.state?.session)}
          </div>
        )}
        {this.state?.session.user.name == '' && (
          <div>You are not logged in</div>
        )}*/

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "ProfileName");
$RefreshReg$(_c3, "Split");
$RefreshReg$(_c4, "TypographyName");
$RefreshReg$(_c5, "FormBtn");
$RefreshReg$(_c6, "TypographyTitle");
$RefreshReg$(_c7, "ProfileImage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUHJvZmlsZU5hbWUiLCJTcGxpdCIsIlR5cG9ncmFwaHlOYW1lIiwiVHlwb2dyYXBoeSIsIkZvcm1CdG4iLCJidXR0b24iLCJUeXBvZ3JhcGh5VGl0bGUiLCJQcm9maWxlSW1hZ2UiLCJmaWd1cmUiLCJQcm9maWxlSW5mbyIsImdldFNlc3Npb24iLCJzZXNzaW9uIiwic2V0U3RhdGUiLCJpbWciLCJzdGF0ZSIsInVzZXIiLCJpbWFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWI7S0FBTUYsTztBQVFOLElBQU1HLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBakI7TUFBTUMsVztBQUtOLElBQU1DLEtBQUssR0FBR0gsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBWDtNQUFNRSxLO0FBR04sSUFBTUMsY0FBYyxHQUFHSixrRUFBTSxDQUFDSyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLCtGQUFwQjtNQUFNRCxjO0FBT04sSUFBTUUsT0FBTyxHQUFHTiwwREFBTSxDQUFDTyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlWQUFiO01BQU1ELE87QUFzQk4sSUFBTUUsZUFBZSxHQUFHUixrRUFBTSxDQUFDSyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdDQUFyQjtNQUFNRyxlO0FBSU4sSUFBTUMsWUFBWSxHQUFHVCwwREFBTSxDQUFDVSxNQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFsQjtNQUFNRCxZO0FBVUMsSUFBTUUsV0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUUwQkMsb0VBQVUsRUFGcEM7O0FBQUE7QUFFVUMsdUJBRlY7QUFHSSxxQkFBS0MsUUFBTCxDQUFjO0FBQUVELHlCQUFPLEVBQVBBO0FBQUYsaUJBQWQ7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBS1c7QUFBQTs7QUFDUCxVQUFJRSxHQUFKO0FBQ0EsVUFBSSxxQkFBS0MsS0FBTCw0REFBWUgsT0FBWixDQUFvQkksSUFBcEIsS0FBNEIsSUFBaEMsRUFBc0NGLEdBQUcsbUJBQUcsS0FBS0MsS0FBUixpREFBRyxhQUFZSCxPQUFaLENBQW9CSSxJQUFwQixDQUF5QkMsS0FBL0I7QUFDdEMsMEJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFO0FBQUEsa0NBQ0UscUVBQUMsV0FBRDtBQUFhLHFCQUFTLEVBQUMsY0FBdkI7QUFBQSxvQ0FDRSxxRUFBQyxjQUFEO0FBQWdCLHVCQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyxlQUFEO0FBQWlCLHVCQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUUscUVBQUMsWUFBRDtBQUFjLHFCQUFTLEVBQUMsZUFBeEI7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVILEdBQVY7QUFBZSxpQkFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRSxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBY0UscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBa0JEO0FBMUJIOztBQUFBO0FBQUEsRUFBaUNJLCtDQUFqQztBQTZCZVIsMEVBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNTA0NWVmZDlhMDY5YWEzMjRmM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgQ3VzdG9tVGltZUxpbmUgZnJvbSAnLi4vQ3VzdG9tVGltZUxpbmUnXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzAwZmY7XHJcbmBcclxuY29uc3QgUHJvZmlsZU5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFNwbGl0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gXHJcbmNvbnN0IFR5cG9ncmFwaHlOYW1lID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgRm9ybUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM5MDJlOTksIDAgMCAyNXB4ICM5MDJlOTk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTIwMGZmO1xyXG4gIH1cclxuYFxyXG5jb25zdCBUeXBvZ3JhcGh5VGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVJbWFnZSA9IHN0eWxlZC5maWd1cmVgXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vzc2lvbiB9KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgaW1nXHJcbiAgICBpZiAodGhpcy5zdGF0ZT8uc2Vzc2lvbi51c2VyICE9IG51bGwpIGltZyA9IHRoaXMuc3RhdGU/LnNlc3Npb24udXNlci5pbWFnZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxQcm9maWxlTmFtZSBjbGFzc05hbWU9XCJwcm9maWxlX25hbWVcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlOYW1lIGNsYXNzTmFtZT1cIm5hbWVcIj5TYW0gPC9UeXBvZ3JhcGh5TmFtZT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlUaXRsZSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNhbTwvVHlwb2dyYXBoeVRpdGxlPlxyXG4gICAgICAgICAgPC9Qcm9maWxlTmFtZT5cclxuXHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVfaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvUHJvZmlsZUltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDdXN0b21UaW1lTGluZT48L0N1c3RvbVRpbWVMaW5lPlxyXG4gICAgICAgIDxGb3JtQnRuPlNlbmQgTWVzc2FnZTwvRm9ybUJ0bj5cclxuXHJcbiAgICAgICAgPFNwbGl0PjwvU3BsaXQ+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVJbmZvXHJcbi8qe3RoaXMuc3RhdGU/LnNlc3Npb24udXNlci5uYW1lICE9ICcnICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFlvdSBhcmUgbG9nZ2VkIGluISBIZWxsbywge2NvbnNvbGUubG9nKHRoaXMuc3RhdGU/LnNlc3Npb24pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5zdGF0ZT8uc2Vzc2lvbi51c2VyLm5hbWUgPT0gJycgJiYgKFxyXG4gICAgICAgICAgPGRpdj5Zb3UgYXJlIG5vdCBsb2dnZWQgaW48L2Rpdj5cclxuICAgICAgICApfSovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=