'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categoriesData = [
      {
        title: "«Каверзные вопросы»",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXskTUtIy13aT9H_DB2EXmvbGEo5lWdtSJTLFDH0cVvznabR8gfsRsDc8MxTP4KPyHaeE&usqp=CAU",
      },
      {
        title: "Вопросы про Эльбрус",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_GLVJn7w7OYnhNP5mh4cw8k1RpEGcHO6A9iPCQ_Tnw&sy",
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
