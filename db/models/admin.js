const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { default: randomId } = require("../../utils/randomId.js");
const sequelize = require("../config/sequelize.js");

const Admin = sequelize.define(
  "Admin",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(10),
      defaultValue: () => randomId(6),
    },
    username: {
      type: new DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Admin",
    hooks: {
      beforeCreate: (admin, options) => {
        admin.password = bcrypt.hashSync(admin.password, 10); //salt=10
      },
      beforeUpdate: (admin, options) => {
        admin.password = bcrypt.hashSync(admin.password, 10); //salt=10
      },
    },
  }
);

Admin.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = Admin;
