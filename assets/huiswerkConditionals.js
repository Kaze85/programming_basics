// opdracht 1
const grade = 7;
if (grade < 6){
    console.log("Onvoldoende");
} else if (grade >= 6 && grade <= 7) {
    console.log("Voldoende");
} else if (grade > 7 && grade <= 9) {
    console.log("Goed");
} else if (grade > 9) {
    console.log("Uitmuntend");
}

// opdracht 2
switch(grade) {
    case 0:
        console.log("Onvoldoende");
    break;

    case 1:
        console.log("Onvoldoende");
    break;

    case 2:
        console.log("Onvoldoende");
    break;

    case 3:
        console.log("Onvoldoende");
    break;

    case 4:
        console.log("Onvoldoende");
    break;

    case 5:
        console.log("Onvoldoende");
    break;

    case 6:
        console.log("Voldoende");
    break;

    case 7:
        console.log("Voldoende");
    break;

    case 8:
        console.log("Goed");
    break;

    case 9:
        console.log("Goed");
    break;

    case 10:
        console.log("Uitmuntend");
    break;
}

//opdracht 3
let purchasedBook = true;
let job = "teacher";
let inTrain = true;

if (purchasedBook == true && inTrain == true && job == "teacher") {
    console.log("Finally i can enjoy my book!");
} else {
    console.log("Oh well...");
}