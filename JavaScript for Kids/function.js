// Создание и вызов функции

let myFirstFunction = function() {
   console.log("Hello world!");
}
myFirstFunction();

let sumNumber = function(a, b) {
   console.log(a + b);
}
sumNumber(18, 489);

let testFunction = function(test) {
   return test * 5;
}
testFunction(87);
console.log(testFunction(87));

//Практика по функциям

//Переписать, используя функцию

/* let spanishTeams = ["Real", "Barselona", "Atletico", "Valensia"];
let germanyTeams = ["Bayer", "Verder", "Boryssia", "Shalke"];
let englishTeams = ["Chelsey", "Manchester City", "Arsenal", "Manchester United"];
let hollandTeams = ["Ajaks", "PSV", "Feynord", "Alkmaar"];
let randomSpanishTeam = spanishTeams[Math.floor(Math.random() * spanishTeams.length)];
let randomEnglishTeam = englishTeams[Math.floor(Math.random() * englishTeams.length)];
let randomGermanyTeam = germanyTeams[Math.floor(Math.random() * germanyTeams.length)];
let randomHollandTeam = hollandTeams[Math.floor(Math.random() * hollandTeams.length)];
let resultGrup = [randomSpanishTeam, randomEnglishTeam, randomGermanyTeam, randomHollandTeam].join(",");
console.log(resultGrup); */

/*  let randomElementArray = function(elementsArray) {
   return elementsArray[Math.floor(Math.random() * elementsArray.length)];
};
let spanishTeams = ["Real", "Barselona", "Atletico", "Valensia"];
let germanyTeams = ["Bayer", "Verder", "Boryssia", "Shalke"];
let englishTeams = ["Chelsey", "Manchester City", "Arsenal", "Manchester United"];
let hollandTeams = ["Ajaks", "PSV", "Feynord", "Alkmaar"];
let resultGroup = [randomElementArray(spanishTeams), randomElementArray(germanyTeams), randomElementArray(englishTeams),randomElementArray(hollandTeams)].join(",");
console.log(resultGroup); */
 
let randomFootballGroup = function() {
let randomElementArray = function(elementsArray) {
   return elementsArray[Math.floor(Math.random() * elementsArray.length)];
};
let spanishTeams = ["Real", "Barselona", "Atletico", "Valensia"];
let germanyTeams = ["Bayer", "Verder", "Boryssia", "Shalke"];
let englishTeams = ["Chelsey", "Manchester City", "Arsenal", "Manchester United"];
let hollandTeams = ["Ajaks", "PSV", "Feynord", "Alkmaar"];
let resultGroup = [randomElementArray(spanishTeams), randomElementArray(germanyTeams), randomElementArray(englishTeams),randomElementArray(hollandTeams)].join(",");
return resultGroup;
}
console.log(randomFootballGroup());

//return вместо if...else

let medalForScore = function (score) {
   if(score < 3) {
      return "Bronze";
   }
   if(score < 7) {
      return "Silver";
   }
   return "Gold";
};
console.log(medalForScore(6));