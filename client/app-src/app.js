import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

import "bootstrap/js/modal";

import "../css/main.css";

import { NegociacaoController } from "./controllers/NegociacaoController";

import { Negociacao } from "./domain";

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

fetch(`${SERVICE_URL}/negociacoes`, config).then(() => {
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
