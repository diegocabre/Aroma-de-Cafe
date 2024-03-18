const routes = require('express').Router();
const productoRouter = require('./productoRoute/index')


routes.use('/productos',productoRouter)


module.exports =routes;
