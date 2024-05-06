let botones = document.querySelectorAll('.btn-expandir');
let textosExpandir = document.querySelectorAll('.text-expandir');
let imagenExpandir = document.querySelectorAll('.imagen-expandir');

botones.forEach((elemento, clave) => { 
    elemento.addEventListener('click', () => {
        textosExpandir[clave].classList.toggle(".abrir_cerrar");
        imagenExpandir[clave].classList.toggle(".abrir-cerrar");
    })
});


