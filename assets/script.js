const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

arrowRight.addEventListener('click', function() {
  console.log("clic fleche droite"),
  navigateSlide(1);
});
arrowLeft.addEventListener('click', function() {
  console.log("clic fleche gauche"),
  navigateSlide(-1);
});


function navigateSlide(slideDirection,) {
  currentIndex += slideDirection;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const currentSlide = slides[currentIndex];
  bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;
  bannerImg.alt = "Slide " + (currentIndex + 1);
  bannerText.innerHTML = currentSlide.tagLine;

  dots.forEach(function(dot, index) {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
      console.log(index),
      console.log(currentIndex)
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}