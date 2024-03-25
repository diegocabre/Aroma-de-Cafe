const {validateCredentials,validationFieldLogin}=require('./checkLogin/index')
const {validationCorreo, validationFieldRegistrer}=require('./checkRegister/index')
const {checkProductos,checkProductoById} = require('./checkProductos/index')


module.exports = {
    checkProductos,
    checkProductoById, 
    validationFieldLogin,
    validationCorreo,
    validateCredentials,
    validationFieldRegistrer
    }