const {
  DataTypes
} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders_items', {
      order_item_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'order_id'
        },
        onDelete: 'CASCADE',
      },
      item_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'items',
          key: 'item_id'
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.INTEGER
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
    await queryInterface.dropTable('orders_items');
  }
};
