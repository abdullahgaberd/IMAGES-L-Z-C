/* Start navbar */
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
const closeBtn = document.querySelector('.closeBtn');
const searchBox = document.querySelector('.searchBox');
const navigation = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menuToggle');
const nav = document.querySelector('nav');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    nav.classList.remove('open');
}

search.onclick = function(){
    search.classList.add('active');
}

closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');

}

menuToggle.onclick = function(){
    nav.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
/* End navbar */
const carouselrow = document.querySelector('.carousel-inner');
const carouselslides = document.getElementsByClassName('carousel-item');

let index = 1;
var width;
var top;

function slidewidth(){
    width = carouselslides[1].clientWidth;
}
slidewidth();
window.addEventListener('resize', slidewidth);
carouselrow.style.transform = 'translateX('+ (- width * index) + 'px)';
