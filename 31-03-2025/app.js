let inventario=[];
function mostrarMenu(){
    return parseInt(prompt(
        "Opcines disponibles: \n"+
        "1.-Agregar Productos \n"+
        "2.-Mostrar todos los productos \n"+
        "3.-BUscar producto por nombre \n"+
        "4.-Salir \n"+
        "ELige una opcion: "
    ));
}
function iniciarPrograma(){

    let continuar=true;
    while(continuar){
        let option=mostrarMenu();
        switch (option){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProductos();
                break;
            case 4:
                alert("Saliendo del Programa");
                continuar=false;
                break;
            default:
                alert("Opcion no valida. INtente de nuevo");
        }
    }
}

function mostrarProducto(){
    if(inventario.length===0){
        alert("No tenemos productos en el inventario");

    }else{
        let mensaje="Productos en el inventario";
        for (let i=0;i<inventario.length;i++){
            mensaje+=`Producto:${i+1}\n`+
            `NOmbre:${inventario[i].nombre}\n`+
            `Cantidad:${inventario[i].cantidad}\n`+
            `Precio:${inventario[i].precio}\n`+
            "-----------------------------\n";

        }
        alert(mensaje);
    }
  
}
function agregarProducto(){
    let nombreProducto= prompt("Introduce el nombre del producto: ");
    let cantidadProducto= parseInt(prompt("INtroduce la cantidad del producto: "));
    let precioProducto=parseInt(prompt("Introduce el precio del producto"));
    
    if (cantidadProducto> 0 && precioProducto>0){
        let producto={
            nombre:nombreProducto,
            cantidad:cantidadProducto,
            precio:precioProducto
        };
        inventario.push(producto);
        alert("Prooducto agregado");
    }else{
        alert("Cntidad y Precio tiene que ser positivos");
    }
}
function buscarProductos(){
    print("En proceso")
}

iniciarPrograma();