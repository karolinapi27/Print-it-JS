
let currentIndex = 0;

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
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


// Ajout des Event Listeners //

arrowLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  setUrl(currentIndex);
  updateDots();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;  
  setUrl(currentIndex);
  updateDots();
});

// Fonction pour mettre à jour le contenu // 
const setUrl = (index) => {
  const { image, tagLine } = slides[index];
  document.getElementById("carousel-img").src = `./assets/images/slideshow/${image}`;
  document.getElementById("tagline").innerHTML = tagLine;
};

const dotsContainer = document.querySelector(".dots");
const dots = []; 

// Ajout des points de navigation
slides.forEach((_, index) => {  
  const dot = document.createElement("div");
  dot.className = "dot";
  dotsContainer.appendChild(dot);
  dots.push(dot); 
});

// Fonction pour mettre à jour l'état des points 

function updateDots() {
  for (const dot of dots) {
    dot.classList.toggle("dot_selected", dot === dots[currentIndex]);
  }
}   