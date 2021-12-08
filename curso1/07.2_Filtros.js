//Filter
/**
 * El método filter(()=>) crea un nuevo array con todos los elementos 
 * que cumplan la condición implementada por la función dada.
 */
var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'Katrina', edad: 19, matriculado: true },
    { nombre: 'Jorge', edad: 22, matriculado: false },
    { nombre: 'Gabriel', edad: 21, matriculado: true },
    { nombre: 'Raul', edad: 19, matriculado: false },

];

var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);