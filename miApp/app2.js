const express = require('express');
const path    = require('path');
const routes  = require('./routes/routes');

const app2=express();
const port2=3006;

app2.use(express.static(path.join(__dirname,'starter-template/css')));
app2.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'starter-template', 'index.html'));
});
app2.use('/',routes);
app2.listen(port2,()=>{
    console.log(`Servidor 2 escuchando en http://127.0.0.1:${port2}`);
});