'use strict';

const product = require("./product");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contacto: DataTypes.STRING,
    productos: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Product);
    User.hasMany(models.Token);
  };
  return User;
};