function hola(nombre, miCallback) {
    console.log(`Hola ${nombre}`);
    setTimeout(function() {
        console.log('Estoy siendo asincrona');
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');

hola('Andres', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    })    
});