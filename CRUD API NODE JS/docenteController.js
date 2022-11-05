//llamar la conexion a la base de datos
var config = require('./dbconfig');

//instanciar mssql
const sql = require('mssql');

//Llamar la tabla del sql
const DOCENTES = require('./docentes');

//funcion para obtener todas los registros de la base de datos
async function getDocentes() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .execute("SP_SELECT_DOCENTES");
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Funcion para traer los datos por id
async function getDocentesbyId(id) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('ID', sql.Int, id)
            .execute('SP_BUSCARDXID', '@ID')
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Insertar docentes
async function postDocentes(DOCENTES) {
    try {
        let pool = await sql.connect(config);
        let insertProducts = await pool.request()
            .input('CODIGO', sql.NVarChar, DOCENTES.CODIGO)
            .input('NOMBRE', sql.NVarChar, DOCENTES.NOMBRE)
            .input('APELLIDOS', sql.NVarChar, DOCENTES.APELLIDOS)
            .input('COD_ASIGNATURA', sql.NVarChar, DOCENTES.COD_ASIGNATURA)

            .execute('SP_INSERTAR_DOCENTES','@CODIGO, @NOMBRE, @APELLIDOS, @COD_ASIGNATURA');
        return insertProducts.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}

//Editar docentes
async function putDocentes(DOCENTES, id) {
    try {
        let pool = await sql.connect(config);
        let updateProducts = await pool.request()
            .input('ID', sql.Int, id)
            .input('CODIGO', sql.NVarChar, DOCENTES.CODIGO)
            .input('NOMBRE', sql.NVarChar, DOCENTES.NOMBRE)
            .input('APELLIDOS', sql.NVarChar, DOCENTES.APELLIDOS)
            .input('COD_ASIGNATURA', sql.NVarChar, DOCENTES.COD_ASIGNATURA)

            .execute('SP_ACTUALIZAR_DOCENTE', '@ID, @CODIGO, @NOMBRE, @APELLIDOS, @COD_ASIGNATURA');
        console.log(updateProducts);
        return updateProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }

}

//Eliminar docentes
async function borrarXId(DOCENTES, id) {
    try {
        let pool = await sql.connect(config);

        let deleteProducts = await pool.request()
            .input('ID', sql.Int,id)
            .execute('SP_ELIMINAR_DOCENTES', '@ID')
        return deleteProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Exportar modulos para ejecutar los diferentes request
module.exports = {
    getDocentes: getDocentes,  
    getDocentesbyId:getDocentesbyId,
    postDocentes:postDocentes,
    putDocentes:putDocentes,
    borrarXId:borrarXId
   };