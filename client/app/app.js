//Instacia do Controller
const controller = new NegociacaoController();

//Captura do elemento no HTML
//Utilização do bind para passar o contexto de this para o controller
document
  .querySelector(".form")
  .addEventListener("submit", controller.adiciona.bind(controller));

document
  .querySelector("#botao-apaga")
  .addEventListener("click", controller.apaga.bind(controller));
