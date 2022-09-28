
// Создание объекта.

let car = {
   "color": "black",
   "model": "Reno Grand Espase 4",
   "year": 2003
};
console.log(Object.keys(car));
console.log(car["model"]);
console.log(car.year);

// Добавление свойств и значений объекта.

let mySelf = {};
mySelf["first name"] = "Denis";
mySelf["last name"] = "Subach";
mySelf.age = 40;
console.log(Object.keys(mySelf));

// Массивы объектов. Получение доступа к значениям свойств объектов

let cars = [
   {
      "model": "Toyota Yaris",
      "color": "red",
      "year": 2020
   },
   {
      "model": "Honda Pilot",
      "color": "white",
      "year": 2021
   },
   {
      "model": "Opel Zafira",
      "color": "black",
      "year": 2022
   }
   
];

console.log(cars[1]);
console.log(cars[1]["color"]);
console.log(cars[1].year);

// Задания с использованием объектов

let scores = {
   "Alex": 0,
   "Tom": 0,
   "Paul": 0
}
scores["Alex"] +=10;
console.log(scores.Alex);
scores.Tom +=7;
console.log(scores["Tom"]);
scores.Paul +=5;
console.log(scores.Paul);
console.log(scores);

// Одной строкой извлечь число 123

let myCrazyObject = {
   "name": "Нелепый объект",
   "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
   "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2]["number"]);
console.log(myCrazyObject["some array"][2].number);