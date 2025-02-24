let vidas=5;
let numeroMaquina=Math.floor(Math.random()*(10-1)+1);
let numeroUsuario=parseInt(prompt("Adivina el numero en el rango de 1 a 10: "));

while(numeroUsuario=numeroMaquina && vidas>1){
        vidas--;
     let numeroUsuario = parseInt(prompt("Vuelve a intentar, Te quedan: "+vidas));
    
}
if(numeroUsuario===numeroMaquina){
     console.log("Felicidades es correcto");
}else{
     console.log("El numero era: "+numeroMaquina);
}
