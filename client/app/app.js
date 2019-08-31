System.register(["./controllers/NegociacaoController.js", "./util/Debounce.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController, Debounce;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }, function (_utilDebounceJs) {
      Debounce = _utilDebounceJs.Debounce;
    }],
    execute: function () {

      //Instacia do Controller
      const controller = new NegociacaoController();

      const $ = document.querySelector.bind(document);

      //Captura do elemento no HTML
      //Utilização do bind para passar o contexto de this para o controller
      $(".form").addEventListener("submit", controller.adiciona.bind(controller));

      $("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

      $("#botao-importa").addEventListener("click", Debounce(() => {
        console.log("Executou o Debouce");
        controller.importaNegociacoes();
      }, 1000));
    }
  };
});
//# sourceMappingURL=app.js.map