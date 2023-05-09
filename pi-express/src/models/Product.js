module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataType.STRING(100),
    price: DataType.DECIMAL(10, 2),
    discount: DataType.INTEGER,
    description: DataType.STRING(1000),
    image: DataType.STRING(100),
    id_product_type: DataType.INTEGER
  }, {
    tableName: 'product',
    timestamps: false
  })
  Product.associate = (modelsList) => {
    Product.belongsTo(modelsList.ProductType, {
      foreignKey: 'id_product_type',
      as: 'productType'
    })
    Product.belongsToMany(modelsList.Order, {
      foreignKey: 'id_order',
      as: 'order',
      through: modelsList.OrderItem
    })
  }
  return Product
}