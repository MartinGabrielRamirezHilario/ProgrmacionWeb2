//funciones
// saluda();
// function saluda(){
//     console.log("Hola mundo");
// }
// saluda();

// funcion con argumento 
// function despedida(nombre ){
//     console.log("Adios "+nombre);
// }
// despedida("Martin");
//
//  funcion con argumentos y retorno
// function operacion(numero){
//     let a=56;
//     let b=89.53;
//     let calculo=(numero*a)/b;
//     return calculo;
// }
// console.log(operacion(50));

function suma(x,y){

    return parseInt(x)+parseInt(y);
}
let x=prompt("Ingresa un numero1: ");
let y=prompt("Ingresa un numero2: ");
let resultado=suma(x,y);
console.log("El total es: "+resultado);