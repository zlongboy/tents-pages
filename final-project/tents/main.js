//Get all carousel slides
const carouselSlides = document.querySelectorAll(".carousel__slide");
carouselSlides.forEach(function(carouselSlide, index) {
    carouselSlide.style.transform = `translateX(${index*100}%)`
})

//next button
const nextSlide = document.querySelector(".carousel__btn--next")
let currentSlide = 0

nextSlide.addEventListener('click', function() {
    if (currentSlide === carouselSlides.length-1) {
        currentSlide = 0;
    }
    else currentSlide++;
    console.log(currentSlide);
    carouselSlides.forEach(function(carouselSlide, index) {
        carouselSlide.style.transform = `translateX(${100*(index - currentSlide)}%)`
        carouselSlide.style.transition = 'all 1000ms'
    });
})

//prev button
const prevSlide = document.querySelector(".carousel__btn--prev")

prevSlide.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide = carouselSlides.length - 1;
    }
    else currentSlide--;
    console.log(currentSlide);
    carouselSlides.forEach(function(carouselSlide, index) {
        carouselSlide.style.transform = `translateX(${100*(index - currentSlide)}%)`
        carouselSlide.style.transition = 'all 1000ms'
    });
})