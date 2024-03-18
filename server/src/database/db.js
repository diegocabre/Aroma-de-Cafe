require('dotenv').config();
const {createTableCarrito, createTableProductos, createTableCategorias, 
    createTableMarcas, createTableOrdenes,createTableRoles, createTableUsers, initial_setup, insertDataIntoProductos} = require('./querys/querys')
const {Pool} = require('pg');
const {HOST, USER, PASSWORD, DATABASE} = process.env;

const db = new Pool ({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    allowExitOnIdle: true
})

db.connect(async (error, client, done) => {
    if (error) {
      console.log("No se logró la conexión a la DB");
    } else {
      console.log("Conexión a la DB exitosa");
  
      try {
        await db.query(initial_setup);
        const res = await db.query('SELECT initialized FROM initial_setup WHERE id = 1');
        const initialized = res.rows[0]?.initialized;
  
        if (!initialized) {
          await db.query(`INSERT INTO initial_setup (id,initialized) VALUES (1,FALSE)`)
          console.log('Inicializando base de datos....');
          await db.query(createTableProductos);
          console.log('Tabla productos creada correctamente');      
          await db.query(insertDataIntoProductos);
          console.log('Datos iniciales insertados correctamente');
          await db.query(createTableUsers);
          console.log('Tabla usuarios creada correctamente');
          await db.query(createTableCategorias);
          console.log('Tabla Categorias creada correctamente');
          await db.query(createTableCarrito);
          console.log('Tabla Carrito creada correctamente');
          await db.query(createTableMarcas);
          console.log('Tabla Marcas creada correctamente');
          await db.query(createTableOrdenes);
          console.log('Tabla Ordenes creada correctamente');
          await db.query(createTableRoles);
          console.log('Tabla Roles creada correctamente');
          await db.query('UPDATE initial_setup SET initialized = TRUE WHERE id = 1');
          console.log('Base de datos inicializada correctamente');
        } else {
          console.log('La base de datos ya ha sido inicializada');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
  });

module.exports = db;


// db.query(createTableProductos, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla productos creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableUsers, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Usuarios creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableCategorias, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Categorias creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableCarrito, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Carrito creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableMarcas, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Marcas creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableOrdenes, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Ordenes creada correctamente o ya existente');
//     }
//   })
//   db.query(createTableRoles, (err, res) => {
//     if (err) {
//       console.error('Error al crear la tabla:', err);
//     } else {
//       console.log('Tabla Roles creada correctamente o ya existente');
//     }
//   })
// console.log("conexión a la DB exitosa")
