import { carousel } from "./carousel.js";
import { mobileNav } from "./nav.js";
import { getProducts, displayProducts, productsClient, sortTrending } from "./products.js" 

//MAIN NAV
mobileNav()

//MAIN CAROUSEL
carousel()

//TRENDING PRODUCTS
getProducts(productsClient.path).then(function(allProducts) {
    displayProducts(sortTrending(allProducts))
});