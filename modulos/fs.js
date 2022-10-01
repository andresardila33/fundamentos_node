const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            cb('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, function(err) {
        if(err) {
            console.error('No se ha podido eliminar el archivo');
        } else {
            cb('Se ha eliminado correctamente');
        }
    });
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);

//leer(__dirname + '/archivo.txt', console.log);

//borrar(__dirname + '/archivo1.txt', console.log);
