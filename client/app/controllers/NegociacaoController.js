class NegociacaoController {
  constructor() {
    //Busca adcionadas ao constructor para evitar pecorrer o DOM
    //bind para manter o contexto do this em document
    const $ = document.querySelector.bind(document);

    //elementos HTML
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    // this._negociacoes = ProxyFactory.create(
    //   new Negociacoes(),
    //   ["adiciona", "esvazia"],
    //   model => this._negociacoesView.update(model)
    // );
    // this._negociacoesView = new NegociacoesView("#negociacoes");
    // this._negociacoesView.update(this._negociacoes);

    this._negociacoes = new Bind(
      new Negociacoes(),
      new NegociacoesView("#negociacoes"),
      "adiciona",
      "esvazia"
    );

    // this._mensagem = ProxyFactory.create(new Mensagem(), ["texto"], model =>
    //   this._mensagemView.update(model)
    // );
    // this._mensagemView = new MensagemView("#mensagemView");
    // this._mensagemView.update(this._mensagem);

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView("#mensagemView"),
      "texto"
    );

    this._service = new NegociacaoService();
  }
  adiciona(event) {
    try {
      //Previnir evento padrão
      event.preventDefault();

      this._negociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = "Negociação adicionada com Sucesso";

      this._limpaformulario();
    } catch (error) {
      console.log(error);
      console.log(error.stack);
      if (error instanceof DataInvalidaException) {
        this._mensagem.texto = error.message;
      } else {
        this._mensagem.texto =
          "Um erro nao esperado aconteceu. Entre em contato com o suporte";
      }
    }
  }

  _criaNegociacao() {
    return new Negociacao(
      DateConverter.toDate(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  _limpaformulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  apaga() {
    this._negociacoes.esvazia();
    this._mensagem.texto = "Negociações Apagada com sucesso";
  }

  importaNegociacoes() {
    // this._service.obterNegocicoesDaSemana((err, { mensagem, negociacoes }) => {
    //   if (err) {
    //     this._mensagem.texto = err;
    //     return;
    //   }

    //   negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));

    //   this._mensagem.texto = mensagem;
    // });

    this._service.obterNegocicoesDaSemana().then(
      ({ negociacoes, mensagem }) => {
        negociacoes.forEach(negociacao =>
          this._negociacoes.adiciona(negociacao)
        );
        this._mensagem.texto = mensagem;
      },
      err => (this._mensagem.texto = err)
    );
  }
}
