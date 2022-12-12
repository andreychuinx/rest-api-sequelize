const express = require('express');
const Router = express.Router();
const { getListPlayer, createPlayer} = require('../controllers/player')

/* GET users listing. */
Router.get('/list',getListPlayer);
Router.post('/create',createPlayer);

module.exports = Router;