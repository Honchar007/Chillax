webpackHotUpdate_N_E("pages/index",{

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



var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\parties.js",
    _this = undefined;













var PartyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "parties__PartyWrapper",
  componentId: "sc-7emx0k-0"
})(["align-items:center;justify-content:center;display:flex;"]);
_c = PartyWrapper;
var styledd = {
  boxShadow: ' 0px 3px 15px #f77d7d'
};
var CardPart = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "parties__CardPart",
  componentId: "sc-7emx0k-1"
})(["max-width:345px;min-width:345px;box-shadow:0px 3px 15px #e917de;&:hover{box-shadow:0px 3px 15px #1ebe41;}"]);
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
      lineNumber: 41,
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
              classes: {},
              elevation: 10,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  component: "img",
                  alt: post.title,
                  height: "140",
                  image: post.imgUrl,
                  title: post.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    gutterBottom: true,
                    variant: "h5",
                    component: "h2",
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: cutHandler(post.text)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  size: "small",
                  color: "primary",
                  children: "Share"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  size: "small",
                  color: "primary",
                  children: "Learn More"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGllcy5qcyJdLCJuYW1lcyI6WyJQYXJ0eVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZWRkIiwiYm94U2hhZG93IiwiQ2FyZFBhcnQiLCJDYXJkIiwiY3V0SGFuZGxlciIsInRleHQiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJQYXJ0aWVzIiwicG9zdHMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIm1hcCIsInBvc3QiLCJpZHgiLCJ0aXRsZSIsImltZ1VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtEQUFsQjtLQUFNRixZO0FBS04sSUFBTUcsT0FBTyxHQUFHO0FBQ2RDLFdBQVMsRUFBRTtBQURHLENBQWhCO0FBR0EsSUFBTUMsUUFBUSxHQUFHSixpRUFBTSxDQUFDSyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlIQUFkO01BQU1ELFE7O0FBVU4sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQUlBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQWxCLEVBQXVCLE9BQU9ELElBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsRUFBa0IsR0FBbEIsSUFBeUIsS0FBaEM7QUFDeEIsQ0FGRDs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzdCLE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBRVosc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsYUFBSyxFQUFFO0FBQUVDLHdCQUFjLEVBQUUsUUFBbEI7QUFBNEJDLG1CQUFTLEVBQUU7QUFBdkMsU0FGVDtBQUdFLGVBQU8sRUFBRSxDQUhYO0FBQUEsa0JBS0dGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3hCLDhCQUNFLHFFQUFDLDhEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFBLG1DQUNFLHFFQUFDLFFBQUQ7QUFBVSxxQkFBTyxFQUFFLEVBQW5CO0FBQXVCLHVCQUFTLEVBQUUsRUFBbEM7QUFBQSxzQ0FDRSxxRUFBQyx3RUFBRDtBQUFBLHdDQUNFLHFFQUFDLG1FQUFEO0FBQ0UsMkJBQVMsRUFBQyxLQURaO0FBRUUscUJBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQUZaO0FBR0Usd0JBQU0sRUFBQyxLQUhUO0FBSUUsdUJBQUssRUFBRUYsSUFBSSxDQUFDRyxNQUpkO0FBS0UsdUJBQUssRUFBRUgsSUFBSSxDQUFDRTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFRRSxxRUFBQyxzRUFBRDtBQUFBLDBDQUNFLHFFQUFDLHFFQUFEO0FBQVksZ0NBQVksTUFBeEI7QUFBeUIsMkJBQU8sRUFBQyxJQUFqQztBQUFzQyw2QkFBUyxFQUFDLElBQWhEO0FBQUEsOEJBQ0dGLElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUUscUVBQUMscUVBQUQ7QUFDRSwyQkFBTyxFQUFDLE9BRFY7QUFFRSx5QkFBSyxFQUFDLGVBRlI7QUFHRSw2QkFBUyxFQUFDLEdBSFo7QUFBQSw4QkFLR1gsVUFBVSxDQUFDUyxJQUFJLENBQUNSLElBQU47QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFzQkUscUVBQUMsc0VBQUQ7QUFBQSx3Q0FDRSxxRUFBQyxnRUFBRDtBQUFRLHNCQUFJLEVBQUMsT0FBYjtBQUFxQix1QkFBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBUSxzQkFBSSxFQUFDLE9BQWI7QUFBcUIsdUJBQUssRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWdCUyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBbUNELFNBcENBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBa0RELENBckREOztNQUFNTixPOztBQXNEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjEzNDdhNmRlYzY0MDA4YzczMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCBDYXJkUGFydHkgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkUGFydHknXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucydcclxuXHJcbmNvbnN0IFBhcnR5V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcbmNvbnN0IHN0eWxlZGQgPSB7XHJcbiAgYm94U2hhZG93OiAnIDBweCAzcHggMTVweCAjZjc3ZDdkJyxcclxufVxyXG5jb25zdCBDYXJkUGFydCA9IHN0eWxlZChDYXJkKWBcclxuICBtYXgtd2lkdGg6IDM0NXB4O1xyXG4gIG1pbi13aWR0aDogMzQ1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICNlOTE3ZGU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICMxZWJlNDE7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBjdXRIYW5kbGVyID0gKHRleHQpID0+IHtcclxuICBpZiAodGV4dC5sZW5ndGggPiAxMDApIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxufVxyXG5cclxuY29uc3QgUGFydGllcyA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBpZiAoIXBvc3RzKSAnTG9hZGluZy4uLidcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPFBhcnR5V3JhcHBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogMTAgfX1cclxuICAgICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFBhcnQgY2xhc3Nlcz17e319IGVsZXZhdGlvbj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5pbWdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3V0SGFuZGxlcihwb3N0LnRleHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2hhcmVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkUGFydD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9QYXJ0eVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGFydGllc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wb3N0YClcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgaWYgKCFwb3N0cykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==