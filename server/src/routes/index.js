const routes = require('express').Router();

routes.use('/',(req,res)=>{
    console.log("hola desde ruta /")
})
module.exports =routes;
