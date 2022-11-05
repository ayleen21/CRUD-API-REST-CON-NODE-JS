//llamar la conexion a la base de datos
var config = require('./dbconfig');

//instanciar mssql
const sql = require('mssql');

//Llamar la tabla del sql
const ESTUDIANTES = require('./estudiantes');

//funcion para obtener todas los registros de la base de datos
async function getEstudiantes() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .execute("SP_SELECT_ESTUDIANTES");
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

 //Funcion para traer los datos por id
async function getEstudiantesbyId(id) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('ID', sql.Int, id)
            .execute('SP_BUSCAREXID', '@ID')
        
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
} 

//Insertar estudiante
async function postEstudiantes(ESTUDIANTES) {
    try {
        let pool = await sql.connect(config);
        let insertProducts = await pool.request()
            .input('CODIGO', sql.NVarChar, ESTUDIANTES.CODIGO)
            .input('NOMBRE', sql.NVarChar, ESTUDIANTES.NOMBRE)
            .input('APELLIDOS', sql.NVarChar, ESTUDIANTES.APELLIDOS)
            .input('SEMESTRE', sql.NVarChar, ESTUDIANTES.SEMESTRE)
            .input('CARRERA', sql.NVarChar, ESTUDIANTES.CARRERA)
            .input('COD_ASIGNATURA', sql.NVarChar, ESTUDIANTES.COD_ASIGNATURA)

            .execute('SP_INSERTAR_ESTUDIANTES','@CODIGO, @NOMBRE, @APELLIDOS, @SEMESTRE, @CARRERA, @COD_ASIGNATURA');
        return insertProducts.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}

//Editar estudiantes
async function putEstudiantes(ESTUDIANTES, id) {
    try {
        let pool = await sql.connect(config);
        let updateProducts = await pool.request()
            .input('ID', sql.Int, id)
            .input('CODIGO', sql.NVarChar, ESTUDIANTES.CODIGO)
            .input('NOMBRE', sql.NVarChar, ESTUDIANTES.NOMBRE)
            .input('APELLIDOS', sql.NVarChar, ESTUDIANTES.APELLIDOS)
            .input('SEMESTRE', sql.NVarChar, ESTUDIANTES.SEMESTRE)
            .input('CARRERA', sql.NVarChar, ESTUDIANTES.CARRERA)
            .input('COD_ASIGNATURA', sql.NVarChar, ESTUDIANTES.COD_ASIGNATURA)

            .execute('SP_ACTUALIZAR_ESTUDIANTE', '@ID, @CODIGO, @NOMBRE, @APELLIDOS, @SEMESTRE, @CARRERA, @COD_ASIGNATURA');
        console.log(updateProducts);
        return updateProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }

}

//Eliminar estudiantes
async function borrarEXId(ESTUDIANTES, id) {
    try {
        let pool = await sql.connect(config);

        let deleteProducts = await pool.request()
            .input('ID', sql.Int,id)
            .execute('SP_ELIMINAR_ESTUDIANTES', '@ID')
        return deleteProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Exportar modulos para ejecutar los diferentes request
module.exports = {
    getEstudiantes: getEstudiantes,
    getEstudiantesbyId: getEstudiantesbyId,
    postEstudiantes:postEstudiantes,
    putEstudiantes:putEstudiantes,
    borrarEXId:borrarEXId
   };