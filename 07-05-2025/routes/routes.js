const express=require('express');
const path=require('path');
const router=express.Router();

//ruta Principal
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});
//ruta Registro
router.get("/registro",(req,res)=>{//Aqui es como se va a visualizar en el link
    res.sendFile(path.join(__dirname,"../views/registro.html"))
})

module.exports=router;