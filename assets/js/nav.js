const centralBoxes = document.getElementsByClassName("column");
 
function riseMenu() {
  document.getElementById("homeNavBar").classList.remove("closed");
  document.getElementById("homeNavBar").classList.add("open");
  document.getElementById("siteContent").classList.add("adjusted");
  document.getElementById("header").classList.add("adjusted");
}
 
function closeMenu() {
  document.getElementById("homeNavBar").classList.remove("open");
  document.getElementById("homeNavBar").classList.add("closed");
  document.getElementById("siteContent").classList.remove("adjusted");
  document.getElementById("header").classList.remove("adjusted");
}

/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}