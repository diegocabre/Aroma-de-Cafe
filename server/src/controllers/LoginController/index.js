const jwt = require("jsonwebtoken")
const {KEYTOKEN} = process.env

const login = async(req,res)=>{
    const {correo} = req.body;
    const token = jwt.sign({ correo }, KEYTOKEN)
    res.status(200).json({
        msg: "Acceso concedido",
        email: correo,
        token: token
    })
}
module.exports = login