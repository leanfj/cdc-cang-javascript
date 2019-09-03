System.register(["../domain/index.js", "../ui/index.js", "../util/index.js"], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoService, Negociacoes, DateConverter, Mensagem, MensagemView, NegociacoesView, Bind, getNegociacaoDao, getExceptionMessage, Debounce, Controller, BindEvent;
  return {
    setters: [function (_domainIndexJs) {
      Negociacao = _domainIndexJs.Negociacao;
      NegociacaoService = _domainIndexJs.NegociacaoService;
      Negociacoes = _domainIndexJs.Negociacoes;
    }, function (_uiIndexJs) {
      DateConverter = _uiIndexJs.DateConverter;
      Mensagem = _uiIndexJs.Mensagem;
      MensagemView = _uiIndexJs.MensagemView;
      NegociacoesView = _uiIndexJs.NegociacoesView;
    }, function (_utilIndexJs) {
      Bind = _utilIndexJs.Bind;
      getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
      getExceptionMessage = _utilIndexJs.getExceptionMessage;
      Debounce = _utilIndexJs.Debounce;
      Controller = _utilIndexJs.Controller;
      BindEvent = _utilIndexJs.BindEvent;
    }],
    execute: function () {
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

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

      let NegociacaoController = (_dec = Controller("#data", "#quantidade", "#valor"), _dec2 = BindEvent("submit", ".form"), _dec3 = Debounce(), _dec4 = BindEvent("click", "#botao-apaga"), _dec5 = BindEvent("click", "#botao-importa"), _dec6 = Debounce(1500), _dec(_class = (_class2 = class NegociacaoController {
        constructor(_inputData, _inputQuantidade, _inputValor) {
          //Busca adcionadas ao constructor para evitar pecorrer o DOM
          //bind para manter o contexto do this em document
          // const $ = document.querySelector.bind(document);

          //elementos HTML
          // this._inputData = inputData;
          // this._inputQuantidade = inputQuantidade;
          // this._inputValor = inputValor;

          Object.assign(this, { _inputData, _inputQuantidade, _inputValor });

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
              _this._mensagem.texto = getExceptionMessage(error);
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
                _this2._mensagem.texto = getExceptionMessage(error);
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
              _this3._mensagem.texto = getExceptionMessage(error);
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
              _this4._mensagem.texto = getExceptionMessage(error);
            }
          })();
        }
      }, (_applyDecoratedDescriptor(_class2.prototype, "adiciona", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "adiciona"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "apaga", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "apaga"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importaNegociacoes", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "importaNegociacoes"), _class2.prototype)), _class2)) || _class);

      _export("NegociacaoController", NegociacaoController);
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map