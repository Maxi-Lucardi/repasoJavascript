const producto = 'monitor 20 pulgadas';

//.repetear permite repetir una cadena de texto
const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}!!!`);

//.split divide un string

const actividad = 'estoy aprendiendo javascript moderno';
console.log(actividad.split(''));

const hobbies = ' Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo javascript #JSmoderno2025';
console.log(tweet.split('#'));