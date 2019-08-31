System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      class Negociacao {
        //Definir propriedades de classes
        //parametros podem ser definidos na funçao constructor
        constructor(_data, _quantidade, _valor) {
          //Copia de propriedades
          //Variaveis de argumentos passada para copia em objeto literais Es06
          Object.assign(this, { _quantidade, _valor });
          this._data = new Date(_data.getTime());
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

        equals(negociacao) {
          // return (
          //   this.data.getDate() == negociacao.data.getDate() &&
          //   this.data.getMonth() == negociacao.data.getMonth() &&
          //   this.data.getFullYear() == negociacao.data.getFullYear() &&
          //   this.quantidade == negociacao.quantidade &&
          //   this.valor == negociacao.valor
          // );

          return JSON.stringify(this) == JSON.stringify(negociacao);
        }
      }

      _export("Negociacao", Negociacao);
    }
  };
});
//# sourceMappingURL=Negociacao.js.map