const router  = require('express').Router();
const {getData, getDataById}= require('../../controllers/index');
const {checkProductos,checkProductoById} = require('../../middleware/getError');

router.get('/',checkProductos,getData);
router.get('/:id',checkProductoById,getDataById);

module.exports = router;