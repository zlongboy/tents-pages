import { mobileNav } from "./nav.js";
import { getProducts, displayProducts, productsClient, mobileFilter, displayTotal } from "./products.js";

//SHOP NAV
mobileNav();

//SHOP PRODUCTS
getProducts(productsClient.path).then(function(allProducts) {
    //TODO: FINAL displayProducts(sortProducts(allProducts))
    displayProducts(allProducts);
    displayTotal(allProducts);
    mobileFilter();
});


//***** PUBLIC ******//
