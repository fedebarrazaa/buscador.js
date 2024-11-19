// Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos

//pelis.js
const fs = require("fs"); 
 
//funcion para mostrar las peliculas.
function todasLasPeliculas() {
   const archivo = fs.readFileSync(__dirname +"/pelis.json"); 
    const archivoEnTexto = archivo.toString(); 
      return JSON.parse(archivoEnTexto);
}


//funcion para ordenar las peliculas: 
function ordenarLasPelis(a, b) {
   return a.rating - b.rating;
}

function ordenarPeliculas() {
  const peliculas = todasLasPeliculas();
  return peliculas.sort(ordenarLasPelis);
}

//funcion para buscar por titulo 
function buscarPelisPorTitulo(pelicula, tituloBuscado) {
  return pelicula.title.toLowerCase() === tituloBuscado.toLowerCase();
}

//funcion para filtar por tags
function filtrarPeliculas(tagBuscado) {
  const peliculas = todasLasPeliculas(); 
  return peliculas.filter(pelicula => pelicula.tags.includes(tagBuscado)); // Filtras las que tienen el tag buscado
}


//poner el exports para conectarlo con el modulo index.js
exports.buscar = todasLasPeliculas; //leer las peliculas.
exports.orden = ordenarPeliculas; //orden de rating de las peliculas. 
exports.titulo = (tituloBuscado) => { //exports y funcion para mostrar solo la pelicula que quiero en el index.js
  const peliculas = todasLasPeliculas(); 
  return peliculas.find(pelicula => buscarPelisPorTitulo(pelicula, tituloBuscado));
};
exports.filtrar = filtrarPeliculas; //por tags
