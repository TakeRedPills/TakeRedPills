function checkEmail () {

    if (! document.querySelector('#email').value || ! document.querySelector('#password').value) {
        document.querySelector('.alert_register').innerHTML = `Please enter email and password above`;

    } else if (document.querySelector('#password').value === document.querySelector('#password_repeat').value) {
        window.location = 'welcome.html';
    } else {
        document.querySelector('.alert_register').innerHTML = `Passwords not match`;  
    }
}