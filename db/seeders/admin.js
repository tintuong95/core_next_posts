"use strict";





const arr = [
  {
    id:1,
    username: "admin12345",
    password: "$2b$10$9XACVrLK3fFCGeI1cTshV.3Kef1EuyPnpXGSpUK.GoNwTm9qWZPY6",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Admins", arr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", null, {});
  },
};
