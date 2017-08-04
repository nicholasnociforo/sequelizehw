

module.exports = function(sequelize, DataTypes) {
  var nicksBurgers = sequelize.define("nicksBurgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
   
  });
  return nicksBurgers;
};





