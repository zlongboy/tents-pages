import { carousel } from "./carousel.js";
import { mobileNav } from "./nav.js";
import { getProducts, displayProducts, productsClient } from "./products.js" 

//MAIN NAV
mobileNav()

//MAIN CAROUSEL
carousel()

//TRENDING PRODUCTS
getProducts(productsClient.path).then(function(allProducts) {
    //TODO, FINAL: displayProducts(sortProducts(allProducts))
    displayProducts(allProducts);
});

//TODO filter to only top 3 highest rated, run display products. Import functions from products.js
