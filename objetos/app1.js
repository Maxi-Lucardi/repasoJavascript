// los objetos son la pieza principal de javascript es lo que mas se usa

// un objeto agrupa todo en una sola variable


// const nombre = "Monitor 20 Pulgada";
// const precio = 300;
// const disponible = true;

//objeto literal


// cuando creamos algo en javascript entre llaves lo convertimos en objetos literal y esas
// las variables que van dentro de los objetos no van  con el signo igual sino con dos puntos

const producto ={

nombre: "Monitor 20 Pulgadas",
precio: 300,
disponible:true

}



//  creando un objeto literal no hace falta declarar las variables, porque lo hace en el objeto

function saludo(){
console.log(producto);

}

saludo();