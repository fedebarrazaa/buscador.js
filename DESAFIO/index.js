//Recibe argumentos, los procesa y delega las acciones a pelis.js

//index.js
const peliculas = require("./pelis.js"); 

//funcion para obtener todas las peliculas
function main () {
    const todasLasPeliculas = peliculas.buscar();
      //console.log("Estas son todas las peliculas:", todasLasPeliculas);

    const ordenarPeliculas = peliculas.orden();
      //console.log("Ordenadas segundo el rating:", ordenarPeliculas);

    const tituloPeliculas = peliculas.titulo("Iron Man 3"); 
      //console.log("El titulo buscado es:", tituloPeliculas); 

    const filtradorPeliculas = peliculas.filtrar("Fantastico");
      console.log("Las peliculas con fantastico son: ", filtradorPeliculas)
}
main()

//elegir cual mostrar en la terminal. 

