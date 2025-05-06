//Version 1

const express=require('express');
const path=require('path');

const app=express();

//puerto
const port=3089;

//manejador de la solicitudess
app.get("/",(req,res)=>{
    // res.send("HolaMundo")
    //es importante agregar el disco local
    // res.sendFile("/home/tunci/Escritorio/ProgrmacionWeb2/5-5-2025/index.html")
    res.sendFile(path.join(__dirname+"/index.html"));
});
//salida del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});
