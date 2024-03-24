const db = require('../../database/db')
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const format = require('pg-format')
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
		res.status(400).send({error: error.array()})
	}
}
]

const validateCredentials = async(req,res,next)=>{
    // const {correo, contrasenya} = req.body;
    // try {
    //     const query = format(getCorreo,correo)
    //     const { rows: [usuario], rowCount } = await db.query(query);
	// 	const { contrasenya: contrasenyaEncriptada } = usuario;
	// 	const passwordEsCorrecta = bcrypt.compareSync(contrasenya, contrasenyaEncriptada)
	// 	console.log(passwordEsCorrecta)
    //     if (!passwordEsCorrecta || !rowCount){
    //         res.status(401).json({ msg: "Correo o contraseña incorrecta" })
    //     }
    //     else{
    //         next();
    //     }
    // } catch (error) {
    //     res.status(400).send({error: error})
    // }
}

const validationCorreo = async(req,res,next)=>{
	const {correo} = req.body;
	try {
		const query = format(getCorreo,correo)
		const data = await db.query(query)
		if(data.rows.length){
			res.status(409).json({
				error: "bad request",
				msg: "El usuario ya está registrado"
			})
		}
		else{
		next()
	}
	} catch (error) {
		res.status(400).json(error)
	}
}

module.exports ={validateCredentials,validationCorreo,validationFieldLogin}