const db = require('../../database/db')
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const format = require('pg-format')
const {getCorreo}= require('../../database/querys/querys');

const validationFieldRegistrer = [
    check('name')
        .notEmpty()
        .isString(),
    check('lastName')
        .notEmpty()
        .isString(),
	check('email')
		.notEmpty()
		.isEmail(),
    check('password')
		.notEmpty()
		.isLength({ min: 8 })
		.custom((value,{req})=>{
			const passwordregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			if(passwordregex.test(value)){
				return true
			}
			else{
				throw new Error ('La contraseña debe tener al menos una mayuscula, una minuscula, un numero y un caracter especial como @$!%*?& y 8 caracteres como minimo')
			}
		}),
(req, res, next) => {
	try {
        const {password,passwordConfir} = req.body
        if(password != passwordConfir){
            res.status(400).json({
                msg: "No coincide la contraseña y la confirmación"
            })
        }
        else{
            validationResult(req).throw()
            return next()
        }
		
	} catch (error) {
		res.status(400).send({error: error.array()})
		
	}
}
]
const validationCorreo = async(req,res,next)=>{
	const {email} = req.body;
	try {
		const value =[email];
		const query = format(getCorreo,...value)
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

module.exports = {validationCorreo,validationFieldRegistrer}