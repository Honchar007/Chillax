webpackHotUpdate_N_E("pages/parties",{

/***/ "./pages/parties.js":
/*!**************************!*\
  !*** ./pages/parties.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_CardParty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CardParty */ "./components/CardParty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\parties.js",
    _this = undefined;














var PartyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "parties__PartyWrapper",
  componentId: "sc-7emx0k-0"
})(["align-items:center;justify-content:center;display:flex;"]);
_c = PartyWrapper;
var CardPart = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "parties__CardPart",
  componentId: "sc-7emx0k-1"
})(["max-width:345px;min-width:345px;&:hover{box-shadow:0px 3px 15px #e917de;}"]);
_c2 = CardPart;

var cutHandler = function cutHandler(text) {
  if (text.length > 100) return text.substring(0, 100) + '...';
};

var Parties = function Parties(_ref) {
  var posts = _ref.posts;
  if (!posts) 'Loading...';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PartyWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        style: {
          justifyContent: 'center',
          marginTop: 10
        },
        spacing: 3,
        children: posts.map(function (post, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardPart, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
                href: "/home",
                passHref: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    component: "img",
                    alt: post.title,
                    height: "140",
                    image: post.imgUrl,
                    title: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      gutterBottom: true,
                      variant: "h5",
                      component: "h2",
                      children: post.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: cutHandler(post.text)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    size: "small",
                    color: "primary",
                    children: "Share"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    size: "small",
                    color: "primary",
                    children: "Learn More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c3 = Parties;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Parties);

var _c, _c2, _c3;

$RefreshReg$(_c, "PartyWrapper");
$RefreshReg$(_c2, "CardPart");
$RefreshReg$(_c3, "Parties");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGllcy5qcyJdLCJuYW1lcyI6WyJQYXJ0eVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDYXJkUGFydCIsIkNhcmQiLCJjdXRIYW5kbGVyIiwidGV4dCIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBhcnRpZXMiLCJwb3N0cyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFwIiwicG9zdCIsImlkeCIsInRpdGxlIiwiaW1nVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFsQjtLQUFNRixZO0FBS04sSUFBTUcsUUFBUSxHQUFHRixpRUFBTSxDQUFDRyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlGQUFkO01BQU1ELFE7O0FBUU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQUlBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQWxCLEVBQXVCLE9BQU9ELElBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsRUFBa0IsR0FBbEIsSUFBeUIsS0FBaEM7QUFDeEIsQ0FGRDs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzdCLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBRVosc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsYUFBSyxFQUFFO0FBQUVDLHdCQUFjLEVBQUUsUUFBbEI7QUFBNEJDLG1CQUFTLEVBQUU7QUFBdkMsU0FGVDtBQUdFLGVBQU8sRUFBRSxDQUhYO0FBQUEsa0JBS0dGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3hCLDhCQUNFLHFFQUFDLDhEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFBLG1DQUNFLHFFQUFDLFFBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxpREFBRDtBQUFNLG9CQUFJLEVBQUMsT0FBWDtBQUFtQix3QkFBUSxNQUEzQjtBQUFBLHdDQUNFLHFFQUFDLHdFQUFEO0FBQUEsMENBQ0UscUVBQUMsbUVBQUQ7QUFDRSw2QkFBUyxFQUFDLEtBRFo7QUFFRSx1QkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBRlo7QUFHRSwwQkFBTSxFQUFDLEtBSFQ7QUFJRSx5QkFBSyxFQUFFRixJQUFJLENBQUNHLE1BSmQ7QUFLRSx5QkFBSyxFQUFFSCxJQUFJLENBQUNFO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQVFFLHFFQUFDLHNFQUFEO0FBQUEsNENBQ0UscUVBQUMscUVBQUQ7QUFBWSxrQ0FBWSxNQUF4QjtBQUF5Qiw2QkFBTyxFQUFDLElBQWpDO0FBQXNDLCtCQUFTLEVBQUMsSUFBaEQ7QUFBQSxnQ0FDR0YsSUFBSSxDQUFDRTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRSxxRUFBQyxxRUFBRDtBQUNFLDZCQUFPLEVBQUMsT0FEVjtBQUVFLDJCQUFLLEVBQUMsZUFGUjtBQUdFLCtCQUFTLEVBQUMsR0FIWjtBQUFBLGdDQUtHWCxVQUFVLENBQUNTLElBQUksQ0FBQ1IsSUFBTjtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQXNCRSxxRUFBQyxzRUFBRDtBQUFBLDBDQUNFLHFFQUFDLGdFQUFEO0FBQVEsd0JBQUksRUFBQyxPQUFiO0FBQXFCLHlCQUFLLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFJRSxxRUFBQyxnRUFBRDtBQUFRLHdCQUFJLEVBQUMsT0FBYjtBQUFxQix5QkFBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWdCUyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBcUNELFNBdENBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBb0RELENBdkREOztNQUFNTixPOztBQXdEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFydGllcy41ZTZmODc3OGU1YzdjYzc0N2Q2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IENhcmRQYXJ0eSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRQYXJ0eSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQYXJ0eVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYFxyXG5jb25zdCBDYXJkUGFydCA9IHN0eWxlZChDYXJkKWBcclxuICBtYXgtd2lkdGg6IDM0NXB4O1xyXG4gIG1pbi13aWR0aDogMzQ1cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggI2U5MTdkZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGN1dEhhbmRsZXIgPSAodGV4dCkgPT4ge1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCA+IDEwMCkgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIDEwMCkgKyAnLi4uJ1xyXG59XHJcblxyXG5jb25zdCBQYXJ0aWVzID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGlmICghcG9zdHMpICdMb2FkaW5nLi4uJ1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8UGFydHlXcmFwcGVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiAxMCB9fVxyXG4gICAgICAgICAgc3BhY2luZz17M31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkUGFydD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0LmltZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXRIYW5kbGVyKHBvc3QudGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRQYXJ0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1BhcnR5V3JhcHBlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWVzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Bvc3RgKVxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICBpZiAoIXBvc3RzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9