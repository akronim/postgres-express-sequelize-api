const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: 'user_id',
        as: 'orders',
      });
    }
  }
  User.init({
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },
      validate: {
        isEmail: { msg: 'Must be a valid email address' },
      },
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false },
    is_admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};
