const {getData,getDataById,getDataFilter} = require('./getDataController/index');
const login = require('./LoginController/index');
const userRegistrer = require('./RegisterController/index')
const {addProducto,getDataIntoCar,actDataIntoCar,deleteintoCar}= require('./CarritoController/index')

module.exports = {getData,
    getDataById,
    getDataFilter,
    login,
    userRegistrer,
    addProducto,
    getDataIntoCar,
    actDataIntoCar,
    deleteintoCar}