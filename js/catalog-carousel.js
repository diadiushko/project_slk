const filterContainer = document.querySelector('.filter_container')
const leftArrow = document.querySelector('.catalog_title :first-child');
const rightArrow = document.querySelector('.catalog_title button:last-child');

const titles = [{
    name: 'Consumables',
    filters: [
        'buffs',
        'kibble',
        'custom'
    ]
}, {
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
}]

function filterFill(array) {
    array.forEach(() => {
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
    mainPos = document.querySelector('.filter_container> :nth-child(2)');
    lastPos = document.querySelector('.filter_container> :nth-child(3)');
    endPos = document.querySelector('.filter_container> :last-child');
    firstPos.style.display = 'flex';
    mainPos.style.display = 'flex';
    lastPos.style.display = 'flex';
    firstPos.style.left = '-600px';
    mainPos.style.left = '0';
    lastPos.style.left = '600px';
}

draw();

let step = 1;

function left() {
    rightArrow.removeEventListener('click', left)
    mainPos.style.left = '-600px';
    lastPos.style.left = '0';

    setTimeout(() => {
        filterContainer.innerHTML += `<div class="filter">${firstPos.innerHTML}</div>`;
        filters = document.querySelectorAll('.filter');
        filters[0].remove();
        filters[filters.length - 1].style.display = 'none';
        draw();
        rightArrow.addEventListener('click', left);
    }, 800)
    console.log(step)
    step++;
    let title = () => {
        if (step === filters.length - 1) {
            step = 0;
            return titles[step].name;
        } else return titles[step].name
    }
    document.querySelector('.catalog_title>span').innerHTML = title();
}

function right() {
    leftArrow.removeEventListener('click', right)
    firstPos.style.left = '0'
    mainPos.style.left = '600px';
    lastPos.style.display = 'none';
    lastPos.style.left = '0';

    setTimeout(() => {
        filterContainer.innerHTML = `<div class="filter">${endPos.innerHTML}</div>` + filterContainer.innerHTML;
        filters = document.querySelectorAll('.filter');
        filters[filters.length - 1].remove();
        filters[0].style.display = 'none';
        draw();
        leftArrow.addEventListener('click', right);
    }, 800)
    console.log(step)
    
    let title = () => {
        if (step === 0) {
            step = titles.length - 1;
            return titles[titles.length - 1].name;
        } else return titles[--step].name;

    }
    document.querySelector('.catalog_title>span').innerHTML = title();
}

rightArrow.addEventListener('click', left)
leftArrow.addEventListener('click', right)