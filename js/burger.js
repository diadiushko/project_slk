document.querySelector('.burger_menu').addEventListener('click', function (e) {
  
  if (this.classList.contains('active')) {
    document.querySelector('.hamb_nav').classList.remove('nav_active');
  } else {
    document.querySelector('.hamb_nav').classList.add('nav_active');
  }
  this.classList.toggle('active');
})