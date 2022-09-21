module.exports = {
  development: {
    username: process.env.NEXT_PUBLIC_DB_USERNAME,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: process.env.NEXT_PUBLIC_DB_DIALECT,
  },
};
