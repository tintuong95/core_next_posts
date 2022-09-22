"use strict";

let slides = [
  {
    id: 1,
    image: "resize_gWNnqm.PNG",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 2,
    image: "resize_TBjCyx.PNG",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 3,
    image: "resize_KZBa7I.PNG",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Slides", slides, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Slides", null, {});
  },
};
