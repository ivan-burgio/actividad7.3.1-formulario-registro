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