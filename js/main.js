

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');


const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
   
}

hamburger.addEventListener('click', handleClick);


// animations

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})

tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})



// carousel glider from opinions section

new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
      
    }
  });

//   window.addEventListener('load', function(){
//     new Glider(document.querySelector('.glider'), {
//         slidesToShow: 10
//     })
//   })


// glide

// import Glide from '@glidejs/glide';

// new Glide('.glide').mount();

// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// new Glide('.glide').mount({ Controls, Breakpoints });

// glide end