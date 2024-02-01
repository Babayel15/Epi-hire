const { authJwt } = require("../middleware");
const controller = require("../controllers/contact.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/contacts", controller.getAll);

  app.get("/api/contacts/:contactId",
    [authJwt.verifyToken],
    controller.getOne
  );

  app.post(
    "/api/contacts",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.postOne
  );

  app.put(
    "/api/contacts/:contactId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.putOne
  );

  app.delete(
    "/api/contacts/:contactId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteOne
  );
};
