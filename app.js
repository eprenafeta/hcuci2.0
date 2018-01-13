// Requires

var express = require('express');
var mongoose = require('mongoose');
//Inicializar Variables

var app = express();

// Conexion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hcuci', (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


// RUTAS

app.get('/', (req, resp, next) => {
    resp.status(400).json({
        ok: true,
        mensaje: 'peticion realizada correctamentes'
    });
})

// Escuchar Peticiones

app.listen(3000, () => {
    console.log("CORRIENDO EN EL PUERTO 3000 ONLINE");
})