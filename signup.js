const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default submission for now

    // 1. Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 2. Basic Validation (you would add more robust validation)
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // 3. In a real application, send data to your server for account creation
    console.log('Form data:', username, email, password); 
});
