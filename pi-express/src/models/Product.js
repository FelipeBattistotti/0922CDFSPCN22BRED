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
    timestamps: false,
    tableName: 'product'
  })

  return Product
}