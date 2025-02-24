let dato1= parseInt(prompt("Ingresa el primer numero: "));
let dato2=parseInt(prompt("Ingresa el segundo numero: "));
let dato3=parseInt(prompt("Ingresa el tercer numero: "));

if (dato1>dato2 && dato1>dato3){
    console.log("El numero primer numero es el mayor y es: "+dato1);
}else if (dato2>dato1 && dato2>dato3){
    console.log("El segundo numero es el mayor y es:"+ dato2);
}else if (dato3>dato1 && dato3>dato2){
    console.log("El tercer numero es el mayor y es: "+ dato3);
}else if (dato1>dato2 && dato2==dato3){
    console.log("El segundo y tercer numero son iguales los cuales son: "+dato2);
    console.log("El numero mayor es:"+dato1)
}else if (dato2>dato1 && dato2==dato3){
    console.log("El segundo numero y el tercer numero son iguales los cuales valen: "+dato2);
    console.log("El numero mayor es: "+dato2)
}else if (dato3>dato2 && dato2==dato1){
    console.log("El primer numero y el segundo numero son iguales los cuales valen: "+dato1);
    console.log("EL numero mayor es: "+dato1)
}else{
    console.log("Todos los numeros son iguales y su valor es :"+ dato1);
}