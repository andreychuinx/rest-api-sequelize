module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_barang'
    },
    itemName: {
      type: DataTypes.STRING,
      field: 'nama_barang'
    },
    price: {
      type: DataTypes.INTEGER,
      field: 'harga'
    },
    stock: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'barang',
    // freezeTableName: true,
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
  })
  return Item
}