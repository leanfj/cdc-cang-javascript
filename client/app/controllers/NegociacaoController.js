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
		//Utilização de nova calsse de converção criada
		// let converter = new DateConverter();


		let date = DateConverter.toDate(this._inputData.value);
		//Arrow functions nos permiti omitir {} e o return quando se trata de apena uma instrução

		let negociacao = new Negociacao(
			date,
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);

		let diaMesAno = DateConverter.toText(negociacao.data);

		console.log(diaMesAno);

	}
}