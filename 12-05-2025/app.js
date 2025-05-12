const express=require('express');
const mysql=require('mysql2');
const bodyParser= require('body-parser');

const app=express();

//Manejo de peticiones de http por medio de request
app.use(bodyParser.urlencoded({extended:false}));

//Configuracion de plantillas
app.set('view engine','ejs');

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

//inicio del server

const port=3008;
app.listen(port,()=>{
    console.log(`https://127.0.0.1:${port}`);
});

//mostrar lista de usuarios

app.get('/',(req,res)=>{
    //consulta a la DB
    const consultaDB='SELECT * FROM users';
    //trabajamos con la conexion
    db.query(consultaDB,(err,resultado)=>{
        if (err){
            //No se encontro el usuario o tiene un error
            console.error('Error al recuperar usuario',err);
            //Mostraremos informacion al usuario
            res.send('Error no se recuperan los dato de la DB');
        }else{
            res.render('index',{users:results});
        } 
    });
});

//Modulo para agregar el usuario
app.post('/add',(req,res)=>{
    const {name,email}=req.body;
    const insertarRegistro='INSERT INTO users(name,email) VALUES (?,?)'
    db.query(insertarRegistro,[name,email],(err)=>{
        if(err){
            console.log('Error al agregar usuario',err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});