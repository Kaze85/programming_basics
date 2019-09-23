let ageOfChild = 12; //age of a child

// critical variables
let numberOfPlayers = null; //number of players on the pitch during a match
let sizeOfPitch = null; // size of the pitch they use during a match
let teamName = null; // name of the team

/*   
    Indeling van voetballers
    (jo6 betekent jongeren onder 6 jaar etc)
    JO6 en JO7 - minipupillen spelen op 4 tegen 4 op een kwart veld
    JO8 - eerstejaars f-pupillen spelen 7 tegen 7 op een half veld
    J09 - tweedejaas f-pupillen spelen 7 tegen 7 op een half veld
    JO10 - eerstejaars e-pupillen spelen 7 tegen 7 op een half veld
    J011 - tweedejaars e-pupillen spelen 7 tegen 7 op een half veld
    J012 - eerstejaars d-pupillen spelen 7 tegen 7 op een half veld
    J013 / MO113 - tweedejaars d-pupillen spelen 11 tegen 11 op een heel veld
*/

// please insert a working and optimal if else structure. Try to avoid redundancy
// in the if else structure you have to give values to the critical variables, so the message will
// give the wright answer

if (ageOfChild <= 6) {
    sizeOfPitch = "quarter";
    numberOfPlayers = 4;
    teamName = "minipupillen";
} else if (ageOfChild < 12) {
    sizeOfPitch = "half";
    numberOfPlayers = 7;
    
    if (ageOfChild < 9) {
        teamName = "f-pupillen";
    } else {
        teamName = "e-pupillen";
    }
} else if (ageOfChild <= 13) {
    sizeOfPitch = "full"
    numberOfPlayers = 11;
    teamName = "d-pupillen"
}



// message you want to write in the console. 
let message = `Your kid is in ${teamName}, this team consist of ${numberOfPlayers} players and play on a ${sizeOfPitch} pitch size`;
console.log(message);