const signUp = document.querySelector('.signup_button');
const signUpBack = document.querySelector('.signUp_wrapper');

signUp.addEventListener('click', function () {
    signUpBack.classList.add('active');
    document.body.style.overflow = 'hidden';
})
signUpBack.addEventListener('click', e => {
    console.log(e)
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        document.body.style.overflow = 'visible'
    }
});