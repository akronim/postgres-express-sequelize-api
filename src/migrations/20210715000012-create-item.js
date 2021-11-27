const {
  DataTypes
} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      item_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        type: Sequelize.STRING
      },
      unit_price: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface/* , Sequelize */) => {
    await queryInterface.dropTable('items');
  }
};
