(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);


const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({
    clientId: '2e42f2752bb5b1bdce37',
    clientSecret: 'e6e63118e5d6384afeeb2c8891887151ceb0fa07'
  })
  /*Providers.Email({
    server: {
      host: '',
      port: '',
      auth: {
        user: '',
        pass: '',
      },
    },
    form: '',
  }),*/
  ]
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsbGF4Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIndlYnBhY2s6Ly9jaGlsbGF4L2V4dGVybmFsIFwibmV4dC1hdXRoXCIiLCJ3ZWJwYWNrOi8vY2hpbGxheC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQUUsQ0FDVEMsaUVBQUEsQ0FBaUI7QUFDZkMsWUFBUSxFQUFFLHNCQURLO0FBRWZDLGdCQUFZLEVBQUU7QUFGQyxHQUFqQjtBQUlBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmYTtBQURHLENBQWhCO0FBb0JBLCtEQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjQyxnREFBUSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV04sT0FBWCxDQUFyQyxFOzs7Ozs7Ozs7OztBQ3ZCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xyXG4gICAgICBjbGllbnRJZDogJzJlNDJmMjc1MmJiNWIxYmRjZTM3JyxcclxuICAgICAgY2xpZW50U2VjcmV0OiAnZTZlNjMxMThlNWQ2Mzg0YWZlZWIyYzg4OTE4ODcxNTFjZWIwZmEwNycsXHJcbiAgICB9KSxcclxuICAgIC8qUHJvdmlkZXJzLkVtYWlsKHtcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogJycsXHJcbiAgICAgICAgcG9ydDogJycsXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogJycsXHJcbiAgICAgICAgICBwYXNzOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtOiAnJyxcclxuICAgIH0pLCovXHJcbiAgXSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucylcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9