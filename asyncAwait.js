async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1500);
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla');
            //resolve(nombre);
            resolve('Se ha presentado un error');
        }, 1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adios ${nombre}`);
            resolve(nombre);
        }, 1000);
    })
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar()
    await hablar()
    await adios(nombre);
    console.log('Termina el proceso');
}
console.log('Empieza el proceso');
main();
