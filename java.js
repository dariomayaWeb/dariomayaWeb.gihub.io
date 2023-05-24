

        let fotos = ["Jimy Hendrix.jpeg", "ChukBerry.jpeg", "PacodeLucia.jpeg", "Lebon.jpeg","CachoTirao.jpeg","BrianMay.jpeg","Clapton.jpeg","ElNegroFerreira.jpeg","Ceratti.jpeg","Falu.jpeg"];
        let nombres=["Jimy Hendrix", "Chuk Berry", "Paco de Lucia", "David Lebon","Cacho Tirao","Brian May","Erik Clapton","El Negro Ferreira","Gustavo Ceratti","Eduardo Falú"]
        let i = 0;
        function adelante() {
            if (i < fotos.length-1 ) {
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
  
 


