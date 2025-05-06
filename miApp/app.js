const express = require('express');
const path    = require('path');
const routes  = require('./routes/routes');

const app  = express();
const port = 3005;

// 1. Archivos estáticos (CSS, imágenes, JS cliente, ...)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Monta tus rutas
app.use('/', routes);

// 3. Arranca el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});

