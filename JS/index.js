var menu_visible = false;
let menu = document.getElementById("nav");
function menuDesplegable() {
  if (menu_visible == false) {
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

//ocultar el menu
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

//Barritas
function crearBarra(id_barra) {
  for (i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let metAgil = document.getElementById("metAgil");
crearBarra(metAgil);

let office = document.getElementById("office");
crearBarra(office);

let documentacion = document.getElementById("documentacion");
crearBarra(documentacion);

let iso = document.getElementById("iso");
crearBarra(iso);

//porcentaje a mostrar de cada barrita
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

//animaciones
function efectoConocimientos() {
  var conocimientos = document.getElementById("conocimientos");
  var distancia_knowledge =
    window.innerHeight - conocimientos.getBoundingClientRect().top;
  if (distancia_knowledge >= 300 && entro == false) {
    entro = true;

    const intervalHtml = setInterval(function () {
      pintarBarra(html, 7, 0, intervalHtml);
    }, 100);

    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 3, 1, intervalJavascript);
    }, 100);

    const intervalMetAgil = setInterval(function () {
      pintarBarra(metAgil, 7, 2, intervalMetAgil);
    }, 100);

    const intervalOffice = setInterval(function () {
      pintarBarra(office, 7, 3, intervalOffice);
    }, 100);

    const intervalDocumentacion = setInterval(function () {
      pintarBarra(documentacion, 8, 4, intervalDocumentacion);
    }, 100);

    const intervalIso = setInterval(function () {
      pintarBarra(iso, 6, 5, intervalIso);
    }, 100);
  }
}
//Lleno una barra con la cantidad inidcada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "rgb(188, 112, 18)";
  } else {
    clearInterval(interval);
  }
}

window.onscroll = function () {
  efectoConocimientos();
};
