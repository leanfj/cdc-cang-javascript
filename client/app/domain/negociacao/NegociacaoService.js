System.register(["../../util/HttpService.js", "./Negociacao.js"], function (_export, _context) {
  "use strict";

  var HttpService, Negociacao;
  return {
    setters: [function (_utilHttpServiceJs) {
      HttpService = _utilHttpServiceJs.HttpService;
    }, function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
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
            throw new Error("Não foi possível obter negociações");
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
            throw new Error("Não foi possível obter as negociações da semana anterior");
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
            throw new Error("Não foi possível obter as negociações da semana retrasada");
          });
        }

        obtemNegociacoesDoPeriodo() {
          return Promise.all([this.obterNegocicoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(periodo => periodo.reduce((novoArray, item) => novoArray.concat(item.negociacoes), []).sort((a, b) => b.data.getTime() - a.data.getTime())).catch(err => {
            console.log(err);
            throw new Error("Não foi possível obter negociações do período");
          });
        }
      }

      _export("NegociacaoService", NegociacaoService);
    }
  };
});
//# sourceMappingURL=NegociacaoService.js.map