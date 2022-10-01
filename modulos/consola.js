console.log('Buenas');

console.error('Algo');

let tabla = [
    {
        a: 1,
        b: 'Z',
    }, 
    {
        a: 2,
        b: 'Otra',
    }];

console.table(tabla);

console.group('Conversación:');
console.log('Hola');
console.log('Bla Bla Bla');
console.log('Adios');
console.log('Fin de la conversación');
console.groupEnd();

console.log('Otra cosa de otra función');

function funcion1() {
    console.group('funcion1');
    console.log('Esto es de la función 1');
    console.log('Esto tambien');
    funcion2();
    console.log('Hemos vuelto a la 1')
    console.groupEnd('funcion1');
}

function funcion2() {
    console.group('funcion 2');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');