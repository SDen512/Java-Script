let test = [1, 2, 3, 4, 5,6,7,8,9,25,46,54,28,30];
let randomTest = test[Math.floor(Math.random() * test.length)];
console.log(randomTest);

// Практика по массивам

let spanishTeams = ["Real", "Barselona", "Atletico", "Valensia"];
let germanyTeams = ["Bayer", "Verder", "Boryssia", "Shalke"];
let englishTeams = ["Chelsey", "Manchester City", "Arsenal", "Manchester United"];
let hollandTeams = ["Ajaks", "PSV", "Feynord", "Alkmaar"];
let randomSpanishTeam = spanishTeams[Math.floor(Math.random() * spanishTeams.length)];
let randomEnglishTeam = englishTeams[Math.floor(Math.random() * englishTeams.length)];
let randomGermanyTeam = germanyTeams[Math.floor(Math.random() * germanyTeams.length)];
let randomHollandTeam = hollandTeams[Math.floor(Math.random() * hollandTeams.length)];
let resultGrup = [randomSpanishTeam, randomEnglishTeam, randomGermanyTeam, randomHollandTeam].join(",");
console.log(resultGrup);
console.log(typeof resultGrup); 


let numberArray = [3,2,1];
let answer = numberArray.join(" больше, чем ");
console.log(answer);