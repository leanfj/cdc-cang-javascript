class Negociacao {
  //Definir propriedades de classes
  //parametros podem ser definidos na funçao constructor
  constructor(data, quantidade, valor){
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  //Metodos
  //Functions definindo comportamento de uma classe
  obterVolume() {
    return this.quantidade * this.valor;
  }
}