class Negociacoes {
  constructor() {
    this._negociacoes = [];

    Object.freeze(this);
  }
  get volumeTotal() {
    // let total = 0;
    // for (let i = 0; i < this._negociacoes.length; i++) {
    //   total += this._negociacoes[i].volume;
    // }

    // return total;

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
