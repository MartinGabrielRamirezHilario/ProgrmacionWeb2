function generarQr(){

    event.preventDefault();/*Evita que el formuario se este recargando */
    /*Creamos variables y se toman de los input del formulario y se quitan espacios */
    let input1=document.getElementById('numeroIngresado').value.trim();
    let input2=document.getElementById('mensajeIngresado').value.trim();
    /*Se verifica que los campos esten llenos */
    if(input1===""||input2===""){
        alert("Por favor rellene todos los campos");
    }
    else{
        /*Se limpia el numero de otros caracteres que no sean numeros */
        input1=input1.replace(/\D/g,'');
        /*Se crea el enlace de la api de whattsApp que contendra la informacion de input1 e input2, luego se crea una variable para guardar
        el enlace que contendra el QR*/
        let enlaceWhattsApp=`https://wa.me/${input1}?text=${encodeURIComponent(input2)}`;
        let qrCodeURL='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+encodeURIComponent(enlaceWhattsApp);
        
        /*Se busca la parte del html(contenedor) donde se tenga el id "qr-code", luego elimina el Qr que ya estuviese */
        let containerQr=document.getElementById('qr-code');
        containerQr.innerHTML=("");
        /*Se crea la variable qrImg para crear un elemento img y que guarde el enlace generado anteriormente con el formulario, si 
        no se genera correctamente manda un mensaje. Si se creo correctamente se agrega a la etiqueta que contenga el id "qr-code" */
        let qrImg=document.createElement('img');
        qrImg.src=qrCodeURL;
        qrImg.alt='QR para mensaje de whattsApp'
        qrImg.classList.add('qr-code');
        /*Se inserta imagen en el contenedor*/
        containerQr.appendChild(qrImg);
    }
}