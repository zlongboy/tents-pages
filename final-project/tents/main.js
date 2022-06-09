//Carousel
(function() {
    //Get all slides
    const carouselSlides = document.querySelectorAll(".carousel__slide");
    carouselSlides.forEach(function(carouselSlide, index) {
        carouselSlide.style.transform = `translateX(${index*100}%)`
    })

    //next slide
    const nextSlide = document.querySelector(".carousel__btn--next");
    let currentSlide = 0;

    nextSlide.addEventListener('click', function() {
        if (currentSlide === carouselSlides.length-1) {
            currentSlide = 0;
        }
        else currentSlide++;
        carouselSlides.forEach(function(carouselSlide, index) {
            carouselSlide.style.transform = `translateX(${100*(index - currentSlide)}%)`;
            carouselSlide.style.transition = 'all 1000ms';
        });
    })

    //prev slide
    const prevSlide = document.querySelector(".carousel__btn--prev");
    prevSlide.addEventListener('click', function() {
        if (currentSlide === 0) {
            currentSlide = carouselSlides.length - 1;
        }
        else currentSlide--;
        carouselSlides.forEach(function(carouselSlide, index) {
            carouselSlide.style.transform = `translateX(${100*(index - currentSlide)}%)`;
            carouselSlide.style.transition = 'all 1000ms';
            //TODO: flash of blank/white if prevSlide is first click
        });
    });
})();

//Nav
(function() {
    const hamburgerNav = document.querySelector('.nav__hamburger');
    const navLinks = document.querySelector('.nav__links');

    hamburgerNav.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
})();