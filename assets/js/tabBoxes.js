function weeklyButton() {
    document.getElementById("weeklyMeetingStructure").classList.remove("hiddenStructure");
    document.getElementById("monthlyMeetingStructure").classList.add("hiddenStructure");
    document.getElementById("weeklyButton").classList.add("selected");
    document.getElementById("monthlyButton").classList.remove("selected");
}

function monthlyButton() {
    document.getElementById("weeklyMeetingStructure").classList.add("hiddenStructure");
    document.getElementById("monthlyMeetingStructure").classList.remove("hiddenStructure");
    document.getElementById("weeklyButton").classList.remove("selected");
    document.getElementById("monthlyButton").classList.add("selected");
}

function setupRepButtons() {
    let rootElement = document.getElementById("repButtons");
    fetch("./assets/resources/reps.json")
    .then(response => response.json())
    .then(data => {
        for(let rep in data) {
            if(data.hasOwnProperty(rep)) {
                let newBtn = document.createElement("SPAN");
                newBtn.classList.add("flexButton");
                newBtn.classList.add("repButton");
                newBtn.innerHTML = rep;
                newBtn.onclick = function(){repClick(newBtn, data[rep].description, data[rep].image)};
                rootElement.appendChild(newBtn);
            }
        }
    });
}

function repClick(clicked, description, image) {
    let repButtons = document.getElementsByClassName("repButton");
    for(btn of repButtons) {
        btn.classList.remove("selected");
    }
    clicked.classList.add("selected");

    //Update Information
    document.getElementById("repContent").style.display = "block";
    document.getElementById("rep_description").innerHTML = description;
    if(image != null) document.getElementById("rep_img").src = image;
    else document.getElementById("rep_img").src = "assets/resources/square_placeholder.jpg";
}

window.addEventListener("load", setupRepButtons);