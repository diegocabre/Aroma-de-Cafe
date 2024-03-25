const router  = require('express').Router();
const {addProducto,getDataIntoCar}= require('../../controllers/index');
const {checkCarritoField,checkCarrito,checkSesion} = require('../../middleware/index');

router.get('/',checkSesion,getDataIntoCar)
router.post('/',checkCarritoField,checkCarrito,addProducto);


module.exports = router;