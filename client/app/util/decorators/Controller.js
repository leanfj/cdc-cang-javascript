System.register([], function (_export, _context) {
  "use strict";

  function Controller(...seletores) {
    const elements = seletores.map(seletor => document.querySelector(seletor));

    return function (constructor) {
      const constructorOriginal = constructor;

      const constructorNovo = function () {
        const instance = new constructorOriginal(...elements);

        Object.getOwnPropertyNames(constructorOriginal.prototype).forEach(property => {
          if (Reflect.hasMetadata("bindEvent", instance, property)) {
            associaEvento(instance, Reflect.getMetadata("bindEvent", instance, property));
          }
        });
      };

      constructorNovo.prototype = constructorOriginal.prototype;

      return constructorNovo;
    };

    function associaEvento(instance, metadado) {
      document.querySelector(metadado.selector).addEventListener(metadado.event, event => {
        if (metadado.prevent) {
          event.preventDefault();
        }

        instance[metadado.propertyKey](event);
      });
    }
  }

  _export("Controller", Controller);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Controller.js.map