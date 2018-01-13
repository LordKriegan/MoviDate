module.exports = function(sequelize, DataTypes) {
  var userData = sequelize.define("userData", {
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
          type: DataTypes.NUMBER,
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
  }); return Post; 
}