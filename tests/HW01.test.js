import {repeatWord} from '../HW01.js'

describe('test to repeat function', () => {
    let correctWord, correctCount, numWord, numStrWord, minCount, emptyWord, strCount //Объявлеяем переменные которые будем проверять в функция
    //Корректные значения
    correctWord = 'Привет'
    correctCount = 2
    //Некорректные значеничя
    numWord = 10
    numStrWord = '10'
    minCount = -10
    emptyWord = ''
    strCount = ''
    // 1й тест для отработки корректного варианта
    it ('input data is correct', () => {
        expect(repeatWord(correctWord, correctCount)).toBe('Привет1, Привет2')
    })
    // 2й для отработки некорректных вариантов
    it ('input data is not correct', () => {
        expect(repeatWord(numWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(correctWord, minCount)).toBe('Данные не верны')
        expect(repeatWord(emptyWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(numStrWord, correctCount)).toBe('Данные не верны')
        expect(repeatWord(correctWord, strCount)).toBe('Данные не верны')
    })
})