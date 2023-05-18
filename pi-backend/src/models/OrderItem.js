module.exports = (sequelize, DataType) => {
  const OrderItem = sequelize.define('OrderItem', {
    id_order: DataType.INTEGER,
    id_product: DataType.INTEGER,
    quantity: DataType.INTEGER
  }, {
    tableName: 'order_item',
    timestamps: false
  })
  return OrderItem
}