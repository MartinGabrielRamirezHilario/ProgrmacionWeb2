//importamos el modulo http incuido en NODE.JS
const PaquetesServidorImpportado= require('http');
//definimos puerto de saida del servidor 
const port=3056;
//crear servidor
const server= PaquetesServidorImpportado.createServer((req,res)=>{
    //establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    //enviamos respuesta
    res.end('HolaMundo');
});

//escucha el puerto
server.listen(port,()=>{
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});