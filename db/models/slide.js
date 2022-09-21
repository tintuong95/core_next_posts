const { Sequelize, DataTypes } = require("sequelize");
const { default: randomId } = require("../../utils/randomId.js");
const sequelize = require("../config/sequelize.js");

const Slide = sequelize.define(
  "Slide",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(10),
      defaultValue: () => randomId(6),
    },
    image: {
      type: new DataTypes.STRING(30),
      allowNull: false,
      unique:true
    },
  },
  {
    sequelize,
    modelName: "Slides",
  }
);

module.exports = Slide;
