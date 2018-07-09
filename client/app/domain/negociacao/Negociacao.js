class Negociacao {
  //Definir propriedades de classes
  //parametros podem ser definidos na funçao constructor
  constructor(data, quantidade, valor) {
    //Copia de propriedades
    Object.assign(this, {_data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor});
    //Congelando objeto
    Object.freeze(this);
  }

  //Metodos
  //Functions definindo comportamento de uma classe
  get volume() {
    return this._quantidade * this._valor;
  }

  //Metodos de Acesso a propriedades prefixadas com _ 

  //Sintaze get para criar propriedade getters para aceso de somente leitura
  get data() {

    return new Date(this._data.getTime());
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
}