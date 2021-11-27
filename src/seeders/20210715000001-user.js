const {
  seedUsersTableQuery
} = require('../db/queries/userQueries');

module.exports = {
  up: async (queryInterface/* , Sequelize */) => {
    await queryInterface.sequelize.query(seedUsersTableQuery);
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
