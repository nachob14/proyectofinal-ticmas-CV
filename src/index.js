
// Declaracion de constantes que se haran aparecer o desaparecer en el DOM segun el usuario haga click en cada seccion
const datosPersonales = {
    nombre: "Dan",
    apellido: 'Rodriguez',
    profesion: 'Programador Web',
    email: 'danrodriguez@example.com',
    fechaNacimiento: '12/4/1995',
    direccion: '256 Cherry St',
    ciudad: 'Denver, Colorado',
    telefono: '(472) 917-0337',
    imagen: 'https://randomuser.me/api/portraits/men/68.jpg', 

};


// Funcion que hace aparecer la informacion de la portada inicial en el DOM

function iniciar() {
    ocultarExperiencia();
    ocultarInformacion();
    ocultarHabilidades();
    ocultarFormulario();
    ocultarMensajeExitoso();

    let portada = document.getElementById('portada')
    let tituloPortada = document.getElementById('tituloPortada');
    let imagenPortada = document.getElementById('imagenPortada');
    let textoPortada = document.getElementById('textoPortada')

    portada.classList.remove('visually-hidden')

    document.getElementById('linkExperiencia').classList.remove('active');
    document.getElementById('linkInformacion').classList.remove('active');
    document.getElementById('linkHabilidades').classList.remove('active');

    tituloPortada.innerText = datosPersonales.nombre + ' ' + datosPersonales.apellido;
    imagenPortada.src = datosPersonales.imagen;
    textoPortada.innerText = datosPersonales.profesion

    let nombreError = document.getElementById('nombreError');
    nombreError.classList.add('visually-hidden')
    let emailError = document.getElementById('emailError');
    emailError.classList.add('visually-hidden');
    let mensajeError = document.getElementById('mensajeError');
    mensajeError.classList.add('visually-hidden');
}


// Funciones que hacen aparecer o desaparecer la informacion correspondiente a cada seccion cuando el usuario haga click
//Ocultar
function ocultarPortada(){
    let portada = document.getElementById('portada');

    portada.classList.add('visually-hidden');
}

function ocultarInformacion(){
    let informacion = document.getElementById('contenedorInformacionPersonal');

    informacion.classList.add('visually-hidden');
}

function ocultarExperiencia(){
    let experiencia = document.getElementById('contenedorExperiencia');

    experiencia.classList.add('visually-hidden');
}

function ocultarHabilidades(){
    let habilidades = document.getElementById('contenedorHabilidades');

    habilidades.classList.add('visually-hidden');
}

function ocultarFormulario(){
    let formulario = document.getElementById('formularioContacto');

    formulario.classList.add('visually-hidden');
}

function ocultarMensajeExitoso() {
    let mensajeExitoso = document.getElementById('mensajeExitoso');

    mensajeExitoso.classList.add('visually-hidden');   
}

//Mostrar
function mostrarExperiencia(){
    ocultarPortada();
    ocultarHabilidades();
    ocultarInformacion();
    ocultarFormulario()

    document.getElementById('linkExperiencia').classList.add('active');
    document.getElementById('linkInformacion').classList.remove('active');
    document.getElementById('linkHabilidades').classList.remove('active');

    let contenedorExperiencias = document.getElementById('contenedorExperiencia');
    contenedorExperiencias.classList.remove('visually-hidden')
}

function mostrarHabilidades(){
    ocultarPortada();
    ocultarExperiencia();
    ocultarInformacion();
    ocultarFormulario()

    document.getElementById('linkHabilidades').classList.add('active');
    document.getElementById('linkInformacion').classList.remove('active');
    document.getElementById('linkExperiencia').classList.remove('active');

    let contenedorHabilidades = document.getElementById('contenedorHabilidades');
    contenedorHabilidades.classList.remove('visually-hidden')
}

function mostrarInformacion(){
    ocultarPortada();
    ocultarExperiencia();
    ocultarHabilidades();
    ocultarFormulario()

    document.getElementById('linkInformacion').classList.add('active');
    document.getElementById('linkHabilidades').classList.remove('active');
    document.getElementById('linkExperiencia').classList.remove('active');

    let contenedorInformacion = document.getElementById('contenedorInformacionPersonal');
    contenedorInformacion.classList.remove('visually-hidden');

    let imagenPersona = document.getElementById('imagenInformacion');
    let nombrePersona = document.getElementById('nombrePersona');
    let profesionPersona = document.getElementById('profesionPersona');
    let emailPersona = document.getElementById('emailPersona');
    let fechaPersona = document.getElementById('fechaPersona');
    let direccionPersona = document.getElementById('direccionPersona');
    let telefonoPersona = document.getElementById('telefonoPersona');



    imagenPersona.src = datosPersonales.imagen;
    nombrePersona.innerText = datosPersonales.nombre + " " + datosPersonales.apellido;
    profesionPersona.innerText = datosPersonales.profesion;
    emailPersona.innerText = datosPersonales.email;
    fechaPersona.innerText = datosPersonales.fechaNacimiento;
    direccionPersona.innerText = datosPersonales.direccion + ', ' + datosPersonales.ciudad;
    telefonoPersona.innerText = datosPersonales.telefono;

}

