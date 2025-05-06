// routes/routes.js
const express = require('express');
const path    = require('path');
const router  = express.Router();

//Ruta en el puerto 3005
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/views/registro.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/registro.html'))
})

//Ruta en el puerto 3006
router.get('/starter-template/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'../starter-template/index.html'));
});

module.exports = router;