const { authJwt } = require("../middleware");
const controller = require("../controllers/entreprise.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/entreprises",
    controller.getAll
  );

  app.get(
    "/api/entreprises/:entrepriseId",
    controller.getOne
  );

  app.post(
    "/api/entreprises",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.postOne
  );

  app.put(
    "/api/entreprises/:entrepriseId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.putOne
  );

  app.delete(
    "/api/entreprises/:entrepriseId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteOne
  );
};
