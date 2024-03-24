const routes = require('express').Router();
const productoRouter = require('./productoRoute/index');
const loginRouter = require('./LoginRoute/index');

routes.use('/productos',productoRouter);
routes.use('/login', loginRouter);

module.exports =routes;
