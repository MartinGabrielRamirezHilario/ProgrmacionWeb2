let desicion;
do{
    let option=prompt("Escriba el alculo que desea realizar: "+"\n"+"Suma.\nResta.\nMultiplicacion\nDivision");
    let x=prompt("Escriba el primer numero:");
    let y=prompt("Escriba el segundo numero");
    let resultado;




    switch(option){
        case "Suma":
            resultado=suma(x,y);
            window.alert("El resultado de la suma es:"+resultado);
            break;
        case "Resta":
            resultado=resta(x,y);
            window.alert("El resultado de la resta es: "+resultado);
            break;
        case "Multiplicacion":
            resultado=multiplicar(x,y);
            window.alert("El resultado de la multiplicacion es: "+resultado);
            break;
        case "Division":
            resultado=division(x,y);
            window.alert("El resultado de la division es: "+resultado);
            break;
        default:
            window.alert("No se ingreso ningun numero intente de nuevo");    
    }
   desicion=prompt("Deseas hacer otra operacion?\nSi\nNo");
}while (desicion=="Si");

window.alert("Gracias por usarme");


function suma(x,y){
    return parseFloat(x)+parseFloat(y);
}
function resta(x,y){
    return parseFloat(x)-parseFloat(y);
}
function multiplicar(x,y){
    return parseInt(x)*parseInt(y);
}
function division(x,y){
    return parseFloat(x)/parseFloat(y);
}
