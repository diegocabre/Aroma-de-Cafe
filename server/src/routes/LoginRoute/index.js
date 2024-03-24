const router = require('express').Router();
const {validationFieldLogin, validateCredentials} = require('../../middleware/index')
const {login}=require('../../controllers/index')


router.get('/',validationFieldLogin,validateCredentials,login)

module.exports = router