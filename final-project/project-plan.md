# Final Project: eCommerce website

Specs: https://docs.google.com/document/d/1LqOqwEIVB4oL-_E-UBdmB7liLRd0bRRMLeuTPPD5gwQ/edit

# Pages
- # Home page
    - Nav bar:
        - Left: Logo
        - Right: "shop tents", "contact us", "cart icon" (clickable but not functional), search bar expands nav down? ("search") search example: https://www.digitalcommerce360.com/internet-retailer/ --> search takes to shop page (pass search term through query params)
    - 1) Hero image carousel (3 images rotating) --> CTA to shop now
        - 'LIVE FOR ADVENTURE' 
        - Need subhead: short and snappy
    - 2) Featured products (Maybe 1:2 layout -- highlight top product) --> CTA to product page /shop
    - 3) About us
        - As seen in(?) or reviews(static)(?)
    - 4) Contact Us --> CTA to contact page
- # All Products/Search page
    - Featured products on land, side by side with flag treatment (same 3 from home page) --> remove once search/filters applied?
    - Search bar
        'OR'
    - Filters (price, size) see Rollie Nation: https://www.semrush.com/blog/11-great-examples-ecommerce-navigation-improve-sales/
     - 'no filters applied' --> 'showing x results'
- # Product page
    - Standard product tile
        -  data
            - images [1, 2]
            - name
            - subhead/category
            - description
            - price
            - size
            - star rating
                - number of reviews
        - accordions with longer text --> shipping and returns/warranty- can be static?
        - user can interact: 
            - quantity
            - Buy now button (de-emphasized)
            - Add to cart button (highlighted)
    - Similar products --> get 2-3 products from API with same size value
- # Contact page
    - form
        - Name
        - Email
        - Phone
        - Preferred Contact Method (radio button, phone/email)
        - How did you hear about us? (checkboxes: conference, TV, radio, Word of Mouth, other)
        - User comments 
    - validation: all required except comments
    - Clear after submit


