//Products
(function() {
    var allProducts;
    const productsURL = '/products.json'

    async function getProducts(path) {
        const response = await fetch(path, {
            method:'GET'
        })
        const raw = await response.json()
        console.log(raw)
    }

    getProducts(productsURL)
        .catch(error => {
            console.log(error)
        });
})();
//Sort

//Display
