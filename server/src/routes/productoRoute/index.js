const router  = require('express').Router();
const {getData}= require('../../controllers/index');
const {checkProductos} = require('../../middleware/getError')

router.get('/',checkProductos,getData);

module.exports = router;