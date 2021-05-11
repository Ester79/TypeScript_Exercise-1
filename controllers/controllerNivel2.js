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
    if (isNaN(rueda1.diameter) || rueda1.diameter < 0.4 || rueda1.diameter > 2.0 || rueda1.brand == "") { //Verificar que el campo sea un número y con valores entre 0.4 y 2.0. Y se ha introducido la marca de la rueda.
        errorRuedas = true;
    }
    if (isNaN(rueda2.diameter) || rueda2.diameter < 0.4 || rueda2.diameter > 2.0 || rueda2.brand == "") { //Verificar que el campo sea un número y con valores entre 0.4 y 2.0
        errorRuedas = true;
    }
    if (isNaN(rueda3.diameter) || rueda3.diameter < 0.4 || rueda3.diameter > 2.0 || rueda3.brand == "") { //Verificar que el campo sea un número y con valores entre 0.4 y 2.0
        errorRuedas = true;
    }
    if (isNaN(rueda4.diameter) || rueda4.diameter < 0.4 || rueda4.diameter > 2.0 || rueda4.brand == "") { //Verificar que el campo sea un número y con valores entre 0.4 y 2.0
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
        alert("Please, complete the empty fields or write a correct diameter");
    }
    // Devolver los valores introducidos por el usuario a continuación de los resultados del formulario 1
    var resultado = document.getElementById("carInfo");
    if (resultado) { //verificar es diferente de null. 
        resultado.innerHTML = coche.toString();
    }
}
//********************************************* FORMULARIOS METODOS *********************************************
//********** FORMULARIO 1 **********
//VERIFICAR DATOS MATRÍCULA
function matricula() {
    //Recoger los valores entrados en el formulario por el usuario
    var matricula = document.getElementById("plate");
    var tipoMatricula = /\b[0-9]{4}[a-zA-Z]{3}\b/gm; // Expresión regular. Condición de la matricula, se tiene que componer de 4 numeros al inicio y 3 letras al final
    if (!matricula.value.match(tipoMatricula) || matricula.value == "") {
        var errorcampo = document.getElementById("nummatricula");
        if (errorcampo) {
            errorcampo.innerHTML = "Write the plate number. Example: 1234ABC";
            errorcampo.style.display = "block"; //se muestra el campo con el mensaje asignado al no cumplir la condición
        }
    }
}
//VERIFICAR MARCA
function marca() {
    //Recoger los valores entrados en el formulario por el usuario
    var marca = document.getElementById("brand");
    if (marca.value == "") {
        var errormarca = document.getElementById("marcacoche"); // variable a asignar mensaje y mostrar en documento
        if (errormarca) { //si el campo es nulo
            errormarca.innerHTML = "Write the brand of the vehicle";
            errormarca.style.display = "block";
        }
    }
}
// VERIFICAR COLOR
function colorcoche() {
    //Recoger los valores entrados en el formulario por el usuario
    var colores = document.getElementById("color");
    if (colores.value == "") {
        var errorcolor = document.getElementById("colorcoche"); // variable a asignar mensaje y mostrar en documento
        if (errorcolor) { //verificar que no es nulo
            errorcolor.innerHTML = "Write the color of the vehicle";
            errorcolor.style.display = "block";
        }
    }
}
//********** FORMULARIO 1 **********
// VERIFICAR LAS MEDIDAS DE LAS RUEDAS
function medidarueda1() {
    //Recoger los valores entrados en el formulario por el usuario
    var diametro = document.getElementById("dim1");
    var diam = parseFloat(diametro.value); //convertir a decimal
    var errorR = document.getElementById("d1"); //vampo donde se devolverá el mensaje de error
    //Verificar que el valor del diámetro de la rueda no sea diferente de número, y valor comprendido entre 0.4 y 2.0
    if (isNaN(diam) || diam < 0.4 || diam > 2.0) {
        if (errorR) { //verificar que no sea nulo
            errorR.innerHTML = "Diameter must be between 0.4 and 2.0"; //mensaje a devolver en caso de que no cumpla las condiciones anteriores
            errorR.style.display = "block"; //mostrar 
        }
    }
    else { // si el usuario rectifica el valor
        if (errorR) { // verificar que no sea nulo
            errorR.style.display = "none"; //ocultar el mensaje de error
        }
    }
}
function medidarueda2() {
    //Recoger los valores entrados en el formulario por el usuario
    var diametro = document.getElementById("dim2");
    var diam = parseFloat(diametro.value);
    var errorR = document.getElementById("d2");
    //Verificar que el valor del diámetro de la rueda no sea diferente de número, y valor comprendido entre 0.4 y 2.0
    if (isNaN(diam) || diam < 0.4 || diam > 2.0) {
        if (errorR) { //verificar que no sea nulo
            errorR.innerHTML = "Diameter must be between 0.4 and 2.0"; //mensaje a devolver en caso de que no cumpla las condiciones anteriores
            errorR.style.display = "block"; //mostrar
        }
    }
    else { // si el usuario rectifica el valor
        if (errorR) { // verificar que no sea nulo
            errorR.style.display = "none"; //ocultar el mensaje de error
        }
    }
}
function medidarueda3() {
    //Recoger los valores entrados en el formulario por el usuario
    var diametro = document.getElementById("dim3");
    var diam = parseFloat(diametro.value);
    var errorR = document.getElementById("d3");
    //Verificar que el valor del diámetro de la rueda no sea diferente de número, y valor comprendido entre 0.4 y 2.0
    if (isNaN(diam) || diam < 0.4 || diam > 2.0) {
        if (errorR) { //verificar que no sea nulo
            errorR.innerHTML = "Diameter must be between 0.4 and 2.0"; //mensaje a devolver en caso de que no cumpla las condiciones anteriores
            errorR.style.display = "block"; //mostrar
        }
    }
    else { // si el usuario rectifica el valor
        if (errorR) { // verificar que no sea nulo
            errorR.style.display = "none"; //ocultar el mensaje de error
        }
    }
}
function medidarueda4() {
    //Recoger los valores entrados en el formulario por el usuario
    var diametro = document.getElementById("dim4");
    var diam = parseFloat(diametro.value);
    var errorR = document.getElementById("d4");
    //Verificar que el valor del diámetro de la rueda no sea diferente de número, y valor comprendido entre 0.4 y 2.0
    if (isNaN(diam) || diam < 0.4 || diam > 2.0) {
        if (errorR) { //verificar que no sea nulo
            errorR.innerHTML = "Diameter must be between 0.4 and 2.0"; //mensaje a devolver en caso de que no cumpla las condiciones anteriores
            errorR.style.display = "block"; //mostrar
        }
    }
    else { // si el usuario rectifica el valor
        if (errorR) { // verificar que no sea nulo
            errorR.style.display = "none"; //ocultar el mensaje de error
        }
    }
}
// VERIFICAR MARCA DE LAS RUEDAS
function marcarueda1() {
    var marcarueda = document.getElementById("marca1");
    var errorbrand = document.getElementById("m1"); // variable donde guardar el mensaje de error
    if (marcarueda.value === "") { //si el campo está vacio
        if (errorbrand) { // verificar que sea diferente de null
            errorbrand.innerHTML = "Write the brand"; //mensaje de error si no cumple la condicion
            errorbrand.style.display = "block"; //mostrar mensaje de error
        }
    }
    else {
        if (errorbrand) { //verificar que sea diferente de null
            errorbrand.style.display = "none"; // no mostrar mensaje de error en caso de cumplir condiciones
        }
    }
}
function marcarueda2() {
    var marcarueda = document.getElementById("marca2");
    var errorbrand = document.getElementById("m2"); // variable donde guardar el mensaje de error
    if (marcarueda.value === "") { //si el campo está vacio
        if (errorbrand) { // verificar que sea diferente de null
            errorbrand.innerHTML = "Write the brand"; //mensaje de error si no cumple la condicion
            errorbrand.style.display = "block"; //mostrar mensaje de error
        }
    }
    else {
        if (errorbrand) { //verificar que sea diferente de null
            errorbrand.style.display = "none"; // no mostrar mensaje de error en caso de cumplir condiciones
        }
    }
}
function marcarueda3() {
    var marcarueda = document.getElementById("marca3");
    var errorbrand = document.getElementById("m3"); // variable donde guardar el mensaje de error
    if (marcarueda.value === "") { //si el campo está vacio
        if (errorbrand) { // verificar que sea diferente de null
            errorbrand.innerHTML = "Write the brand"; //mensaje de error si no cumple la condicion
            errorbrand.style.display = "block"; //mostrar mensaje de error
        }
    }
    else {
        if (errorbrand) { //verificar que sea diferente de null
            errorbrand.style.display = "none"; // no mostrar mensaje de error en caso de cumplir condiciones
        }
    }
}
function marcarueda4() {
    var marcarueda = document.getElementById("marca4");
    var errorbrand = document.getElementById("m4"); // variable donde guardar el mensaje de error
    if (marcarueda.value === "") { //si el campo está vacio
        if (errorbrand) { // verificar que sea diferente de null
            errorbrand.innerHTML = "Write the brand"; //mensaje de error si no cumple la condicion
            errorbrand.style.display = "block"; //mostrar mensaje de error
        }
    }
    else {
        if (errorbrand) { //verificar que sea diferente de null
            errorbrand.style.display = "none"; // no mostrar mensaje de error en caso de cumplir condiciones
        }
    }
}
