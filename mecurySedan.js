//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassangers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;


    }

    loadPassenger(num){
        if ((num + this.passenger) < this.maximumPassangers){
            this.passenger = num;
            return this.passenger;
        }else {
            console.log (`${this.passenger} exceeds the capacity of ${this.maximumPassangers} for this ${this.make} ${this.model}`)
        }

    }

    start(){
        if(this.fuel > 0){
            console.log('This car will start')
        }else{
            this.started =false
            console.log('This care will not start')
            return this.started
        }

    }

    scheduleServices(mileage){
        if(this.mileage > 30000){
            this.scheduleService == true
            return this.scheduleService
        }
    }
}

//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

v.loadPassenger(8)
v.start()
v.scheduleServices(4000000000)
