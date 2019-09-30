//Opdracht 1
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
function randomLap() {
    
    return lapRounds[Math.floor(Math.random()*lapRounds.length)]
}

console.log(randomLap());

//Opdracht 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

 allMyRecords.forEach(function(value, index, array) {
    newArray = array[index];
    newArray.forEach(function(value, index) {
        console.log(value);
    });
 });

// Opdracht 3
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}
console.log(filteredLapRoundsWithForLoop());

const filteredArray = lapRounds.filter(function(value, index) {
    return value < 4
});

console.log(filteredArray);
// De .filter functie werkt beter, omdat het korter en overzichtelijker is opgeschreven