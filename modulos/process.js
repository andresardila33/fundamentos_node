//const p = requeri('process');

process.on('beforeExit', () => {
    console.log('Andres el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Andres el proceso acabo');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

functionQueNoExiste();

console.log('Esto si el error no se recoge no sale');

