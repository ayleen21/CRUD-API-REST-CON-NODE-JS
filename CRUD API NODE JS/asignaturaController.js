//llamar la conexion a la base de datos
var config = require('./dbconfig');

//instanciar mssql
const sql = require('mssql');

//Llamar la tabla del sql
const ASIGNATURAS = require('./asignaturas');

//funcion para obtener todas los registros de la base de datos
async function getAsignaturas() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .execute("SP_SELECT_ASIGNATURA");
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Funcion para traer los datos por id
async function getAsignaturasbyId(id) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('ID', sql.Int, id)
            .execute('SP_BUSCARXID', '@ID')
        
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Insertar asignaturas
async function postAsignaturas(ASIGNATURAS) {
    try {
        let pool = await sql.connect(config);

        let insertProducts = await pool.request()
            .input('CODIGO', sql.NVarChar, ASIGNATURAS.CODIGO)
            .input('NOMBRE', sql.NVarChar, ASIGNATURAS.NOMBRE)
            .input('CREDITOS', sql.TinyInt, ASIGNATURAS.CREDITOS)
            .execute('SP_INSERTAR_ASIGNATURA','@CODIGO, @NOMBRE, @CREDITOS');
        return insertProducts.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}

//Editar registros por id

async function putAsignaturas(ASIGNATURAS, id) {
    try {
        let pool = await sql.connect(config);

        let updateProducts = await pool.request()
            .input('ID', sql.Int, id)
            .input('CODIGO', sql.NVarChar, ASIGNATURAS.CODIGO)
            .input('NOMBRE', sql.NVarChar, ASIGNATURAS.NOMBRE)
            .input('CREDITOS', sql.TinyInt, ASIGNATURAS.CREDITOS)
            .execute('SP_ACTUALIZAR_ASIGNATURA', '@ID, @CODIGO, @NOMBRE, @CREDITOS');
        console.log(updateProducts);
        return updateProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }

}

//Eliminar registros

async function deleteXId(ASIGNATURAS, id) {
    try {
        let pool = await sql.connect(config);

        let deleteProducts = await pool.request()
            .input('ID', sql.Int,id)
            .execute('SP_ELIMINAR_ASIGNATURA', '@ID')
        
        return deleteProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Exportar modulos para ejecutar los diferentes request
module.exports = {
    getAsignaturas: getAsignaturas,
    getAsignaturasbyId:getAsignaturasbyId,
    postAsignaturas:postAsignaturas,
    deleteXId:deleteXId,
    putAsignaturas:putAsignaturas

    
   };