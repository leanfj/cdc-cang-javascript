import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { Debounce } from "./util/Debounce.js";

//Instacia do Controller
const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

//Captura do elemento no HTML
//Utilização do bind para passar o contexto de this para o controller
$(".form").addEventListener("submit", controller.adiciona.bind(controller));

$("#botao-apaga").addEventListener("click", controller.apaga.bind(controller));

$("#botao-importa").addEventListener(
  "click",
  Debounce(() => {
    console.log("Executou o Debouce");
    controller.importaNegociacoes();
  }, 1000)
);
