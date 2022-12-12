
const { DataTypes } = require("sequelize");
const sequelize = require('../config')
const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_players'
  },
  idTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_team'
  },
  idCountry: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'country_id'
  },
  playerName: {
    type: DataTypes.STRING,
    field: 'name_player'
  }
}, {
  tableName: 'players',
  // freezeTableName: true,
  createdAt: false,
  // If don't want updatedAt
  updatedAt: false,
})


module.exports = Player;