document.addEventListener("DOMContentLoaded", function () {
    // Comprobar si el navegador admite localStorage
    if (typeof localStorage !== 'undefined') {

        // Obtener elementos del DOM
        var modal_background = document.getElementById("modal_background");
        var btn_background = document.getElementById("changeBackgroundBtn");
        var span_background = document.getElementById("close_background");
        var backgroundInput = document.getElementById("backgroundInput");

        // Verificar si hay un fondo guardado en el localStorage
        var storedBackground = localStorage.getItem("background");
        if (storedBackground) {
            document.body.style.backgroundImage = "url('" + storedBackground + "')";
        }


        btn_background.onclick = function(){
            if(modal_background.style.display === "" || modal_background.style.display === "none"){
                modal_background.style.display = "block";
                chats.style.display = "none";
                tableros.style.display = "none";
            } else {
                modal_background.style.display = "none";
                for (var j = 0; j < botones.length; j++) {
                    botones[j].classList.remove("activado");
                }
            }
        }
        // Cerrar el modal al hacer clic en la "x"
        span_background.addEventListener("click", function () {
            var changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
            modal_background.style.display = "none";
            changeBackgroundBtn.classList.remove("activado");
        });

        // Cerrar el modal si se hace clic fuera de él
        window.addEventListener("click", function (event) {
            if (event.target == modal_background) {
                modal_background.style.display = "none";
            }
        });

        // Manejar la selección de la imagen de fondo
        backgroundInput.addEventListener("change", function () {
            var file = this.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var backgroundImage = e.target.result;
                    document.body.style.backgroundImage = "url('" + backgroundImage + "')";
                    // Guardar la imagen de fondo en el localStorage
                    localStorage.setItem("background", backgroundImage);
                    // Cerrar el modal
                    modal_background.style.display = "none";
                    var changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
                    changeBackgroundBtn.classList.remove("activado");
                };
                reader.readAsDataURL(file);
            }
        });

    } else {
        console.error("El navegador no admite localStorage o está desactivado.");
    }
});
