//Instacia do Controller
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

//Captura do elemento no HTML
//Utilização do bind para passar o contexto de this para o controller
$(".form").addEventListener("submit", controller.adiciona.bind(controller));

$("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

$("#botao-importa").addEventListener(
  "click",
  controller.importaNegociacoes.bind(controller)
);
