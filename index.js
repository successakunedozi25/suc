  const track = document.querySelector('.track');
  const slides = document.querySelectorAll('.slide');

  let index = 0;

  function autoSlide() {
    index++;

    if (index >= slides.length) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(autoSlide, 3000);
