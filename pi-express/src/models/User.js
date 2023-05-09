module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataType.STRING(100),
    email: DataType.STRING(100),
    pwd: DataType.STRING(100)
  }, {
    tableName: 'user',
    timestamps: false
  })
  User.associate = (modelsList) => {
    User.hasMany(modelsList.Order, {
      foreignKey: 'id_user',
      as: 'order'
    })
  }
  return User
}