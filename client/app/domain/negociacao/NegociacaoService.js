class NegociacaoService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegocicoesDaSemana(callBack) {
    //   return new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     //Abrindo conexão .open("metodo http", "endereço servidor")
    //     xhr.open("GET", "negociacoes/semana");

    //     //Verificação da mudança do estado da requisisão
    //     xhr.onreadystatechange = () => {
    //       if (xhr.readyState == 4) {
    //         if (xhr.status == 200) {
    //           console.log("Obtendo as negociações do servidor");
    //           console.log(JSON.parse(xhr.responseText));
    //           const negociacoes = JSON.parse(xhr.responseText).map(
    //             objeto =>
    //               new Negociacao(
    //                 new Date(objeto.data),
    //                 objeto.quantidade,
    //                 objeto.valor
    //               )
    //           );
    //           const payLoad = {
    //             mensagem: "Negociações carregadas com sucesso",
    //             negociacoes
    //           };
    //           resolve(payLoad);
    //         } else {
    //           console.log("Não foi possível obter a negociação da semana");
    //           console.log(xhr.responseText);
    //           reject("Não foi possível obter a negociação da semana");
    //         }
    //       }
    //     };

    //     xhr.send();
    //   });
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
}
