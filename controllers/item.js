const Item = require('../models/item')

const getListItem = async (req, res) => {
  try {
    const query = await Item.findAll({
      attributes: ['id', 'itemName']
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

const createItem = async (req, res) => {
  try {
    const payload = req.body;
    const query = await Item.create(payload)
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
  getListItem,
  createItem
};