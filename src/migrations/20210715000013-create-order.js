const {
  DataTypes
} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onDelete: 'CASCADE',
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      total_price: {
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
    await queryInterface.dropTable('orders');
  }
};
