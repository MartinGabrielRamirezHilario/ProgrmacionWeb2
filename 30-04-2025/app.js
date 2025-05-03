//importar express
const express=require('express');

//creacion de una instancias
const app1=express();
const app2=express();
const app3=express();

//definimos los puertos
const port1=5009;
const port2=5010;
const port3=5011;

//Configuracion de Ruta get para la raiz('/)
app1.get('/',(req,res)=>{
    res.send('Hola Mundo desde el puerto 5009, Servidor 1');
});
app2.get('/',(req,res)=>{
    res.send('Hola Mundo desde el puerto 5010, Servidor 2');
});
app3.get('/',(req,res)=>{
    res.send('Hola Mundo desde el Puerto 5011, Servidor 3');
})


app1.listen(port1);
app2.listen(port2);
app3.listen(port3);