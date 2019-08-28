class NegociacaoDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "negociacoes";
  }

  adciona(negociacao) {
    return new Promise((resolve, reject) => {});
  }

  listaTodos() {
    return new Promise((resolve, reject) => {});
  }
}
