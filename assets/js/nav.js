const centralBoxes = document.getElementsByClassName("column");

function riseMenu() {
  document.getElementById("homeNavBar").classList.remove("closed");
  document.getElementById("homeNavBar").classList.add("open");
  document.getElementById("siteContent").classList.add("adjusted");
}

function closeMenu() {
  document.getElementById("homeNavBar").classList.remove("open");
  document.getElementById("homeNavBar").classList.add("closed");
  document.getElementById("siteContent").classList.remove("adjusted");
}