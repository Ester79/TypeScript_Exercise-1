class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,brand:string,color:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(roda:Wheel):void{
        this.wheels.push(roda);
    }

    toString():string{
        let totalruedas ="";
        let i;
        for(i=0; i < this.wheels.length; i++){
           totalruedas = totalruedas + "Rueda" + (i+1) + " " +this.wheels[i].toString() + "<br>";
        }

        return "Vehicle registration number: " + this.plate.toUpperCase() + "<br>" + "Vehicle brand name: " + this.brand.toUpperCase() + "<br>" + "Vehicle color: " + this.color.toUpperCase() + "<br>" + totalruedas;

    }
}