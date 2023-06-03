

let fotos = ["Jimy Hendrix.jpeg", "ChukBerry.jpeg", "PacodeLucia.jpeg", "Lebon.jpeg", "CachoTirao.jpeg", "BrianMay.jpeg", "Clapton.jpeg", "ElNegroFerreira.jpeg", "Ceratti.jpeg", "Falu.jpeg"];
let nombres = ["Jimy Hendrix", "Chuk Berry", "Paco de Lucia", "David Lebon", "Cacho Tirao", "Brian May", "Erik Clapton", "El Negro Ferreira", "Gustavo Ceratti", "Eduardo Falú"];
let i = 0;
function adelante() {
    if (i < fotos.length - 1) {
        i++;
        let elemento = document.querySelector("#carrusel");
        let nom = document.querySelector("#nombres");
        elemento.src = fotos[i];
        nom.innerHTML = nombres[i];
    }
}
function atras() {
    if (i > 0 && i < fotos.length) {
        i--;
        let elemento = document.querySelector("#carrusel");
        let nom = document.querySelector("#nombres");
        elemento.src = fotos[i];
        nom.innerHTML = nombres[i];
    }
}

function validar() {
    limpiar_errores();
    let nomb = document.forms["formu"]["Nombre"];
    let apell = document.forms["formu"]["Apellido"];
    let mail = document.forms["formu"]["mail"];
    let mensaje = document.forms["formu"]["Mensaje"];
    let valid = /^\w+@\w+(\.\w{2,5})+$/;
    let f_tipo = document.querySelector("#f_tipo");
    let lista_errores = document.getElementById("lta_errores");

    nomb.style.border = "3px solid blue";
    apell.style.border = "3px solid blue";
    mail.style.border = "3px solid blue";
   
    if (nomb.value == "") {
        nomb.style.border = "3px solid red";   
        let aviso = document.createElement("li");
        lista_errores.appendChild(aviso);
        aviso.innerHTML = "Debe colocar un nombre";       
        nomb.focus();
        return false;
    }
    if (apell.value == "") {
        apell.style.border = "3px solid red";
        let aviso2 = document.createElement("li");
        lista_errores.appendChild(aviso2);
        aviso2.innerHTML = "Debe colocar un apellido"; 
        apell.focus();
        return false;
    }
    if (!valid.test(mail.value) ){
      /*  if(mail.value == ""){*/
        mail.style.border = "3px solid red";
        let aviso3 = document.createElement("li");
        lista_errores.appendChild(aviso3);
        aviso3.innerHTML = "Debe colocar el mail correctamente"; 
        mail.focus();  
        return false;   
    }
    
    let item = document.createElement("li");
    item.innerHTML = nomb.value + " " + apell.value + " hizo una comunicación de  tipo " + f_tipo.value + " : " + mensaje.value;
    let lta = document.querySelector("#lta_comunicaciones");
    lta.appendChild(item);
    
    document.forms["formu"].reset();
    return false;   
}


function limpiar_errores() {
    let lta_errores = document.getElementById("lta_errores");
    lta_errores.innerHTML = "";
}

