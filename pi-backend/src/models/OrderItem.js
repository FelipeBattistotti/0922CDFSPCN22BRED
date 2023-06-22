module.exports = (sequelize, DataType) => {
  const OrderItem = sequelize.define('OrderItem', {
    id_order: DataType.INTEGER,
    id_product: DataType.INTEGER,
    quantity: DataType.INTEGER
  }, {
    tableName: 'order_item',
    timestamps: false
  })
  OrderItem.associate = (modelsList) => {
    OrderItem.belongsTo(modelsList.Order, {
      foreignKey: 'id_order'
    })
    OrderItem.belongsTo(modelsList.Product, {
      foreignKey: 'id_product',
      as: 'product'
    })
  }
  return OrderItem
}