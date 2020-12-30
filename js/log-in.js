const logIn = document.querySelector('.login_button')
const logInBack = document.querySelector('.wrapper')

logIn.addEventListener('click', function () {
    logInBack.classList.add('active');
    document.body.style.overflow = 'hidden';
})
logInBack.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        document.body.style.overflow = 'visible'
    }
});