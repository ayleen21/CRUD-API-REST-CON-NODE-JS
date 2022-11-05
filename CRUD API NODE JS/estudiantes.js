class ESTUDIANTES {
    //campos que esten en la tabla de la base de datos
    constructor(ID, CODIGO, NOMBRE, APELLIDOS,SEMESTRE,CARRERA,COD_ASIGNATURA){
        this.ID = ID;
        this.CODIGO = CODIGO,
        this.NOMBRE = NOMBRE,
        this.APELLIDOS = APELLIDOS,
        this.SEMESTRE = SEMESTRE,
        this.CARRERA = CARRERA,
        this.COD_ASIGNATURA = COD_ASIGNATURA
    }
}

//Exportar clase
module.exports = ESTUDIANTES;