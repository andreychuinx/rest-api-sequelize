const express = require('express');
const Router = express.Router();
const { getListTeam, createTeam} = require('../controllers/team')

/* GET users listing. */
Router.get('/list',getListTeam);
Router.post('/create',createTeam);

module.exports = Router;