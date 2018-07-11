//Instacia do Controller
let controller = new NegociacaoController();

//Captura do elemento no HTML
//Utilização do bind para passar o contexto de this para o controller
document.querySelector('.form').addEventListener('submit', controller.adciona.bind(controller));