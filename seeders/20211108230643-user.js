'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        Name: 'Papi',
        lastName: 'Chulo',
        email: 'test@testtesttest.com',
        password: 'FakePassword123',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
