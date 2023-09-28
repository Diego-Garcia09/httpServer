const express = require('express');
const cors = require('cors');
//const controladorProyectos = require('./controladores/controladorProyecto');
//const controladorDonadores = require('./controladores/controladorDonadores');
const routerProyecto = require('./router/proyectos');
const routerDonadores = require('./router/donadores');
const routerDonatarios = require('./router/donatarios');
const app = express();
const port = 4000;

//Agregar routerProyecto = require(router......)
//app.use("/proyectos", routerProyecto)

app.use(cors());
app.use(express.json());

app.use('/proyectos', routerProyecto);
app.use('/donadores', routerDonadores);
app.use('/donatarios', routerDonatarios);
//add = const new = prod.add(req.body)
//await res.json(new)
//app.get('/proyectos', controladorProyectos.getAll);
//app.get('/proyectos/:id', controladorProyectos.getById);

//app.get('/donadores', controladorDonadores.getAll);
//app.get('/donadores/:rfc', controladorDonadores.getByRFC);

app.get('/', (req, res) => {
    res.send('Hola mundo!!!');
});


app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});

//Un controlador por requisito

//app.use(cors())
//app.use(express.json())
//app.get("ruta", controlador.funcion)


//////////////////////////////////Controladores/////////////////////////////////////
//const prod = require("Ruta del modelo producto")
//Funcion async function(req, res) await res.json

//////////////////////////////////Modelos//////////////////////////////////////////
//Arreglo
//Funciones normales como encontrarAutor
//Exports