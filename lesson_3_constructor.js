function Samba(serialNumber) {
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;

    this.__proto__ = DancingSeries;
}

const Samba1 = new Samba(1014778);

console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner

const robots = [];

for (let index = 0; index < 10; index++) {
    robots.push(new Samba(index))
}

Samba.prototype = DancingSeries;

const Samba2 = new Samba(1014779)

console.log(Samba1.serialNumber); // 1014779
console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner