/* let elementHeading = document.getElementById("main-heading");
console.log(elementHeading.innerHTML);
let newTextHeading = prompt("Введите новый заголовок");
elementHeading.innerHTML = newTextHeading; */

//Замена заголовка с использованием JQuery

/* let newTextHeading = prompt("Введите новый заголовок");
$("#main-heading").text(newTextHeading); */


//Добавление элементов с использованием JQuery

$(".test-section").append("<p>Это параграф, добавленный с помощью JQuery.</p>");

 for(let i = 0; i < 3; i++) {
   $("body").append("<ul><li>Это списки, добавленный с помощью JQuery.</li></ul>");
} 

$("body").append("<ul class='list'></ul>");
for(let j = 0; j < 5; j++) {
   $(".list").append("<li>Пункт меню</li>")
}

//Анимация средствами JQuery

//Скрытие заголовка

/* $("#main-heading").fadeOut(3000); */

//Цепной вызов и анимация на JQuery

//Изменение названия заголовка затухание и появление заголовка

$("#main-heading").text("Это измененный, исчезающий и появляющийся заголовок.").fadeOut(3000).fadeIn(2000);

//Методы анимации slideUp slideDown

$(".slide").slideUp(1000).slideDown(1000);


