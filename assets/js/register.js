function validateForm() {
    // Clear any existing error messages
    clearErrors();

    // Get the form field values
    var name = document.getElementById("Nome").value;
    var nickname = document.getElementById("Apelido").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    var subscription = document.getElementsByName("subscricao");
    var selected = false;

    // Check if all required fields are filled in
    if (name == "") {
        document.getElementById("NomeError").classList.remove("d-none");
    }
    if (nickname == "") {
        document.getElementById("ApelidoError").classList.remove("d-none");
    }
    if (email == "") {
        document.getElementById("EmailError").classList.remove("d-none");
    }
    if (password == "") {
        document.getElementById("PasswordError").classList.remove("d-none");
    }
    if (confirmPassword == "") {
        document.getElementById("ConfirmPasswordError").classList.remove("d-none");
    }

    // Check if passwords match
    if (password != confirmPassword) {
        document.getElementById("ConfirmPasswordError").classList.remove("d-none");
    }

    // Check if a subscription plan is selected
    for (var i = 0; i < subscription.length; i++) {
        if (subscription[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        document.getElementById("SubscriptionError").classList.remove("d-none");
    }

    // Return false if any errors were found, otherwise true
    return (document.getElementsByClassName("text-danger").length == 0);
}

// Function to clear any existing error messages
function clearErrors() {
    var errors = document.getElementsByClassName("text-danger");
    for (var i = 0; i < errors.length; i++) {
        errors[i].classList.add("d-none");
    }
}

document.getElementById("register").onsubmit = function () {
    if (validateForm()) {
        // Form is valid, so proceed with submission
        window.location = "login.html";
    }
    // Prevent the form from being submitted if the validation fails
    return false;
};


function metodo() {
    var dadosCartao = document.getElementById("dados1");
    if ($("#register input[type='radio']:checked").val() == 1) {
        dadosCartao.classList.add("d-block");
        dadosCartao.classList.remove("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    } else {
        dadosCartao.classList.remove("d-block");
        dadosCartao.classList.add("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    }

    var dadosMbway = document.getElementById("dados2");
    if ($("#register input[type='radio']:checked").val() == 2) {
        dadosMbway.classList.add("d-block");
        dadosMbway.classList.remove("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    } else {
        dadosMbway.classList.remove("d-block");
        dadosMbway.classList.add("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    }
}

$('.file-upload').file_upload();
