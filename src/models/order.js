const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Item }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      this.belongsToMany(Item, {
        foreignKey: 'order_id', // source model key
        as: 'items',
        through: 'OrderItem',
      });
    }
  }
  Order.init({
    order_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'orders',
    modelName: 'Order',
  });
  return Order;
};
