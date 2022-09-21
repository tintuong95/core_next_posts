const { Sequelize, DataTypes } = require("sequelize");
const { default: randomId } = require("../../utils/randomId.js");
const sequelize = require("../config/sequelize.js");

const News = sequelize.define(
  "News",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(10),
      defaultValue: () => randomId(6),
    },
    idCategory: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    title: {
      type: new DataTypes.STRING(100),
      allowNull: false,
      // unique: true,
    },
    param: {
      type: new DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: new DataTypes.STRING(300),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "News",
  }
);

module.exports = News;
