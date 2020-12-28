let accordions;
const wrapper = document.querySelector('.accordion-wrapper')

const contentData = [{
    id: 1,
    title: 'title 1',
    content: 'content 1'
  },
  {
    id: 2,
    title: 'title 2',
    content: 'content 2'
  },
  {
    id: 3,
    title: 'title 3',
    content: 'content 3'
  },
  {
    id: 4,
    title: 'title 4',
    content: 'content 4'
  },
  {
    id: 5,
    title: 'title 5',
    content: 'content 5'
  }
]
const createTemplate = item => {
  return `
    <div class="accordion-item">
      <div class="accordion-item-title">${item.title}</div>
      <div class="accordion-item-content">${item.content}</div>
    </div>
  `
}
const fillHtmlList = () => {
  contentData.forEach(item => {
    wrapper.innerHTML += createTemplate(item);
  })
  accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList()

if (accordions) {
  for (item of accordions) {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for (el of accordions) {
          el.classList.remove('active');
        }
        this.classList.add('active');
      }
    })
  }
}