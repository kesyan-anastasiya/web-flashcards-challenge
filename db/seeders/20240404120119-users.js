'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersData = [
      {
        name: "Alena",
        email: "al@mail.ru",
        password: "123123",
        score: 11
      },
      {
        name: "Alex",
        email: "alex@mail.ru",
        password: "123456",
        score: 11
      },
      {
        name: "Nik",
        email: "nik@mail.ru",
        password: "111222333",
        score: 11
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Users", users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
