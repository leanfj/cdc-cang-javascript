System.register(["../../util/index.js"], function (_export, _context) {
  "use strict";

  var Obrigatorio;
  function BindEvent(event = Obrigatorio("event"), selector = Obrigatorio("selector"), prevent = true) {
    return function (target, propertyKey, descriptor) {
      Reflect.defineMetadata("bindEvent", { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

      return descriptor;
    };
  }

  _export("BindEvent", BindEvent);

  return {
    setters: [function (_utilIndexJs) {
      Obrigatorio = _utilIndexJs.Obrigatorio;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=BindEvent.js.map