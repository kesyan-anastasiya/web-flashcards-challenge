'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const questionsData = [
      {
        description:
          '111',
        category_id: 1,
        answer: '111',
        img: '111',
      },
      {
        description: '222',
        category_id: 1,
        answer: '222',
        img: '222',
      },
      {
        description: '333',
        category_id: 1,
        answer: '333',
        img: '333',
      },
      {
        description: '444',
        category_id: 1,
        answer: '444',
        img: '444',
      },
      {
        description:
          '555',
        category_id: 1,
        answer: '555',
        img: '555',
      },
      {
        description: '666',
        category_id: 2,
        answer: '666',
        img: '66:66',
      },
      {
        description: '777',
        category_id: 2,
        answer: '777',
        img: '777',
      },
      {
        description: '888',
        category_id: 2,
        answer: 'в 888',
        img: '888',
      },
      {
        description: '999',
        category_id: 2,
        answer: '999',
        img: '000',
      },
      {
        description: '000',
        category_id: 2,
        answer: '000',
        img: '000',
      },
    ];

    const questions = questionsData.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
