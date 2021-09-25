const express = require('express');
const app = express();
const puerto = 3010;

app.get('/', (req, res) => {
    res.send('Servicio de BD Monedas en funcionamiento');
});

//Cargar librería para 'parseo' de contenido JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./rutas/moneda.rutas")(app);

app.listen(puerto, () => {
    console.log(`Servicio de BD Monedas escuchando en http://localhost:${puerto}`);
})