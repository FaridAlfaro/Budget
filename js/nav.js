/*
Responsive nav menu with sub menus only on larger screens.

This is more than three years old now - please take it with a big pinch of salt - there are better ways to achieve the same thing!
*/

/**********
MOBILE MENU
**********/
// Selecciona el botón de alternancia del menú
const menuToggle = document.querySelector('.menu-toggle');

// Agrega un evento de clic al botón de alternancia del menú
menuToggle.addEventListener('click', function(e) {
  // Detiene el comportamiento predeterminado del enlace
  e.preventDefault();
  
  // Verifica que el clic fue hecho con el botón izquierdo del mouse
  if (e.button === 0) {
    // Selecciona el menú y el botón de alternancia del menú
    const menu = this.parentNode.querySelector('.menu');
    const toggleButton = this;

    // Alterna las clases para expandir o contraer el menú
    if (menu.classList.contains('expanded-mobile-menu')) {
      toggleButton.classList.remove('expanded-menu-toggle');
      this.parentNode.classList.remove('nav-expanded');
      menu.classList.remove('expanded-mobile-menu');
    } else {
      toggleButton.classList.add('expanded-menu-toggle');
      this.parentNode.classList.add('nav-expanded');
      menu.classList.add('expanded-mobile-menu');
    }
  }
});


// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los botones de alternancia de menú
    const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');
    
    // Agrega un evento de clic a cada botón de alternancia de menú
    navIcons.forEach(function(navIcon) {
      navIcon.addEventListener('click', function() {
        // Alterna la clase "open" en el botón de alternancia de menú
        this.classList.toggle('open');
      });
    });
  });
  
  const headerImg = document.querySelector('.header img');
  const lupa = document.querySelector('.wrap')
function handleHeaderImage() {
  if (window.innerWidth > 768) {
    headerImg.style.display = 'block';
    lupa.style.display = 'block';
  } else {
    headerImg.style.display = 'none';
    lupa.style.display = 'none';
  }
}

window.addEventListener('resize', handleHeaderImage);

// Ejecuto la función al cargar la página para ocultar o mostrar la imagen según el estado inicial de la pantalla
handleHeaderImage();