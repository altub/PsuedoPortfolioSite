//const navBurger = document.querySelector('.burger');
const navBurger = document.querySelector('.burg');
const nav = document.querySelector('.main-nav');
const navItems = document.querySelectorAll('.nav-item a');
const burger = document.querySelectorAll(`[class^='burger']`);

navBurger.addEventListener('click', () => {
    nav.classList.toggle('toggle-nav');
    navItems.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`;
        }
    });

    burger.forEach((burg) => {
        burg.classList.toggle('open');
    });
});

var modal = document.querySelector('.imgModal');
var images = document.querySelectorAll('.galleryImg');
var modalImg = document.querySelector('#modalImg');
var captionText = document.querySelector('#caption');

images.forEach(img => {
    img.addEventListener('click', () =>{
        modal.style.display = "block";
        modalImg.src  = img.src;
        captionText.innerHTML = img.alt;
    });
});

var span = document.querySelector('.close');

span.addEventListener('click', () => {
    modal.style.display = 'none';
});