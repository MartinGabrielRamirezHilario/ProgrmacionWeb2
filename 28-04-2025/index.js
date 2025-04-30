//immportar un modulo
const serverHTTP=require('http');

//definir un puerto
const puerto=3029;
//crear el server
const server=serverHTTP.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('HOla desde un server en node con el modulo HTTP de node')
});

server.listen(port,()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`);
});