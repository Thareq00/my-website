/* SLIDE KIRI */

let slideIndex1 = 0;
showSlidesLeft();

function showSlidesLeft(){

  let slides =
  document.getElementsByClassName("slide");

  for(let i = 0; i < slides.length; i++){

    slides[i].style.display = "none";
  }

  slideIndex1++;

  if(slideIndex1 > slides.length){

    slideIndex1 = 1;
  }

  slides[slideIndex1 - 1]
  .style.display = "block";

  setTimeout(showSlidesLeft, 3000);
}

/* SLIDE KANAN */

let slideIndex2 = 0;
showSlidesRight();

function showSlidesRight(){

  let slides =
  document.getElementsByClassName("slide2");

  for(let i = 0; i < slides.length; i++){

    slides[i].style.display = "none";
  }

  slideIndex2++;

  if(slideIndex2 > slides.length){

    slideIndex2 = 1;
  }

  slides[slideIndex2 - 1]
  .style.display = "block";

  setTimeout(showSlidesRight, 3000);
}