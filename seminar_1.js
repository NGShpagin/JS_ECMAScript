// Задание 1
// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

// console.log(mergeArrays(arr1, arr2));

// Задание 2
// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

function removeDuplicates1(...numbers) {
    const newArr = [...numbers];
    return newArr.filter((element, index) => newArr.indexOf(element) === index)
}

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); // Ожидаемый результат: [1, 2, 3, 4, 5]

function removeDuplicates2(...numbers) {
    return [...new Set([...numbers])]
}

const array = [1, 2, 3, 2, 4, 1, 5];

// console.log(removeDuplicates2(1, 2, 3, 2, 4, 1, 5));
// console.log(removeDuplicates2(...array));


// Задание 3
// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.

function getEvenNumbers(array) {
    return array.filter((element) => {
        if (element % 2 === 0) return element;
    });
}

// console.log(getEvenNumbers(array));

// Задание 4
// Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение этих чисел.

const array4 = [1, 2, 3, 4, 5]

function calculateAverage(array) {
    return array.reduce((acc, element) => (acc + element)) / array.length;
}

// console.log(calculateAverage(array4));


// Задание 5
// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const string = "в которой первая буква каждого слова является заглавной";

function capitalizeFirstLetter(string) {
    return string.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

// console.log(capitalizeFirstLetter(string))


// Задание 6
// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(value) {
    return {
        value: value,
        add: (num) => value + num,
        subtract: (num) => value - num
    }
}

const number = createCalculator(19);

// console.log(number.value);
// console.log(number.add(1));
// console.log(number.subtract(9));
// console.log(createCalculator(4).add(3));
// console.log(createCalculator(4).subtract(3));


// Задание 7
// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования: const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

function createGreeting(userName) {
    function greeting(userName) {
        return `Hello, ${userName}!`;
    }

    return greeting(userName);
}

console.log(createGreeting('Nik'));

// Задача 8
// Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента
// и возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой,
// и false в противном случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function createPasswordChecker(passwordLength) {
    return function passwordChecker(password) {
        return (password.length === passwordLength)
    }
}

const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: true
// console.log(isPasswordValid('secret')); // Ожидаемый результат: false


// Задача 9
// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(positiveNum) {
    console.log()
    if (positiveNum / 10 < 1) return positiveNum
    else return sumDigits(positiveNum % 10) + sumDigits(Math.round(positiveNum / 10))
}

// console.log(sumDigits(5));

// function sumDigits(positiveNum) {
//     const n = `${positiveNum}`
//     if (n.length == 1) return +n;
//     return +n[0] + sumDigits(n.slice(1));
// }

// console.log(sumDigits(123));

 // function sumDigits(positiveNum) {
 //     let sum = 0;
 //     // for (const num of `${positiveNum}`) {
 //     //     sum += +num;
 //     // }
 //     while (positiveNum / 10 > 0) {
 //         sum += positiveNum % 10;
 //         positiveNum = Math.round(positiveNum / 10);
 //     }
 //     return sum;
 // }

console.log(sumDigits(123));