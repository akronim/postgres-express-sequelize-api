const {
  seedOrdersTableQuery
} = require('../db/queries/orderQueries');

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.sequelize.query(seedOrdersTableQuery);
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
