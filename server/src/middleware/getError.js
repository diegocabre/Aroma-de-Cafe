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

module.exports = {checkProductos}