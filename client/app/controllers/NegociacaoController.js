class NegociacaoController {
  constructor() {
    //Busca adcionadas ao constructor para evitar pecorrer o DOM
    //bind para manter o contexto do this em document
    const $ = document.querySelector.bind(document);

    //elementos HTML
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    // this._negociacoes = new Negociacoes(model => {
    //   console.log(this);
    //   this._negociacaoView.update(model);
    // });
    this._negociacaoView = new NegociacaoView('#negociacoes');
    this._negociacaoView.update(this._negociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView('#mensagemView');
    this._mensagemView.update(this._mensagem);
  }
  adciona(event) {
    //Previnir evento padrão
    event.preventDefault();

    this._negociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adcionada com Sucesso';
    // this._negociacaoView.update(this._negociacoes);
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

  apaga() {
    this._negociacoes.esvazia();
    // this._negociacaoView.update(this._negociacoes);
    this._mensagem.texto = 'Negociações Apagada com sucesso';
    this._mensagemView.update(this._mensagem);
  }
}
