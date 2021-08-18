var slideIndex = 1

var myTimer

var slideshowContainer

window.addEventListener("load", function () {
  showSlides(slideIndex)
  myTimer = setInterval(function () {
    plusSlides(1)
  }, 3000)

  slideshowContainer = document.getElementsByClassName("slider")[0]
})

function plusSlides(n) {
  clearInterval(myTimer)
  if (n < 0) {
    showSlides((slideIndex -= 1))
  } else {
    showSlides((slideIndex += 1))
  }
}

function currentSlide(n) {
  clearInterval(myTimer)
  myTimer = setInterval(function () {
    plusSlides(n + 1)
  }, 4000)
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.querySelectorAll("img")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slides[slideIndex - 1].style.display = "block"
}
