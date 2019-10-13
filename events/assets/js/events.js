window.addEventListener("load", init);

function init() {
    const submitButton = document.getElementById("button");
    submitButton.addEventListener("click", clickFormHandler);
    const img = document.getElementById("images");
    img.addEventListener("click", imageClick);
    
    
}

function clickEventHandler(event) {
    event.preventDefault();
    console.log(event);
}

function imageClick(event) {
    console.log(event.target.id);
}

function clickFormHandler(event) {
    event.preventDefault();
    const inputValue = document.getElementById("textInput").value;
    console.log(inputValue);
    const ulList = document.getElementById("results");
    const li = document.createElement("li");
    li.innerText = inputValue;
    ulList.append(li);
}