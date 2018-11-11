class NegociacaoController {
  constructor() {
    //Busca adcionadas ao constructor para evitar pecorrer o DOM
    //bind para manter o contexto do this em document
    const $ = document.querySelector.bind(document);

    //elementos HTML
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoes = new Negociacoes();
    this._negociacaoView = new NegociacaoView('#negociacoes');
    this._negociacaoView.update(this._negociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView('#mensagemView');
    this._mensagemView.update(this._mensagem);
  }
  adciona(event) {
    //Previnir evento padrão
    event.preventDefault();

    // let date = this._inputData.value;
    //Utilizar metodo split para criar um arrays separando a string no indicador
    // let formatedDate = date.split('-');
    // console.log(formatedDate);
    //Juntando elementos do array em uma string com elemento separados pelo indicador
    // formatedDate = formatedDate.join(',');
    // console.log(formatedDate);
    //new Date pode receber como parametros um arrays ou string separados por virgula
    // let data = new Date(formatedDate);
    // console.log(data);

    //spread operator separa o array para ser trabalhado com cada um dos seus elementos
    //Utilização de nova calsse de converção criada
    // let converter = new DateConverter();

    //Arrow functions nos permiti omitir {} e o return quando se trata de apena uma instrução

    this._negociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adcionada com Sucesso';
    this._negociacaoView.update(this._negociacoes);
    this._mensagemView.update(this._mensagem);
    this._limpaformulario();
    this._mensagemView.limpaMensagem();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateConverter.toDate(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaformulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}
