document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.querySelector('.register-section form');

    if (productForm) {
        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');
        const imageInput = document.getElementById('image');
        const priceInput = document.getElementById('price');

        function validateName() {
            const nameValue = nameInput.value.trim();
            if (nameValue.length < 5) {
                displayErrorMessage(nameInput, 'El nombre debe tener al menos 5 caracteres');
                return false;
            } else {
                clearErrorMessages(nameInput);
            }
            return true;
        }

        function validatePrice() {
            const priceValue = priceInput.value.trim();
            if (!priceValue.length) {
                displayErrorMessage(priceInput, 'Debes poner un precio al producto');
                return false;
            } else {
                clearErrorMessages(priceInput);
            }
            return true;
        }

        function validateDescription() {
            const descriptionValue = descriptionInput.value.trim();
            if (descriptionValue.length < 20) {
                displayErrorMessage(descriptionInput, 'La descripción debe tener al menos 20 caracteres');
                return false;
            } else {
                clearErrorMessages(descriptionInput);
            }
            return true;
        }

        function validateImage() {
            const files = imageInput.files;
            if (files.length === 0) {
                displayErrorMessage(imageInput, 'Debes seleccionar al menos una imagen');
                return false;
            } else {
                clearErrorMessages(imageInput);
                for (let i = 0; i < files.length; i++) {
                    const fileName = files[i].name;
                    const fileExtension = fileName.split('.').pop().toLowerCase();
                    if (!['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                        displayErrorMessage(imageInput, 'Las imágenes deben ser archivos JPG, JPEG, PNG o GIF');
                        return false;
                    }
                }
            }
            return true;
        }

        function handleFormSubmit(event) {
            if (!validateName() || !validateDescription() || !validateImage() || !validatePrice() ) {
                event.preventDefault();
                alert('Debes corregir los campos con errores antes de enviar el formulario.');
            }
        }

        nameInput.addEventListener('blur', validateName);
        descriptionInput.addEventListener('blur', validateDescription);
        priceInput.addEventListener('blur', validatePrice);
        imageInput.addEventListener('change', validateImage);

        productForm.addEventListener('submit', handleFormSubmit);
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
