//Voorbeeld function
function doNotShoutMyName(myName, word) {
    let message = `Saying ${word} ${myName}.`;
    return message;
}

let messageOutsideFunction = doNotShoutMyName("name", "word");
console.log(messageOutsideFunction);

//Oefening 1
function giveMeSomeNiceName(gender) {
    let myNewName = "";
    if (gender == "male") {
        myNewName = "Boy";
    } else if (gender  == "female") {
        myNewName = "Girl";
    } else {
        myNewName = "Other"
    }

    return console.log(myNewName);
}

//Oefening 2
giveMeSomeNiceName("male");

function pig(numberOfPigs) {
    let pigs = "";
    for (i = 1; i <= numberOfPigs; i++) {
        pigs += "\u{1F437}";
    }
    return console.log(`${pigs}`)
}

pig(5);

//Oefening 3
function factorial(num) {
    let x = 1;
    for (i = 1; i <= num; i++) {
        x *= i;
    }
    return console.log(x);
}

factorial(5);

//Oefening 4