module.exports = (sequelize, Sequelize) => {
  const Entreprise = sequelize.define("entreprises", {
    adresse: {
      type: Sequelize.STRING
    },
    ville: {
      type: Sequelize.STRING
    },
    nom: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
});

  return Entreprise;
};
