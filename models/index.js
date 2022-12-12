const Team = require('./team')
const Player = require('./player')
const Country = require('./country')

Player.belongsTo(Team, { foreignKey: 'id_team', as: 'team' })
Team.hasMany(Player, { foreignKey: 'id_team', as: 'players' })

Player.hasOne(Country, { foreignKey: "id_country", as: "" })

module.exports = {
  Team,
  Player,
  Country
}