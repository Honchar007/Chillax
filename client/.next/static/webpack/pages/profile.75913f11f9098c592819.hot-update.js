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
})(["border:2px solid;background:none;display:block;width:180px;margin:25px auto;margin-top:-10px;margin-bottom:50px;text-align:center;padding:14px 40px;padding-bottom:10px;outline:none;color:#ffffff;letter-spacing:4px;border-radius:25px;transition:0.25s;cursor:pointer;box-shadow:0 0 5px #902e99,0 0 25px #902e99;&:hover{background:#a200ff;}"]);
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
              lineNumber: 79,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypographyTitle, {
              className: "title",
              children: "Sam"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImage, {
            className: "profile_image",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomTimeLine__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormBtn, {
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Split, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUHJvZmlsZU5hbWUiLCJTcGxpdCIsIlR5cG9ncmFwaHlOYW1lIiwiVHlwb2dyYXBoeSIsIkZvcm1CdG4iLCJidXR0b24iLCJUeXBvZ3JhcGh5VGl0bGUiLCJQcm9maWxlSW1hZ2UiLCJmaWd1cmUiLCJQcm9maWxlSW5mbyIsImdldFNlc3Npb24iLCJzZXNzaW9uIiwic2V0U3RhdGUiLCJpbWciLCJzdGF0ZSIsInVzZXIiLCJpbWFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWI7S0FBTUYsTztBQVFOLElBQU1HLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBakI7TUFBTUMsVztBQUtOLElBQU1DLEtBQUssR0FBR0gsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBWDtNQUFNRSxLO0FBR04sSUFBTUMsY0FBYyxHQUFHSixrRUFBTSxDQUFDSyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLCtGQUFwQjtNQUFNRCxjO0FBT04sSUFBTUUsT0FBTyxHQUFHTiwwREFBTSxDQUFDTyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlWQUFiO01BQU1ELE87QUF1Qk4sSUFBTUUsZUFBZSxHQUFHUixrRUFBTSxDQUFDSyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdDQUFyQjtNQUFNRyxlO0FBSU4sSUFBTUMsWUFBWSxHQUFHVCwwREFBTSxDQUFDVSxNQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFsQjtNQUFNRCxZO0FBVUMsSUFBTUUsV0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUUwQkMsb0VBQVUsRUFGcEM7O0FBQUE7QUFFVUMsdUJBRlY7QUFHSSxxQkFBS0MsUUFBTCxDQUFjO0FBQUVELHlCQUFPLEVBQVBBO0FBQUYsaUJBQWQ7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBS1c7QUFBQTs7QUFDUCxVQUFJRSxHQUFKO0FBQ0EsVUFBSSxxQkFBS0MsS0FBTCw0REFBWUgsT0FBWixDQUFvQkksSUFBcEIsS0FBNEIsSUFBaEMsRUFBc0NGLEdBQUcsbUJBQUcsS0FBS0MsS0FBUixpREFBRyxhQUFZSCxPQUFaLENBQW9CSSxJQUFwQixDQUF5QkMsS0FBL0I7QUFDdEMsMEJBQ0UscUVBQUMsT0FBRDtBQUFBLGdDQUNFO0FBQUEsa0NBQ0UscUVBQUMsV0FBRDtBQUFhLHFCQUFTLEVBQUMsY0FBdkI7QUFBQSxvQ0FDRSxxRUFBQyxjQUFEO0FBQWdCLHVCQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyxlQUFEO0FBQWlCLHVCQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUUscUVBQUMsWUFBRDtBQUFjLHFCQUFTLEVBQUMsZUFBeEI7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVILEdBQVY7QUFBZSxpQkFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRSxxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBY0UscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBa0JEO0FBMUJIOztBQUFBO0FBQUEsRUFBaUNJLCtDQUFqQztBQTZCZVIsMEVBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNzU5MTNmMTFmOTA5OGM1OTI4MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgQ3VzdG9tVGltZUxpbmUgZnJvbSAnLi4vQ3VzdG9tVGltZUxpbmUnXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzAwZmY7XHJcbmBcclxuY29uc3QgUHJvZmlsZU5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFNwbGl0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gXHJcbmNvbnN0IFR5cG9ncmFwaHlOYW1lID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgRm9ybUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTAyZTk5LCAwIDAgMjVweCAjOTAyZTk5O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2EyMDBmZjtcclxuICB9XHJcbmBcclxuY29uc3QgVHlwb2dyYXBoeVRpdGxlID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYFxyXG5jb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQuZmlndXJlYFxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlc3Npb24gfSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGltZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGU/LnNlc3Npb24udXNlciAhPSBudWxsKSBpbWcgPSB0aGlzLnN0YXRlPy5zZXNzaW9uLnVzZXIuaW1hZ2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvZmlsZU5hbWUgY2xhc3NOYW1lPVwicHJvZmlsZV9uYW1lXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5TmFtZSBjbGFzc05hbWU9XCJuYW1lXCI+U2FtIDwvVHlwb2dyYXBoeU5hbWU+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5VGl0bGUgY2xhc3NOYW1lPVwidGl0bGVcIj5TYW08L1R5cG9ncmFwaHlUaXRsZT5cclxuICAgICAgICAgIDwvUHJvZmlsZU5hbWU+XHJcblxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSBjbGFzc05hbWU9XCJwcm9maWxlX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L1Byb2ZpbGVJbWFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q3VzdG9tVGltZUxpbmU+PC9DdXN0b21UaW1lTGluZT5cclxuICAgICAgICA8Rm9ybUJ0bj5TZW5kIE1lc3NhZ2U8L0Zvcm1CdG4+XHJcblxyXG4gICAgICAgIDxTcGxpdD48L1NwbGl0PlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mb1xyXG4vKnt0aGlzLnN0YXRlPy5zZXNzaW9uLnVzZXIubmFtZSAhPSAnJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBZb3UgYXJlIGxvZ2dlZCBpbiEgSGVsbG8sIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlPy5zZXNzaW9uKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3RoaXMuc3RhdGU/LnNlc3Npb24udXNlci5uYW1lID09ICcnICYmIChcclxuICAgICAgICAgIDxkaXY+WW91IGFyZSBub3QgbG9nZ2VkIGluPC9kaXY+XHJcbiAgICAgICAgKX0qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9