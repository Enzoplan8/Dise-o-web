// Contador de visitas (ejemplo básico, usar una base de datos en producción)
let contadorVisitas = document.getElementById('contadorVisitas');
let visitas = localStorage.getItem('visitas');
visitas = visitas ? parseInt(visitas) + 1 : 1;
contadorVisitas.textContent = visitas;
localStorage.setItem('visitas', visitas);

// Envío del formulario (ejemplo básico, implementar validación y envío de datos)
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí implementarías el envío de los datos del formulario a un servidor
    alert('¡Gracias por suscribirte!');
});

// Desplegar menú
const menuButton = document.querySelector('.menu-desplegable');
const sidebar = document.getElementById('sidebar');
const closeButton = document.querySelector('.cerrar-slidebar');

menuButton.addEventListener('click', () => {
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

closeButton.addEventListener('click', () => {
  sidebar.style.display = 'none'; 
});

//BOTONES SELECCIONADOS
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.botones-paginas');

  botones.forEach(boton => {
      boton.addEventListener('click', function() {
          // Quitar la clase "seleccionado" de todos los botones
          botones.forEach(btn => btn.classList.remove('seleccionado'));

          // Añadir la clase "seleccionado" al botón que se clicó
          this.classList.add('seleccionado');
      });
  });
});
