System.register([], function (_export, _context) {
  "use strict";

  function Controller(...seletores) {
    const elements = seletores.map(seletor => document.querySelector(seletor));

    return function (constructor) {
      const constructorOriginal = constructor;

      const constructorNovo = function () {
        return new constructorOriginal(...elements);
      };

      constructorNovo.prototype = constructorOriginal.prototype;

      return constructorNovo;
    };
  }

  _export("Controller", Controller);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Conroller.js.map