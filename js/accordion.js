const accordions = document.querySelectorAll('.faq_block')


for (const block of accordions) {
    block.addEventListener('click', function () {
        if (block.classList.contains('active')) {
            block.classList.remove('active');
        } else {
            for (const el of accordions) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })  
}