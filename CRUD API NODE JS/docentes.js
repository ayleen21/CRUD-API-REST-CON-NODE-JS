class DOCENTES {
    //campos que esten en la tabla de la base de datos
    constructor(ID, CODIGO, NOMBRE, APELLIDOS,COD_ASIGNATURA){
        this.ID = ID;
        this.CODIGO = CODIGO,
        this.NOMBRE = NOMBRE,
        this.APELLIDOS = APELLIDOS,
        this.COD_ASIGNATURA = COD_ASIGNATURA
      
    }
}

//Exportar clase
module.exports = DOCENTES;