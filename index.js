const express = require('express');
const cors = require('cors');
const routerProyecto = require('./router/proyectos');
const routerDonadores = require('./router/donadores');
const routerDonatarios = require('./router/donatarios');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/proyectos', routerProyecto);
app.use('/donadores', routerDonadores);
app.use('/donatarios', routerDonatarios);

app.get('/', (req, res) => {
    res.send('Hola mundo!!!');
});

app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});