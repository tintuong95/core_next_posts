'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Admins", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: new Sequelize.STRING(10),
        
      },
      username: {
        type: new Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: new Sequelize.STRING(100),
        allowNull: false,
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
    await queryInterface.dropTable('Admins');
  }
};