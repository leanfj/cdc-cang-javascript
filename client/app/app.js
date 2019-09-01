System.register(["./controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }],
    execute: function () {

      //Instacia do Controller
      const controller = new NegociacaoController();

      const $ = document.querySelector.bind(document);

      //Captura do elemento no HTML
      //Utilização do bind para passar o contexto de this para o controller
      $(".form").addEventListener("submit", controller.adiciona.bind(controller));

      $("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

      $("#botao-importa").addEventListener("click", controller.importaNegociacoes.bind(controller));
    }
  };
});
//# sourceMappingURL=app.js.map