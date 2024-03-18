const db= require('../../database/db');
const {getDataQuery} = require('../../database/querys/querys');
const format = require('pg-format')

const getData = async (req,res)=>{
    const {limits =10, page = 1}= req.query;
    const limit = parseInt(limits);
    const offset = (page - 1) * limits;
    const values = [limit,offset]
    const query = format(getDataQuery,...values)
    const data = await db.query(query);
    const {rowCount, rows} = data;
    if(rowCount){
        res.status(200).json({
            msg:"Productos",
            rowCount: rowCount,
            rows: rows
        })
    }
    else{
        res.status(400).json({
            msg: "Error datos no encontrados"
        })
    }
}

module.exports = getData;
