'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("News", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: new Sequelize.STRING(10),
      },
      idCategory: {
        type: new Sequelize.STRING(10),

        allowNull: false,
        references: {
          model: "Categorys",
          key: "id",
        },
      },
      title: {
        type: new Sequelize.STRING(100),
        allowNull: false,
        // unique: true,
      },
      param: {
        type: new Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: new Sequelize.STRING(300),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: new Sequelize.STRING(100),
        allowNull: false,
      },
      views: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('News');
  }
};