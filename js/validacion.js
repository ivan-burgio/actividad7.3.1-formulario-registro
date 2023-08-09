function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validarCheckbox() {
    var checkbox = document.getElementsByClassName("form-check-input");
    var estaMarcado = checkbox.checked;
}

// Espacio de comprobacion de que los input no esten vacios
function comprobarInputs() {
}
const registrarBtn = document.querySelector('#regBtn');

registrarBtn.addEventListener('click', () => {
    const nombreInput = document.querySelector('#nombre').value.trim();
    const apellidoInput = document.querySelector('#apellido').value.trim();
    const mailInput = document.querySelector('#email').value.trim();

    if((nombreInput.lenght === 0) || (apellidoInput.lenght === 0) || (mailInput.lenght === 0)) {
        showAlertError();
    }
});