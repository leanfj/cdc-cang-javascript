System.register(["./DataInvalidaException.js"], function (_export, _context) {
  "use strict";

  var DataInvalidaException;
  return {
    setters: [function (_DataInvalidaExceptionJs) {
      DataInvalidaException = _DataInvalidaExceptionJs.DataInvalidaException;
    }],
    execute: function () {
      let DateConverter = class DateConverter {
        constructor() {
          throw new Error("Classe não pode ser instanciada");
        }
        //Podemos chamar metodos diretamente de classe quando declarados com o static para metodos que não manipulam propriedade de instacias
        static toText(data) {
          return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        }

        static toDate(texto) {
          if (!/\d{2}\/\d{2}\/\d{4}/.test(texto)) {
            throw new DataInvalidaException();
          }
          return new Date(...texto.split("/").reverse().map((item, index) => item - index % 2));
        }
      };

      _export("DateConverter", DateConverter);
    }
  };
});
//# sourceMappingURL=DateConverter.js.map