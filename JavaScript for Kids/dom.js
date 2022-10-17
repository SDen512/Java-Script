/* let elementHeading = document.getElementById("main-heading");
console.log(elementHeading.innerHTML);
let newTextHeading = prompt("Введите новый заголовок");
elementHeading.innerHTML = newTextHeading; */

//Замена заголовка с использованием JQuery

let newTextHeading = prompt("Введите новый заголовок");
$("#main-heading").text(newTextHeading);