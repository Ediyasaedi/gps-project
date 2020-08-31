'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [{
      name: 'Marsani',
      email: 'marsani@email.com',
      password: 'marsani321',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tuan Yayat',
      email: 'tuanyayat@email.com',
      password: 'tuanyayat321',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
