const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(/* models */) {
      // define association here
    }
  }
  OrderItem.init({
    order_item_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    order_id: { type: DataTypes.UUID, allowNull: false },
    item_id: { type: DataTypes.UUID, allowNull: false },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'orders_items',
    modelName: 'OrderItem',
  });
  return OrderItem;
};
