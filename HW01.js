// функция повторения слова
export function repeatWord  (word, count) {
    let wordArr, result // объявляем переменные
    wordArr = [] //Первую переменную делаем массивом
    if (typeof word === 'string' && count >= 1 && word !== '' && isNaN(+word)) { // Заносим все условия при которых функция будет отрабатывать корректно
            for (let i = 1; i <= count; i++) { //Создаем цикл
                wordArr.push(word + i) // добавляем значения цикла в массив
            }   result = wordArr.join(', ') // превращаем массив в строку и записываем в результат
    } else result = 'Данные не верны' // записываем в результат если данные введенный не корректно
    return result
}