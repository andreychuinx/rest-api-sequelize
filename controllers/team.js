const { Team, Player } = require('../models')
// const Player = require('../models/player')
const getListTeam = async (req, res) => {
  try {
    const query = await Team.findAll({
      include: [{
        model: Player,
        as: 'players'
      }]
      // attributes: ['id', 'itemName']
    })
    res.status(200).send({
      message: 'OK',
      data: query
    })
  } catch (err) {
    console.log(err)
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

const createTeam = async (req, res) => {
  try {
    const payload = req.body;
    const query = await Team.create(payload)
    res.status(200).send({
      message: 'OK',
      data: query.rows
    })
  } catch(err) {
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
  
}

module.exports = {
  getListTeam,
  createTeam
};