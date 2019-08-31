System.register(["../domain/index.js", "../ui/index.js", "../util/index.js"], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoService, Negociacoes, DataInvalidaException, DateConverter, Mensagem, MensagemView, NegociacoesView, Bind, getNegociacaoDao;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

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
        _init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegociacaoDao();
              const negociacoes = yield dao.listaTodos();
              negociacoes.forEach(function (negociacao) {
                return _this._negociacoes.adiciona(negociacao);
              });
            } catch (error) {
              _this._mensagem.texto = error.message;
            }
          })();
        }

        adiciona(event) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              //Previnir evento padrão
              event.preventDefault();

              const negociacao = _this2._criaNegociacao();

              const dao = yield getNegociacaoDao();
              yield dao.adciona(negociacao);
              _this2._negociacoes.adiciona(negociacao);
              _this2._mensagem.texto = "Negociação adicionada com Sucesso";
              _this2._limpaformulario();
            } catch (error) {
              console.log(error);
              console.log(error.stack);
              if (error instanceof DataInvalidaException) {
                _this2._mensagem.texto = error.message;
              } else {
                _this2._mensagem.texto = "Um erro nao esperado aconteceu. Entre em contato com o suporte";
              }
            }
          })();
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

        apaga() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegociacaoDao();
              yield dao.apagaTodos();
              _this3._negociacoes.esvazia();
              _this3._mensagem.texto = "Negociações Apagada com sucesso";
            } catch (error) {
              _this3._mensagem.texto = error.message;
            }
          })();
        }

        importaNegociacoes() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
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
              const negociacoes = yield _this4._service.obtemNegociacoesDoPeriodo();

              negociacoes.filter(function (novaNegociacao) {
                return !_this4._negociacoes.paraArray().some(function (negociacaoExistente) {
                  return novaNegociacao.equals(negociacaoExistente);
                });
              }).forEach(function (negociacao) {
                return _this4._negociacoes.adiciona(negociacao);
              });
              _this4._mensagem.texto = "Negociações do período importadas com sucesso";
            } catch (error) {
              _this4._mensagem.texto = error.message;
            }
          })();
        }
      }

      _export("NegociacaoController", NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map