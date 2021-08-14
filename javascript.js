window.addEventListener("scroll", function() {
  var hay_elemento_visible = false;
	var posicion = "";
	var seccion = "";
  
	seccion = document.querySelector("#sobre-mi");
	enlace_menu = document.querySelector("#enlace_sobre_mi");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }
  
	seccion = document.querySelector("#formacion");
	enlace_menu = document.querySelector("#enlace_formacion");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }
  
	seccion = document.querySelector("#experiencia");
	enlace_menu = document.querySelector("#enlace_experiencia");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }
  
	seccion = document.querySelector("#habilidades");
	enlace_menu = document.querySelector("#enlace_habilidades");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }
  
	seccion = document.querySelector("#proyectos");
	enlace_menu = document.querySelector("#enlace_proyectos");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }
  
	seccion = document.querySelector("#contacto");
	enlace_menu = document.querySelector("#enlace_contacto");
	posicion = seccion.getBoundingClientRect();

	if (!hay_elemento_visible && posicion.top < window.innerHeight && posicion.bottom >= 80) {
		enlace_menu.classList.add("activo");
    hay_elemento_visible = true;
	}
  else {
    enlace_menu.classList.remove("activo");
  }

});

var menu_abierto = false;

function desplegarMenu() {

	if (!menu_abierto) {
		document.querySelector(".icono_menu").style.color = "var(--color_secundario)";
		document.querySelector(".cabecera ul").style.display = "block";
		menu_abierto = true;
	}
	else {
		document.querySelector(".icono_menu").style.color = "white";
		document.querySelector(".cabecera ul").style.display = "none";
		menu_abierto = false;
	}
}

function cerrarMenu() {

	if (menu_abierto) {
		document.querySelector(".icono_menu").style.color = "white";
		document.querySelector(".cabecera ul").style.display = "none";
		menu_abierto = false;
	}
}