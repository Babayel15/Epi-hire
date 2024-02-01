const db = require("../models");
const JobAdvert = db.job_advert;

const Op = db.Sequelize.Op;

exports.getOne = (req, res) => {
  JobAdvert.findOne({
    where: {
      id: req.params["jobId"]
    }
  })
    .then(jobAdvert => {
      if (!jobAdvert) {
        return res.status(404).send({ message: "Job Advert Not found." });
      }

      res.status(200).send(jobAdvert);
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAll = (req, res) => {
  JobAdvert.findAll()
    .then(jobAdvert => {
      if (!jobAdvert.length) {
        return res.status(404).send({ message: "Job Advert Not found." });
      }

      res.send(jobAdvert);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.postOne = (req, res) => {
  // Save User to Database
  JobAdvert.create({
    id: req.body.id,
    id_entreprise: req.body.id_entreprise,
    titre: req.body.titre,
    description : req.body.description ,
    salaire: req.body.salaire,
    horaire: req.body.horaire,
    id_responsable: req.body.id_responsable
  })
    .then(JobAdvert =>
      res.status(201).send({ message: "Job Advert created successfully!" })
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.putOne = async (req, res) => {
  const jobAdvert = await JobAdvert.findByPk(req.params["jobId"]);
  // update User to Database
  if (req.body.id_entreprise) jobAdvert.id_entreprise = req.body.id_entreprise;

  if (req.body.titre) jobAdvert.titre = req.body.titre;

  if (req.body.description) jobAdvert.description = req.body.description;

  if (req.body.salaire) jobAdvert.salaire = req.body.salaire;

  if (req.body.horaire) jobAdvert.horaire = req.body.horaire;

  if (req.body.id_responsable) jobAdvert.id_responsable = req.body.id_responsable;

  jobAdvert.save()
    .then(jobAdvert => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = async (req, res) => {
  const jobAdvert = await JobAdvert.findByPk(req.params["jobId"]);
  // update User to Database
  JobAdvert.destroy({
    where: {
        id: jobAdvert.id
    }
  })
    .then(jobAdvert => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};