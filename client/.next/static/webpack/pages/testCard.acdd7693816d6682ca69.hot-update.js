webpackHotUpdate_N_E("pages/testCard",{

/***/ "./node_modules/@material-ui/core/esm/Grid/Grid.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/Grid.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: className,
    ref: ref
  }, other));
});
 true ? Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(SPACINGS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
var StyledGrid = Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = Object(_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_6__["default"])('Grid');
  StyledGrid.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StyledGrid);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grid/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grid/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requirePropFactory; });
function requirePropFactory(componentNameInError) {
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/***/ }),

/***/ "./pages/testCard.js":
/*!***************************!*\
  !*** ./pages/testCard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "D:\\Projects\\Chillax\\client\\pages\\testCard.js",
    _this = undefined,
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
});
var styled = {
  maxWidth: 345
};

var testCard = function testCard() {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      children: "Default"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: styled,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
          component: "img",
          alt: "Contemplative Reptile",
          height: "140",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack-o%27-Lantern_2003-10-31.jpg/360px-Jack-o%27-Lantern_2003-10-31.jpg",
          title: "Contemplative Reptile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            gutterBottom: true,
            variant: "h5",
            component: "h2",
            children: "Lizard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            variant: "body2",
            color: "textSecondary",
            component: "p",
            children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: "small",
          color: "primary",
          children: "Share"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: "small",
          color: "primary",
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(testCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

/* harmony default export */ __webpack_exports__["default"] = (testCard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9HcmlkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9yZXF1aXJlUHJvcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RDYXJkLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbG9yIiwiaGVpZ2h0IiwicGFkZGluZyIsInN0eWxlZCIsIm1heFdpZHRoIiwidGVzdENhcmQiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUNoQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUNJO0FBQ1g7QUFDc0I7QUFDZTtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0EsSUFBSSxrRkFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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cmQuYWNkZDc2OTM4MTZkNjY4MmNhNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIEEgZ3JpZCBjb21wb25lbnQgdXNpbmcgdGhlIGZvbGxvd2luZyBsaWJzIGFzIGluc3BpcmF0aW9uLlxuLy9cbi8vIEZvciB0aGUgaW1wbGVtZW50YXRpb246XG4vLyAtIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMy9sYXlvdXQvZ3JpZC9cbi8vIC0gaHR0cHM6Ly9naXRodWIuY29tL2tyaXN0b2Zlcmpvc2VwaC9mbGV4Ym94Z3JpZC9ibG9iL21hc3Rlci9zcmMvY3NzL2ZsZXhib3hncmlkLmNzc1xuLy8gLSBodHRwczovL2dpdGh1Yi5jb20vcm95bGVlMDcwNC9yZWFjdC1mbGV4Ym94LWdyaWRcbi8vIC0gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyanMub3JnL2xhdGVzdC9sYXlvdXQvaW50cm9kdWN0aW9uXG4vL1xuLy8gRm9sbG93IHRoaXMgZmxleGJveCBHdWlkZSB0byBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgdW5kZXJseWluZyBtb2RlbDpcbi8vIC0gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvYS1ndWlkZS10by1mbGV4Ym94L1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHJlcXVpcmVQcm9wRmFjdG9yeSBmcm9tICcuLi91dGlscy9yZXF1aXJlUHJvcEZhY3RvcnknO1xudmFyIFNQQUNJTkdTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXTtcbnZhciBHUklEX1NJWkVTID0gWydhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR3JpZChnbG9iYWxTdHlsZXMsIHRoZW1lLCBicmVha3BvaW50KSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgR1JJRF9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgdmFyIGtleSA9IFwiZ3JpZC1cIi5jb25jYXQoYnJlYWtwb2ludCwgXCItXCIpLmNvbmNhdChzaXplKTtcblxuICAgIGlmIChzaXplID09PSB0cnVlKSB7XG4gICAgICAvLyBGb3IgdGhlIGF1dG8gbGF5b3V0aW5nXG4gICAgICBzdHlsZXNba2V5XSA9IHtcbiAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHtcbiAgICAgICAgZmxleEJhc2lzOiAnYXV0bycsXG4gICAgICAgIGZsZXhHcm93OiAwLFxuICAgICAgICBtYXhXaWR0aDogJ25vbmUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gS2VlcCA3IHNpZ25pZmljYW50IG51bWJlcnMuXG5cblxuICAgIHZhciB3aWR0aCA9IFwiXCIuY29uY2F0KE1hdGgucm91bmQoc2l6ZSAvIDEyICogMTBlNykgLyAxMGU1LCBcIiVcIik7IC8vIENsb3NlIHRvIHRoZSBib290c3RyYXAgaW1wbGVtZW50YXRpb246XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvOGZjY2FhMjQzOWU5N2VjNzJhNGI3ZGM0MmNjYzFmNjQ5NzkwYWRiMC9zY3NzL21peGlucy9fZ3JpZC5zY3NzI0w0MVxuXG4gICAgc3R5bGVzW2tleV0gPSB7XG4gICAgICBmbGV4QmFzaXM6IHdpZHRoLFxuICAgICAgZmxleEdyb3c6IDAsXG4gICAgICBtYXhXaWR0aDogd2lkdGhcbiAgICB9O1xuICB9KTsgLy8gTm8gbmVlZCBmb3IgYSBtZWRpYSBxdWVyeSBmb3IgdGhlIGZpcnN0IHNpemUuXG5cbiAgaWYgKGJyZWFrcG9pbnQgPT09ICd4cycpIHtcbiAgICBfZXh0ZW5kcyhnbG9iYWxTdHlsZXMsIHN0eWxlcyk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsU3R5bGVzW3RoZW1lLmJyZWFrcG9pbnRzLnVwKGJyZWFrcG9pbnQpXSA9IHN0eWxlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQodmFsKSB7XG4gIHZhciBkaXYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gIHZhciBwYXJzZSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHBhcnNlIC8gZGl2KS5jb25jYXQoU3RyaW5nKHZhbCkucmVwbGFjZShTdHJpbmcocGFyc2UpLCAnJykgfHwgJ3B4Jyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR3V0dGVyKHRoZW1lLCBicmVha3BvaW50KSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgU1BBQ0lOR1MuZm9yRWFjaChmdW5jdGlvbiAoc3BhY2luZykge1xuICAgIHZhciB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKHNwYWNpbmcpO1xuXG4gICAgaWYgKHRoZW1lU3BhY2luZyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0eWxlc1tcInNwYWNpbmctXCIuY29uY2F0KGJyZWFrcG9pbnQsIFwiLVwiKS5jb25jYXQoc3BhY2luZyldID0ge1xuICAgICAgbWFyZ2luOiBcIi1cIi5jb25jYXQoZ2V0T2Zmc2V0KHRoZW1lU3BhY2luZywgMikpLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KGdldE9mZnNldCh0aGVtZVNwYWNpbmcpLCBcIilcIiksXG4gICAgICAnJiA+ICRpdGVtJzoge1xuICAgICAgICBwYWRkaW5nOiBnZXRPZmZzZXQodGhlbWVTcGFjaW5nLCAyKVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufSAvLyBEZWZhdWx0IENTUyB2YWx1ZXNcbi8vIGZsZXg6ICcwIDEgYXV0bycsXG4vLyBmbGV4RGlyZWN0aW9uOiAncm93Jyxcbi8vIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0Jyxcbi8vIGZsZXhXcmFwOiAnbm93cmFwJyxcbi8vIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG5cblxuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29udGFpbmVyPXt0cnVlfWAuICovXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGl0ZW09e3RydWV9YC4gKi9cbiAgICBpdGVtOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogJzAnIC8vIEZvciBpbnN0YW5jZSwgaXQncyB1c2VmdWwgd2hlbiB1c2VkIHdpdGggYSBgZmlndXJlYCBlbGVtZW50LlxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHplcm9NaW5XaWR0aD17dHJ1ZX1gLiAqL1xuICAgIHplcm9NaW5XaWR0aDoge1xuICAgICAgbWluV2lkdGg6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwiY29sdW1uXCJgLiAqL1xuICAgICdkaXJlY3Rpb24teHMtY29sdW1uJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwiY29sdW1uLXJldmVyc2VcImAuICovXG4gICAgJ2RpcmVjdGlvbi14cy1jb2x1bW4tcmV2ZXJzZSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlyZWN0aW9uPVwicm93LXJldmVyc2VcImAuICovXG4gICAgJ2RpcmVjdGlvbi14cy1yb3ctcmV2ZXJzZSc6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgd3JhcD1cIm5vd3JhcFwiYC4gKi9cbiAgICAnd3JhcC14cy1ub3dyYXAnOiB7XG4gICAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgd3JhcD1cInJldmVyc2VcImAuICovXG4gICAgJ3dyYXAteHMtd3JhcC1yZXZlcnNlJzoge1xuICAgICAgZmxleFdyYXA6ICd3cmFwLXJldmVyc2UnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJjZW50ZXJcImAuICovXG4gICAgJ2FsaWduLWl0ZW1zLXhzLWNlbnRlcic6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJgLiAqL1xuICAgICdhbGlnbi1pdGVtcy14cy1mbGV4LXN0YXJ0Jzoge1xuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtZmxleC1lbmQnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduSXRlbXM9XCJiYXNlbGluZVwiYC4gKi9cbiAgICAnYWxpZ24taXRlbXMteHMtYmFzZWxpbmUnOiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImNlbnRlclwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1jZW50ZXInOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImZsZXgtc3RhcnRcImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtZmxleC1zdGFydCc6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cImZsZXgtZW5kXCJgLiAqL1xuICAgICdhbGlnbi1jb250ZW50LXhzLWZsZXgtZW5kJzoge1xuICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cInNwYWNlLWJldHdlZW5cImAuICovXG4gICAgJ2FsaWduLWNvbnRlbnQteHMtc3BhY2UtYmV0d2Vlbic6IHtcbiAgICAgIGFsaWduQ29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduQ29udGVudD1cInNwYWNlLWFyb3VuZFwiYC4gKi9cbiAgICAnYWxpZ24tY29udGVudC14cy1zcGFjZS1hcm91bmQnOiB7XG4gICAgICBhbGlnbkNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJjZW50ZXJcImAuICovXG4gICAgJ2p1c3RpZnkteHMtY2VudGVyJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJmbGV4LWVuZFwiYC4gKi9cbiAgICAnanVzdGlmeS14cy1mbGV4LWVuZCc6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJgLiAqL1xuICAgICdqdXN0aWZ5LXhzLXNwYWNlLWJldHdlZW4nOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1hcm91bmRcImAuICovXG4gICAgJ2p1c3RpZnkteHMtc3BhY2UtYXJvdW5kJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcImAuICovXG4gICAgJ2p1c3RpZnkteHMtc3BhY2UtZXZlbmx5Jzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknXG4gICAgfVxuICB9LCBnZW5lcmF0ZUd1dHRlcih0aGVtZSwgJ3hzJyksIHRoZW1lLmJyZWFrcG9pbnRzLmtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgLy8gVXNlIHNpZGUgZWZmZWN0IG92ZXIgaW1tdXRhYmlsaXR5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAgZ2VuZXJhdGVHcmlkKGFjY3VtdWxhdG9yLCB0aGVtZSwga2V5KTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIHt9KSk7XG59O1xudmFyIEdyaWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcmlkKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhbGlnbkNvbnRlbnQgPSBwcm9wcy5hbGlnbkNvbnRlbnQsXG4gICAgICBhbGlnbkNvbnRlbnQgPSBfcHJvcHMkYWxpZ25Db250ZW50ID09PSB2b2lkIDAgPyAnc3RyZXRjaCcgOiBfcHJvcHMkYWxpZ25Db250ZW50LFxuICAgICAgX3Byb3BzJGFsaWduSXRlbXMgPSBwcm9wcy5hbGlnbkl0ZW1zLFxuICAgICAgYWxpZ25JdGVtcyA9IF9wcm9wcyRhbGlnbkl0ZW1zID09PSB2b2lkIDAgPyAnc3RyZXRjaCcgOiBfcHJvcHMkYWxpZ25JdGVtcyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgY29udGFpbmVyID0gX3Byb3BzJGNvbnRhaW5lciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIGRpcmVjdGlvbiA9IF9wcm9wcyRkaXJlY3Rpb24gPT09IHZvaWQgMCA/ICdyb3cnIDogX3Byb3BzJGRpcmVjdGlvbixcbiAgICAgIF9wcm9wcyRpdGVtID0gcHJvcHMuaXRlbSxcbiAgICAgIGl0ZW0gPSBfcHJvcHMkaXRlbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaXRlbSxcbiAgICAgIF9wcm9wcyRqdXN0aWZ5ID0gcHJvcHMuanVzdGlmeSxcbiAgICAgIGp1c3RpZnkgPSBfcHJvcHMkanVzdGlmeSA9PT0gdm9pZCAwID8gJ2ZsZXgtc3RhcnQnIDogX3Byb3BzJGp1c3RpZnksXG4gICAgICBfcHJvcHMkbGcgPSBwcm9wcy5sZyxcbiAgICAgIGxnID0gX3Byb3BzJGxnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRsZyxcbiAgICAgIF9wcm9wcyRtZCA9IHByb3BzLm1kLFxuICAgICAgbWQgPSBfcHJvcHMkbWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG1kLFxuICAgICAgX3Byb3BzJHNtID0gcHJvcHMuc20sXG4gICAgICBzbSA9IF9wcm9wcyRzbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc20sXG4gICAgICBfcHJvcHMkc3BhY2luZyA9IHByb3BzLnNwYWNpbmcsXG4gICAgICBzcGFjaW5nID0gX3Byb3BzJHNwYWNpbmcgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkc3BhY2luZyxcbiAgICAgIF9wcm9wcyR3cmFwID0gcHJvcHMud3JhcCxcbiAgICAgIHdyYXAgPSBfcHJvcHMkd3JhcCA9PT0gdm9pZCAwID8gJ3dyYXAnIDogX3Byb3BzJHdyYXAsXG4gICAgICBfcHJvcHMkeGwgPSBwcm9wcy54bCxcbiAgICAgIHhsID0gX3Byb3BzJHhsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR4bCxcbiAgICAgIF9wcm9wcyR4cyA9IHByb3BzLnhzLFxuICAgICAgeHMgPSBfcHJvcHMkeHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHhzLFxuICAgICAgX3Byb3BzJHplcm9NaW5XaWR0aCA9IHByb3BzLnplcm9NaW5XaWR0aCxcbiAgICAgIHplcm9NaW5XaWR0aCA9IF9wcm9wcyR6ZXJvTWluV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHplcm9NaW5XaWR0aCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhbGlnbkNvbnRlbnRcIiwgXCJhbGlnbkl0ZW1zXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImNvbnRhaW5lclwiLCBcImRpcmVjdGlvblwiLCBcIml0ZW1cIiwgXCJqdXN0aWZ5XCIsIFwibGdcIiwgXCJtZFwiLCBcInNtXCIsIFwic3BhY2luZ1wiLCBcIndyYXBcIiwgXCJ4bFwiLCBcInhzXCIsIFwiemVyb01pbldpZHRoXCJdKTtcblxuICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3AsIGNvbnRhaW5lciAmJiBbY2xhc3Nlcy5jb250YWluZXIsIHNwYWNpbmcgIT09IDAgJiYgY2xhc3Nlc1tcInNwYWNpbmcteHMtXCIuY29uY2F0KFN0cmluZyhzcGFjaW5nKSldXSwgaXRlbSAmJiBjbGFzc2VzLml0ZW0sIHplcm9NaW5XaWR0aCAmJiBjbGFzc2VzLnplcm9NaW5XaWR0aCwgZGlyZWN0aW9uICE9PSAncm93JyAmJiBjbGFzc2VzW1wiZGlyZWN0aW9uLXhzLVwiLmNvbmNhdChTdHJpbmcoZGlyZWN0aW9uKSldLCB3cmFwICE9PSAnd3JhcCcgJiYgY2xhc3Nlc1tcIndyYXAteHMtXCIuY29uY2F0KFN0cmluZyh3cmFwKSldLCBhbGlnbkl0ZW1zICE9PSAnc3RyZXRjaCcgJiYgY2xhc3Nlc1tcImFsaWduLWl0ZW1zLXhzLVwiLmNvbmNhdChTdHJpbmcoYWxpZ25JdGVtcykpXSwgYWxpZ25Db250ZW50ICE9PSAnc3RyZXRjaCcgJiYgY2xhc3Nlc1tcImFsaWduLWNvbnRlbnQteHMtXCIuY29uY2F0KFN0cmluZyhhbGlnbkNvbnRlbnQpKV0sIGp1c3RpZnkgIT09ICdmbGV4LXN0YXJ0JyAmJiBjbGFzc2VzW1wianVzdGlmeS14cy1cIi5jb25jYXQoU3RyaW5nKGp1c3RpZnkpKV0sIHhzICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC14cy1cIi5jb25jYXQoU3RyaW5nKHhzKSldLCBzbSAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQtc20tXCIuY29uY2F0KFN0cmluZyhzbSkpXSwgbWQgIT09IGZhbHNlICYmIGNsYXNzZXNbXCJncmlkLW1kLVwiLmNvbmNhdChTdHJpbmcobWQpKV0sIGxnICE9PSBmYWxzZSAmJiBjbGFzc2VzW1wiZ3JpZC1sZy1cIi5jb25jYXQoU3RyaW5nKGxnKSldLCB4bCAhPT0gZmFsc2UgJiYgY2xhc3Nlc1tcImdyaWQteGwtXCIuY29uY2F0KFN0cmluZyh4bCkpXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcmlkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBhbGlnbi1jb250ZW50YCBzdHlsZSBwcm9wZXJ0eS5cbiAgICogSXQncyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAgYWxpZ25Db250ZW50OiBQcm9wVHlwZXMub25lT2YoWydzdHJldGNoJywgJ2NlbnRlcicsICdmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ3NwYWNlLWJldHdlZW4nLCAnc3BhY2UtYXJvdW5kJ10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgYWxpZ24taXRlbXNgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBhbGlnbkl0ZW1zOiBQcm9wVHlwZXMub25lT2YoWydmbGV4LXN0YXJ0JywgJ2NlbnRlcicsICdmbGV4LWVuZCcsICdzdHJldGNoJywgJ2Jhc2VsaW5lJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSB0aGUgZmxleCAqY29udGFpbmVyKiBiZWhhdmlvci5cbiAgICogWW91IHNob3VsZCBiZSB3cmFwcGluZyAqaXRlbXMqIHdpdGggYSAqY29udGFpbmVyKi5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LWRpcmVjdGlvbmAgc3R5bGUgcHJvcGVydHkuXG4gICAqIEl0IGlzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ3JvdycsICdyb3ctcmV2ZXJzZScsICdjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgdGhlIGZsZXggKml0ZW0qIGJlaGF2aW9yLlxuICAgKiBZb3Ugc2hvdWxkIGJlIHdyYXBwaW5nICppdGVtcyogd2l0aCBhICpjb250YWluZXIqLlxuICAgKi9cbiAgaXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBqdXN0aWZ5LWNvbnRlbnRgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCBpcyBhcHBsaWVkIGZvciBhbGwgc2NyZWVuIHNpemVzLlxuICAgKi9cbiAganVzdGlmeTogUHJvcFR5cGVzLm9uZU9mKFsnZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1lbmQnLCAnc3BhY2UtYmV0d2VlbicsICdzcGFjZS1hcm91bmQnLCAnc3BhY2UtZXZlbmx5J10pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgdGhlIGBsZ2AgYnJlYWtwb2ludCBhbmQgd2lkZXIgc2NyZWVucyBpZiBub3Qgb3ZlcnJpZGRlbi5cbiAgICovXG4gIGxnOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnYXV0bycsIHRydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTJdKSxcblxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgbnVtYmVyIG9mIGdyaWRzIHRoZSBjb21wb25lbnQgaXMgZ29pbmcgdG8gdXNlLlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIHRoZSBgbWRgIGJyZWFrcG9pbnQgYW5kIHdpZGVyIHNjcmVlbnMgaWYgbm90IG92ZXJyaWRkZW4uXG4gICAqL1xuICBtZDogUHJvcFR5cGVzLm9uZU9mKFtmYWxzZSwgJ2F1dG8nLCB0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYHNtYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zIGlmIG5vdCBvdmVycmlkZGVuLlxuICAgKi9cbiAgc206IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0eXBlIGBpdGVtYCBjb21wb25lbnQuXG4gICAqIEl0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSB0eXBlIGBjb250YWluZXJgIGNvbXBvbmVudC5cbiAgICovXG4gIHNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZihTUEFDSU5HUyksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBmbGV4LXdyYXBgIHN0eWxlIHByb3BlcnR5LlxuICAgKiBJdCdzIGFwcGxpZWQgZm9yIGFsbCBzY3JlZW4gc2l6ZXMuXG4gICAqL1xuICB3cmFwOiBQcm9wVHlwZXMub25lT2YoWydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXSksXG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIG51bWJlciBvZiBncmlkcyB0aGUgY29tcG9uZW50IGlzIGdvaW5nIHRvIHVzZS5cbiAgICogSXQncyBhcHBsaWVkIGZvciB0aGUgYHhsYCBicmVha3BvaW50IGFuZCB3aWRlciBzY3JlZW5zLlxuICAgKi9cbiAgeGw6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBudW1iZXIgb2YgZ3JpZHMgdGhlIGNvbXBvbmVudCBpcyBnb2luZyB0byB1c2UuXG4gICAqIEl0J3MgYXBwbGllZCBmb3IgYWxsIHRoZSBzY3JlZW4gc2l6ZXMgd2l0aCB0aGUgbG93ZXN0IHByaW9yaXR5LlxuICAgKi9cbiAgeHM6IFByb3BUeXBlcy5vbmVPZihbZmFsc2UsICdhdXRvJywgdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGl0IHNldHMgYG1pbi13aWR0aDogMGAgb24gdGhlIGl0ZW0uXG4gICAqIFJlZmVyIHRvIHRoZSBsaW1pdGF0aW9ucyBzZWN0aW9uIG9mIHRoZSBkb2N1bWVudGF0aW9uIHRvIGJldHRlciB1bmRlcnN0YW5kIHRoZSB1c2UgY2FzZS5cbiAgICovXG4gIHplcm9NaW5XaWR0aDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG52YXIgU3R5bGVkR3JpZCA9IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlHcmlkJ1xufSkoR3JpZCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciByZXF1aXJlUHJvcCA9IHJlcXVpcmVQcm9wRmFjdG9yeSgnR3JpZCcpO1xuICBTdHlsZWRHcmlkLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBTdHlsZWRHcmlkLnByb3BUeXBlcywge1xuICAgIGFsaWduQ29udGVudDogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIGFsaWduSXRlbXM6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBkaXJlY3Rpb246IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICBqdXN0aWZ5OiByZXF1aXJlUHJvcCgnY29udGFpbmVyJyksXG4gICAgbGc6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgbWQ6IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc206IHJlcXVpcmVQcm9wKCdpdGVtJyksXG4gICAgc3BhY2luZzogcmVxdWlyZVByb3AoJ2NvbnRhaW5lcicpLFxuICAgIHdyYXA6IHJlcXVpcmVQcm9wKCdjb250YWluZXInKSxcbiAgICB4czogcmVxdWlyZVByb3AoJ2l0ZW0nKSxcbiAgICB6ZXJvTWluV2lkdGg6IHJlcXVpcmVQcm9wKCdpdGVtJylcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEdyaWQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR3JpZCc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZVByb3BGYWN0b3J5KGNvbXBvbmVudE5hbWVJbkVycm9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICB2YXIgcmVxdWlyZVByb3AgPSBmdW5jdGlvbiByZXF1aXJlUHJvcChyZXF1aXJlZFByb3ApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJyAmJiAhcHJvcHNbcmVxdWlyZWRQcm9wXSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiVGhlIHByb3AgYFwiLmNvbmNhdChwcm9wRnVsbE5hbWVTYWZlLCBcImAgb2YgXCIpICsgXCJgXCIuY29uY2F0KGNvbXBvbmVudE5hbWVJbkVycm9yLCBcImAgbXVzdCBiZSB1c2VkIG9uIGBcIikuY29uY2F0KHJlcXVpcmVkUHJvcCwgXCJgLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHJlcXVpcmVQcm9wO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgIGJveFNoYWRvdzogJzAgM3B4IDVweCAycHggcmdiYSgyNTUsIDEwNSwgMTM1LCAuMyknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgcGFkZGluZzogJzAgMzBweCcsXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IHN0eWxlZCA9IHtcclxuICBtYXhXaWR0aDogMzQ1LFxyXG59XHJcblxyXG5jb25zdCB0ZXN0Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5EZWZhdWx0PC9CdXR0b24+XHJcbiAgICAgIDxDYXJkIHN0eWxlPXtzdHlsZWR9PlxyXG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcclxuICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2EvYTIvSmFjay1vJTI3LUxhbnRlcm5fMjAwMy0xMC0zMS5qcGcvMzYwcHgtSmFjay1vJTI3LUxhbnRlcm5fMjAwMy0xMC0zMS5qcGdcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICBMaXphcmRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgTGl6YXJkcyBhcmUgYSB3aWRlc3ByZWFkIGdyb3VwIG9mIHNxdWFtYXRlIHJlcHRpbGVzLCB3aXRoIG92ZXJcclxuICAgICAgICAgICAgICA2LDAwMCBzcGVjaWVzLCByYW5naW5nIGFjcm9zcyBhbGwgY29udGluZW50cyBleGNlcHQgQW50YXJjdGljYVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgU2hhcmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXN0Q2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9