System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      class ApplicationException extends Error {
        constructor(msg = "") {
          super(msg);
          this.name = this.constructor.name;
        }
      }

      _export("ApplicationException", ApplicationException);

      const exception = ApplicationException;

      function isApplicationException(error) {
        return error instanceof exception || Object.getPrototypeOf(error) instanceof exception;
      }

      _export("isApplicationException", isApplicationException);

      function getExceptionMessage(error) {
        if (isApplicationException(error)) {
          return error.message;
        } else {
          console.log(error);
          return "Não foi possível realizar a operação.";
        }
      }

      _export("getExceptionMessage", getExceptionMessage);
    }
  };
});
//# sourceMappingURL=ApplicationException.js.map