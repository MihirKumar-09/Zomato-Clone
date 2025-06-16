let gallery = document.querySelector("#gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

backBtn.style.display = "none";
// Add event listener ; // Now add some features ;
nextBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += 300;
  // Now add some features ;
  backBtn.style.display = "block";
});
backBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";

  gallery.scrollLeft -= 300;
});

// Filter show when click on filter button
let filter = document.querySelector(".filters div");
let darkBackground2 = document.querySelector(".dark-bg");
let filterOptions = document.querySelector(".filter-options");
let filterExit = document.querySelector(".filter-options-head i");
filter.addEventListener("click", () => {
  filterOptions.style.display = "block";
  darkBackground.style.display = "block ";
  document.body.style.overflow = "hidden";
});
filterExit.addEventListener("click", () => {
  filterOptions.style.display = "none";
  darkBackground.style.display = "none";
  document.body.style.overflow = "visible";
});
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  filterOptions.style.display = "none";
  darkBackground.style.display = "none";
  document.body.style.overflow = "visible";
});
let apply = document.querySelector("#apply");
apply.addEventListener("click", () => {
  filterOptions.style.display = "none";
  darkBackground.style.display = "none";
  document.body.style.overflow = "visible";
});

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
one.addEventListener("click", () => {
  one.style.backgroundColor = "white";
  two.style.backgroundColor = "#f8f8f8";
  three.style.backgroundColor = "#f8f8f8";
  four.style.backgroundColor = "#f8f8f8";
  five.style.backgroundColor = "#f8f8f8";
  one.style.borderLeft = "4px solid #e74d3cd2";
  two.style.borderLeft = "none";
  three.style.borderLeft = "none";
  four.style.borderLeft = "none";
  five.style.borderLeft = "none";
});
two.addEventListener("click", () => {
  one.style.backgroundColor = "#f8f8f8";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "#f8f8f8";
  four.style.backgroundColor = "#f8f8f8";
  five.style.backgroundColor = "#f8f8f8";
  two.style.borderLeft = "4px solid #e74d3cd2";
  one.style.borderLeft = "none";
  three.style.borderLeft = "none";
  four.style.borderLeft = "none";
  five.style.borderLeft = "none";
});
three.addEventListener("click", () => {
  one.style.backgroundColor = "#f8f8f8";
  two.style.backgroundColor = "#f8f8f8";
  three.style.backgroundColor = "white";
  four.style.backgroundColor = "#f8f8f8";
  five.style.backgroundColor = "#f8f8f8";
  three.style.borderLeft = "4px solid #e74d3cd2";
  two.style.borderLeft = "none";
  one.style.borderLeft = "none";
  four.style.borderLeft = "none";
  five.style.borderLeft = "none";
});
four.addEventListener("click", () => {
  one.style.backgroundColor = "#f8f8f8";
  two.style.backgroundColor = "#f8f8f8";
  three.style.backgroundColor = "#f8f8f8";
  four.style.backgroundColor = "white";
  five.style.backgroundColor = "#f8f8f8";
  four.style.borderLeft = "4px solid #e74d3cd2";
  two.style.borderLeft = "none";
  three.style.borderLeft = "none";
  one.style.borderLeft = "none";
  five.style.borderLeft = "none";
});
five.addEventListener("click", () => {
  one.style.backgroundColor = "#f8f8f8";
  two.style.backgroundColor = "#f8f8f8";
  three.style.backgroundColor = "#f8f8f8";
  four.style.backgroundColor = "#f8f8f8";
  five.style.backgroundColor = "white";
  five.style.borderLeft = "4px solid #e74d3cd2";
  two.style.borderLeft = "none";
  three.style.borderLeft = "none";
  four.style.borderLeft = "none";
  one.style.borderLeft = "none";
});
let darkBackgroundSecond = document.querySelector(".dark-bg");
