class Car {
    constructor() {
        this.isOn = false;
        this.make = 'Tesla';
        this.model = '3';
        this.year = 2018;
        this.gear = 1;
        this.isDoorOpen = false;
    }

    turnKey() {
        this.makeSound();
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    makeSound() {
        console.log('vroom vroom');
    }

    honkHorn() {
        console.log('beep beep');
    }

    selfDestruct() {
        console.log('will self-destruct in 3....2....1....');
    }

    shift(gear) {
        this.gear = gear;
    }

    openDoor() {
        this.isDoorOpen = true;
    }

    closedoor() {
        this.isDoorOpen = false;
    }
}