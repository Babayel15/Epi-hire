const { authJwt } = require("../middleware");
const controller = require("../controllers/job_advert.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/jobadverts",
    controller.getAll
  );

  app.get(
    "/api/jobadverts/:jobId",
    controller.getOne
  );

  app.post(
    "/api/jobadverts",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.postOne
  );

  app.put(
    "/api/jobadverts/:jobId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.putOne
  );

  app.delete(
    "/api/jobadverts/:jobId",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteOne
  );
};
