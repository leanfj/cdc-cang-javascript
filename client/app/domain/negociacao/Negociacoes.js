class Negociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    Object.freeze(this);
  }
  get volumeTotal() {
    return this._negociacoes.reduce((total, negociacao) => {
      return total + negociacao.volume;
    }, 0);
  }
  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray() {
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = 0;
  }
}
