//inicializamos un array para almacenar las tareas
let tareas=[];

//funcion para  mostrar un menu
function mostrarMenu(){
    return parseInt(prompt (
        "OPciones disponibles: \n"+
        "1.-Agregar tarea\n"+
        "2.-Ver todas las tareas\n"+
        "3.-Marcar una tarea como completada\n"+
        "4.-Salir\n"+
        "Elije una opcion: "
    ));
}

function agregarTareas(){
    let nombre=prompt("Intoduce el nombre de la tarea");
    if (nombre){
        let tarea={
            nombre:nombre,
            completada:false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente");
    }else{
        alert("El nombre no puede estar vacio");
    }
}
function verTareas(){
    if(tareas.length===0){
        alert("NO hay tareas en lista");
    }else{
        let mensaje="Lista de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1} . ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
    console.log("Proceso")
}
function marcarTareaCOmpletada(){
    console.log("En proceso");
}
 //FUncion principal para manejar el Programa
function iniciarPrograma(){
    let condicion=true;
    while(condicion){    
        let option=mostrarMenu(); 
        switch(option){
            case 1:
                agregarTareas();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCOmpletada();
                break;
            case 4:
                alert("Saliendo del programa");
                condicion=false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();