const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('error 404: no se lo que quieres');
            res.end();
            break;
    }

    /*res.writeHead(201, { 'Content-Type': 'text/plain' });

    //Escribir respuesta al usuario
    res.write('Hola ya se utilizar HTTP de NodeJS');

    res.end();*/
}

console.log('Escuchando http en el puerto 3000');