module.exports = function(sequelize, DataTypes) {
    const Activity = sequelize.define("Activity", {
      name: {
        type: DataTypes.STRING,
      }
    });
  
    return Activity;
  };
  