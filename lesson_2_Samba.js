const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,
}

// Одолжим методы у объекта Roomba
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

Samba.isUVLampOn = true;

Samba.switchUVLamp(); // UV Lamp is not working
Samba.goCharge(); // I am going to charge...
