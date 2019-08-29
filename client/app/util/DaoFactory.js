class DaoFactory {
  static getNegociacaoDao() {
    return ConnectionFactory.getConnection().then(
      connection => new NegociacaoDao(connection)
    );
  }
}
