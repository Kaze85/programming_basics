//assignement 1

function addAverage() {
    const tableItems = document.getElementsByTagName("td");
    let total = 0;
    for (let i = 1; i < tableItems.length; i+=2) {
        let grade = Number(tableItems[i].innerText);
        total += grade;
        console.log(x);
    }

    console.log(total/4);
    const table = document.getElementById("table")
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdGrade = document.createElement("td");
    tdName.innerText = "Gemiddelde";
    tdGrade.innerText = (total/4).toFixed(1);

    console.log(tr);
    tr.append(tdName);
    tr.append(tdGrade);
    console.log(tr);
    table.append(tr);
}

// addAverage();

//assignement 2
const course = document.getElementsByTagName("li");

function changeBackgroundEven(i) {
    console.log(course);

    console.log(course[i]);
    if ((i+1) % 2 === 0) {
        course[i].classList.add("red");
    }
}

for (let i = 0; i < course.length; i++) {
    changeBackgroundEven(i);
}

//assignement 3
function createImageElement(imageSrcName) {
    let img = document.createElement("img");
    img.setAttribute("src", imageSrcName);
    console.log(img);
    body.append(img);
} 

createImageElement("./assets/huiswerk/image.jpg");