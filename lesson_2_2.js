// Объект Roomba-1 - робот-пылесос

// Обращение к свойствам объекта
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

/* ННЕПРАВИЛЬНАЯ РЕАЛИЗАЦИЯ

// Вызов метода
setTimeout(Roomba.startCleaning, 1000);

// Уставновим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp
Roomba.isUVLampOn = false;

setTimeout(Roomba.switchUVLamp, 2000);

setTimeout(Roomba.goCharge, 3000);

// I am cleaning... I have started: NaN times.
// UV lamp is working.
// I am going to charge...
 */


/* ПРАВИЛЬНАЯ РЕАЛИЗАЦИЯ (не самая лучшая)

// Вызов методов объекта
setTimeout(function () {
    Roomba.startCleaning();
}, 1000)

// Уставновим свойства объекта isUVLampOn в true, чтобы продемонстрировать результат работы метода switchUVLamp
Roomba.isUVLampOn = true;


// Результат вызова следующего метода зависит от значения,хранящегося в свойстве объекта,
// а также от того как этот метод был вызван.
setTimeout(function () {
    Roomba.switchUVLamp();
}, 2000)

setTimeout(function () {
    Roomba.goCharge();
}, 3000)

// I am cleaning... I have started: 1 times.
// UV lamp is not working.
// I am going to charge...
 */

// ПРАВИЛЬНАЯ РЕАЛИЗАЦИЯ (методы привязки контента)

// Вызов методов объекта.
// Вызов метода объекта через call с явной передачей объекта робота-пылесоса в качестве контекста.
Roomba.startCleaning.call(Roomba); // I am cleaning... I have started: 1 times.

const notARobot = {
    counterOfStarts: 10,
};

// метод call
Roomba.startCleaning.call(notARobot); // I am cleaning... I have started: 11 times.

// метод apply- позволяет вызвать функцию и передать необходимый контекст, единственным отличием от call,
// метод apply принимает аргументы, которые необходимо передать в вызываемую функцию не списком через запятую,
// а в виде массива, что порой удобнее.
Roomba.startCleaning.apply(notARobot, [arg1, arg2, arg3]);

// метод bind - самый часто используемый метод, т.к. позволяет привязать контекст к функции раз и навсегда
setTimeout(Roomba.startCleaning.bind(Roomba), 1000)
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);

