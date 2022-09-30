function hola(nombre, miCallback) {
    console.log(`Hola ${nombre}`);
    setTimeout(function() {
        console.log('Estoy siendo asincrona');
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces >= 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback );
        })
    } else {
        adios(nombre, callback);
    }    
}

console.log('Iniciando proceso...');
hola('Carlos', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

/*hola('Andres', function(nombre) {
     hablar(function() {
        hablar(function() {
            adios(nombre, function() {
                console.log('Terminando proceso...');
            }); 
        });            
    });       
});*/