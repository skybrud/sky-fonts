(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sky-fonts", [], factory);
	else if(typeof exports === 'object')
		exports["sky-fonts"] = factory();
	else
		root["SkyFonts"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typekit = __webpack_require__(1);

var _typekit2 = _interopRequireDefault(_typekit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontProviders = {
	typekit: _typekit2.default
};

function getProvider(provider) {
	if (provider in fontProviders) {
		for (var _len = arguments.length, restArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			restArguments[_key - 1] = arguments[_key];
		}

		fontProviders[provider].apply(fontProviders, restArguments);
	} else {
		console.warn('[SkyFonts] did not find "' + provider + '" in implemented font providers.');
	}
}

exports.default = getProvider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function init(personalKitId) {
	if (personalKitId && typeof document !== 'undefined') {
		(function (d) {
			var tkTimeout = 3000;
			if (window.sessionStorage) {
				if (sessionStorage.getItem('useTypekit') === 'false') {
					tkTimeout = 0;
				}
			}
			var config = {
				kitId: personalKitId,
				scriptTimeout: tkTimeout,
				async: true
			},
			    h = d.documentElement,
			    t = setTimeout(function () {
				h.className = h.className.replace(/\bwf-loading\b/g, "") + "wf-inactive";if (window.sessionStorage) {
					sessionStorage.setItem("useTypekit", "false");
				}
			}, config.scriptTimeout),
			    tk = d.createElement("script"),
			    f = false,
			    s = d.getElementsByTagName("script")[0],
			    a;h.className += "wf-loading";tk.src = '//use.typekit.net/' + config.kitId + '.js';tk.async = true;tk.onload = tk.onreadystatechange = function () {
				a = this.readyState;if (f || a && a != "complete" && a != "loaded") return;f = true;clearTimeout(t);try {
					Typekit.load(config);
				} catch (e) {}
			};s.parentNode.insertBefore(tk, s);
		})(document);
	}
}

exports.default = init;

/***/ })
/******/ ]);
});