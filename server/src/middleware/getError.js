checkProductos = async(req,res,next)=>{
    try {
        const {limits, page} = req.query;
    if (limits <= 0 || page <= 0) {
        res.status(400).json({
          error: "Bad Request",
          msg: "Valores de páginación o límite incorrectos"
        })
      }
    else{
        next();
    }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

checkProductoById = async(req,res,next)=>{
    const id = req.params.id;
    if(id<=0 || !/^\d+$/.test(id)){
        res.status(400).json({
            msg:"el valor de id es incorrecto debe ser un número positivo"
        })
    }
    else{
        next();
    }
}

module.exports = {checkProductos,checkProductoById}