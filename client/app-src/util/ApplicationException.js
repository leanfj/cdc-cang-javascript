export class ApplicationException extends Error {
  constructor(msg = "") {
    super(msg);
    this.name = this.constructor.name;
  }
}

const exception = ApplicationException;

export function isApplicationException(error) {
  return (
    error instanceof exception ||
    Object.getPrototypeOf(error) instanceof exception
  );
}

export function getExceptionMessage(error) {
  if (isApplicationException(error)) {
    return error.message;
  } else {
    console.log(error);
    return "Não foi possível realizar a operação.";
  }
}
