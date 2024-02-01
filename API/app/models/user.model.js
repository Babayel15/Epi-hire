module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_entreprise: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
});

  return User;
};
