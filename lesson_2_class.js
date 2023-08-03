class RobotVacuumCleaner {
    // Свойства класса
    model = "Roomba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    isUVLampOn = false;

    // Констрктор класса. Испльзуем его, чтобы привязать все методы класса к контексту - текущему объекту (this)
    constructor() {
        this.startCleaning = this.startCleaning.bind(this);
        this.goCharge = this.goCharge.bind(this);
        this.switchUVLamp = this.switchUVLamp.bind(this);
    }

    // Методы класса
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge() {
        console.log('I am going to charge');
    }

    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV Lamp is ${this.isUVLampOn ? 'working': 'not working'}.`);
    }
}

// Создадим экземпляр класса
const Roomba = new RobotVacuumCleaner();