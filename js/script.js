const botones = document.querySelectorAll(' .bottones');

const cierre = document.querySelectorAll(' .bottonesCierre');

const contenido = document.querySelectorAll(' .contenido');

const flechas = document.querySelector('.oculto');

// Ocultamos Los modales si estan visibles
for (let i = 0; i < contenido.length; i += 1) {
  contenido[i].classList.add('ocultar');
}
// Linkea el documento modal respectivamente
for (let i = 0; i < botones.length; i += 1) {
  botones[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    // Compara los Ids para entrar en el modal respectivo
    for (let j = 0; j < contenido.length; j += 1) {
      contenido[j].classList.add('ocultar');
      flechas.classList.add('ocultar');
      if (contenido[j].getAttribute('id') === id) {
        contenido[j].classList.remove('ocultar');
      }
    }
  });
}
// Linkea el boton de cierre
for (let i = 0; i < cierre.length; i += 1) {
  cierre[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);

    // Compara para cerrar la ventana modal respectiva
    for (let j = 0; j < contenido.length; j += 1) {
      contenido[j].classList.add('ocultar');
      flechas.classList.remove('ocultar');
      if (contenido[j].getAttribute('id') === id) {
        contenido[j].classList.remove('ocultar');
      }
    }
  });
}
