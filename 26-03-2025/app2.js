// //funcion declarativa
// function numeroAleatorio(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// }

// //invoco un numero
// console.log(numeroAleatorio(1,11));


// //funcion expresada
// const miNumero=function(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// }

// console.log(miNumero(10,35));

// //funcion flecha
// var datos=a =>a + 100;
// let numeroAleatorioFlecha=(min,max)=>Math.ramdom()*(max-min)+min;


const array1=['a','b','c','d'];

array1.forEach(element => console.log(element));

/*
forEach(function callback (currentValue,index,array)){
iterador
}
*/

let frutas =["manzana","sandia","pera","naranja"];
// frutas.forEach(fruta=>console.log(fruta));

frutas.forEach( (fruta,index,array)=>{
    console.log(index);
    console.log(fruta);
    console.log(array);
});