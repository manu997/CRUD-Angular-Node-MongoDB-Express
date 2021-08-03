const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

// Creamos el servidor
const app = express();

// Conecta a la BD
conectarDB();

app.use(express.json());

app.use(cors());

// Ruta principal
app.use('/api/productos', require('./routes/ProductoRoute'));

app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000.");
})