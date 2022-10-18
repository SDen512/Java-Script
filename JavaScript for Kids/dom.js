/* let elementHeading = document.getElementById("main-heading");
console.log(elementHeading.innerHTML);
let newTextHeading = prompt("Введите новый заголовок");
elementHeading.innerHTML = newTextHeading; */

//Замена заголовка с использованием JQuery

/* let newTextHeading = prompt("Введите новый заголовок");
$("#main-heading").text(newTextHeading); */

$(".test-section").append("<p>Это параграф, добавленный с помощью JQuery.</p>");

 for(let i = 0; i < 3; i++) {
   $("body").append("<ul><li>Это пункт списка, добавленный с помощью JQuery.</li></ul>");
} 
