//assignement 1
window.addEventListener("load", init);

function init() {
    button = document.getElementById("click");
    console.log(button);
    button.addEventListener("click", clicked);
}

let test;
function clicked(event) {
    event.preventDefault();
    const count = document.getElementById("number");
    console.log(count);
    console.log(event);
    count.innerText++
    if (count.innerText == 10) {
        button.className = "smaller-button";
        console.log(test);
    } else if (count.innerText == 20) {
        button.className = "smallest-button";
    }
}

