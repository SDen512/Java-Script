// Отложенное выполнение кода и setTimeout

let timeUp = function () {
   alert("Hi world.");
}
setTimeout(timeUp, 3000);

//Отмена действия таймера

let timeoutId = setTimeout(timeUp, 3000);
clearTimeout(timeoutId);