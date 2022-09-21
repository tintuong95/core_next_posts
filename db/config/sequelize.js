const { Sequelize } = require("sequelize");

const {
  NEXT_PUBLIC_DB_NAME,
  NEXT_PUBLIC_DB_USERNAME,
  NEXT_PUBLIC_DB_PASSWORD,
  NEXT_PUBLIC_DB_DIALECT,
  NEXT_PUBLIC_DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  NEXT_PUBLIC_DB_NAME,
  NEXT_PUBLIC_DB_USERNAME,
  NEXT_PUBLIC_DB_PASSWORD,
  {
    host: NEXT_PUBLIC_DB_HOST,
    dialect: NEXT_PUBLIC_DB_DIALECT,
    logging: false,
  }
);

module.exports=sequelize