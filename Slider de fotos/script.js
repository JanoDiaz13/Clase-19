window.onload = function () {

    const IMAGENES = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg'
    ];

    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#prev');
    let $botonAvanzar = document.querySelector('#next');
    let $imagen = document.querySelector('#imagen');

    //Cambiar foto en la siguiente posicion

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) { //para que vuelva a la primera imagen
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    //Cambiar foto en posicion anterior

    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    //Actualizar la imagen dependiednod e la posicion

    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    //Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    //Iniciar
    renderizarImagen();
}