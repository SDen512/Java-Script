let someName = "Денис";
if (someName === "Денис") {
   console.log("Привет, " + someName + "!");
} else if(someName === "Светлана") {
   console.log("Привет, мама!");
} else if (someName === "Павел") {
   console.log("Привет, папа!")
}
else {
   console.log("Привет, незнакомец!");
}


//Цикл while

let sheepCounted = 0;

while(sheepCounted < 10) {
   console.log("Посчитано овец: " + sheepCounted);
   sheepCounted++;
}
console.log("Выполнено");


let numFirst = 0;
let numSecond = 0;
let result;
while(numFirst <= 5 && numSecond <=5) {
   console.log(result = numFirst * numSecond);
   numFirst++;
   numSecond++;
}
console.log("End");