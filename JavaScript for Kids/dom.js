/* let elementHeading = document.getElementById("main-heading");
console.log(elementHeading.innerHTML);
let newTextHeading = prompt("Введите новый заголовок");
elementHeading.innerHTML = newTextHeading; */

//Замена заголовка с использованием JQuery

/* let newTextHeading = prompt("Введите новый заголовок");
$("#main-heading").text(newTextHeading); */


//Добавление элементов с использованием JQuery

$(".test-section").append("<p>Это параграф, добавленный с помощью JQuery.</p>");

 /* for(let i = 0; i < 3; i++) {
   $("body").append("<ul><li>Это списки, добавленный с помощью JQuery.</li></ul>");
} 

$("body").append("<ul class='list'></ul>");
for(let j = 0; j < 5; j++) {
   $(".list").append("<li>Пункт меню</li>")
}
 */

//Анимация средствами JQuery

//Скрытие заголовка

/* $("#main-heading").fadeOut(3000); */

//Цепной вызов и анимация на JQuery

//Изменение названия заголовка затухание и появление заголовка

$("#main-heading").text("Это измененный, исчезающий и появляющийся заголовок.").fadeOut(3000).fadeIn(2000);

//Методы анимации slideUp slideDown

$(".slide").slideUp(1000).slideDown(1000);


//Применение fadeIn slideUp and lideDown для видимого элемента (h2.test-heading)

/* $(".test-heading").slideUp(3000); */

//Использование fadeOut and fadeIn для одного элемента без цепного вызова и в цикле

for(let i = 0; i < 5; i++) {
   $(".test-heading").fadeOut(2000);
   $(".test-heading").fadeIn(2000);
}

//Методы show and hide

$(".test-text").hide(3000).show(3000);