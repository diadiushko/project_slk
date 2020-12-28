const catalog = document.querySelector('.catalog');

const contentData = [{
        name: "griffin",
        price: 15,
        image: "img/shop/griffin.svg",
        category: ["dinosaur", "flyer"]
    },
    {
        name: "ptera",
        price: 5,
        image: "img/shop/ptera.svg",
        category: ["dinosaur", "flyer"]
    },
    {
        name: "argy",
        price: 6,
        image: "img/shop/argy.svg",
        category: ["dinosaur", "flyer"]
    },
    {
        name: "quetzal",
        price: 20,
        image: "img/shop/quetzal.svg",
        category: ["dinosaur", "flyer"]
    },
    {
        name: "tapejara",
        price: 6,
        image: "img/shop/tapejara.svg",
        category: ["dinosaur", "flyer"]
    },
    {
        name: "light wyvern",
        price: 15,
        image: "img/shop/light_wyvern.svg",
        category: ["dinosaur", "flyer"]
    }
]

const createCatalogItem = item => {
    return `      
        <div class="catalog_item">
            <img src=${item.image} alt=${item.name}>
            <div class="item_title">
                <p>${item.name} - <span>${item.price}$</span></p>
                <button><img src="img/shop/plus.svg" alt="add"></button>
            </div>
        </div>`
}

const fillCatalog = () => {
    contentData.forEach(item => {
        catalog.innerHTML += createCatalogItem(item);
    })

}

