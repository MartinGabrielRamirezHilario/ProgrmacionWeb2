const frutas=[];
const fruta=prompt("Que fruta quieres comprar");

frutas.push(fruta);

while(confirm("¿Deseas agregar otra fruta?")){
    const  fruta=prompt("Que fruta quieres agregar");
    frutas.push(fruta);
}

console.log("Usted compro:");
for(let fruta of frutas){
    console.log(fruta);
}