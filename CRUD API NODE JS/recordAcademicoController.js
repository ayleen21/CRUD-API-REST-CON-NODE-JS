//llamar la conexion a la base de datos
var config = require('./dbconfig');

//instanciar mssql
const sql = require('mssql');

//Llamar la tabla del sql
const RECORD_ACADEMICO = require('./recordAcademico');

//funcion para obtener todas los registros de la base de datos
async function getRAcademico() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .execute("SP_SELECT_RACADEMICO");
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

 //Funcion para traer los datos por id
async function getRAcademicoById(id) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('ID', sql.Int, id)
            .execute('SP_BUSCARRAXID', '@ID')
        
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
} 

//Insertar RECORD
async function postRecordAcademico(RECORD_ACADEMICO) {
    try {
        let pool = await sql.connect(config);
        let insertProducts = await pool.request()
            .input('CODIGO', sql.NVarChar, RECORD_ACADEMICO.CODIGO)
            .input('PERIODO', sql.NVarChar, RECORD_ACADEMICO.PERIODO)
            .input('COD_ESTUDIANTE', sql.NVarChar, RECORD_ACADEMICO.COD_ESTUDIANTE)
            .input('COD_DOCENTE', sql.NVarChar, RECORD_ACADEMICO.COD_DOCENTE)
            .input('NOTA1', sql.Decimal, RECORD_ACADEMICO.NOTA1)
            .input('NOTA2', sql.Decimal, RECORD_ACADEMICO.NOTA2)

            .execute('SP_INSERTAR_RACADEMICO','@CODIGO, @PERIODO, @COD_ESTUDIANTE, @COD_DOCENTE, @NOTA1, @NOTA2');
        return insertProducts.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}

//Editar RECORD ACADEMICO
async function putRAcademico(RECORD_ACADEMICO, id) {
    try {
        let pool = await sql.connect(config);
        let updateProducts = await pool.request()
            .input('ID', sql.Int, id)
            .input('CODIGO', sql.NVarChar, RECORD_ACADEMICO.CODIGO)
            .input('PERIODO', sql.NVarChar, RECORD_ACADEMICO.PERIODO)
            .input('COD_ESTUDIANTE', sql.NVarChar, RECORD_ACADEMICO.COD_ESTUDIANTE)
            .input('COD_DOCENTE', sql.NVarChar, RECORD_ACADEMICO.COD_DOCENTE)
            .input('NOTA1', sql.Decimal, RECORD_ACADEMICO.NOTA1)
            .input('NOTA2', sql.Decimal, RECORD_ACADEMICO.NOTA2)

            .execute('SP_ACTUALIZAR_RACADEMICO', '@ID, @CODIGO, @PERIODO, @COD_ESTUDIANTE, @COD_DOCENTE, @NOTA1, @NOTA2');
        console.log(updateProducts);
        return updateProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Eliminar record academico
async function borrarRAXId(RECORD_ACADEMICO, id) {
    try {
        let pool = await sql.connect(config);
        let deleteProducts = await pool.request()
            .input('ID', sql.Int,id)
            .execute('SP_ELIMINAR_RACADEMICO', '@ID')
        return deleteProducts.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//Exportar modulos para ejecutar los diferentes request
module.exports = {
    getRAcademico: getRAcademico,
    getRAcademicoById:getRAcademicoById,
    postRecordAcademico:postRecordAcademico,
    putRAcademico:putRAcademico,
    borrarRAXId:borrarRAXId,
    getConsultaMultitabla:getConsultaMultitabla
   };

//----------------------CONSULTA MULTITABLAS------------------------------------------

//Procedimiento almacenado consulta multitablas

async function getConsultaMultitabla() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .execute("SP_MOSTRAR_DATOS");
        return products.recordset;
    }
    catch (error) {
        console.log(error);
    }
}