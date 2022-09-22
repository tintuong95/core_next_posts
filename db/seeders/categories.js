"use strict";





const categories = [
  {
    id: 1,
    name: "Công nghệ",
    param: "cong-nghe",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Thời sự",
    param: "thoi-su",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Kinh doanh",
    param: "kinh-doanh",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Giáo dục",
    param: "giao-duc",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Tài chính",
    param: "tai-chinh",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categorys", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categorys", null, {});
  },
}