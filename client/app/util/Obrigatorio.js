System.register([], function (_export, _context) {
  "use strict";

  function Obrigatorio(parametro) {
    throw new Error(`${parametro} é um parametro obrigatorio`);
  }

  _export("Obrigatorio", Obrigatorio);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Obrigatorio.js.map