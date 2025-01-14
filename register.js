
function togglePassword(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Form validation and submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Basic validation
    if (password !== confirmPassword) {
        showError('Passwords do not match!');
        return;
    }
    
    if (password.length < 8) {
        showError('Password must be at least 8 characters long!');
        return;
    }
    
    if (!terms) {
        showError('Please accept the Terms & Conditions!');
        return;
    }
    
    console.log('Registration attempt:', { fullname, email, password, terms });
    showSuccess('Registration successful!');
   
    this.reset();
});


function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger mt-3 slide-in';
    errorDiv.textContent = message;
    
    const form = document.getElementById('registerForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Success message display function
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-3 slide-in';
    successDiv.textContent = message;
    
    const form = document.getElementById('registerForm');
    form.insertBefore(successDiv, form.firstChild);
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Add animation class to form elements on page load
document.addEventListener('DOMContentLoaded', function() {
    const formElements = document.querySelectorAll('.slide-in');
    formElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});