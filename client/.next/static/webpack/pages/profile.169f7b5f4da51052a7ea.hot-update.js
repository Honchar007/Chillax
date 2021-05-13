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
})(["background:white;border-radius:6px;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;margin:0;padding:0;"]);
_c = Wrapper;
var ProfileName = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "ProfileInfo__ProfileName",
  componentId: "sc-1u95xqf-1"
})(["line-height:18px;padding:20px;"]);
_c2 = ProfileName;
var TypographyName = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"]).withConfig({
  displayName: "ProfileInfo__TypographyName",
  componentId: "sc-1u95xqf-2"
})(["text-transform:uppercase;font-size:17px;font-weight:bold;"]);
_c3 = TypographyName;
var TypographyTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"]).withConfig({
  displayName: "ProfileInfo__TypographyTitle",
  componentId: "sc-1u95xqf-3"
})(["font-size:13px;font-weight:bold;"]);
_c4 = TypographyTitle;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].figure.withConfig({
  displayName: "ProfileInfo__ProfileImage",
  componentId: "sc-1u95xqf-4"
})(["margin-left:5px;margin-top:-10px;img{margin-top:-10px;border-radius:10px;}"]);
_c5 = ProfileImage;
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileName, {
          className: "profile_name",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypographyName, {
            className: "name",
            children: "Sam "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TypographyTitle, {
            className: "title",
            children: "Sam"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProfileImage, {
          className: "profile_image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: img,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "profile_info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomTimeLine__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "My button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
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

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "ProfileName");
$RefreshReg$(_c3, "TypographyName");
$RefreshReg$(_c4, "TypographyTitle");
$RefreshReg$(_c5, "ProfileImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9Qcm9maWxlSW5mby5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUHJvZmlsZU5hbWUiLCJUeXBvZ3JhcGh5TmFtZSIsIlR5cG9ncmFwaHkiLCJUeXBvZ3JhcGh5VGl0bGUiLCJQcm9maWxlSW1hZ2UiLCJmaWd1cmUiLCJQcm9maWxlSW5mbyIsImdldFNlc3Npb24iLCJzZXNzaW9uIiwic2V0U3RhdGUiLCJpbWciLCJzdGF0ZSIsInVzZXIiLCJpbWFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUpBQWI7S0FBTUYsTztBQVdOLElBQU1HLFdBQVcsR0FBR0YsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBakI7TUFBTUMsVztBQUlOLElBQU1DLGNBQWMsR0FBR0gsa0VBQU0sQ0FBQ0ksNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxpRUFBcEI7TUFBTUQsYztBQU1OLElBQU1FLGVBQWUsR0FBR0wsa0VBQU0sQ0FBQ0ksNERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3Q0FBckI7TUFBTUMsZTtBQUlOLElBQU1DLFlBQVksR0FBR04sMERBQU0sQ0FBQ08sTUFBVjtBQUFBO0FBQUE7QUFBQSxrRkFBbEI7TUFBTUQsWTtBQVVDLElBQU1FLFdBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFMEJDLG9FQUFVLEVBRnBDOztBQUFBO0FBRVVDLHVCQUZWO0FBR0kscUJBQUtDLFFBQUwsQ0FBYztBQUFFRCx5QkFBTyxFQUFQQTtBQUFGLGlCQUFkOztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUtXO0FBQUE7O0FBQ1AsVUFBSUUsR0FBSjtBQUNBLFVBQUkscUJBQUtDLEtBQUwsNERBQVlILE9BQVosQ0FBb0JJLElBQXBCLEtBQTRCLElBQWhDLEVBQXNDRixHQUFHLG1CQUFHLEtBQUtDLEtBQVIsaURBQUcsYUFBWUgsT0FBWixDQUFvQkksSUFBcEIsQ0FBeUJDLEtBQS9CO0FBQ3RDLDBCQUNFLHFFQUFDLE9BQUQ7QUFBQSxnQ0FDRSxxRUFBQyxXQUFEO0FBQWEsbUJBQVMsRUFBQyxjQUF2QjtBQUFBLGtDQUNFLHFFQUFDLGNBQUQ7QUFBZ0IscUJBQVMsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGVBQUQ7QUFBaUIscUJBQVMsRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSxxRUFBQyxZQUFEO0FBQWMsbUJBQVMsRUFBQyxlQUF4QjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFSCxHQUFWO0FBQWUsZUFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBU0U7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlCRDtBQXpCSDs7QUFBQTtBQUFBLEVBQWlDSSwrQ0FBakM7QUE0QmVSLDBFQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjE2OWY3YjVmNGRhNTEwNTJhN2VhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEN1c3RvbVRpbWVMaW5lIGZyb20gJy4uL0N1c3RvbVRpbWVMaW5lJ1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVOYW1lID0gc3R5bGVkLmRpdmBcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5gXHJcbmNvbnN0IFR5cG9ncmFwaHlOYW1lID0gc3R5bGVkKFR5cG9ncmFwaHkpYFxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5jb25zdCBUeXBvZ3JhcGh5VGl0bGUgPSBzdHlsZWQoVHlwb2dyYXBoeSlgXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcbmNvbnN0IFByb2ZpbGVJbWFnZSA9IHN0eWxlZC5maWd1cmVgXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vzc2lvbiB9KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgaW1nXHJcbiAgICBpZiAodGhpcy5zdGF0ZT8uc2Vzc2lvbi51c2VyICE9IG51bGwpIGltZyA9IHRoaXMuc3RhdGU/LnNlc3Npb24udXNlci5pbWFnZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPFByb2ZpbGVOYW1lIGNsYXNzTmFtZT1cInByb2ZpbGVfbmFtZVwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlOYW1lIGNsYXNzTmFtZT1cIm5hbWVcIj5TYW0gPC9UeXBvZ3JhcGh5TmFtZT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5VGl0bGUgY2xhc3NOYW1lPVwidGl0bGVcIj5TYW08L1R5cG9ncmFwaHlUaXRsZT5cclxuICAgICAgICA8L1Byb2ZpbGVOYW1lPlxyXG5cclxuICAgICAgICA8UHJvZmlsZUltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVfaW1hZ2VcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9Qcm9maWxlSW1hZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX2luZm9cIj5cclxuICAgICAgICAgIDxDdXN0b21UaW1lTGluZT48L0N1c3RvbVRpbWVMaW5lPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8YnV0dG9uPk15IGJ1dHRvbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW5mb1xyXG4vKnt0aGlzLnN0YXRlPy5zZXNzaW9uLnVzZXIubmFtZSAhPSAnJyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBZb3UgYXJlIGxvZ2dlZCBpbiEgSGVsbG8sIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlPy5zZXNzaW9uKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3RoaXMuc3RhdGU/LnNlc3Npb24udXNlci5uYW1lID09ICcnICYmIChcclxuICAgICAgICAgIDxkaXY+WW91IGFyZSBub3QgbG9nZ2VkIGluPC9kaXY+XHJcbiAgICAgICAgKX0qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9