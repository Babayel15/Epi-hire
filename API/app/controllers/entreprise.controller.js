const db = require("../models");
const Entreprise = db.entreprise;
const JobAdvert = db.job_advert

const Op = db.Sequelize.Op;

exports.getOne = (req, res) => {
  Entreprise.findOne({
    where: {
      id: req.params["entrepriseId"]
    }
  })
    .then(entreprise => {
      if (!entreprise) {
        return res.status(404).send({ message: "Enterprise Not found." });
      }

      res.status(200).send(entreprise);
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAll = (req, res) => {
  Entreprise.findAll()
    .then(entreprises => {
      if (!entreprises.length) {
        return res.status(404).send({ message: "Enterprise Not found." });
      }

      res.send(entreprises);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.postOne = (req, res) => {
  // Save Entreprise to Database
  Entreprise.create({
    id: req.body.id,
    adresse: req.body.adresse,
    ville: req.body.ville,
    nom: req.body.nom
  })
    res.status(201).send({ message: "Enterprise created successfully!" })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.putOne = async (req, res) => {
  const entreprise = await Entreprise.findByPk(req.params["entrepriseId"]);
  // update Entreprise to Database
  if (req.body.adresse) entreprise.adresse = req.body.adresse;

  if (req.body.ville) entreprise.ville = req.body.ville;

  if (req.body.nom) entreprise.nom = req.body.nom;

  entreprise.save()
    .then(entreprise => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = async (req, res) => {
  const entreprise = await Entreprise.findByPk(req.params["entrepriseId"]);

  // delete Job Advert connect to entreprise
  JobAdvert.destroy({
    where: {
      id_entreprise: entreprise.id
    }
  })

  // delete Entreprise to Database
  Entreprise.destroy({
    where: {
        id: entreprise.id
    }
  })
    .then(entreprise => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};