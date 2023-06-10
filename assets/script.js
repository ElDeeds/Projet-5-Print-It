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
const arrows = document.querySelectorAll('.arrow');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

updateDots();

for (const arrow of arrows) {
  arrow.addEventListener("click", (e) => {
    const clickedArrow = e.target
    const selectedSide = clickedArrow.dataset.side
    navigateSlide(selectedSide);
    updateDots();
  })
}

function navigateSlide(slideDirection) {
  if (slideDirection === "left") {
    currentIndex--;
  } else {
    currentIndex++;
  }

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const currentSlide = slides[currentIndex];
  bannerImg.src = `./assets/images/slideshow/` + currentSlide.image;
  bannerImg.alt = "Slide " + (currentIndex + 1);
  bannerText.innerHTML = currentSlide.tagLine;
}

function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    if (i === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  }
}
