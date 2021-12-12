const centralBoxes = document.getElementsByClassName("column");

function riseMenu() {
  document.getElementById("homeNavBar").style.width = "20%";
  document.getElementById("siteContent").style.marginLeft = "20%";
}

function closeMenu() {
  document.getElementById("homeNavBar").style.width = "0%";
  document.getElementById("siteContent").style.marginLeft = "0%";
}