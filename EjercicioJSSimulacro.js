EjercicioJSSimulacro.js

 /*let foco=document.forms["formu"]["Nombre"];*/
/* nombre.value="";
 nombre.focus();*/

function validar() {

    let nomb = document.querySelector("#Nombre");
    let mens = document.querySelector("#Mensaje");
    let mail = document.forms["formu"]["#Mail"];
    let valid = /^\w+@\w+(\.\{2,5})+$/;
    let lista_errores = document.getElementById("lta_errores");

    nomb.style.border = "3px solid blue";
    mens.style.border = "3px solid blue";

    if (nomb.value == "") {
        nomb.style.border = "3px solid red";
        let aviso = document.createElement("li");
        lista_errores.appendChild(aviso);
        aviso.innerHTML = "Debe colocar un nombre";
        nomb.focus();
        return false;
    }
    if (mens.value == "") {
        mens.style.border = "3px solid red";
        let aviso2 = document.createElement("li");
        lista_errores.appendChild(aviso2);
        aviso2.innerHTML = "Debe colocar un mensaje";
        mens.focus();
        return false;
    }
   /* if (!valid.test(mail)) {*/
   if(mail.value==""){
        mail.style.border = "3px solid red";
        let aviso3 = document.createElement("li");
        lista_errores.appendChild(aviso3);
        aviso3.innerHTML = "Debe colocar el mail correctamente";
        mail.focus();
        return false;
    }

    let item = document.createElement("li");
    item.innerHTML = nomb.value + " "+" dejó el siguiente mensaje: " + mens.value;
    let lta = document.querySelector("#lista_mensajes");
    lta.appendChild(item);
}
function limpiar_errores() {
    let lta_errores = document.getElementById("lta_errores");
    lta_errores.innerHTML = "";
}

