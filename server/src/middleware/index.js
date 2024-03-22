const {validateCredentials,validationFieldLogin,validationCorreo}=require('./checkLogin/index')
const {checkProductos,checkProductoById} = require('./checkProductos/index')


module.exports = {checkProductos,checkProductoById, validationFieldLogin ,validationCorreo, validateCredentials }