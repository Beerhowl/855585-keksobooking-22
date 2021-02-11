//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloat(min, max) {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  } else {
    return Math.random() * (max - min) + min;
  }
}

getRandomFloat(1, 10);




//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInt(min, max) {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  } else {
    return Math.random() * (max - min) + min;
  }
}

getRandomInt(100, 20);

//Источник: https://myrusakov.ru/js-random-numbers.html