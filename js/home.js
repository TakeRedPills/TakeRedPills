let width = Math.min (window.screen.availWidth, 750);
let fontsize = (750/width) * 16;
document.documentElement.style.fontSize = fontsize + "px";


function homePassword () {
    const password = '5222';
    const inputPassword = document.querySelector ('.password_home_input').value;
    if (inputPassword === password) {
        window.location = 'register.html';
    } else {
        errorMessage();
        document.querySelector ('.password_home_input').value = '';
    }
}


function errorMessage() {

    const number = Math.random();

    if (number>=0 && number < 1/4) {
        document.querySelector ('.alert_home').innerHTML = `WrongPassword`;
    } else if (number>=1/4 && number < 2/4) {
        document.querySelector ('.alert_home').innerHTML = 'TryAgain';
    } else if (number>=2/4 && number < 3/4) {
        document.querySelector ('.alert_home').innerHTML = 'Incorrect';
    } else {
        document.querySelector ('.alert_home').innerHTML = 'BeneathSomewhere';
    }

}













