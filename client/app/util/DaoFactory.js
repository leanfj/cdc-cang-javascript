System.register(["./ConnectionFactory.js", "../domain/negociacao/NegociacaoDao.js"], function (_export, _context) {
  "use strict";

  var ConnectionFactory, NegociacaoDao;
  async function getNegociacaoDao() {
    let conn = await ConnectionFactory.getConnection();
    return new NegociacaoDao(conn);
  }

  _export("getNegociacaoDao", getNegociacaoDao);

  return {
    setters: [function (_ConnectionFactoryJs) {
      ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
    }, function (_domainNegociacaoNegociacaoDaoJs) {
      NegociacaoDao = _domainNegociacaoNegociacaoDaoJs.NegociacaoDao;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=DaoFactory.js.map