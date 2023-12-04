/** Вспомогательные функции */

/**
 * @function
 * @name createArrayOfNumbers
 * @description Функция генерирует массив из случайных чисел
 * @param {Number} length
 * @param {Number} minItemValue
 * @param {Number} maxItemValue
 * 
 * @return {Array} Массив, указанной длинны со случайными элементами, каждый из
 * которых будет случайным числом в диапазоне
 * minItemValue <= ArrItem <=maxItemValue
 */
export function createArrayOfNumbers(length=10, minItemValue, maxItemValue) {
  // TODO: ввести валидацию длины массива, максимального и минимального
  // значения элемента на число и на максимальное значение
  let arr = [];
  let l = length;
  if (!length || length < 10) l = 10;

  for (let i = 0; i <= l - 1; i++) {
    const item = Math.floor(
      minItemValue + Math.random() * (1 + maxItemValue - minItemValue)
    );

    arr.push(item);
  }

  return arr;
}


/**
 * @function
 * @name positionExchange
 * @description Меняет местами два элемента массива с указанными индексами
 * 
 * @param {Array} array Исходный массив
 * @param {Number} elemPos1 Номер позиции элемента (индекс)
 * @param {Number} elemPos2 Номер позиции элемента (индекс)
 * 
 * @return {Array|null} Новый массив с измененными позициями элементов или null
 */
export function positionExchange (array, elemPos1, elemPos2) {
  if (Array.isArray(array) && elemPos1 < array.length && elemPos2 < array.length) {
    let arr = Array.from(array);
    [arr[elemPos1], arr[elemPos2]] = [arr[elemPos2], arr[elemPos1]];
    return arr;
  }
  return null;
}