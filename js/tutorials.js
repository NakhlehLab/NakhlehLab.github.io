// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

/**
 * Handles the opening and closing of the detail elements for /html/tutorials.html.
 * Sets the height of the div that contains the embedded html tutorial page
 * @param  {Number} id the id number of the detail element. actual id is "tut" + id
 * @param  {Number} num2 the height, in pixels
 * @return nothing.      
 */
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 

/**
 * Handles the opening and closing of the detail elements for /html/tutorials.html.
 * Sets the height of the div that contains the embedded html tutorial page
 * 
 * Designed to be called onclick for a detail element.
 * 
 * @param  {Number} id the id number of the detail element. actual id is "tut" + id
 * @param  {Number} num2 the height, in pixels
 * @return nothing.      
 */
function setHeight(id, newheight){

  //Add string version of id to "tut" to get the actual id
  var details = document.getElementById("tut" + id.toString());
  

  if(!details.hasAttribute("open")){
    //details is not currently open on the click (but is about to be)
    //so set the height
    details.style.height = newheight.toString() + "px";

    //also set the height of the intern div to be that height minus the
    //height of the summary bar to avoid overflow
    var div = document.getElementById("TUT" + id.toString());
    var properHeight = newheight - document.getElementById("sum"+ id.toString()).style.height;
    div.style.height = properHeight.toString() + "px";
  }
  else{
    //details is currently open and the user just clicked the details to close it
    var div = document.getElementById("TUT" + id.toString());
    //hide the div 
    div.style.height = "0px";
  }
}