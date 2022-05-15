const myProjectsBtn = document.getElementById("projects-btn");

myProjectsBtn.onclick = function(){
   window.location.href = "https://gevorgalaverdyan.github.io/";
}

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index)=>{
   slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
   track.style.transform = "translateX(-" + targetSlide.style.left + ")";
   currentSlide.classList.remove("current-slide");
   targetSlide.classList.add("current-slide");
}

rightBtn.addEventListener("click", e => {
   const currentSlide = track.querySelector('.current-slide');   
   const nextSlide = currentSlide.nextElementSibling;

   moveToSlide(track, currentSlide, nextSlide);
});
// console.log(slideSize);



leftBtn.addEventListener("click", e => {
   const currentSlide = track.querySelector(".current-slide");
   const prevSlide = currentSlide.previousElementSibling;

   moveToSlide(track, currentSlide, prevSlide);
});


dotsNav.addEventListener();