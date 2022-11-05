class ASIGNATURAS {
    //campos que esten en la tabla de la base de datos
    constructor(ID, CODIGO, NOMBRE, CREDITOS){
        this.ID = ID;
        this.CODIGO = CODIGO,
        this.NOMBRE = NOMBRE,
        this.CREDITOS = CREDITOS
      
    }
}

//Exportar clase
module.exports = ASIGNATURAS;