const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getAll
  );

  app.get(
    "/api/users/:userId",
    [authJwt.verifyToken],
    controller.getOne
  );

  app.post(
    "/api/users",
    controller.postOne
  );

  app.put(
    "/api/users/:userId",
    [authJwt.verifyToken],
    controller.putOne
  );

  app.delete(
    "/api/users/:userId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteOne
  );
};
