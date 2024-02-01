module.exports = (sequelize, Sequelize) => {
    const JobAdvert = sequelize.define("job_adverts", {
      id_entreprise: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      salaire: {
        type: Sequelize.STRING
      },
      horaire: {
        type: Sequelize.STRING
      },
      id_responsable: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }, {
      timestamps: false
  });
  
    return JobAdvert;
  };
  