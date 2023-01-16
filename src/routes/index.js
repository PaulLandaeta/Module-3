const routes = require('express').Router();
const user = require('./user/userRoute');

routes.use('/v1', user);

module.exports = routes;
