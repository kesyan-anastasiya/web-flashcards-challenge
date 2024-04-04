'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categoriesData = [
      {
        name: "1",
        img:"rrr",
      },
      {
        name: "2",
        img:"yyy",
      },
    ];
    const categories = categoriesData.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Categories", categories);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
