"use strict";
var coche;
//los tres parámetros de la clase 'Car' que recoge la función 'createCar'
function createCar() {
    //Recoger los valores entrados en el formulario por el usuario
    var matricula = document.getElementById("plate");
    var marca = document.getElementById("brand");
    var colores = document.getElementById("color");
    var tipoMatricula = /\b[0-9]{4}[a-zA-Z]{3}\b/gm; // Expresión regular. Condición de la matricula, se tiene que componer de 4 numeros al inicio y 3 letras al final
    if (!matricula.value.match(tipoMatricula)) {
        alert("Error. The correct plate number must have this structure: 1234ABC");
    }
    else {
        coche = new Car(matricula.value, marca.value, colores.value);
    }
    var resultado = document.getElementById("carInfo");
    if (resultado) { //verificar que no es diferente de null. 
        resultado.innerHTML = coche.toString();
    }
    var formulario1 = document.getElementById("form1");
    if (formulario1) {
        formulario1.style.display = "none";
    }
}
function addWheels() {
    //Recoger los valores entrados en el formulario por el usuario
    var diametro1 = document.getElementById("dim1");
    var marcarueda1 = document.getElementById("marca1");
    var diametro2 = document.getElementById("dim2");
    var marcarueda2 = document.getElementById("marca2");
    var diametro3 = document.getElementById("dim3");
    var marcarueda3 = document.getElementById("marca3");
    var diametro4 = document.getElementById("dim4");
    var marcarueda4 = document.getElementById("marca4");
    // Guardar los valores recogidos de las ruedas en 4 variables llamadas rueda1, 2, 3 y 4.
    var rueda1 = new Wheel(parseFloat(diametro1.value), marcarueda1.value);
    var rueda2 = new Wheel(parseFloat(diametro2.value), marcarueda2.value);
    var rueda3 = new Wheel(parseFloat(diametro3.value), marcarueda3.value);
    var rueda4 = new Wheel(parseFloat(diametro4.value), marcarueda4.value);
    // variable 'errorRuedas'determina de inicio que los datos se ha introducido correctamente, (no hay error, error es falso)
    var errorRuedas = false;
    // condición de las medidas del diámetro de las ruedas. No deben ser ni menor a 0.4 ni mayor a 2.0
    if (isNaN(rueda1.diameter) || rueda1.diameter < 0.4 || rueda1.diameter > 2.0) {
        // si el valor del diametro introducido no cumple la condición, se envía mensaje de alerta al final del bucle, y la variable 'errorRuedas' pasa a ser true.
        alert("The wheel 1 has incorrect diameter");
        errorRuedas = true;
        // se repite secuencia con el resto de las 3 ruedas
    }
    if (isNaN(rueda2.diameter) || rueda2.diameter < 0.4 || rueda2.diameter > 2.0) {
        alert("The wheel 2 has incorrect diameter");
        errorRuedas = true;
    }
    if (isNaN(rueda3.diameter) || rueda3.diameter < 0.4 || rueda3.diameter > 2.0) {
        alert("The wheel 3 has incorrect diameter");
        errorRuedas = true;
    }
    if (isNaN(rueda4.diameter) || rueda4.diameter < 0.4 || rueda4.diameter > 2.0) {
        alert("The wheel 4 has incorrect diameter");
        errorRuedas = true;
    }
    //Verificar que los campos 'marca' rueda no son vacios. Si son vacios no se imprime la información
    if (rueda1.brand || rueda2.brand || rueda3.brand || rueda4.brand == "") {
        errorRuedas = true;
    }
    // si la variable 'errorRueddas' mantiene valor 'false' los datos de diámetro han sido introducidos correctamente. Llamar a la función 'addWheel' para introducir los datos de cada una de las ruedas del objeto 'coche'
    if (errorRuedas == false) {
        coche.addWheel(rueda1);
        coche.addWheel(rueda2);
        coche.addWheel(rueda3);
        coche.addWheel(rueda4);
        // en caso de que la variable 'errorRuedas' toma valor true, enviar mensaje de alerta al usuario
    }
    else {
        alert("Please, complete the empty fields or correct the diameters");
    }
    var resultado = document.getElementById("carInfo");
    if (resultado) { //verificar que no es diferente de null. 
        resultado.innerHTML = coche.toString();
    }
}
