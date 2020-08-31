'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Donaturs', [{
    name: 'John Doe',
    email: 'jhondoe@email.com',
    password: 'jhondoe123',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    name: 'Jacob Maguire',
    email: 'jacobmaguire@email.com',
    password: 'jacobmaguire123',
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Donaturs', null, {});
  }
};
