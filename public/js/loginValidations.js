document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-section form');

    if (loginForm) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        function validateEmail() {
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                displayErrorMessage(emailInput, 'El email no es válido');
                return false;
            } else {
                clearErrorMessages(emailInput);
            }
            return true;
        }

        function validatePassword() {
            const passwordValue = passwordInput.value.trim();
            if (passwordValue === '') {
                displayErrorMessage(passwordInput, 'La contraseña es obligatoria');
                return false;
            } else {
                clearErrorMessages(passwordInput);
            }
            return true;
        }

        function handleFormSubmit(event) {
            if (!validateEmail() || !validatePassword()) {
                event.preventDefault();
                alert('Debes corregir los campos con errores antes de enviar el formulario.');
            }
        }

        emailInput.addEventListener('blur', validateEmail);
        passwordInput.addEventListener('blur', validatePassword);

        loginForm.addEventListener('submit', handleFormSubmit);
    }
});

function displayErrorMessage(inputElement, errorMessage) {
    let errorElement = inputElement.nextElementSibling;
    
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    
    errorElement.textContent = errorMessage;
}

function clearErrorMessages(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
}
