System.register(["../domain/index.js", "../ui/index.js", "../util/index.js"], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoService, Negociacoes, DataInvalidaException, DateConverter, Mensagem, MensagemView, NegociacoesView, Bind, getNegociacaoDao;
  return {
    setters: [function (_domainIndexJs) {
      Negociacao = _domainIndexJs.Negociacao;
      NegociacaoService = _domainIndexJs.NegociacaoService;
      Negociacoes = _domainIndexJs.Negociacoes;
    }, function (_uiIndexJs) {
      DataInvalidaException = _uiIndexJs.DataInvalidaException;
      DateConverter = _uiIndexJs.DateConverter;
      Mensagem = _uiIndexJs.Mensagem;
      MensagemView = _uiIndexJs.MensagemView;
      NegociacoesView = _uiIndexJs.NegociacoesView;
    }, function (_utilIndexJs) {
      Bind = _utilIndexJs.Bind;
      getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
    }],
    execute: function () {
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

          this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView("#negociacoes"), "adiciona", "esvazia");

          // this._mensagem = ProxyFactory.create(new Mensagem(), ["texto"], model =>
          //   this._mensagemView.update(model)
          // );
          // this._mensagemView = new MensagemView("#mensagemView");
          // this._mensagemView.update(this._mensagem);

          this._mensagem = new Bind(new Mensagem(), new MensagemView("#mensagemView"), "texto");

          this._service = new NegociacaoService();
          this._init();
        }
        async _init() {
          try {
            const dao = await getNegociacaoDao();
            const negociacoes = await dao.listaTodos();
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
          } catch (error) {
            this._mensagem.texto = error.message;
          }
        }

        async adiciona(event) {
          try {
            //Previnir evento padrão
            event.preventDefault();

            const negociacao = this._criaNegociacao();

            const dao = await getNegociacaoDao();
            await dao.adciona(negociacao);
            this._negociacoes.adiciona(negociacao);
            this._mensagem.texto = "Negociação adicionada com Sucesso";
            this._limpaformulario();
          } catch (error) {
            console.log(error);
            console.log(error.stack);
            if (error instanceof DataInvalidaException) {
              this._mensagem.texto = error.message;
            } else {
              this._mensagem.texto = "Um erro nao esperado aconteceu. Entre em contato com o suporte";
            }
          }
        }

        _criaNegociacao() {
          return new Negociacao(DateConverter.toDate(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        }

        _limpaformulario() {
          this._inputData.value = "";
          this._inputQuantidade.value = 1;
          this._inputValor.value = 0.0;
          this._inputData.focus();
        }

        async apaga() {
          try {
            const dao = await getNegociacaoDao();
            await dao.apagaTodos();
            this._negociacoes.esvazia();
            this._mensagem.texto = "Negociações Apagada com sucesso";
          } catch (error) {
            this._mensagem.texto = error.message;
          }
        }

        async importaNegociacoes() {
          /* const listaNegociacoes = [];
           this._service
            .obterNegocicoesDaSemana()
            .then(({ negociacoes }) => {
              listaNegociacoes.push(...negociacoes);
              return this._service.obterNegociacaoDaSemanaAnterior();
            })
            .then(({ negociacoes }) => {
              listaNegociacoes.push(...negociacoes);
              return this._service.obterNegociacoesDaSemanaRetrasada();
            })
            .then(({ negociacoes, mensagem }) => {
              listaNegociacoes.push(...negociacoes);
               listaNegociacoes.forEach(negociacao =>
                this._negociacoes.adiciona(negociacao)
              );
              this._mensagem.texto = mensagem;
            })
            .catch(err => (this._mensagem.texto = err));*/
          // Promise.all([
          //   this._service.obterNegocicoesDaSemana(),
          //   this._service.obterNegociacoesDaSemanaAnterior(),
          //   this._service.obterNegociacoesDaSemanaRetrasada()
          // ])
          //   .then(periodo => {
          //     periodo = periodo
          //       .reduce((novoArray, item) => novoArray.concat(item.negociacoes), [])
          //       .forEach(negociacao => this._negociacoes.adiciona(negociacao));
          //   })
          //   .catch(err => (this._mensagem.texto = err));

          try {
            const negociacoes = await this._service.obtemNegociacoesDoPeriodo();

            negociacoes.filter(novaNegociacao => !this._negociacoes.paraArray().some(negociacaoExistente => novaNegociacao.equals(negociacaoExistente))).forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações do período importadas com sucesso";
          } catch (error) {
            this._mensagem.texto = error.message;
          }
        }
      }

      _export("NegociacaoController", NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map