const db = require("../models");
const Joi = require("joi");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getOne = (req, res) => {
  User.findOne({
    where: {
      username: req.params["userId"]
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          nom: user.nom,
          prenom: user.prenom,
          telephone: user.telephone,
          id_entreprise: user.id_entreprise
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAll = (req, res) => {
  User.findAll()
    .then(users => {
      if (!users.length) {
        return res.status(404).send({ message: "User Not found." });
      }

      users.forEach(user => {
        var authorities = [];
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
          }
        });
      });
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.postOne = (req, res) => {
  // Joi validate Data
  const validate = (user) => {
    const schema = Joi.object({
      nom: Joi.string().min(3).max(255).required(),
      prenom: Joi.string().min(3).max(255).required(),
      email: Joi.string().email().required(),
      telephone: Joi.string().min(10).max(10).required(),
      password: Joi.string().default(""),
      id_entreprise: Joi.string().default(null),
      username: Joi.string().default(""),
    });
    return schema.validate(user);
  };
  body = validate(req.body);

  if (!body.error) {
    // Save User to Database
    User.create({
      username: body.username,
      email: body.email,
      password: bcrypt.hashSync(body.password, 8),
      nom: body.nom,
      prenom: body.prenom,
      telephone: body.telephone,
      id_entreprise: body.id_entreprise
    })
      .then(user => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(roles).then(() => {
              res.status(201).send({ message: "User registered successfully!" });
            });
          });
        } else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.status(201).send({ message: "User registered successfully!" });
          });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
    } else {
      res.status(400).send(body.error.details);
    }
};

exports.putOne = async (req, res) => {
  const user = await User.findByPk(req.params["userId"]);
  // update User to Database
  if (req.body.nom) user.nom = req.body.nom;

  if (req.body.prenom) user.prenom = req.body.prenom;

  if (req.body.password) user.password = bcrypt.hashSync(req.body.password, 8);

  if (req.body.email) user.email = req.body.email;

  if (req.body.telephone) user.telephone = req.body.telephone;

  if (req.body.username) user.username =

  user.save()
    .then(user => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = async (req, res) => {
  const user = await User.findByPk(req.params["userId"]);
  // delete User to Database
  User.destroy({
    where: {
        id: user.id
    }
  })
    .then(user => 
      res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};