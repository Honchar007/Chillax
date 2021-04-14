webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/styles/createParty.css":
/*!*******************************************!*\
  !*** ./components/styles/createParty.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./createParty.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/createParty.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./createParty.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/createParty.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./createParty.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/createParty.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styles/createParty.css":
/*!*******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./components/styles/createParty.css ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* { -webkit-box-sizing:border-box; box-sizing:border-box; }\r\n\r\n/* basic stylings ------------------------------------------ */\r\nbody \t\t\t\t { background:url(https://scotch.io/wp-content/uploads/2014/07/61.jpg); }\r\n.container \t\t{ \r\n  font-family:'Roboto';\r\n  width:600px; \r\n  margin:30px auto 0; \r\n  display:block; \r\n  background:#FFF;\r\n  padding:10px 50px 50px;\r\n}\r\n h2 { \r\n  text-align:center; \r\n  margin-bottom:50px; \r\n}\r\nh2 small { \r\n  font-weight:normal; \r\n  color:#888; \r\n  display:block; \r\n}\r\n.footer \t{ text-align:center; }\r\n.footer a  { color:#53B2C8; }\r\n\r\n/* form starting stylings ------------------------------- */\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\ninput \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:#5264AE; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n  left:50%;\r\n}\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}", "",{"version":3,"sources":["webpack://components/styles/createParty.css"],"names":[],"mappings":"AAAA,IAAI,6BAAqB,EAArB,qBAAqB,EAAE;;AAE3B,8DAA8D;AAC9D,YAAY,mEAAmE,EAAE;AACjF;EACE,oBAAoB;EACpB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,sBAAsB;AACxB;CACC;EACC,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;AACA,WAAW,iBAAiB,EAAE;AAC9B,aAAa,aAAa,EAAE;;AAE5B,2DAA2D;AAC3D;EACE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,0BAA0B;EAC1B,aAAa;EACb,WAAW;EACX,WAAW;EACX,+BAA+B;AACjC;AACA,gBAAgB,YAAY,EAAE;;AAE9B,kDAAkD;AAClD;EACE,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,QAAQ;EACR,QAAQ;EACR,wBAAwB;EACxB,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA,iBAAiB;AACjB;EACE,SAAS;EACT,cAAc;EACd,aAAa;AACf;;AAEA,kDAAkD;AAClD,QAAQ,iBAAiB,EAAE,aAAa,EAAE,WAAW,EAAE;AACvD;EACE,UAAU;EACV,UAAU;EACV,OAAO;EACP,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;EACxB,6BAA6B;EAC7B,gCAAgC;AAClC;AACA;EACE,QAAQ;AACV;AACA;EACE,SAAS;AACX;;AAEA,iBAAiB;AACjB;EACE,SAAS;AACX;;AAEA,mDAAmD;AACnD;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,OAAO;EACP,MAAM;EACN,mBAAmB;EACnB,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,4CAA4C;EAE5C,oCAAoC;AACtC;;AAEA,gCAAgC;AAChC;CACC,OAAO,kBAAkB,EAAE;EAC1B,MAAM,OAAO,EAAE,sBAAsB,EAAE;AACzC;AAKA;CACC,OAAO,kBAAkB,EAAE;EAC1B,MAAM,OAAO,EAAE,sBAAsB,EAAE;AACzC","sourcesContent":["* { box-sizing:border-box; }\r\n\r\n/* basic stylings ------------------------------------------ */\r\nbody \t\t\t\t { background:url(https://scotch.io/wp-content/uploads/2014/07/61.jpg); }\r\n.container \t\t{ \r\n  font-family:'Roboto';\r\n  width:600px; \r\n  margin:30px auto 0; \r\n  display:block; \r\n  background:#FFF;\r\n  padding:10px 50px 50px;\r\n}\r\n h2 { \r\n  text-align:center; \r\n  margin-bottom:50px; \r\n}\r\nh2 small { \r\n  font-weight:normal; \r\n  color:#888; \r\n  display:block; \r\n}\r\n.footer \t{ text-align:center; }\r\n.footer a  { color:#53B2C8; }\r\n\r\n/* form starting stylings ------------------------------- */\r\n.group \t\t\t  { \r\n  position:relative; \r\n  margin-bottom:45px; \r\n}\r\ninput \t\t\t\t{\r\n  font-size:18px;\r\n  padding:10px 10px 10px 5px;\r\n  display:block;\r\n  width:300px;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n}\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:18px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:10px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n.bar \t{ position:relative; display:block; width:300px; }\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:#5264AE; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n  left:50%;\r\n}\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  -moz-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@-moz-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/App.css */ "./components/styles/App.css");
/* harmony import */ var _components_styles_App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/exploration.css */ "./components/styles/exploration.css");
/* harmony import */ var _components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_exploration_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/messanger.css */ "./components/styles/messanger.css");
/* harmony import */ var _components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_messanger_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_styles_parties_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/parties.css */ "./components/styles/parties.css");
/* harmony import */ var _components_styles_parties_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_styles_parties_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_styles_profile_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/profile.css */ "./components/styles/profile.css");
/* harmony import */ var _components_styles_profile_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_styles_profile_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_styles_Home_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/Home.css */ "./components/styles/Home.css");
/* harmony import */ var _components_styles_Home_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_styles_Home_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_styles_login_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/login.css */ "./components/styles/login.css");
/* harmony import */ var _components_styles_login_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_styles_login_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_styles_registration_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/registration.css */ "./components/styles/registration.css");
/* harmony import */ var _components_styles_registration_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_styles_registration_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/styles/createParty.css */ "./components/styles/createParty.css");
/* harmony import */ var _components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_styles_createParty_css__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Projects_Chillax_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvY3JlYXRlUGFydHkuY3NzP2JlMWIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGVzL2NyZWF0ZVBhcnR5LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyxxVUFBNks7O0FBRS9NOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHFVQUE2SztBQUNuTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHFVQUE2Szs7QUFFdk07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQ2tHO0FBQ2xHLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxNQUFNLCtCQUErQix1QkFBdUIsRUFBRSwwRkFBMEYscUVBQXFFLEVBQUUsb0JBQW9CLDRCQUE0QixrQkFBa0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsNkJBQTZCLEtBQUssU0FBUyx5QkFBeUIsMEJB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WSxvQkFBb0IsRUFBRSxZQUFZLFNBQVMsd0JBQXdCLEVBQUUsS0FBSyxzQ0FBc0MsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLFNBQVMsd0JBQXdCLEVBQUUsS0FBSyxpQ0FBaUMsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLFNBQVMsd0JBQXdCLEVBQUUsS0FBSyxtQkFBbUI7QUFDeG9OO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFBTyxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRixLO0FBSU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzNhZDQwMTdiOWJiODE1NmFiYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vY3JlYXRlUGFydHkuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9jcmVhdGVQYXJ0eS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9jcmVhdGVQYXJ0eS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7IC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cXHJcXG5cXHJcXG4vKiBiYXNpYyBzdHlsaW5ncyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5ib2R5IFxcdFxcdFxcdFxcdCB7IGJhY2tncm91bmQ6dXJsKGh0dHBzOi8vc2NvdGNoLmlvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzA3LzYxLmpwZyk7IH1cXHJcXG4uY29udGFpbmVyIFxcdFxcdHsgXFxyXFxuICBmb250LWZhbWlseTonUm9ib3RvJztcXHJcXG4gIHdpZHRoOjYwMHB4OyBcXHJcXG4gIG1hcmdpbjozMHB4IGF1dG8gMDsgXFxyXFxuICBkaXNwbGF5OmJsb2NrOyBcXHJcXG4gIGJhY2tncm91bmQ6I0ZGRjtcXHJcXG4gIHBhZGRpbmc6MTBweCA1MHB4IDUwcHg7XFxyXFxufVxcclxcbiBoMiB7IFxcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7IFxcclxcbiAgbWFyZ2luLWJvdHRvbTo1MHB4OyBcXHJcXG59XFxyXFxuaDIgc21hbGwgeyBcXHJcXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDsgXFxyXFxuICBjb2xvcjojODg4OyBcXHJcXG4gIGRpc3BsYXk6YmxvY2s7IFxcclxcbn1cXHJcXG4uZm9vdGVyIFxcdHsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXHJcXG4uZm9vdGVyIGEgIHsgY29sb3I6IzUzQjJDODsgfVxcclxcblxcclxcbi8qIGZvcm0gc3RhcnRpbmcgc3R5bGluZ3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi5ncm91cCBcXHRcXHRcXHQgIHsgXFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXFxyXFxuICBtYXJnaW4tYm90dG9tOjQ1cHg7IFxcclxcbn1cXHJcXG5pbnB1dCBcXHRcXHRcXHRcXHR7XFxyXFxuICBmb250LXNpemU6MThweDtcXHJcXG4gIHBhZGRpbmc6MTBweCAxMHB4IDEwcHggNXB4O1xcclxcbiAgZGlzcGxheTpibG9jaztcXHJcXG4gIHdpZHRoOjMwMHB4O1xcclxcbiAgYm9yZGVyOm5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzU3NTc1O1xcclxcbn1cXHJcXG5pbnB1dDpmb2N1cyBcXHRcXHR7IG91dGxpbmU6bm9uZTsgfVxcclxcblxcclxcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbmxhYmVsIFxcdFxcdFxcdFxcdCB7XFxyXFxuICBjb2xvcjojOTk5OyBcXHJcXG4gIGZvbnQtc2l6ZToxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgbGVmdDo1cHg7XFxyXFxuICB0b3A6MTBweDtcXHJcXG4gIHRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXFxyXFxuICAtbW96LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDsgXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYWN0aXZlIHN0YXRlICovXFxyXFxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCBcXHRcXHR7XFxyXFxuICB0b3A6LTIwcHg7XFxyXFxuICBmb250LXNpemU6MTRweDtcXHJcXG4gIGNvbG9yOiM1MjY0QUU7XFxyXFxufVxcclxcblxcclxcbi8qIEJPVFRPTSBCQVJTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5iYXIgXFx0eyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpibG9jazsgd2lkdGg6MzAwcHg7IH1cXHJcXG4uYmFyOmJlZm9yZSwgLmJhcjphZnRlciBcXHR7XFxyXFxuICBjb250ZW50OicnO1xcclxcbiAgaGVpZ2h0OjJweDsgXFxyXFxuICB3aWR0aDowO1xcclxcbiAgYm90dG9tOjFweDsgXFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IzUyNjRBRTsgXFxyXFxuICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcbi5iYXI6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6NTAlO1xcclxcbn1cXHJcXG4uYmFyOmFmdGVyIHtcXHJcXG4gIHJpZ2h0OjUwJTsgXFxyXFxufVxcclxcblxcclxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcclxcbmlucHV0OmZvY3VzIH4gLmJhcjpiZWZvcmUsIGlucHV0OmZvY3VzIH4gLmJhcjphZnRlciB7XFxyXFxuICB3aWR0aDo1MCU7XFxyXFxufVxcclxcblxcclxcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgaGVpZ2h0OjYwJTsgXFxyXFxuICB3aWR0aDoxMDBweDsgXFxyXFxuICB0b3A6MjUlOyBcXHJcXG4gIGxlZnQ6MDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICBvcGFjaXR5OjAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYWN0aXZlIHN0YXRlICovXFxyXFxuaW5wdXQ6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbiAgYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL3N0eWxlcy9jcmVhdGVQYXJ0eS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsSUFBSSw2QkFBcUIsRUFBckIscUJBQXFCLEVBQUU7O0FBRTNCLDhEQUE4RDtBQUM5RCxZQUFZLG1FQUFtRSxFQUFFO0FBQ2pGO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0EsV0FBVyxpQkFBaUIsRUFBRTtBQUM5QixhQUFhLGFBQWEsRUFBRTs7QUFFNUIsMkRBQTJEO0FBQzNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7QUFDQSxnQkFBZ0IsWUFBWSxFQUFFOztBQUU5QixrREFBa0Q7QUFDbEQ7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUEsa0RBQWtEO0FBQ2xELFFBQVEsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRTtBQUN2RDtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsT0FBTztFQUNQLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsbURBQW1EO0FBQ25EO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLDRDQUE0QztFQUU1QyxvQ0FBb0M7QUFDdEM7O0FBRUEsZ0NBQWdDO0FBQ2hDO0NBQ0MsT0FBTyxrQkFBa0IsRUFBRTtFQUMxQixNQUFNLE9BQU8sRUFBRSxzQkFBc0IsRUFBRTtBQUN6QztBQUtBO0NBQ0MsT0FBTyxrQkFBa0IsRUFBRTtFQUMxQixNQUFNLE9BQU8sRUFBRSxzQkFBc0IsRUFBRTtBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgYm94LXNpemluZzpib3JkZXItYm94OyB9XFxyXFxuXFxyXFxuLyogYmFzaWMgc3R5bGluZ3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuYm9keSBcXHRcXHRcXHRcXHQgeyBiYWNrZ3JvdW5kOnVybChodHRwczovL3Njb3RjaC5pby93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wNy82MS5qcGcpOyB9XFxyXFxuLmNvbnRhaW5lciBcXHRcXHR7IFxcclxcbiAgZm9udC1mYW1pbHk6J1JvYm90byc7XFxyXFxuICB3aWR0aDo2MDBweDsgXFxyXFxuICBtYXJnaW46MzBweCBhdXRvIDA7IFxcclxcbiAgZGlzcGxheTpibG9jazsgXFxyXFxuICBiYWNrZ3JvdW5kOiNGRkY7XFxyXFxuICBwYWRkaW5nOjEwcHggNTBweCA1MHB4O1xcclxcbn1cXHJcXG4gaDIgeyBcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyOyBcXHJcXG4gIG1hcmdpbi1ib3R0b206NTBweDsgXFxyXFxufVxcclxcbmgyIHNtYWxsIHsgXFxyXFxuICBmb250LXdlaWdodDpub3JtYWw7IFxcclxcbiAgY29sb3I6Izg4ODsgXFxyXFxuICBkaXNwbGF5OmJsb2NrOyBcXHJcXG59XFxyXFxuLmZvb3RlciBcXHR7IHRleHQtYWxpZ246Y2VudGVyOyB9XFxyXFxuLmZvb3RlciBhICB7IGNvbG9yOiM1M0IyQzg7IH1cXHJcXG5cXHJcXG4vKiBmb3JtIHN0YXJ0aW5nIHN0eWxpbmdzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4uZ3JvdXAgXFx0XFx0XFx0ICB7IFxcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxcclxcbiAgbWFyZ2luLWJvdHRvbTo0NXB4OyBcXHJcXG59XFxyXFxuaW5wdXQgXFx0XFx0XFx0XFx0e1xcclxcbiAgZm9udC1zaXplOjE4cHg7XFxyXFxuICBwYWRkaW5nOjEwcHggMTBweCAxMHB4IDVweDtcXHJcXG4gIGRpc3BsYXk6YmxvY2s7XFxyXFxuICB3aWR0aDozMDBweDtcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzc1NzU3NTtcXHJcXG59XFxyXFxuaW5wdXQ6Zm9jdXMgXFx0XFx0eyBvdXRsaW5lOm5vbmU7IH1cXHJcXG5cXHJcXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5sYWJlbCBcXHRcXHRcXHRcXHQge1xcclxcbiAgY29sb3I6Izk5OTsgXFxyXFxuICBmb250LXNpemU6MThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gIGxlZnQ6NXB4O1xcclxcbiAgdG9wOjEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7IFxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcclxcbmlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwgXFx0XFx0e1xcclxcbiAgdG9wOi0yMHB4O1xcclxcbiAgZm9udC1zaXplOjE0cHg7XFxyXFxuICBjb2xvcjojNTI2NEFFO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uYmFyIFxcdHsgcG9zaXRpb246cmVsYXRpdmU7IGRpc3BsYXk6YmxvY2s7IHdpZHRoOjMwMHB4OyB9XFxyXFxuLmJhcjpiZWZvcmUsIC5iYXI6YWZ0ZXIgXFx0e1xcclxcbiAgY29udGVudDonJztcXHJcXG4gIGhlaWdodDoycHg7IFxcclxcbiAgd2lkdGg6MDtcXHJcXG4gIGJvdHRvbToxcHg7IFxcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiM1MjY0QUU7IFxcclxcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsOyBcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG4uYmFyOmJlZm9yZSB7XFxyXFxuICBsZWZ0OjUwJTtcXHJcXG59XFxyXFxuLmJhcjphZnRlciB7XFxyXFxuICByaWdodDo1MCU7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBhY3RpdmUgc3RhdGUgKi9cXHJcXG5pbnB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLCBpbnB1dDpmb2N1cyB+IC5iYXI6YWZ0ZXIge1xcclxcbiAgd2lkdGg6NTAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDo2MCU7IFxcclxcbiAgd2lkdGg6MTAwcHg7IFxcclxcbiAgdG9wOjI1JTsgXFxyXFxuICBsZWZ0OjA7XFxyXFxuICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgb3BhY2l0eTowLjU7XFxyXFxufVxcclxcblxcclxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcclxcbmlucHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjppbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXHJcXG4gIC1tb3otYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbiAgYW5pbWF0aW9uOmlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuXFx0ZnJvbSB7IGJhY2tncm91bmQ6IzUyNjRBRTsgfVxcclxcbiAgdG8gXFx0eyB3aWR0aDowOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXHJcXG5cXHRmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XFxyXFxuICB0byBcXHR7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXHJcXG5cXHRmcm9tIHsgYmFja2dyb3VuZDojNTI2NEFFOyB9XFxyXFxuICB0byBcXHR7IHdpZHRoOjA7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9BcHAuY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9leHBsb3JhdGlvbi5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL21lc3Nhbmdlci5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL3BhcnRpZXMuY3NzJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9wcm9maWxlLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvSG9tZS5jc3MnXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL2xvZ2luLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvcmVnaXN0cmF0aW9uLmNzcydcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvY3JlYXRlUGFydHkuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=