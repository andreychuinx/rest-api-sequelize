
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config')
const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_team'
  },
  teamName: {
    type: DataTypes.STRING,
    field: 'name_team'
  },
 
}, {
  tableName: 'teams',
  // freezeTableName: true,
  createdAt: false,
  // If don't want updatedAt
  updatedAt: false,
})

module.exports = Team;