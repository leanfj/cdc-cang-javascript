class NegociacaoService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegocicoesDaSemana() {
    return this._http.get("negociacoes/semana").then(
      dados => {
        const negociacoes = dados.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );
        const payLoad = {
          mensagem: "Negociações importadas com sucesso",
          negociacoes
        };
        return payLoad;
      },
      err => {
        throw new Error("Não foi possível obter negociações");
      }
    );
  }

  obterNegociacaoDaSemanaAnterior() {
    return this._http.get("negociacoes/anterior").then(
      dados => {
        const negociacoes = dados.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );

        const payLoad = {
          mensagem: "Negociações importadas com sucesso",
          negociacoes
        };

        return payLoad;
      },
      err => {
        throw new Error(
          "Não foi possível obter as negociações da semana anterior"
        );
      }
    );
  }

  obterNegociacoesDaSemanaRetrasada() {
    return this._http.get("negociacoes/retrasada").then(
      dados => {
        const negociacoes = dados.map(
          objeto =>
            new Negociacao(
              new Date(objeto.data),
              objeto.quantidade,
              objeto.valor
            )
        );

        const payLoad = {
          mensagem: "Negociações importadas com sucesso",
          negociacoes
        };

        return payLoad;
      },
      err => {
        throw new Error(
          "Não foi possível obter as negociações da semana retrasada"
        );
      }
    );
  }
}