function mostrarFormularioContacto(){
    ocultarPortada();
    ocultarInformacion();
    ocultarHabilidades();
    ocultarExperiencia();

    let formulario = document.getElementById('formularioContacto');
    formulario.classList.remove('visually-hidden');

    let nombreFormulario = document.getElementById('nombreFormularioContacto');
    let emailFormulario = document.getElementById('emailFormularioContacto');
    let mensajeFormulario = document.getElementById('mensajeFormularioContacto');

    nombreFormulario.value = '';
    emailFormulario.value = '';
    mensajeFormulario.value = '';
}

function mostrarMensajeExitoso() {
    let mensajeExitoso = document.getElementById('mensajeExitoso');

    mensajeExitoso.classList.remove('visually-hidden');
}

// Acciones botones
let botonConocer = document.getElementById('botonConocer');
botonConocer.onclick = mostrarInformacion;

let botonContacto = document.getElementById('botonContacto');
botonContacto.onclick = mostrarFormularioContacto

let botonEnviarFormulario = document.getElementById('botonFormularioContacto');
botonEnviarFormulario.onclick = enviarFormulario //agregar funcion que limpie los inputs, oculte el formulario y vuelva a la pagina de inicio
//Opcional, alerta de "mensaje enviado"

// Enviar formulario

function enviarFormulario(){
    //let nombreFormulario = document.getElementById('nombreFormularioContacto');
    //let emailFormulario = document.getElementById('emailFormularioContacto');
    //let mensajeFormulario = document.getElementById('mensajeFormularioContacto');
    //let formulario = document.getElementById('formularioContacto');
    
    validarFormulario();

    if(validarFormulario() == true){
        ocultarFormulario();
        mostrarMensajeExitoso();
         
        setTimeout(() => {
            iniciar();
        }, 5000);
    }
}

// Validar formulario
function validarFormulario(){
    let nombreFormulario = document.getElementById('nombreFormularioContacto').value;
    let emailFormulario = document.getElementById('emailFormularioContacto').value;
    let mensajeFormulario = document.getElementById('mensajeFormularioContacto').value;

    let nombreRGEX = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/;
    let emailRGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    let resultadoNombre = nombreRGEX.test(nombreFormulario);
    var resultadoEmail = emailRGEX.test(emailFormulario);
    
    if(resultadoNombre == false && resultadoEmail == false && mensajeFormulario == ''){
      let nombreError = document.getElementById('nombreError');
      nombreError.classList.remove('visually-hidden')
      let emailError = document.getElementById('emailError');
      emailError.classList.remove('visually-hidden');
      let mensajeError = document.getElementById('mensajeError');
      mensajeError.classList.remove('visually-hidden');
      
      return false;
    } else if (resultadoNombre == true && resultadoEmail == false && mensajeFormulario == ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.add('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.remove('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.remove('visually-hidden');
        
        return false;
    } else if(resultadoNombre == false && resultadoEmail == true && mensajeFormulario == ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.remove('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.add('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.remove('visually-hidden');

        return false;
    } else if(resultadoNombre == true && resultadoEmail == false && mensajeFormulario !== ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.add('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.remove('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.add('visually-hidden'); 
    
        return false;
    } else if(resultadoNombre == true && resultadoEmail == true && mensajeFormulario == ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.add('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.add('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.remove('visually-hidden');
    
        return false;
    } else if(resultadoNombre == false && resultadoEmail == false && mensajeFormulario !== ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.remove('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.remove('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.add('visually-hidden');
    
        return false;
    } else if(resultadoNombre == false && resultadoEmail == true && mensajeFormulario !== ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.remove('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.add('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.add('visually-hidden');
        return false;
    } else if(resultadoNombre == true && resultadoEmail == true && mensajeFormulario !== ''){
        let nombreError = document.getElementById('nombreError');
        nombreError.classList.add('visually-hidden')
        let emailError = document.getElementById('emailError');
        emailError.classList.add('visually-hidden');
        let mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.add('visually-hidden');
    }

    return true;
  }

//Iniciar el sitio
iniciar();