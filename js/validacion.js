function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    document.getElementById("alert-danger").classList.remove("show"); 
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show"); 
}

function validarCheckbox() {
    var checkbox = document.getElementsByClassName("form-check-input");
    var estaMarcado = checkbox.checked;
}

// Espacio de comprobacion de que los input no esten vacios
const registrarBtn = document.querySelector('#regBtn');

registrarBtn.addEventListener('click', () => { 
    const nombreInput = document.querySelector('#nombre').value.trim();
    const apellidoInput = document.querySelector('#apellido').value.trim();
    const mailInput = document.querySelector('#email').value.trim();
    const terminosCheckbox = document.querySelector('#terminos'); 

    if((nombreInput.length === 0) || 
    (apellidoInput.length === 0) || 
    (mailInput.length === 0) || 
    (!terminosCheckbox.checked)) { 
        showAlertError();
    } else {
        showAlertSuccess(); 
    }
});