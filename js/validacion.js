function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    document.getElementById("alert-danger").classList.remove("show"); 
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show"); 

}

// Espacio de comprobaciones
const registrarBtn = document.querySelector('#regBtn');

registrarBtn.addEventListener('click', () => {
    // Verificar que los campos o esten vacios
    const nombreInput = document.querySelector('#nombre').value.trim();
    const apellidoInput = document.querySelector('#apellido').value.trim();
    const mailInput = document.querySelector('#email').value.trim();

    // Checkbox
    const terminosCheckbox = document.querySelector('#terminos');
    
    // Confirmacion de contraseña
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let confirmPassword1 = password1.value;
    let confirmPassword2 = password2.value;


    if((nombreInput.length === 0) || 
    (apellidoInput.length === 0) || 
    (mailInput.length === 0) || 
    (!terminosCheckbox.checked) ||
    (confirmPassword1 !== confirmPassword2) || 
    (confirmPassword1.length < 6) ||
    (confirmPassword2.length < 6)) { 
        showAlertError();
    } else {
        showAlertSuccess(); 
    }
});