//importar express
const express=require('express');

//creacion de una instancia
const app=express();

//definir el puerto
const port=5009;

//Configuracion de Ruta get para la raiz('/)
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});

app.listen(port);