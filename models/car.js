"use strict";
var Car = /** @class */ (function () {
    function Car(plate, brand, color) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (roda) {
        this.wheels.push(roda);
    };
    Car.prototype.toString = function () {
        var totalruedas = "";
        var i;
        for (i = 0; i < this.wheels.length; i++) {
            totalruedas = totalruedas + "Rueda" + (i + 1) + " " + this.wheels[i].toString() + "<br>";
        }
        return "Vehicle registration number: " + this.plate.toUpperCase() + "<br>" + "Vehicle brand name: " + this.brand.toUpperCase() + "<br>" + "Vehicle color: " + this.color.toUpperCase() + "<br>" + totalruedas;
    };
    return Car;
}());
