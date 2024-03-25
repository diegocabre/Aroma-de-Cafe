const {getData,getDataById,getDataFilter} = require('./getDataController/index');
const login = require('./LoginController/index');
const userRegistrer = require('./RegisterController/index')

module.exports = {getData, getDataById,getDataFilter,login,userRegistrer}