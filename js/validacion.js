let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function checkPasswords() {

    let confirmPassword1 = password1.value;
    let confirmPassword2 = password2.value;

  if (confirmPassword1 === confirmPassword2) {
    showAlertSuccess()
  } else {
    showAlertError()
  }
};

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}