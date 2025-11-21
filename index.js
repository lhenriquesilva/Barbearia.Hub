const slider = document.querySelectorAll('.slider');
let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

// Inicia o slider automaticamente a cada 3 segundos
setInterval(nextSlider, 3000);

// Mostra a primeira imagem ao carregar
showSlider();
