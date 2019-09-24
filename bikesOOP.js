var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.miles = 0;
        this.price = price;
        this.max_speed = max_speed;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Bike cost: " + this.price + " it has max speed of: " + this.max_speed);
    };
    Bike.prototype.ride = function () {
        this.miles += 10;
        console.log("Riding bike, it has " + this.miles + " miles on it");
    };
    Bike.prototype.reverse = function () {
        this.miles -= 5;
        console.log("Reversing, it has " + this.miles + " miles on it");
    };
    return Bike;
}());
var Bike1 = new Bike(250, "25 mph");
Bike1.displayInfo();
Bike1.ride();
Bike1.reverse();
