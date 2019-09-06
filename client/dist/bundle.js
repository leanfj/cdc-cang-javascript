/******/ (function(modules) { // webpackBootstrap
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

(void 0)(["./controllers/NegociacaoController.js", "./domain/index.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController, Negociacao;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }, function (_domainIndexJs) {
      Negociacao = _domainIndexJs.Negociacao;
    }],
    execute: function () {

      const negociacao = new Negociacao(new Date(), 1, 100);

      const headers = new Headers();
      headers.set("Content-Type", "application/json");

      const body = JSON.stringify(negociacao);

      const method = "POST";

      const config = {
        method,
        headers,
        body
      };

      fetch("/negociacoes", config).then(() => {
        console.log("Dado enviado com sucesso");
      });

      //Instacia do Controller
      const controller = new NegociacaoController();

      // const $ = document.querySelector.bind(document);

      //Captura do elemento no HTML
      //Utilização do bind para passar o contexto de this para o controller
      // $(".form").addEventListener("submit", controller.adiciona.bind(controller));

      // $("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

      // $("#botao-importa").addEventListener(
      //   "click",
      //   controller.importaNegociacoes.bind(controller)
      // );
    }
  };
});

/***/ })
/******/ ]);