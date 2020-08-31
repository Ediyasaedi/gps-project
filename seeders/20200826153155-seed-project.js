'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      name: 'Bantu Saskia Kembali Ceria',
      description: 'Saskia seorang anak perempuan terbakar sekitar 80% ketika menemani neneknya membakar sampah.',
      value: '1000',
      isOpen: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Makan Bareng Anak Yatim',
      description: 'Makan bareng (mabar) anak yatim adalah kegiatan rutin setiap bulan komunitas, mari bergabung membahagiakan mereka.',
      value: '20000',
      isOpen: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
