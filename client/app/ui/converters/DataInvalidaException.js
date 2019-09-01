System.register(["../../util/ApplicationException.js"], function (_export, _context) {
  "use strict";

  var ApplicationException;
  return {
    setters: [function (_utilApplicationExceptionJs) {
      ApplicationException = _utilApplicationExceptionJs.ApplicationException;
    }],
    execute: function () {
      let DataInvalidaException = class DataInvalidaException extends ApplicationException {
        constructor() {
          super("A data deve ser no formato dd/mm/aaaa");

          this.name = this.constructor.name;
        }
      };

      _export("DataInvalidaException", DataInvalidaException);
    }
  };
});
//# sourceMappingURL=DataInvalidaException.js.map