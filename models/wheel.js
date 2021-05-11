"use strict";
var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    Wheel.prototype.toString = function () {
        return "Diametro: " + this.diameter + " Marca: " + this.brand;
    };
    return Wheel;
}());
