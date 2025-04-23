/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.copyBtnEv = exports.toggleDarkMode = exports.setENContent = exports.setESContent = exports.loadLocalizedContent = void 0;\r\nfunction loadLocalizedContent(lang) {\r\n    if (lang === 'es') {\r\n        document.body.classList.add('body-ES');\r\n        return;\r\n    }\r\n    document.body.classList.add('body-EN');\r\n}\r\nexports.loadLocalizedContent = loadLocalizedContent;\r\nfunction setESContent() {\r\n    document.body.classList.replace('body-EN', 'body-ES');\r\n}\r\nexports.setESContent = setESContent;\r\nfunction setENContent() {\r\n    document.body.classList.replace('body-ES', 'body-EN');\r\n}\r\nexports.setENContent = setENContent;\r\nfunction toggleDarkMode() {\r\n    document.body.classList.toggle('body-dark');\r\n}\r\nexports.toggleDarkMode = toggleDarkMode;\r\nfunction copyBtnEv(parentDiv) {\r\n    let txt = '';\r\n    (parentDiv != null && parentDiv.textContent != null) ? txt = parentDiv.textContent : txt = '';\r\n    navigator.clipboard.writeText(txt.substring(txt.indexOf('\\''), txt.length));\r\n}\r\nexports.copyBtnEv = copyBtnEv;\r\n\n\n//# sourceURL=webpack://mailsheetblog/./js/events.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\r\nconst events = __importStar(__webpack_require__(/*! ./events */ \"./js/events.js\"));\r\nconsole.log(\"ello am script\");\r\nevents.loadLocalizedContent((0, utils_1.getUserLanguage)());\r\nconst esBtn = document.getElementById('ES-btn');\r\nesBtn.addEventListener('click', () => (events.setESContent()));\r\nconst enBtn = document.getElementById('EN-btn');\r\nenBtn.addEventListener('click', () => (events.setENContent()));\r\nconst darkBtn = document.getElementById('light-btn');\r\ndarkBtn.addEventListener('click', () => (events.toggleDarkMode()));\r\nconst esCodeCopyBtn = document.getElementById('ES-code-copy-btn');\r\nesCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(esCodeCopyBtn.parentElement)));\r\nconst enCodeCopyBtn = document.getElementById('EN-code-copy-btn');\r\nenCodeCopyBtn.addEventListener('click', () => (events.copyBtnEv(enCodeCopyBtn.parentElement)));\r\n\n\n//# sourceURL=webpack://mailsheetblog/./js/index.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getUserLanguage = void 0;\r\nfunction getUserLanguage() {\r\n    const navLanguage = window.navigator.language;\r\n    return navLanguage ? navLanguage.substring(0, 2) : \"\";\r\n}\r\nexports.getUserLanguage = getUserLanguage;\r\n;\r\n\n\n//# sourceURL=webpack://mailsheetblog/./js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;