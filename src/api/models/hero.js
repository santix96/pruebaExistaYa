'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hero.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
  },
    description: {
      allowNull: false,
      type: DataTypes.STRING(400)
  },
    short_description: {
      allowNull: false,
      type: DataTypes.STRING(200)
  },
    url_more_information: {
      allowNull: false,
      type: DataTypes.STRING(200)
  },
    url_main_image: {
      allowNull: false,
      type: DataTypes.STRING(200)
  },
    positive_votes: {
      allowNull: false,
      type: DataTypes.INTEGER
  },
    negative_votes: {
      allowNull: false,
      type: DataTypes.INTEGER
  },
    city_creation:{
      allowNull: false,
      type: DataTypes.STRING
  }
  }, {
    timestamps: true,
    sequelize,
    modelName: 'hero',
  });
  return hero;
};