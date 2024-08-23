const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const verifyForm = document.getElementById('verifyForm');

// Show the initial form (login)
registerForm.classList.add('active');

// Handle form submissions and transitions
const registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click', () => {
    // Validate registration data here
    // ...

   
      registerForm.classList.remove('active');
    loginForm.classList.add('active');
});


const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    // Validate login credentials here
    // ...

    // If login is successful, show the verification form
    loginForm.classList.remove('active');
    verifyForm.classList.add('active');
});


const verifyButton = document.getElementById('verifyButton');
verifyButton.addEventListener('click', () => {
    // Validate verification code here
    // ...

    verifyForm.classList.remove('active');
    alert("You got the AI");
    window.location.href = 'chatbot/index.html';
});

// Add animations and other form interactions as needed
