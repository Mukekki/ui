(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["w-tooltip"] = factory();
	else
		root["w-tooltip"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "652c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b853");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a0e6b888", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "834f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d330");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("13577672", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b853":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tooltip[data-v-534d72ea]{z-index:1;display:inline-block;position:relative}.tooltip .content[data-v-534d72ea]{--tooltip-background-color:var(--white);--tooltip-color:var(--dark-blue);--width:200px;box-shadow:0 20px 40px var(--dark-blue-20);color:var(--tooltip-color);border-radius:10px;padding:10px;text-align:center;background-color:var(--tooltip-background-color);width:var(--width);z-index:1;position:absolute;top:30px;left:calc(12px - var(--width)/2);font-size:11px;line-height:144%;font-weight:400;transform:scale(0);transition:all .2s}.tooltip .content[data-v-534d72ea]:before{content:\"\";position:absolute;transform:rotate(180deg);left:calc(50% - 10px);top:-16px;border:10px solid transparent;border-top:10px solid var(--tooltip-background-color)}.tooltip .content[data-v-534d72ea]:hover{transform:scale(1)}.tooltip .content:hover~.icon[data-v-534d72ea]{background-color:#667699}.tooltip .content:hover~.icon>svg>path[data-v-534d72ea]{fill:var(--white)}.tooltip .icon[data-v-534d72ea]{width:19px;height:19px;flex-grow:0;flex-shrink:0;color:var(--dark-blue)!important;border-radius:100%;text-align:center;line-height:18px;background-color:var(--dark-blue-10);margin:0 3px;cursor:pointer;font-weight:700;font-size:12px;line-height:19px}.tooltip .icon[data-v-534d72ea]:hover{background-color:#667699}.tooltip .icon:hover>svg>path[data-v-534d72ea]{fill:var(--white)}.tooltip .icon:hover~.content[data-v-534d72ea]{transform:scale(1)}.tooltip.-left .content[data-v-534d72ea]{left:auto;right:-5px}.tooltip.-left .content[data-v-534d72ea]:before{left:calc(100% - 27px)}.tooltip.-right .content[data-v-534d72ea]{right:auto;left:-5px}.tooltip.-right .content[data-v-534d72ea]:before{left:7px}.tooltip.-top .content[data-v-534d72ea]{top:auto;bottom:26px}.tooltip.-top .content[data-v-534d72ea]:before{transform:rotate(0deg);top:auto;bottom:-16px}.tooltip.-text>.icon[data-v-534d72ea]{width:auto;height:auto;background:none;margin:0}@media (max-width:768px){.tooltip.-left .content[data-v-534d72ea]{left:auto;right:-5px}.tooltip.-left .content[data-v-534d72ea]:before{left:calc(100% - 27px)}.tooltip.-right .content[data-v-534d72ea]{right:auto;left:-5px}.tooltip.-right .content[data-v-534d72ea]:before{left:7px}.tooltip.-top .content[data-v-534d72ea]{top:auto;bottom:26px}.tooltip.-top .content[data-v-534d72ea]:before{transform:rotate(0deg);top:auto;bottom:-16px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d330":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{--dark-blue:#001a54;--dark-blue-60:rgba(0,26,84,0.6);--dark-blue-40:rgba(0,26,84,0.4);--dark-blue-30:rgba(0,26,84,0.3);--dark-blue-10:rgba(0,26,84,0.1);--dark-blue-20:rgba(0,26,84,0.2);--dark-blue-80:rgba(0,26,84,0.8);--dark-blue-90:rgba(0,26,84,0.9);--swiper-pagination-color:#001a54;--light-gray:#e5e5e5;--light-gray-hover:#e8edf3;--dark-blue-purple-40:rgba(62,47,122,0.4);--dark-blue-purple-20:rgba(62,47,122,0.2);--blue-link:#255ce7;--blue-link-hover:#4176fd;--orange-gradient:linear-gradient(to bottom right,#ffd300,#df6c3b);--orange-gradient-hover:linear-gradient(to bottom right,#ffd300,#fb9258);--promo-gradient:linear-gradient(85.73deg,#fcb42f -25.39%,#cb34e3 114.43%);--promo-gradient-hover:linear-gradient(85.73deg,#fce72f -25.39%,#df52f5 114.43%);--green:#77da29;--red:#f66514;--orange:#eeb012;--pink:#f20376;--blue-gray:#f2f5f9;--white:#fff;--white-10:hsla(0,0%,100%,0.1);--white-20:hsla(0,0%,100%,0.2);--white-40:hsla(0,0%,100%,0.4);--white-60:hsla(0,0%,100%,0.6);--dark-blue-bg:#07225e;--deep-dark-blue:#011950;--deep-dark-blue2:#011a55;--main-grey:#f2f5f9;--font-dark-blue:#001a54;--light-blue-hover:#919db7;--faq-background:rgba(232,119,71,0.6);--faq-color:#e87747;--updates-background:rgba(0,190,202,0.6);--updates-color:#00beca;--announcements-background:rgba(239,96,135,0.6);--announcements-color:#ef6087;--promo-background:rgba(161,202,0,0.6);--promo-color:#a1ca00;--media-background:rgba(44,103,255,0.6);--media-color:#2c67ff;--community-background:rgba(187,44,255,0.6);--community-color:#bb2cff;--light-blue-button-background:rgba(67,117,243,0.1);--orange-gradient-site:linear-gradient(140.17deg,#ffd300 -4.61%,#df6c3b 102.74%);--orange-gradient-site-hover:linear-gradient(140.17deg,#ffd300 -4.61%,#fb9258 102.74%);--main-width:668px;--main-width-full:1180px;--preloader-background:#dadfe9}@media (max-width:767px){body{--main-width-full:100%}}@media (max-width:1023px) and (min-width:768px){body{--main-width-full:668px}}@media (max-width:1279px) and (min-width:1024px){body{--main-width-full:846px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e611":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WTooltip_vue_vue_type_style_index_0_id_534d72ea_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("652c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WTooltip_vue_vue_type_style_index_0_id_534d72ea_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WTooltip_vue_vue_type_style_index_0_id_534d72ea_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b76c1a7-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WTooltip.vue?vue&type=template&id=534d72ea&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tooltip",
    class: _vm.tooltipPosition,
    on: {
      "mousedown": function ($event) {
        return _vm.update();
      }
    }
  }, [_c('div', {
    ref: "icon",
    staticClass: "icon"
  }, [_vm._t("head", function () {
    return [_vm._v(" i ")];
  })], 2), _c('div', {
    ref: "tooltip",
    staticClass: "content"
  }, [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WTooltip.vue?vue&type=template&id=534d72ea&scoped=true&

// EXTERNAL MODULE: ./src/styles/vars.less
var vars = __webpack_require__("834f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WTooltip.vue?vue&type=script&lang=js&

/* harmony default export */ var WTooltipvue_type_script_lang_js_ = ({
  name: 'WTooltip',
  props: {
    width: {
      type: Number,
      default: 200
    },
    background: {
      type: [String, Number],
      default: ''
    },
    fontColor: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      iconPosition: {
        y: 0,
        x: 0
      },
      tooltipSize: {
        width: 0,
        height: 0
      }
    };
  },

  computed: {
    tooltipPosition() {
      return {
        '-left': this.iconPosition.x > window.innerWidth / 2 && (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0 && this.width / 2 > window.innerWidth - this.iconPosition.x,
        '-right': this.iconPosition.x < window.innerWidth / 2 && (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0 && this.iconPosition.x < this.width / 2,
        '-center': (window.innerWidth - 18) / 2 - this.iconPosition.x !== 0,
        '-top': this.iconPosition.y > window.innerHeight / 2 && window.innerHeight - this.iconPosition.y < this.tooltipSize.height,
        '-text': this.$slots['head']
      };
    }

  },
  methods: {
    update() {
      this.iconPosition = {
        y: this.$refs.icon.getBoundingClientRect().y,
        x: this.$refs.icon.getBoundingClientRect().x
      };
      this.tooltipSize = {
        width: this.width,
        height: this.$refs.tooltip.offsetHeight + 35
      };
    }

  },

  mounted() {
    this.update();
    window.addEventListener('resize', this.update);
    window.addEventListener('scroll', this.update);

    if (this.background) {
      this.$refs.tooltip.style.setProperty('--tooltip-background-color', this.background);
    }

    if (this.width) {
      this.$refs.tooltip.style.setProperty('--width', this.width.toString() + 'px');
    }

    if (this.fontColor) {
      this.$refs.tooltip.style.setProperty('--tooltip-color', this.fontColor);
    }
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.update);
    window.removeEventListener('scroll', this.update);
  }

});
// CONCATENATED MODULE: ./src/components/WTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WTooltipvue_type_script_lang_js_ = (WTooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/WTooltip.vue?vue&type=style&index=0&id=534d72ea&prod&lang=less&scoped=true&
var WTooltipvue_type_style_index_0_id_534d72ea_prod_lang_less_scoped_true_ = __webpack_require__("e611");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/WTooltip.vue






/* normalize component */

var component = normalizeComponent(
  components_WTooltipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "534d72ea",
  null
  
)

/* harmony default export */ var WTooltip = (component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src_0 = ({
  Tooltip: WTooltip
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=w-tooltip.umd.js.map