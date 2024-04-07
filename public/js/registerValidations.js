document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form');

    if (registerForm) {
        const nameInput = document.getElementById('nombre');
        const lastNameInput = document.getElementById('apellido');
        const emailInput = document.getElementById('correo');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('passwordRepetir');
        const avatarInput = document.getElementById('imagen');

        function validateName() {
            const nameValue = nameInput.value.trim();
            if (nameValue.length < 2) {
                displayErrorMessage(nameInput, 'El nombre debe tener al menos 2 caracteres');
                return false;
            } else {
                clearErrorMessages(nameInput);
            }
            return true;
        }

        function validateLastName() {
            const lastNameValue = lastNameInput.value.trim();
            if (lastNameValue.length < 2) {
                displayErrorMessage(lastNameInput, 'El apellido debe tener al menos 2 caracteres');
                return false;
            } else {
                clearErrorMessages(lastNameInput);
            }
            return true;
        }

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
            const passwordValue = passwordInput.value;
            if (passwordValue.length < 8) {
                displayErrorMessage(passwordInput, 'La contraseña debe tener al menos 8 caracteres');
                return false;
            } else {
                clearErrorMessages(passwordInput);
            }
            return true;
        }

        function validateConfirmPassword() {
            const passwordValue = passwordInput.value;
            const confirmPasswordValue = confirmPasswordInput.value;
            if (passwordValue !== confirmPasswordValue) {
                displayErrorMessage(confirmPasswordInput, 'Las contraseñas no coinciden');
                return false;
            } else {
                clearErrorMessages(confirmPasswordInput);
            }
            return true;
        }

        function validateAvatar() {
            const file = avatarInput.files[0];
            if (!file) {
                displayErrorMessage(avatarInput, 'Debe seleccionar una imagen');
                return false;
            } else {
                clearErrorMessages(avatarInput);
            }
            return true;
        }

        function handleFormSubmit(event) {
            if (!validateName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !validateAvatar()) {
                event.preventDefault();
                alert('Debes corregir los campos con errores antes de enviar el formulario.');
            }
        }

        nameInput.addEventListener('blur', validateName);
        lastNameInput.addEventListener('blur', validateLastName);
        emailInput.addEventListener('blur', validateEmail);
        passwordInput.addEventListener('blur', validatePassword);
        confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
        avatarInput.addEventListener('change', validateAvatar);

        registerForm.addEventListener('submit', handleFormSubmit);
    }
});

function displayErrorMessage(inputElement, errorMessage) {
    // Busca el elemento del mensaje de error asociado al campo de entrada
    let errorElement = inputElement.parentElement.querySelector('.error-message');
    
    // Crea un elemento de mensaje de error si no existe
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        inputElement.parentElement.appendChild(errorElement);
    }
    
    // Establece el texto del mensaje de error
    errorElement.textContent = errorMessage;
}

function clearErrorMessages(inputElement) {
    // Busca el elemento del mensaje de error asociado al campo de entrada
    let errorElement = inputElement.parentElement.querySelector('.error-message');
    
    // Si existe un elemento de mensaje de error se elimina
    if (errorElement) {
        errorElement.remove();
    }
};