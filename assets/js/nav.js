const centralBoxes = document.getElementsByClassName("column");
 
function riseMenu() {
  document.getElementById("homeNavBar").classList.remove("closedNav");
  document.getElementById("homeNavBar").classList.add("openNav");
  document.getElementById("siteContent").classList.add("adjusted");
  document.getElementById("header").classList.add("adjusted");
}
 
function closeMenu() {
  document.getElementById("homeNavBar").classList.remove("openNav");
  document.getElementById("homeNavBar").classList.add("closedNav");
  document.getElementById("siteContent").classList.remove("adjusted");
  document.getElementById("header").classList.remove("adjusted");
}