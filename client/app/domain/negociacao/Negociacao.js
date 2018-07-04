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
  get volume() {
    return this._quantidade * this._valor;
  }

  //Metodos de Acesso a propriedades prefixadas com _ 

  //Sintaze get para criar propriedade getters para aceso de somente leitura
  get data() {
    return this._data;
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
}