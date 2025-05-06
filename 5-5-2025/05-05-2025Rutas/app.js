const express=require('express');
const rutas=require('./routes/rutas');
const app1=express();

//puertos
const port=5023;


app1.use("/",rutas);


app1.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});