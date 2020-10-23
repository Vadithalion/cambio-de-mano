'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estado: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    categoria: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    fechapubli: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.User);

  };
  return Product;
};