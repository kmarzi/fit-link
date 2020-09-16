module.exports = function(sequelize, DataTypes) {
    const LinkUp = sequelize.define("LinkUp", {
      organizer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activity: {
        type: DataTypes.STRING,
      },
      organzier: {
        
      }
    });
  
    return LinkUp;
  };
  