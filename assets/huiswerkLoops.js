let x = 1;

while (x <= 10) {
    if (x % 4 == 0) {
        console.log(x + " is deelbaar door 4");
    } else {
        console.log(x + " is niet deelbaar door 4");
    }
    x++
}

let y = 1;
let z = 0;
let i = 0;

while (i <= 10) {
    number = y + z;
    y = z;
    z = number;
    console.log(number);
    i++;
}

console.log("");

let array = [2, 4, 8, 9, 12, 13];
let number2 = 0;

for (i = 0; i < array.length; i++) {
    number = array[i] + number2;
    console.log(number);
    number2 = number;
}

