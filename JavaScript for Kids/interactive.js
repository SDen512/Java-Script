// Отложенное выполнение кода и setTimeout

/* let timeUp = function () {
   alert("Hi world.");
}
setTimeout(timeUp, 3000);
 */
//Отмена действия таймера

/* let timeoutId = setTimeout(timeUp, 3000);
clearTimeout(timeoutId); */

// Многократный запуск кода и setInterval

/* let counter = 1;
let printMessage = function () {
   console.log("Ты смотришь в консоль " + counter + " секунд");
   counter+=5;
};
let test = setInterval(printMessage, 5000); */
//clearInterval(test);

// Анимация элементов с помощью setInterval

let leftOfSet = 0;
let moveHeading = function () {
   $(".heading-animation").offset({left: leftOfSet});
   leftOfSet++;
   if (leftOfSet > 200) {
      leftOfSet = 0;
   }
};
setInterval(moveHeading, 15);

// Реакция на действия пользователя

let clickHandler = function (event) {
   console.log("Click "+ event.pageX + " " + event.pageY);
};
$(".heading-click").click(clickHandler);