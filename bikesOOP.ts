class Bike {
    price: number;
    max_speed: string;
    miles = 0;
    constructor(price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
    }
    displayInfo(){
        console.log("Bike cost: " + this.price + " it has max speed of: " + this.max_speed)
    }
    ride(){
        this.miles += 10;
        console.log("Riding bike, it has " + this.miles + " miles on it");
    }
    reverse(){
        this.miles -= 5;
        console.log("Reversing, it has " + this.miles + " miles on it");
    }
}

let Bike1 = new Bike(250, "25 mph");
Bike1.displayInfo();
Bike1.ride();
Bike1.reverse();