'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categorys", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: new Sequelize.STRING(10),
      },
      name: {
        type: new Sequelize.STRING(20),
        allowNull: false,
      },
      param: {
        type: new Sequelize.STRING(20),
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
    await queryInterface.dropTable('Categorys');
  }
};