module.exports = (sequelize, DataType) => {
  const ProductType = sequelize.define('ProductType', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataType.STRING(100)
  }, {
    tableName: 'product_type',
    timestamps: false
  })
  ProductType.associate = (modelsList) => {
    ProductType.hasMany(modelsList.Product, {
      foreignKey: 'id_product_type',
      as: 'product'
    })
  }
  return ProductType
}