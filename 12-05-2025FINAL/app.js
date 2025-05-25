const express=require('express');
const mysql=require('mysql2');
const bodyParser= require('body-parser');
const path=require('path');
const routes=require('./routes/routes')

const app=express();

//Manejo de peticiones de http por medio de request
app.use(bodyParser.urlencoded({extended:false}));

//Midleware
app.use(express.static(path.join(__dirname,'public')));


//Configuracion de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//conexion a la base de datos
const db=mysql.createConnection(
    {
        host:'127.0.0.1',
        user:'root',
        password:'123456',
        database:'node_crud',
        port:3306
    });

//validacion
db.connect(err=>{
    if(err){
        console.error('Error en la conexion de la BD',err);
    }else{
        console.log('COnexion realizada');
    }
});
//Disponibilidad de la base
app.use((req,res,next)=>{
    req.db = db;
    next();
});
//rutas
app.use('/',routes);

//inicio del server
const port=3008;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});