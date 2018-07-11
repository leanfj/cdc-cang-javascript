class NegociacaoController {
	constructor(){
		//Busca adcionadas ao constructor para evitar pecorrer o DOM
		//bind para manter o contexto do this em document
		let $ = document.querySelector.bind(document);

		//elementos HTML
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	}
	adciona (event) {
		//Previnir evento padrão
		event.preventDefault();

		// let date = this._inputData.value;
		// //Utilizar metodo split para criar um arrays separando a string no indicador
		// let formatedDate = date.split('-');
		// console.log(formatedDate);
		// //Juntando elementos do array em uma string com elemento separados pelo indicador
		// formatedDate = formatedDate.join(',');
		// console.log(formatedDate);
		// //new Date pode receber como parametros um arrays ou string separados por virgula
		// let data = new Date(formatedDate);
		// console.log(data);

		//spread operator separa o array para ser trabalhado com cada um dos seus elementos
		let date = new Date(...this._inputData.value.split('-').map(function(item, index){
			return item - index % 2;
		}));
		console.log(date);

		let negociacao = new Negociacao(
			this._inputData.value,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);



		console.log(negociacao);

	}
}