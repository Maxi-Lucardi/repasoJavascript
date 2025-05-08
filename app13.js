const autenticado = true;

if(autenticado === true){
console.log("puede entrar a ver netflix");
}else{
    console.log(" no puede netrar a ver netflix");

}

// de esta forma se da por echo de que es true y no hace falta ponerlo lo mismo
// si se iguala a un false, por buenas practicas

// lo mejor seria ponerlo de la siguiente forma

const autenticado2 = true;


if(autenticado2){

    console.log("puede entrar a ver netflix");

}else{

    console.log(" no puede netrar a ver netflix");

}


// lo mas usado cuando uno consige mas experiencia es el operador ternario

console.log(autenticado ? 'si esta autorizado' : 'no esta autorizado');

// ejemplos de uso foto al que uno le puede dar me gusta aplicando true o false si esta persona
// esta agregada como amiga puede dar de lo contrario no puede dar me gusta

// otro caso puede ser usado para ver si estas autorizado para ver pelicualas en netflix prime
// o si no lo estas

//  otro caso seria no puedes hacer un pedido en mercado libre si no estas registrado



