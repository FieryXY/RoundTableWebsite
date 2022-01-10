const left = document.getElementById("left_car_btn");

const right = document.getElementById("right_car_btn");

var currentInd = 0;

const mediaChildren = Array.from(document.getElementById("car_container").children);

function updateInd() {
    for(let i = 0; i < mediaChildren.length; i++) {
        if(i == currentInd) {
            mediaChildren[i].style.display = "inline";
        }
        else {
            mediaChildren[i].style.display = "none";
        }
    }
}

left.onclick = () => {
    if(currentInd > 0) currentInd--;
    updateInd();
};

right.onclick = () => {
    if(currentInd+1 < mediaChildren.length) currentInd++;
    updateInd();
};