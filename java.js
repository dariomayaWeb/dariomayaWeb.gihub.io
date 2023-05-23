java.js

 function limpiar_errores(){
    let lta_errores = document.getElementById("lta_errores");
    lta_errores.innerHTML = "";
}

let lta_enlaces = [];
function crear() {
    limpiar_errores();
    let f_destino = document.getElementById("f_destino");
    let f_texto = document.getElementById("f_texto");
    let lta_errores = document.getElementById("lta_errores");
    let caja_enlaces = document.getElementById("caja_enlaces");
    let errores = 0;
    if(f_destino.value == "") {
        let li = document.createElement("li");
        lta_errores.appendChild(li);
        li.innerHTML = "El destino no puede ser vacío";
        errores++;
    }
    if(f_texto.value == "") {
        let li = document.createElement("li");
        lta_errores.appendChild(li);
        li.innerHTML = "El texto del enlace no puede ser vacío";
        errores++;
    }
    //FIN DE CHEQUEOS
    if(errores > 0) {
        return;
    }
    let enlace = document.createElement("a");
    enlace.href = f_destino.value;
    enlace.innerHTML = f_texto.value;
    caja_enlaces.appendChild(enlace);
}
  let fotos = ["ChukBerry.jpeg","Paco de Lucia.jpeg"] ;  
  let i=0;
function carru() {
let elemento = document.querySelector("#carrusel");
elemento.innerHTML = fotos[i];
 i++;
}
