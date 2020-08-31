'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.UserProject, { foreignKey: 'projectId' })
    }
  };
  Project.init({
    name: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: true,
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: [25, 200],
      }
    },
    value: DataTypes.INTEGER,
    isOpen: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate(instance, opt){
        instance.value = 0
        instance.isOpen = true
      }
    },
    sequelize,
    modelName: 'Project',
  });
  return Project;
};