import { ApplicationException } from "../../util/ApplicationException.js";

export class DataInvalidaException extends ApplicationException {
  constructor() {
    super("A data deve ser no formato dd/mm/aaaa");

    this.name = this.constructor.name;
  }
}
