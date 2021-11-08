'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Appointments', [{
      title: 'Cita con el Dr. Pachuli.',
      date: '9999-12-31',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Appointments', null, {})
  }
};
