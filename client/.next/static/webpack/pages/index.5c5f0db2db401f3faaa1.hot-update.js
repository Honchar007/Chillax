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
  maxWidth: 345,
  minWidth: 345,
  boxShadow: ' 0px 3px 15px #f77d7d',
  transition: '.3s'
};
var CardPart = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "parties__CardPart",
  componentId: "sc-7emx0k-1"
})(["max-width:345px,min-width:345px,box-shadow:' 0px 3px 15px #f77d7d',transition:'.3s',"]);

var cutHandler = function cutHandler(text) {
  if (text.length > 100) return text.substring(0, 100) + '...';
};

var Parties = function Parties(_ref) {
  var posts = _ref.posts;
  if (!posts) 'Loading...';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
              style: styledd,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  component: "img",
                  alt: post.title,
                  height: "140",
                  image: post.imgUrl,
                  title: post.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    gutterBottom: true,
                    variant: "h5",
                    component: "h2",
                    children: post.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: cutHandler(post.text)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  size: "small",
                  color: "primary",
                  children: "Share"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  size: "small",
                  color: "primary",
                  children: "Learn More"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, _this)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c2 = Parties;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Parties);

var _c, _c2;

$RefreshReg$(_c, "PartyWrapper");
$RefreshReg$(_c2, "Parties");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGllcy5qcyJdLCJuYW1lcyI6WyJQYXJ0eVdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJzdHlsZWRkIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJDYXJkUGFydCIsIkNhcmQiLCJjdXRIYW5kbGVyIiwidGV4dCIsImxlbmd0aCIsInN1YnN0cmluZyIsIlBhcnRpZXMiLCJwb3N0cyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFwIiwicG9zdCIsImlkeCIsInRpdGxlIiwiaW1nVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0RBQWxCO0tBQU1GLFk7QUFLTixJQUFNRyxPQUFPLEdBQUc7QUFDZEMsVUFBUSxFQUFFLEdBREk7QUFFZEMsVUFBUSxFQUFFLEdBRkk7QUFHZEMsV0FBUyxFQUFFLHVCQUhHO0FBSWRDLFlBQVUsRUFBRTtBQUpFLENBQWhCO0FBTUEsSUFBTUMsUUFBUSxHQUFHUCxpRUFBTSxDQUFDUSw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDRGQUFkOztBQVFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixNQUFJQSxJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFsQixFQUF1QixPQUFPRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEdBQWxCLElBQXlCLEtBQWhDO0FBQ3hCLENBRkQ7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM3QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUVaLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsWUFBRDtBQUFBLDZCQUNFLHFFQUFDLDhEQUFEO0FBQ0UsaUJBQVMsTUFEWDtBQUVFLGFBQUssRUFBRTtBQUFFQyx3QkFBYyxFQUFFLFFBQWxCO0FBQTRCQyxtQkFBUyxFQUFFO0FBQXZDLFNBRlQ7QUFHRSxlQUFPLEVBQUUsQ0FIWDtBQUFBLGtCQUtHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4Qiw4QkFDRSxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBQSxtQ0FDRSxxRUFBQyw4REFBRDtBQUFNLG1CQUFLLEVBQUVqQixPQUFiO0FBQUEsc0NBQ0UscUVBQUMsd0VBQUQ7QUFBQSx3Q0FDRSxxRUFBQyxtRUFBRDtBQUNFLDJCQUFTLEVBQUMsS0FEWjtBQUVFLHFCQUFHLEVBQUVnQixJQUFJLENBQUNFLEtBRlo7QUFHRSx3QkFBTSxFQUFDLEtBSFQ7QUFJRSx1QkFBSyxFQUFFRixJQUFJLENBQUNHLE1BSmQ7QUFLRSx1QkFBSyxFQUFFSCxJQUFJLENBQUNFO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVFFLHFFQUFDLHNFQUFEO0FBQUEsMENBQ0UscUVBQUMscUVBQUQ7QUFBWSxnQ0FBWSxNQUF4QjtBQUF5QiwyQkFBTyxFQUFDLElBQWpDO0FBQXNDLDZCQUFTLEVBQUMsSUFBaEQ7QUFBQSw4QkFDR0YsSUFBSSxDQUFDRTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFJRSxxRUFBQyxxRUFBRDtBQUNFLDJCQUFPLEVBQUMsT0FEVjtBQUVFLHlCQUFLLEVBQUMsZUFGUjtBQUdFLDZCQUFTLEVBQUMsR0FIWjtBQUFBLDhCQUtHWCxVQUFVLENBQUNTLElBQUksQ0FBQ1IsSUFBTjtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQXNCRSxxRUFBQyxzRUFBRDtBQUFBLHdDQUNFLHFFQUFDLGdFQUFEO0FBQVEsc0JBQUksRUFBQyxPQUFiO0FBQXFCLHVCQUFLLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSxxRUFBQyxnRUFBRDtBQUFRLHNCQUFJLEVBQUMsT0FBYjtBQUFxQix1QkFBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBZ0JTLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFtQ0QsU0FwQ0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFrREQsQ0FyREQ7O01BQU1OLE87O0FBc0RTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YzVmMGRiMmRiNDAxZjNmYWFhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuaW1wb3J0IENhcmRQYXJ0eSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRQYXJ0eSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5cclxuY29uc3QgUGFydHlXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmBcclxuY29uc3Qgc3R5bGVkZCA9IHtcclxuICBtYXhXaWR0aDogMzQ1LFxyXG4gIG1pbldpZHRoOiAzNDUsXHJcbiAgYm94U2hhZG93OiAnIDBweCAzcHggMTVweCAjZjc3ZDdkJyxcclxuICB0cmFuc2l0aW9uOiAnLjNzJyxcclxufVxyXG5jb25zdCBDYXJkUGFydCA9IHN0eWxlZChDYXJkKWBcclxubWF4LXdpZHRoOiAzNDVweCxcclxuICBtaW4td2lkdGg6IDM0NXB4LFxyXG4gIGJveC1zaGFkb3c6ICcgMHB4IDNweCAxNXB4ICNmNzdkN2QnLFxyXG4gIHRyYW5zaXRpb246ICcuM3MnLFxyXG4gIFxyXG5gXHJcblxyXG5jb25zdCBjdXRIYW5kbGVyID0gKHRleHQpID0+IHtcclxuICBpZiAodGV4dC5sZW5ndGggPiAxMDApIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAxMDApICsgJy4uLidcclxufVxyXG5cclxuY29uc3QgUGFydGllcyA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBpZiAoIXBvc3RzKSAnTG9hZGluZy4uLidcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPFBhcnR5V3JhcHBlcj5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogMTAgfX1cclxuICAgICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17c3R5bGVkZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0LmltZ1VybH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXRIYW5kbGVyKHBvc3QudGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaGFyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvUGFydHlXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpZXNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcG9zdGApXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGlmICghcG9zdHMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=