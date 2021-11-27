const {
  seedOrdersItemsTableQuery
} = require('../db/queries/orderItemQueries');

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.sequelize.query(seedOrdersItemsTableQuery);
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkDelete('orders_items', null, {});
  }
};
