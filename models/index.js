const Team = require('./team')
const Player = require('./player')

Player.belongsTo(Team, { foreignKey: 'id_team', as: 'team'})
Team.hasMany(Player, { foreignKey: 'id_team', as: 'players'})

module.exports = {
  Team,
  Player
}