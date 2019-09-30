//Opdracht 1
function fibonacci(num) {
    let x = 1;
    let y = 0;
    let z = 0;

    for (i = 0; i <= num; i++) {
        z = x + y;
        x = y;
        y = z;
        console.log(z);
    }
}

fibonacci(10);

console.log("");

//Opdracht 2
function countdown(year) {
    let message = "";
    for (i = 10; i >= 0; i--) {
        if (i === 0) {
            message = console.log(`Happy ${year}`);
        } else {
            message = console.log(i);
        }
    }
    return message;
}

countdown("2019");

console.log("");

//Opdracht 3
hoisting("word");
function hoisting(hoist) {
    console.log (word + hoist + " hoisted");
    let word = "Variable ";
    return word;
}
