const signUp = document.querySelector('.signup_button')
const signUpBack = document.querySelector('.wrapper')

signUp.addEventListener('click', function () {
    signUpBack.classList.add('active');
    document.body.style.overflow = 'hidden';
})
signUpBack.addEventListener('click', e => {
     e.target.classList.remove('active')
     document.body.style.overflow = 'visible'
});