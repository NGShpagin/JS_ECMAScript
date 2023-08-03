const VacuumCleaner = {
    model: "vacuum cleaner",
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,

    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },

    goCharge: function () {
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    },
}

const DancingSeries = {
    model: "dancing series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    isUVLampOn: false,

    switchUVLamp: function () {
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV Lamp is ${this.isUVLampOn ? 'working': 'not working'}.`);
    },

    // делаем ссылку на прототип родителя
    __proto__: VacuumCleaner, // самая важная часть
}

const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,

    // делаем ссылку на прототип родителя
    __proto__: DancingSeries,
}

const Djaiv = {
    model: "Djaiv-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,

    // Переопределим метод StartCleaning
    startCleaning: function () {
        this.counterOfStarts++;
        console.log('I am the method of Djaiv');
        console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },

    __proto__: DancingSeries,
}

const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); // vacuum cleaner

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto.model); // [object.object]

const MusicSeries = {
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,

    startWipe: function () {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to the wipe floor...');
    },

    // Делаем ссылку на прототип от родиля
    __proto__: VacuumCleaner,
}

const Blues = {
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

// Установим прототип для робота
Object.setPrototypeOf(Blues, MusicSeries);

if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning();
}

if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe();
}

// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы получим ошибку
Blues.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function;
