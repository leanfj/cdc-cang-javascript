class Negociacao {
  //Definir propriedades de classes
  //parametros podem ser definidos na funçao constructor
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  //Metodos
  //Functions definindo comportamento de uma classe
  getVolume() {
    return this._quantidade * this._valor;
  }

  //Metodos de Acesso a propriedades prefixadas com _ 

  getData() {
    return this._data;
  }
  getQuantidade() {
    return this._quantidade;
  }
  getValor() {
    return this._valor;
  }
}