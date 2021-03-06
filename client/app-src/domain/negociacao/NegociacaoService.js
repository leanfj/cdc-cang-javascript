import { HttpService } from "../../util/HttpService";
import { Negociacao } from "./Negociacao";
import { ApplicationException } from "../../util/ApplicationException";

export class NegociacaoService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegocicoesDaSemana() {
    return this._http.get(`${SERVICE_URL}/negociacoes/semana`).then(
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
        throw new ApplicationException("Não foi possível obter negociações");
      }
    );
  }

  obterNegociacoesDaSemanaAnterior() {
    return this._http.get(`${SERVICE_URL}/negociacoes/anterior`).then(
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
        throw new ApplicationException(
          "Não foi possível obter as negociações da semana anterior"
        );
      }
    );
  }

  obterNegociacoesDaSemanaRetrasada() {
    return this._http.get(`${SERVICE_URL}/negociacoes/retrasada`).then(
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
        throw new ApplicationException(
          "Não foi possível obter as negociações da semana retrasada"
        );
      }
    );
  }

  async obtemNegociacoesDoPeriodo() {
    try {
    } catch (error) {
      console.log(error);
      throw new ApplicationException(
        "Não foi possível obter negociações do período"
      );
    }

    let periodo = await Promise.all([
      this.obterNegocicoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada()
    ]);
    return periodo
      .reduce((novoArray, item) => novoArray.concat(item.negociacoes), [])
      .sort((a, b) => b.data.getTime() - a.data.getTime());
  }
}
