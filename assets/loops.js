///While loops

//Opdracht 1
let x = 1;

while (x <= 10) {
    console.log(x);
    x++;
    
}

//Opdracht 2
let y = 0;

let message = " Het is maandag !";

while (y <= message.length) {
    console.log(message.charAt(y));
    y++;
    
}

//Opdracht 3
let word = "Geweldig";
let wordTurn = "";
let wordLength = word.length-1;

while (wordLength >= 0) {
    wordTurn += word.charAt(wordLength);
    console.log(wordTurn);
    wordLength--;
}

//Opdracht 4
let palindrome = "test";
let palTurn = "";
let length = palindrome.length;

while (length >= 0) {
    palTurn += palindrome.charAt(length);
    console.log(palTurn);
    length--;
    
}
if (palTurn == palindrome) {
    console.log("palindrome = true");
} else {
    console.log("palindrome = false");
}

///For loops
//Opdracht 1
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//Opdracht 2
for (i = 0; i <= message.length; i++) {
    console.log(message.charAt(i));
}

//Opdracht 3
for (let i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        console.log(i + " is deelbaar door 3");
    } else {
        console.log(i + " is niet deelbaar door 3")
    }
}