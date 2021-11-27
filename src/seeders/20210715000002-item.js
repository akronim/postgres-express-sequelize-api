const {
  seedItemsTableQuery
} = require('../db/queries/itemQueries');

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.sequelize.query(seedItemsTableQuery);
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
