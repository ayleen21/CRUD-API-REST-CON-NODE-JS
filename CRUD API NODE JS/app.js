//exportar modulos y paquetes
var asignaturaController = require('./asignaturaController');
var asignaturas = require('./asignaturas');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//elegir puerto
var port = process.env.port || 8090;
app.listen(port);
console.log('running in the port ' + port);

router.use((request, response, next) => {
    console.log('Welcome, Time:', Date());
    next();
});

//--------------------------------------------ASIGNATURAS--------------------------------------

//Traer todos los registros de asignaturas
router.route('/asignaturas').get((request, response) => {
    asignaturaController.getAsignaturas().then(result => {
        response.json(result);
        console.log(result)
    })
})

//Traer registros de asignaturas por id
router.route('/asignaturas/:id').get((request, response) => {
    asignaturaController.getAsignaturasbyId(request.params.id).then(result => {
        response.json(result);
        console.log(result)
    })
})

//Insertar registros en asignaturas
router.route('/asignaturas').post((request, response) => {
    let asignaturas = { ...request.body }
    asignaturaController.postAsignaturas(asignaturas).then(result => {
        response.status(201).json(result);
        console.log('Registro creado con exito!!!')
    })
})

//Actualizar registros en asignaturas
router.route('/edit/:id').put((request, response) => {
    let asignaturas = { ...request.body }
    asignaturaController.putAsignaturas(asignaturas, request.params.id).then(result => {
        response.json(result)
        console.log('Registro actualizado correctamente!!!')
    })
})

//Eliminar registros de asignaturas
router.route('/delete/:id').delete((request, response) => {
    let asignaturas = { ...request.body }
    asignaturaController.deleteXId(asignaturas, request.params.id).then(result => {
        response.json(result)
        console.log('registro eliminado correctamente')
    })
})

//-------------------------------------DOCENTES-----------------------------------------------------

var docenteController = require('./docenteController');
var docentes = require('./docentes');

//Traer todos los registros de docentes
router.route('/docentes').get((request, response) => {
    docenteController.getDocentes().then(result => {
        response.json(result);
        console.log(result)
    })
})

//Traer registros de docentes por id
router.route('/docentes/:id').get((request, response) => {
    docenteController.getDocentesbyId(request.params.id).then(result => {
        response.json(result);
        console.log(result)
    })
})

//Insertar registros en docentes
router.route('/docentes').post((request, response) => {
    let docentes = { ...request.body }
    docenteController.postDocentes(docentes).then(result => {
        response.status(201).json(result);
        console.log('Registro creado con exito!!!')
    })
})

//Actualizar registros en docentes
router.route('/editar/:id').put((request, response) => {
    let docentes = { ...request.body }
    docenteController.putDocentes(docentes, request.params.id).then(result => {
        response.json(result)
        console.log('Registro actualizado correctamente!!!')
    })
})

//Eliminar registros de docentes
router.route('/borrar/:id').delete((request, response) => {
    let docentes = { ...request.body }
    docenteController.borrarXId(docentes, request.params.id).then(result => {
        response.json(result)
        console.log('registro eliminado correctamente')
    })
})

//-------------------------ESTUDIANTES-------------------------------------------------------
var estudianteController = require('./estudianteController');
var estudiantes = require('./estudiantes');

//Traer todos los registros de estudiantes
router.route('/estudiantes').get((request, response) => {
    estudianteController.getEstudiantes().then(result => {
        response.json(result);
        console.log(result)
    })
})

//Traer registros de estudiantes por id
router.route('/estudiantes/:id').get((request, response) => {
    estudianteController.getEstudiantesbyId(request.params.id).then(result => {
        response.json(result);
        console.log(result)
    })
})

//Insertar registros en estudiantes
router.route('/estudiantes').post((request, response) => {
    let estudiantes = { ...request.body }
    estudianteController.postEstudiantes(estudiantes).then(result => {
        response.status(201).json(result);
        console.log('Registro creado con exito!!!')
    })
})

//Actualizar registros en estudiantes
router.route('/update/:id').put((request, response) => {
    let estudiantes = { ...request.body }
    estudianteController.putEstudiantes(estudiantes, request.params.id).then(result => {
        response.json(result)
        console.log('Registro actualizado correctamente!!!')
    })
})

//Eliminar registros de estudiantes
router.route('/elim/:id').delete((request, response) => {
    let estudiantes = { ...request.body }
    estudianteController.borrarEXId(estudiantes, request.params.id).then(result => {
        response.json(result)
        console.log('registro eliminado correctamente')
    })
})

//-----------------------------------RECORD ACADEMICO-------------------------------------

var recordAcademicoController = require('./recordAcademicoController');
var recordAcademico = require('./recordAcademico');

//Traer todos los registros de record academico
router.route('/record').get((request, response) => {
    recordAcademicoController.getRAcademico().then(result => {
        response.json(result);
        console.log(result)
    })
})

//Traer registros de record academico por id
router.route('/record/:id').get((request, response) => {
    recordAcademicoController.getRAcademicoById(request.params.id).then(result => {
        response.json(result);
        console.log(result)
    })
})

//Insertar registros en RECORD ACADEMICO
router.route('/record').post((request, response) => {
    let recordAcademico = { ...request.body }
    recordAcademicoController.postRecordAcademico(recordAcademico).then(result => {
        response.status(201).json(result);
        console.log('Registro creado con exito!!!')
    })
})

//Actualizar registro en RECORD ACADEMICO
router.route('/updt/:id').put((request, response) => {
    let recordAcademico = { ...request.body }
    recordAcademicoController.putRAcademico(recordAcademico, request.params.id).then(result => {
        response.json(result)
        console.log('Registro actualizado correctamente!!!')
    })
})


//Eliminar registros de RECORD ACADEMICO
router.route('/del/:id').delete((request, response) => {
    let recordAcademico = { ...request.body }
    recordAcademicoController.borrarRAXId(recordAcademico, request.params.id).then(result => {
        response.json(result)
        console.log('registro eliminado correctamente')
    })
})

//--------------------------------CONSULTA MULTITABLA-----------------------------------
router.route('/multitabla').get((request, response) => {
    recordAcademicoController.getConsultaMultitabla().then(result => {
        response.json(result);
        console.log(result)
    })
})
