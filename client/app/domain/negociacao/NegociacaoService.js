System.register(["../../util/HttpService.js", "./Negociacao.js", "../../util/ApplicationException"], function (_export, _context) {
  "use strict";

  var HttpService, Negociacao, ApplicationException;

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
    setters: [function (_utilHttpServiceJs) {
      HttpService = _utilHttpServiceJs.HttpService;
    }, function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
    }, function (_utilApplicationException) {
      ApplicationException = _utilApplicationException.ApplicationException;
    }],
    execute: function () {
      class NegociacaoService {
        constructor() {
          this._http = new HttpService();
        }
        obterNegocicoesDaSemana() {
          return this._http.get("negociacoes/semana").then(dados => {
            const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            const payLoad = {
              mensagem: "Negociações importadas com sucesso",
              negociacoes
            };
            return payLoad;
          }, err => {
            throw new ApplicationException("Não foi possível obter negociações");
          });
        }

        obterNegociacoesDaSemanaAnterior() {
          return this._http.get("negociacoes/anterior").then(dados => {
            const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            const payLoad = {
              mensagem: "Negociações importadas com sucesso",
              negociacoes
            };

            return payLoad;
          }, err => {
            throw new ApplicationException("Não foi possível obter as negociações da semana anterior");
          });
        }

        obterNegociacoesDaSemanaRetrasada() {
          return this._http.get("negociacoes/retrasada").then(dados => {
            const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

            const payLoad = {
              mensagem: "Negociações importadas com sucesso",
              negociacoes
            };

            return payLoad;
          }, err => {
            throw new ApplicationException("Não foi possível obter as negociações da semana retrasada");
          });
        }

        obtemNegociacoesDoPeriodo() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {} catch (error) {
              console.log(error);
              throw new ApplicationException("Não foi possível obter negociações do período");
            }

            let periodo = yield Promise.all([_this.obterNegocicoesDaSemana(), _this.obterNegociacoesDaSemanaAnterior(), _this.obterNegociacoesDaSemanaRetrasada()]);
            return periodo.reduce(function (novoArray, item) {
              return novoArray.concat(item.negociacoes);
            }, []).sort(function (a, b) {
              return b.data.getTime() - a.data.getTime();
            });
          })();
        }
      }

      _export("NegociacaoService", NegociacaoService);
    }
  };
});
//# sourceMappingURL=NegociacaoService.js.map