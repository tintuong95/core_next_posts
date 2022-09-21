'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Slides", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: new Sequelize.STRING(10),
      },
      image: {
        type: new Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Slides");
  }
};