/* let someName = prompt("Как вас зовут?");
console.log("Привет " +  someName); */

/* let likesFootball = confirm("Тебе нравится футбол?");
if(likesFootball) {
   console.log("Ты молодец!");
} else {
   console.log("Приобщайся к спорту");
} */

// alert("Это просто диалоговое окно для сообщений.");

// Проектирование игры "Виселица".

// Псевдокод игры

/* Выбрать случайное слово
Пока слово не угадано {
 Показать игроку текущее состояние игры
 Запросить у игрока вариант ответа
 Если игрок хочет выйти из игры {
 Выйти из игры
 }
 Иначе Если вариант ответа — не одиночная буква {
 Сообщить игроку, что он должен ввести букву
 }
 Иначе {
 Если такая буква есть в слове {
 Обновить состояние игры, подставив новую букву
 }
 }
}
Поздравить игрока с победой — слово угадано */

// Выбор случайного слова

let words = [
   "игра",
   "школа",
   "программа",
   "макака",
   "изучение",
   "профессия",
   "интернет",
   "автомобиль",
   "телефон"
];
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив

let answerArray = [];
for(let i = 0; i < word.length; i++) {
   answerArray[i] = "_";
}

let remainingLetters = word.length;
let numberOfAttempts = word.length + 3;

// Игровой цикл

while(remainingLetters > 0 && numberOfAttempts > 0 ) {

   //Отображаем состояние игры

   alert(answerArray.join(" "));

   //Обработка введенного ответа

   let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
   guess = guess.toLowerCase();
   if(guess === null) {
      break;
   } else if(guess.length !== 1) {
      alert("Пожалуйста, введите только одну букву.");
   } else {
      
      //Обновляем состояние игры

      for(let j = 0; j < word.length; j++) {
         if(word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
         } 
      }
      numberOfAttempts--;
   }
}

//Отображаем ответ и поздравляем игрока с победой

if(numberOfAttempts === 0) {
   alert("У вас закончились попытки. Вы не отгадали слово.");
} else {
   alert(answerArray.join(" "));
   alert("Отлично! Было загадано слово " + word);
}
