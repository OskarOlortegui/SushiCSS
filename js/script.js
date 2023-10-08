/* Animations npm i aos */
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation - On Scroll Reveal and fade away
AOS.init({
    duration: 1000,
    offset: 100,
});
/* now on HTML data-aos=" thi animation " */

const glassIcon = document.querySelectorAll('.glass i.bx-search-alt')
const inputSearch = document.querySelectorAll('input.search')
const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('ul.mobile')
const mobileLinks = document.querySelectorAll('ul.mobile li')

// console.log(document.body.textContent)
console.log(document.body.innerText)
//console.log(document.body.innerHTML)

burger.addEventListener("click", ()=>{
    mobileMenu.classList.toggle('active')
})
glassIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        inputSearch.forEach(x => x.classList.toggle('active'))
    })
})

// When I click a link, remove the class
mobileLinks.forEach(li => {
    li.addEventListener("click", ()=>{
        console.log('click')
        mobileMenu.classList.remove('active')
    })
});

//Dekstop window - remove menu to avoid strange behaviours
window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
        mobileMenu.classList.remove('active')
    }
})