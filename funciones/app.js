let suma = function(a,b){

    return a + b;
}


console.log(suma(10,25));


//  la funcion anonima no posee nombre, se define en el momento,
// se le puede asignar una variable
// se usan en callbacks de funciones de orden superior, en la cracion de modulos
// y porque cuando sabemos que la funciones no la vamos a volver a utilizar

//  funcion flecha 

// adentro del los parentesis se ponen los parametros 

let suma2 = (a,b)=>{

return a + b;

}

// adentro de los parentesis de la invocacion se ponen los argumentos
console.log(suma2(4,3));


// si es una funcion simple se puede resolver en una misma linea de codigo

let suma3 = (a , b) => a + b;

console.log(suma(14,2));


let persona = {

nombre : "Pedro",
edad: 38,
estudios: "Programacion"
}

console.log(persona.estudios) // connotacion de punto


let producto= {

id: 1,
marca:"motorola",
modelo:"edge 30 fusion",
color:"negro",
precio: 450, 
}



// funciones constructoras nos permite agregar nuevas variables id/llave a nuestro objeto
// sin tener que repetir o escribir toda la funcion de nuevo
// ejemplo creamos la funcion con los parametros que vamos a utilizar
// luego a las variables le colocamos antes la palabra reservada this.
// en los objetos constructores las funciones se escribre la primera letra con mayuscula

function Usuario(nombre, edad, calle){

this.nombre = nombre;
this.edad = edad;
this.calle = calle;

}

const usuario1 = new Usuario("Pedro", 38, "Pedernera 400");

console.log(usuario1)

// con la palabra this. refiere al parametro con el que hace interaccion, lo que hace
// que aloje la informacion con el parametro con el que interactua