// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    dodger.style.left = `${getDodgerHPos() - 1}px`;
}

function moveDodgerRight() {
    dodger.style.left = `${getDodgerHPos() + 1}px`;
}

function getDodgerHPos() {
    const dodgerL = dodger.style.left.replace("px", "");
    return parseInt(dodgerL, 10);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft")
        moveDodgerLeft();
    else if (event.key === "ArrowRight")
        moveDodgerRight();
});