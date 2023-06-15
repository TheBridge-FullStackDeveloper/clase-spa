const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const homeDiv = document.getElementById("home");
const aboutDiv = document.getElementById("about");
const contactNav = document.getElementById("contactNav");
const contactDiv = document.getElementById("contact");

function hideViews() {
  homeDiv.classList.add("hide");
  contactDiv.classList.add("hide");
  aboutDiv.classList.add("hide");
}

function goAbout() {
  hideViews();
  aboutDiv.classList.remove("hide");
}

function goHome() {
  hideViews();
  homeDiv.classList.remove("hide");
}

function goContact() {
  hideViews();
  contactDiv.classList.remove("hide");
}

aboutNav.addEventListener("click", goAbout);
homeNav.addEventListener("click", goHome);
contactNav.addEventListener("click", goContact);
