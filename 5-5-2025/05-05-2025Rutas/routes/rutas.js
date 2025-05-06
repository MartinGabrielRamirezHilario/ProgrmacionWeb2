const express=require('express');
const router=express.Router();
const path=require('path');


//Definimos las rutas y los manejaodores
//ruta 1
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../index.html"));
});

//ruta 2
router.get("/ruta2.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta2.html"));
});

//ruta3
router.get("/ruta3.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta3.html"));
});

//ruta 4
router.get("/ruta4.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../ruta4.html"));
});

module.exports=router;