

function modal_cerrar_controlador_almacenador(){
    var controlador_almacenador = document.getElementById("controlador_almacenador");
    controlador_almacenador.style.display = "none";
    location.reload();
}

var botones = document.getElementsByClassName("bar_btn");

// Iterar sobre cada botón para adjuntar el evento de clic
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    // Eliminar la clase "activado" de todos los botones
    for (var j = 0; j < botones.length; j++) {
      botones[j].classList.remove("activado");
    }
    // Agregar la clase "activado" solo al botón seleccionado
    this.classList.add("activado");
  });
}
var tutorial = document.getElementById("tutorial");
var chats = document.getElementById("chats");
var chat = document.getElementById("Chat");
chat.onclick = function(){
    if (chats.style.display === "" || chats.style.display === "none") {
        tableros.style.display = "none";
        Servicio.style.display = "none";
        tutorial.style.display = "none";
        chats.style.display = "block";
    } else {
        chats.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}

var tablas = document.getElementById("tablas");
var tableros = document.getElementById("tableros");
tablas.onclick = function(){
    if (tableros.style.display === "" || tableros.style.display === "none") {
        chats.style.display = "none";
        Servicio.style.display = "none";
        tableros.style.display = "block";
        tutorial.style.display = "none";
    } else {
        tableros.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}


var Servicios = document.getElementById("Servicios");
var Servicio = document.getElementById("Servicio");
Servicios.onclick = function(){
    if(Servicio.style.display === "" || Servicio.style.display === "none"){
        Servicio.style.display = "block";
        chats.style.display = "none";
        tableros.style.display = "none";
        tutorial.style.display = "none";
    } else {
        Servicio.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}

var controlador_almacenador = document.getElementById("controlador_almacenador");
var controlador_almacenador_btn = document.getElementById("modal_abrir_controlador_almacenador")

controlador_almacenador_btn.onclick = function(){
    if(controlador_almacenador.style.display === "" || controlador_almacenador.style.display === "none"){
        controlador_almacenador.style.display = "block";
        chats.style.display = "none";
        tableros.style.display = "none";
        tutorial.style.display = "none";
    } else {
        controlador_almacenador.style.display = "none";
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activado");
        }
    }
}

var comentarios = document.getElementById("comentarios");
var comentarios_ver = document.getElementById("comentarios_ver");
var comentarios_close = document.getElementById("comentarios_close");

comentarios_ver.onclick = function(){
    if(comentarios.style.display === "" || comentarios.style.display === "none"){
        comentarios.style.display = "block"
        tutorial.style.display = "none";
    } else {
        comentarios.style.display = "none"
    }
}

comentarios_close.onclick = function(){
    comentarios.style.display = "none"
}
