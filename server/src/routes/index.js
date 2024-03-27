const routes = require('express').Router();
const productoRouter = require('./productoRoute/index');
const loginRoute = require('./LoginRoute/index');
const RegisterRoute = require('./RegisterRoute/index');
const CarritoRoute = require('./carritoRoute/index')

routes.use('/productos',productoRouter);
routes.use('/login', loginRoute);
routes.use('/registro',RegisterRoute);
routes.use('/carrito',CarritoRoute);

module.exports =routes;
