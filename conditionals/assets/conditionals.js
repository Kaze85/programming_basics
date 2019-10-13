let currentAction = "";

/// if calculating
// optellen - aftrekken - delen - vermenigvuldigen
if (currentAction == "calculating") {
    let y = 10;
    let x = 5;
    console.log("optellen: ", x + y);
    console.log("aftrekken: ", x - y);
    console.log("delen: ", x / y);
    console.log("vermenigvuldigen: ", x * y);

    /// if strings
    // uppercase - length - match - substring - charat
} else if (currentAction == "strings") {
    let word = "test";
    console.log(word.toUpperCase());
    console.log(word.length);
    console.log(word.match("t"));
    console.log(word.substring(1, 3));
    console.log(word.charAt(3));

    /// if boolean
    // check of cijfer hoog genoeg is
} else if (currentAction == "boolean") {
    const x = 7;
    if (x >= 6) {
        console.log("cijfer is hoog genoeg");
    } else {
        console.log("cijfer is te laag");
    }
    /// default
    // currentAction kan niet worden uitgevoerd
} else {
    console.log("currentAction kan niet worden uitgevoerd");
}

/// Oefening 2
var weight = 100;
var height = 1.95;
var bmi = (weight / (height * height));
bmi.toFixed(2);

console.log("bmi: ", bmi)
if (bmi < 18.5) {
    console.log("ondergewicht");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normaal gewicht");
} else if (bmi >= 25 && bmi < 30) {
    console.log("Overgewicht");
} else if (bmi >= 30) {
    console.log("Obesitas");
} else {
    console.error("");
}