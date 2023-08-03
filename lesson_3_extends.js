class VacuumCleaner {
    // Свойства класса
    model = "Roomba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;

    startCleaning() {
        this.counterOfStarts++;
        console.log('I am method of VacuumCleaner')
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

const BaseRobot = new VacuumCleaner();
console.log(BaseRobot.constructor);

class DancingSeries extends VacuumCleaner {
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;

    switchUVLamp() {
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV Lamp is ${this.isUVLampOn ? 'working': 'not working'}.`);
    }
}

const DancingRobot = new DancingSeries;
console.log(DancingRobot.__proto__); // VacuumCleaner
console.log(DancingRobot.model); // dancing series
console.log(DancingRobot.switchUVLamp());