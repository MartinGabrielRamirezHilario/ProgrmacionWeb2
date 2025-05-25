const express=require('express');
const router=express.Router();


//mostrar lista de usuarios
router.get('/',(req,res) => {
    //consulta a la DB
    const consultaDB='SELECT * FROM users';
    //trabajamos con la conexion
    req.db.query(consultaDB,(err,resultado) => {
        if (err){
            //No se encontro el usuario o tiene un error
            console.error('Error al recuperar usuario',err);
            //Mostraremos informacion al usuario
            res.send('Error no se recuperan los dato de la DB');
        }else{
            // res.send('HOla mundo');

            res.render('index',{users:resultado});
        } 
    });
});

//Modulo para agregar el usuario
router.post('/add',(req,res) => {
    const {name,email}=req.body;
    const insertarRegistro='INSERT INTO users(name,email) VALUES (?,?)'
    req.db.query(insertarRegistro,[name,email],(err)=>{
        if(err){
            console.log('Error al agregar usuario',err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});

// editar usuario
router.get('/edit/:id',(req,res) => {
    const {id}=req.params;
    const buscarUsuarioID='SELECT * FROM users WHERE id= ?';

    req.db.query(buscarUsuarioID,[id],(err,resultado)=>{
        if(err){
            console.error('Error en la db',err);
        }else if (resultado.length === 0){
            res.send('Usuario no encontrado');
        }else{
            res.render('edit',{user:resultado[0]});
        }
    });
});

//Update
router.post('/update/:id',(req,res) => {
    const {id}=req.params;
    const {name,email}=req.body;
    
    const querry="UPDATE users SET name= ?, email= ? WHERE id= ?";
    req.db.query(querry,[name,email,id],(err)=>{
        if(err){
            console.error('error',err);
        }else{
            res.redirect('/');
        }
    });
});
//eliminar
router.get('/delete/:id',(req,res) => {
    const {id}=req.params;
    const eliminarUsuarioId='DELETE FROM users WHERE id= ?';
    req.db.query(eliminarUsuarioId,[id],(err)=>{
        if(err){
            console.error('Error al eliminar en la DB',err);
            res.send("Error en el DB");

        }else{
            res.redirect('/');
        }
    });
});
module.exports = router;

