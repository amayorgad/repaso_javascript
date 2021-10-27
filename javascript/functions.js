let personas = [];

//Función Declarada
function registrar_persona() {
    //Obtener datos de los campos de texto
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    //Construir objeto persona
    let objPersona = {
        nombre,
        apellido,
        email,
        telefono
    }

    personas.push(objPersona);
    console.log("Persona registrada: ", personas);
}

//Función Expresada
const registrarPersona = () => {
    //Obtener datos de los campos de texto
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    //Construir objeto persona
    let objPersona = {
        nombre,
        apellido,
        email,
        telefono
    }

    personas.push(objPersona);
    console.log("Persona registrada: ", personas);
    limpiar();
    listarPersonas();
}

/**************************************************************
*Ejercicio:
*Listar los objetos del array 'personas' en la tabla
 *************************************************************/
const listarPersonas = () => {
    console.log("Listar personas");
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    let contador = 0;
    //Iterar el arreglo
    personas.forEach(objPersona => {
        cuerpoTabla.innerHTML += ` 
        <tr id="f${contador}"> 
            <td id="f${contador}c0">${objPersona.nombre}</td>
            <td id="f${contador}c1">${objPersona.apellido}</td>
            <td id="f${contador}c2">${objPersona.email}</td>
            <td id="f${contador}c3">${objPersona.telefono}</td>
            <td> <button onclick="btnEditar('${objPersona.nombre}', '${objPersona.apellido}', '${objPersona.email}', '${objPersona.telefono}')">Editar</button> <button onclick="eliminar('${objPersona.email}')">Eliminar</button> </td>
        </tr>
        `;
    });
}

const eliminar = (email) => {
    console.log(email);
    let personasTempo = personas.filter(objPersona => (objPersona.email != email));
    personas = personasTempo;
    listarPersonas();
}

const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
}

const btnEditar = (nombre, apellido, email, telefono) => {
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("email").value = email;
    document.getElementById("telefono").value = telefono;
}

const btnActualizar = () => {
    let objPersona = obtenerDatos();
    personas.map( element => {
        if(element.email == objPersona.email){
            element.nombre = objPersona.nombre;
            element.apellido = objPersona.apellido;
            element.telefono = objPersona.telefono;
        }
    } );
    listarPersonas();
    limpiar();
}

const obtenerDatos = () => {
    //Obtener datos de los campos de texto
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    
    return {
        nombre,
        apellido,
        email,
        telefono
    }
}
