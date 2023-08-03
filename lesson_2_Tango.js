const Tango = {
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,
    isUVLampOn: false,

    // заимствование методов у другого объекта - одалживание
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp
}