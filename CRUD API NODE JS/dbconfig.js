//conexion a la base de datos
const config = {
    user:"sa",
    password:"siesa123456",
    server: "P553CB3",
    database: "BDNODE_API",
    options: {
        trustedConnection: true,
        //encrypt: true,
        //enableArithAbort: true,
        trustServerCertificate: true,
        //port: 1433
    }
}

module.exports = config