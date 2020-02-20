const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AirportController = require('./controllers/AirportController');

routes.get('/allUsers', UserController.allUsers);
routes.get('/henry', UserController.henryUser);
routes.post('/createUser', UserController.createUser);
routes.delete('/deleteUser', UserController.deleteUser);

routes.get('/districtAirports', AirportController.districtAirports);

module.exports = routes;