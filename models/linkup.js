module.exports = function(sequelize, DataTypes) {
  const LinkUp = sequelize.define("LinkUp", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkUpDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    interestCount: {
      type: DataTypes.INTEGER
    }
  });

  LinkUp.associate = models => {
    LinkUp.belongsTo(models.User, {
      foreignKey: {
        // name: "organizerID",
        allowNull: false
      }
    });
  };
  return LinkUp;
};
