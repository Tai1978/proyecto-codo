let boton = document.querySelectorAll(".btn-expandir");
let mostrarComentario = document.querySelectorAll(".text-expandir");



boton.forEach(function (elemento, indice){
    elemento.addEventListener("click", function(){
        mostrarComentario[indice].classList.toggle("mostrar_comentario");
    })
})