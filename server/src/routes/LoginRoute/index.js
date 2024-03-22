const router = require('express').Router();
const {validationFieldLogin, validationCorreo} = require('../../middleware/index')
const {login}=require('../../controllers/index')


router.get('/',validationFieldLogin, validationCorreo)

module.exports = router