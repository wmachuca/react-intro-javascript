const activo = true;

// Operador Ternario Corriente
// const mensaje = (activo) ? 'Activo' : false;

// Forma corta de if
const mensaje = activo && 'Activo';

console.log(mensaje);

/*
    Los operadores ternarios son muy practicos para los momentos en que necesitamos hacer una validacion condicional simple
    con un else implicito, pero en ocasiones solo necesitamos hacer una asignación o cambio de una variable solo en caso de 
    que una condición se cumpla, poner un if es muy largo y un operador ternario sobrepasa lo qeu necesitamos, por esta razon 
    aca vemos una forma corta de if, donde el doble ampersand, asegura el retorno del valor si y solo si se cumple la condición
    indicada.
*/