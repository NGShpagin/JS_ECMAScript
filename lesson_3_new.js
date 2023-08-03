// Наша реализация оператора new через функцию createObject
function createObject(constructor) {
    const obj = {};

    // Установим новому объекту прототипом прототип функцию-конструктора
    Object.setPrototypeOf(obj, constructor.prototype);

    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));

    if (!result || typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
        return obj;
    } else {
        return result;
    }
}

const Samba5 = createObject(Samba, 1014778);
console.log(Samba5.serialNumber);
console.log(Samba5.__proto__)
console.log(Samba5.startCleaning())
console.log(Samba5.constructor)