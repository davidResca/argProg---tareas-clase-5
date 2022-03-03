const $botonSubmit = document.querySelector('#submit');

$botonSubmit.onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const nombre2Usuario = document.querySelector('#nombre2-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    
    document.querySelector('#tituloSaludo').innerText = `Hola ${nombreUsuario} te doy la Bienvenida!!`;
    document.querySelector('#texto-datos-usuario').innerText = `Tu nombre es ${nombreUsuario} ${nombre2Usuario} ${apellidoUsuario} y tenés ${edadUsuario} años`;
    
    return false;
}