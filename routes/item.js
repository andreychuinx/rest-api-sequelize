const express = require('express');
const Router = express.Router();
const { getListItem, createItem} = require('../controllers/item')

/* GET users listing. */
Router.get('/list',getListItem);
Router.post('/create',createItem);

module.exports = Router;