class NegociacaoService {
  obterNegocicoesDaSemana(callBack) {
    const xhr = new XMLHttpRequest();
    //Abrindo conexão .open("metodo http", "endereço servidor")
    xhr.open("GET", "negociacoes/semana");

    //Verificação da mudança do estado da requisisão
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log("Obtendo as negociações do servidor");
          console.log(JSON.parse(xhr.responseText));
          const negociacoes = JSON.parse(xhr.responseText).map(
            objeto =>
              new Negociacao(
                new Date(objeto.data),
                objeto.quantidade,
                objeto.valor
              )
          );
          const payLoad = {
            mensagem: "Negociações carregadas com sucesso",
            negociacoes
          };
          callBack(null, payLoad);
        } else {
          console.log("Não foi possível obter a negociação da semana");
          console.log(xhr.responseText);
          callBack("Não foi possível obter a negociação da semana", null);
        }
      }
    };

    xhr.send();
  }
}
