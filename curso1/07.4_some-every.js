//some -- every
//El método some() comprueba si al menos un elemento del array cumple 
//con la condición implementada por la función proporcionada.
//var numeros = [1,2, 3,4, 5,6, 7,8, 9,10];

var numeros = [1, 3, 5, 7, 9];
var resultado = numeros.some((numero) => numero % 2 === 0);
console.log(resultado);

//El método every() Determina si todos los elementos en el array satisfacen una condición.
//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // false
var numeros = [2, 4, 6, 8, 10]; //true

var resultado = numeros.every((numero) => numero % 2 === 0);
console.log(resultado);





///Practica XD basicamente hice lo mismo 

var clientes = [
    { id: 1, nombre: 'Ada', edad: 15 },
    { id: 2, nombre: 'Katrina', edad: 18 },
    { id: 3, nombre: 'Dayana', edad: 19 },
    { id: 4, nombre: 'Pamela', edad: 17 },
    { id: 1, nombre: 'Michelle', edad: 20 },
];

var resultado = clientes.filter((cliente) => cliente.edad >= 18);
console.log(resultado);
var comprobar = resultado.every((e) => e.edad >= 18);
console.log(comprobar);