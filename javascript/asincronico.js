/*
console.log("Paso 1");
console.log("Paso 2");
console.log("Paso 3");
*/

function promesa() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function ejemplo() {
    console.log("Paso 1");
    await promesa().then(() => {
        console.log("Se ejecutó la promesa");
        console.log("Paso 2");
        console.log("Paso 3");
        console.log("Paso 4");
        console.log("Paso 5");
    }).catch(error => {
        console.error(error);
    });

    console.log("Después de la promesa");
}

ejemplo().then(()=>{
    console.log("Se ejecutó la función 'ejemplo'");
})


