document.querySelector('.burger_menu').addEventListener('click', function(e) {
  e.preventDefault();
  // this.classList.toggle('active');
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    document.querySelector('.hamb_nav').classList.remove('nav_active');
  } else {
    this.classList.add('active');
    document.querySelector('.hamb_nav').classList.add('nav_active');
  }
})
