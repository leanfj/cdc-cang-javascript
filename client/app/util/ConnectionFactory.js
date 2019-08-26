class ConnectionFactory {
  constructor() {
    throw new Error("Não é possível criar instâncias dessa Classe");
  }
  static getConnection() {
    return new Promise((resolve, reject) => {});
  }
}
