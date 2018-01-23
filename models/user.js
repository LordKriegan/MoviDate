module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      userName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [10,60]
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
          len: [8,30]
          }
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              len: [3],
          }
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false, 
          validate: {
              len: [300]
          }
      },
      gender: {
          type: DataTypes.STRING,
          defaultValue: "N/A",
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false, 
      },
      movieList: {
          type: DataTypes.STRING
      },
      profilePic: {
          type: DataTypes.STRING
      }
  }); 
  User.associate = function(models) {
    models.User.hasMany(models.User, {
        onDelete: "cascade"
    });
  };
  return User; 
};