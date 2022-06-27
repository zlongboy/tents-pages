
//***** PRODUCTS *****//
const productsClient = {
    path: './products.json'
}

const getProducts = async function(path) { 
    try {
        const response = await fetch(path);
        const json = await response.json();
        let allProducts = [];
        const { products } = json;
        allProducts = products;
        return allProducts;
    } catch (error) {
        return console.log(error);
    }
};


//***** SORT *****//
//products page sort
//input: raw products
//listen for input changes (add listeners for every filter): filter based on inputs, if not return default sorting 
        //use some(array.property) method
//Should I re-request API on every change or just manipulate the inital array pulled in the getAll request
//output: filteredProducts

//homepage sort

//sort by rating (secondary sort?)
//slice off first three and run display on new array


//***** DISPLAY *****//
let titleInner = function(obj) {
    return `<b>${obj.brand} </b>${obj.name}`
}

let imgInner = function(obj) {
    return `<img src="${obj.image}">`
}

let summaryInner = function(obj) {
    return `<div class="product-summary__price"><b>$ </b>${obj.price}</div>
            <div class="product-summary__capacity"><b>CAPACITY</b><div>${obj.capacity}-person</div></div>
            <div class="product-summary__rating"><b>REVIEW</b><div class="review-stars">${obj.score} stars</div></div>
            <a href="${obj.url}"class="product-card__btn"><span>SHOP NOW</span></a>`
}

function displayElement(name, type, parent, inner, ...classes) {
    // classes = classes || 0;
    name = document.createElement(type);
    // if (classes !== 0) {
    //     name.classList.add(classes)
    // }
    //HOW TO: Make parameters optional?
    name.classList.add(classes);
    name.innerHTML = inner;
    parent.appendChild(name);
}

function displayTotal(arr) {
    const container = document.querySelector('.results-showing');
    const total = arr.length;
    displayElement('totalResults', 'span', container, `showing: ${total} results`, 'GET-RID-OF-THIS'); 
}

function displayProducts(filteredProducts) {
    const container = document.querySelector('.product-card__container')
    filteredProducts.forEach(product => {
        const fragment = document.createDocumentFragment();
    
        const card = document.createElement('div')
        card.classList.add('product-card');
        displayElement('imgContainer', 'div', card, imgInner(product), 'product-img__container')
        displayElement('title', 'div', card, titleInner(product), 'product-title')
        displayElement('summary', 'div', card, summaryInner(product), 'product-summary__container')
        if (product.featured) {
            displayElement('featured', 'div', card, '<span>Top-rated</span>', 'product-featured')
        }
        
        fragment.appendChild(card);
        container.appendChild(fragment)
    });
}

//***** MOBILE FILTERS *****//
function mobileFilter() {
    const filtersOpen = document.querySelector('.filters__header');
    const checklist = document.querySelector('.checklist__container');

    filtersOpen.addEventListener('click', function() {
        checklist.classList.toggle('hide');
    });
};

//***** PUBLIC ******//
export { getProducts, displayProducts, productsClient, displayTotal, mobileFilter }; 
