'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcryptjs')
  class Donatur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Donatur.hasMany(models.UserProject, { foreignKey: 'userId' })
    }
  };
  Donatur.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        const salt = bcrypt.genSaltSync(10)
        instance.password = bcrypt.hashSync(instance.password, salt)
      }
    },
    sequelize,
    modelName: 'Donatur',
  });
  return Donatur;
};