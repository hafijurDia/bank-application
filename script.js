//login authenticaiton

const login = document.getElementById('login-btn');
login.addEventListener('click', function(){
//user email
const emailField = document.getElementById('email');
const email = emailField.value;

//user password
const passwordField = document.getElementById('password');
const password = passwordField.value;
    if (email === 'hhh@gmail.com' && password === 'secret') {
        window.location = 'dashboard.html';
    }else{
        alert('You are not a valid user');
    }
})
