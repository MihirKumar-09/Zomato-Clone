let login = document.querySelector("#login");
let loginPage = document.querySelector(".login-container");

//   access dark background;
let darkBackground = document.querySelector(".dark-bg");
// Use event listener to click login button and appear login page;
login.addEventListener("click", () => {
  setTimeout(() => {
    loginPage.style.display = "block";
    darkBackground.style.display = "block ";
    document.body.style.overflow = "hidden";
  }, 1000);
});

// Use another event listener to exit the login page;
let exit = document.querySelector(".exit");
exit.addEventListener("click", () => {
  loginPage.style.display = "none";
  darkBackground.style.display = "none";
  document.body.style.overflow = "visible";
});

//! SignUp;
let SignUp = document.querySelector("#signUp");
let signUpPage = document.querySelector(".sign-up");

SignUp.addEventListener("click", () => {
  setTimeout(() => {
    signUpPage.style.display = "block";
    darkBackground.style.display = "block";
    document.body.style.overflow = "hidden";
  }, 1000);
});

// Exist sign up;
let exitSignUp = document.querySelector(".exitSignUp");
exitSignUp.addEventListener("click", () => {
  setTimeout(() => {
    signUpPage.style.display = "none";
    darkBackground.style.display = "none";
    document.body.style.overflow = "visible";
  });
});

// when click login account;
let logIn = document.querySelector("#logIn");
logIn.addEventListener("click", () => {
  setTimeout(() => {
    signUpPage.style.display = "none";
    darkBackground.style.display = "none";
  });
});

logIn.addEventListener("click", () => {
  setTimeout(() => {
    loginPage.style.display = "block";
    darkBackground.style.display = "block ";
  });
});

// when click create account;
let createAccount = document.querySelector("#create");
createAccount.addEventListener("click", () => {
  loginPage.style.display = "none";
  darkBackground.style.display = "none";
});

createAccount.addEventListener("click", () => {
  setTimeout(() => {
    signUpPage.style.display = "block";
    darkBackground.style.display = "block";
  });
});

// country hidden
let hide = document.querySelector(".UAE");
let country = document.querySelector(".co");

// Initially hide the element
hide.style.display = "none";

country.addEventListener("click", () => {
  if (hide.style.display === "none") {
    hide.style.display = "flex"; //Show again
  } else {
    hide.style.display = "none"; //Hide again
  }
});

//! footer country change according to click

let co = document.querySelector(".co img"); //Access the country image for change the image according to click;

let uae = document.querySelector(".uae"); //Access full aue div
let indPara = document.querySelector(".co p");
uae.addEventListener("click", () => {
  co.src = "./Images/UAE.png"; //show UAE images and hide India Image;
  hide.style.display = "none";
  indPara.innerText = "UAE";
});
let ind = document.querySelector(".ind"); //Access full ind div

ind.classList.add("select"); //by default selected;

ind.addEventListener("click", () => {
  co.src = "./Images/india-logo.png"; //Show India image and Hide UAE image;
  UAE.style.display = "none";
  indPara.innerText = "India";
});
// click and redirect in to next page;
uae.addEventListener("click", () => {
  window.location.href = "index2.html";
  uae.classList.add("select");
  ind.classList.remove("select");
});
ind.addEventListener("click", () => {
  window.location.href = "index.html";
});

// change dining to delivery page after click
let diningOut = document.querySelector(".tab-icon1");
let diningOutHead = document.querySelector(".tab-icon1 h3");
let delivery = document.querySelector(".tab-icon2");
let deliveryHead = document.querySelector(".tab-icon2 h3");
let nightLife = document.querySelector(".tab-icon3");
let nightLifeHead = document.querySelector(".tab-icon3 h3");

delivery.addEventListener("click", () => {
  delivery.style.borderBottom = "2.5px solid #e74c3c";
  diningOut.style.borderBottom = "none";
  deliveryHead.style.color = "#e74c3c";
  diningOutHead.style.color = "black";
  nightLife.style.borderBottom = "none";
  nightLifeHead.style.color = "black";

  // Click to redirect page
});
diningOut.addEventListener("click", () => {
  diningOut.style.borderBottom = "2.5px solid #e74c3c";
  delivery.style.borderBottom = "none";
  deliveryHead.style.color = "black";
  diningOutHead.style.color = "#e74c3c";
  nightLife.style.borderBottom = "none";
  nightLifeHead.style.color = "black";

  // Click to change page
});
nightLife.addEventListener("click", () => {
  nightLife.style.borderBottom = "2.5px solid #e74c3c";
  nightLifeHead.style.color = "#e74c3c";
  deliveryHead.style.color = "black";
  diningOutHead.style.color = "black";
  delivery.style.borderBottom = "none";
  diningOut.style.borderBottom = "none";
});
