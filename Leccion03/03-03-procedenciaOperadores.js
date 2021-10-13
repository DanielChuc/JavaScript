let a = 3, b = 2, c = 1, d = 4;

let z =  a * b + c / d;
console.log(z);

//  Se toma en consideración una jerarquia de cada signo
// por ejemplo siempre la multiplicacion se va a ejecutar antes
z = c + a * b / d;
console.log(z);


//En resumen se respeta la jeraquia de operaciones