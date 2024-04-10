document.addEventListener('DOMContentLoaded', function() {
    const editUserForm = document.querySelector('form[action^="/users/update"]');

    if (editUserForm) {
        const firstNameInput = document.getElementById('first_name');
        const lastNameInput = document.getElementById('last_name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const avatarInput = document.getElementById('imagen');

        function validateFirstName() {
            const firstNameValue = firstNameInput.value.trim();
            if (firstNameValue.length < 2) {
                displayErrorMessage(firstNameInput, 'El nombre debe tener al menos 2 caracteres');
                return false;
            } else {
                clearErrorMessages(firstNameInput);
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
            if (!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateAvatar()) {
                event.preventDefault();
                alert('Debes corregir los campos con errores antes de enviar el formulario.');
            }
        }

        firstNameInput.addEventListener('blur', validateFirstName);
        lastNameInput.addEventListener('blur', validateLastName);
        emailInput.addEventListener('blur', validateEmail);
        passwordInput.addEventListener('blur', validatePassword);
        avatarInput.addEventListener('change', validateAvatar);

        editUserForm.addEventListener('submit', handleFormSubmit);
    }
});

function displayErrorMessage(inputElement, errorMessage) {
    let errorElement = inputElement.parentElement.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        inputElement.parentElement.appendChild(errorElement);
    }
    
    errorElement.textContent = errorMessage;
}

function clearErrorMessages(inputElement) {
    let errorElement = inputElement.parentElement.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
};
