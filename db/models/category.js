const { Sequelize, DataTypes } = require("sequelize");
const { default: randomId } = require("../../utils/randomId.js");
const sequelize = require("../config/sequelize.js");
const News = require("./news.js");

const Category = sequelize.define(
  "Categorys",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(10),
      defaultValue: () => randomId(6),
    },
    name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    param: {
      type: new DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Categorys",
  }
);

Category.hasMany(News,{foreignKey:"idCategory", as: "category"})
News.belongsTo(Category, { foreignKey: "idCategory", as: "category" });

 
module.exports = Category;
