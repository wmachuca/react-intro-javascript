const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 321354,
        lat: 14.2154,
        lng: 34.4578,
    },
};

//console.table(persona);
console.log(persona);

// const persona2 = persona;
// Lo anterior es una copia de la referencia 

const persona2 = { ...persona };
// Lo anterior es una copia de la estructura con el operador
// Spread de ES6

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);

/* 
    Cuando estamos trabajando con objetos literales, debemos tener cuidado con las copias 
    de objetos ya que podriamos estar copiando las referencias, para crear una nueva 
    instancia del objeto, podemos usar el operador spread (...), el cual nos sirve para
    copiar la estructura completa del objeto
*/ 