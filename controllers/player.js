const { Player, Team } = require('../models')

const getListPlayer = async (req, res) => {
  try {
    const query = await Player.findAll({
      include: [{
        model: Team,
        as: 'team'
      }],
      attributes: ['id', 'playerName']
    })
    res.status(200).send({
      message: 'OK',
      data: query
    })
  } catch (err) {
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
}

const createPlayer = async (req, res) => {
  try {
    const payload = req.body;
    const query = await Player.create(payload, {
      returning: true
    })
    res.status(200).send({
      message: 'OK',
      data: query
    })
  } catch(err) {
    res.status(400).send({
      message: 'ERROR',
      data: err
    })
  }
  
}

module.exports = {
  getListPlayer,
  createPlayer
};