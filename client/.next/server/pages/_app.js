(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/App.css */ "./components/styles/App.css");
/* harmony import */ var _components_styles_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_styles_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/exploration.css */ "./components/styles/exploration.css");
/* harmony import */ var _components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/messanger.css */ "./components/styles/messanger.css");
/* harmony import */ var _components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styles_parties_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/parties.css */ "./components/styles/parties.css");
/* harmony import */ var _components_styles_parties_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_parties_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_styles_profile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/profile.css */ "./components/styles/profile.css");
/* harmony import */ var _components_styles_profile_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_styles_profile_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_styles_Home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Home.css */ "./components/styles/Home.css");
/* harmony import */ var _components_styles_Home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_styles_Home_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_styles_login_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/login.css */ "./components/styles/login.css");
/* harmony import */ var _components_styles_login_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_styles_login_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_styles_registration_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/registration.css */ "./components/styles/registration.css");
/* harmony import */ var _components_styles_registration_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_styles_registration_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/createParty.css */ "./components/styles/createParty.css");
/* harmony import */ var _components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_11__.Provider, {
      session: pageProps.session,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./components/styles/App.css":
/*!***********************************!*\
  !*** ./components/styles/App.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/Home.css":
/*!************************************!*\
  !*** ./components/styles/Home.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/createParty.css":
/*!*******************************************!*\
  !*** ./components/styles/createParty.css ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/exploration.css":
/*!*******************************************!*\
  !*** ./components/styles/exploration.css ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/login.css":
/*!*************************************!*\
  !*** ./components/styles/login.css ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/messanger.css":
/*!*****************************************!*\
  !*** ./components/styles/messanger.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/parties.css":
/*!***************************************!*\
  !*** ./components/styles/parties.css ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/profile.css":
/*!***************************************!*\
  !*** ./components/styles/profile.css ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./components/styles/registration.css":
/*!********************************************!*\
  !*** ./components/styles/registration.css ***!
  \********************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsbGF4Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9jaGlsbGF4L2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIiwid2VicGFjazovL2NoaWxsYXgvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsU0FBRCxrQ0FBZUEsU0FBZjtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQVUsYUFBTyxFQUFFQSxTQUFTLENBQUNDLE9BQTdCO0FBQUEsNkJBQ0UsOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELCtEQUFlSCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL0FwcC5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL2V4cGxvcmF0aW9uLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbWVzc2FuZ2VyLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvcGFydGllcy5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL3Byb2ZpbGUuY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9Ib21lLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbG9naW4uY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9yZWdpc3RyYXRpb24uY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9jcmVhdGVQYXJ0eS5jc3MnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30+XG4gICAgICA8UHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvQ29tcG9uZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=