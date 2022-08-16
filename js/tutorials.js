let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


function setHeight(id, newheight){
  var details = document.getElementById("tut" + id.toString());
  console.log(details);
  if(!details.hasAttribute("open")){
    console.log("HAS OPEN");
    details.style.height = newheight.toString + "px";

    var div = document.getElementById("TUT" + id.toString());
    var properHeight = newheight - document.getElementById("sum"+ id.toString()).style.height;
    div.style.height = properHeight.toString() + "px";
  }
  else{
    var div = document.getElementById("TUT" + id.toString());
    div.style.height = "0px";
  }
}