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


//Цикл for

let timesToSayHello = 3;
for(let i = 0; i < timesToSayHello; i++) {
   console.log("Привет");
}

//Перебор элементов массива

let animals = ["тигр", "лев", "медведь", "волк"];
for(let i =0; i < animals.length; i++) {
   console.log("В этом зоопарке есть: " + animals[i]);
}

//Перебор символов строки

let myName = "Денис";
for(let i =0; i < myName.length; i++) {
   console.log("В моем имени есть буква: " + myName[i]);
}