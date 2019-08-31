System.register([], function (_export, _context) {
  "use strict";

  function Debounce(fn, milisegundos) {
    let timer = 0;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(), milisegundos);
    };
  }

  _export("Debounce", Debounce);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Debounce.js.map