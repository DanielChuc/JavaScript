        //Igualdad 

let a = 3, b = 2, c = "3";

let z = a == c;    // Revisa el valor sin importar el tipo, por eso pone igual 3 y "3"

console.log(z);


z = a === c;      // Revisa los valores pero tambien los tipos
console.log(z);


        //Diferente
//Revisa si son diferente sin importar el tipo
let d = a != b;
console.log(d);

// Revisa si son diferentes hasta los tipos de dato
d = a !== c;
console.log(d);