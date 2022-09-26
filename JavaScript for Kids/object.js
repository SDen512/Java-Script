
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