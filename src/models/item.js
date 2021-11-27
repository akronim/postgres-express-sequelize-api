const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsToMany(models.Order, {
        foreignKey: 'item_id', // source model key
        as: 'orders',
        through: 'OrderItem',
      });
    }
  }
  Item.init({
    item_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    unit_price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'items',
    modelName: 'Item',
  });
  return Item;
};
