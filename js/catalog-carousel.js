const filterContainer = document.querySelector('.filter_container')
const leftArrow = document.querySelector('.catalog_title :first-child');
const rightArrow = document.querySelector('.catalog_title button:last-child');

const titles = [{
    name: 'Dinosaurs',
    filters: [
        'flyers',
        'soakers',
        'DPS',
        'water'
    ]
}, {
    name: 'Gear',
    filters: [
        'armor',
        'guns',
        'ammo'
    ]
}, {
    name: 'Structures',
    filters: [
        'buildings',
        'crafting',
        'defense'
    ]
}, {
    name: 'Special',
    filters: [
        'build',
        'raid',
        'protect'
    ]
}, {
    name: 'Bosses',
    filters: [
        'alpha',
        'beta',
        'gamma'
    ]
}, {
    name: 'Consumables',
    filters: [
        'buffs',
        'kibble',
        'custom'
    ]
}]

function filterFill(array) {
    array.forEach(element => {
        filterContainer.innerHTML += '<div class="filter"></div>';
    });

    filters = document.querySelectorAll('.filter');
    for (let i = 0; i < filters.length; i++) {
        for (let j = 0; j < titles[i].filters.length; j++) {
            filters[i].innerHTML += `<button>${titles[i].filters[j]}</button>`
        }
    }
    filters.forEach(e => {
        e.style.display = 'none';
    });
};

filterFill(titles);

function draw() {
    firstPos = document.querySelector('.filter_container :first-child');
    secondPos = document.querySelector('.filter_container> :nth-child(2)');
    firstPos.style.display = 'flex';
    secondPos.style.display = 'flex';
    firstPos.style.left = '0';
    secondPos.style.left = '600px';
}

draw();

step = 0;

function left() {
    rightArrow.removeEventListener('click', left)
    firstPos.style.left = '-600px';
    secondPos.style.left = '0';
    setTimeout(() => {
        filterContainer.innerHTML += `<div class="filter">${firstPos.innerHTML}</div>`;
        filters = document.querySelectorAll('.filter');
        filters[0].remove();
        filters[filters.length - 1].style.display = 'none';
        draw();
        rightArrow.addEventListener('click', left)
    }, 800)
    step++;

    let title = () => {
        if (step === filters.length - 1) {
            step = 0;
            return titles[0].name;
        } else return titles[step].name
    }
    document.querySelector('.catalog_title>span').innerHTML = title();
}

rightArrow.addEventListener('click', left)