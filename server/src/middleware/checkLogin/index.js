const db = require('../../database/db')
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const format = require('pg-format');
const {getCorreo}= require('../../database/querys/querys');


const validationFieldLogin =[
	check('email')
		.notEmpty()
		.isEmail(),
    check('password')
		.notEmpty(),
(req,res,next)=>{
	try {
		validationResult(req).throw()
		return next()
	} catch (error) {
		res.status(500).send({error: error.array()})
	}
}
]
const validateCredentials = async(req,res,next)=>{
    const {email, password} = req.body;
    try {
		
		value=[email];
        const query = format(getCorreo,...value);
        const { rows: [usuario], rowCount } = await db.query(query);
		const passwordEncriptada = usuario.contrasenya;
		const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
		console.log(passwordEsCorrecta)
        if (!passwordEsCorrecta || !rowCount){
            res.status(401).json({ msg: "Correo o contraseña incorrecta" })
        }
        else{
            next();
        }
    } catch (error) {
        res.status(400).send({error: error})
    }
}



module.exports ={validateCredentials,validationFieldLogin}