
//Confirmacion de contraseña
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    document.getElementById("alert-danger").classList.remove("show"); 
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show"); 
}

// Espacio de comprobacion de que los input no esten vacios
const registrarBtn = document.querySelector('#regBtn');

registrarBtn.addEventListener('click', () => { 
    const nombreInput = document.querySelector('#nombre').value.trim();
    const apellidoInput = document.querySelector('#apellido').value.trim();
    const mailInput = document.querySelector('#email').value.trim();
    const terminosCheckbox = document.querySelector('#terminos'); 
    let confirmPassword1 = password1.value;
    let confirmPassword2 = password2.value;


    if((nombreInput.length === 0) || 
    (apellidoInput.length === 0) || 
    (mailInput.length === 0) || 
    (!terminosCheckbox.checked) ||
    (confirmPassword1 !== confirmPassword2)) { 
        showAlertError();
    } else {
        showAlertSuccess(); 
    }
});