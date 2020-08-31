'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // cara 2
      UserProject.belongsTo(models.Donatur, { foreignKey: 'userId'})
      UserProject.belongsTo(models.Project, { foreignKey: 'projectId'})
    }
  };
  UserProject.init({
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    Nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProject',
  });
  return UserProject;
};