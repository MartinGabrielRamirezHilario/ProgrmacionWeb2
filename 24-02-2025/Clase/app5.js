let x=prompt("Ingresa un numero: ")
let y=prompt("Ingresa otro numero: ");
console.log(`
    1: suma
    2:resta
    3:multiplicacion
    4:division`);
let resultado;
let option=parseInt(prompt("Ingresa la opcion de calculo"));


switch(option){
    case 1:
        resultado=suma(x,y);
        console.log(resultado);
        window.alert("El resultado es: "+resultado);
        break;
    case 2:
        resultado=resta(x,y);
        console.log(resultado);
        window.alert("El resultado es: "+resultado);
        break;
    case 3:
        resultado=multiplicar(x,y);
        console.log(resultado);
        window.alert("El resultado es: "+resultado);
        break;
    case 4:
        resultado=divisor(x,y);
        console.log(resultado);
        window.alert("El resultado es: "+resultado);
        break;
    default:
        console.log("No se ingreso ningun numero")
        window.alert("No se ingreso ninguna opcion");
    }

function suma(x,y){
    return parseInt(x)+parseInt(y);
}
function resta(x,y){
    return parseInt(x)-parseInt(y);
}
function multiplicar(x,y){
    return parseInt(x)*parseInt(y);
}
function divisor(x,y){
    return parseInt(x)%parseInt(y);
}

