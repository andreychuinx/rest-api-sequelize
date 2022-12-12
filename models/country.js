
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config')
const Team = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_country'
  },
  countryName: {
    type: DataTypes.STRING,
    field: 'name_country'
  },
 
}, {
  tableName: 'countries',
  // freezeTableName: true,
  createdAt: false,
  // If don't want updatedAt
  updatedAt: false,
})
module.exports = Team;