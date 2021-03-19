
//const arreglo = new Array();
const arreglo = [1, 2, 3, 4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
/* 
    Preferiblemente no usar el push para poder agregar elementos a los arreglos
    puesto qeu este metodo, hace la modificación de la estructura del objeto principal
*/

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

/*
    Es necesario revisar toda la documentación relacionada a los metodos del 
    prototype de los arreglos, estos metodos contienen funciones como las de map,
    el cual crea una nueva instancia a partir de la información enviada en cada elemento 
    del array al cual se espera mapear.
    Tambien encontramos funciones de ordenamiento, alistamiento, recorrido de elementos, 
    transformación, etc
*/