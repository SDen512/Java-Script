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

//Упражнения

let add = function(numberOne, numberTwo) {
   return numberOne + numberTwo;
};
let multiply = function(numberThree, numberFour) {
   return numberThree * numberFour;
};

let resultExpression = add(multiply(36325, 9824), 777);
console.log(resultExpression);

//Совпадают ли массивы
/* Напишите функцию areArraysSame, которая принимает два массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни и те же числа в одном и том же порядке), или false, если массивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:

areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false */

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3, 4];
let areArraysSame = function(firstArray, secondArray) {
   if(firstArray.length !== secondArray.length) {
      return false;
   } 
      for(i = 0; i < firstArray.length; i++) {
         if(firstArray[i] !== secondArray[i]) {
            return false;
         } 
      }
   return true;
};
console.log(areArraysSame(firstArray, secondArray));