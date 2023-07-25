// Задание 1
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]

// console.log(Math.min(...arr));

// Задание 2
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let counter = 0
    return {
        value: () => counter,
        increment: () => counter += 1,
        decrement: () => counter - 1
    }
}

const counter = createCounter();
// console.log(counter);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.value());


// Задание 3
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
// и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

divContentEl = document.querySelector('.content');

function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
        return element;
    } else if (element.children.length > 0) {
        for (const child of element.children) {
            if (findElementByClass(child, className)) return findElementByClass(child, className);
        }
    } else return false;
}


console.log(findElementByClass(divContentEl, 'close'));
// console.log(divContentEl.nextElementSibling)
// console.log(divContentEl.classList.contains('content'))

