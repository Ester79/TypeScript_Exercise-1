"use strict";
var coche;
var arraycoche = [];
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
function addWheels2() {
    var errorRuedas = false;
    var ruedas = [];
    for (var i = 1; i <= 4; i++) {
        var diametro = document.getElementById("dim" + i);
        var marcarueda = document.getElementById("marca" + i);
        var rueda = new Wheel(parseFloat(diametro.value), marcarueda.value);
        if (isNaN(rueda.diameter) || rueda.diameter < 0.4 || rueda.diameter > 2.0 || rueda.brand == "") { //Verificar que el campo sea un número y con valores entre 0.4 y 2.0. Y se ha introducido la marca de la rueda.
            errorRuedas = true;
        }
        else {
            ruedas.push(rueda);
        }
    }
    if (errorRuedas == false) { // si no hay error, subir los datos al array 'wheels' dentro del objeto de clase 'Car'
        for (var i = 0; i < ruedas.length; i++) {
            coche.addWheel(ruedas[i]); // llamar a la función 'addWheel' pasandole los parámetros del array 'ruedas' para cada posicion (numero de rueda)
        }
    }
    else { // si la variable 'errorRuedas' es true, enviar mensaje de alerta al usuario
        alert("Please, complete the empty fields or write a correct diameter");
    }
    // Devolver los valores introducidos por el usuario a continuación de los resultados del formulario 1
    var resultado = document.getElementById("carInfo");
    if (resultado) { //verificar es diferente de null. 
        resultado.innerHTML = coche.toString();
    }
    arraycoche.push(coche);
    console.log(coche);
    vaciarCamposForm1();
    vaciarform2();
}
function vaciarCamposForm1() {
    var resetform1;
    resetform1 = document.getElementById("form1");
    if (resetform1) { // verificar si es null
        resetform1.reset();
        resetform1.style.display = "block";
    }
}
function vaciarform2() {
    var resetform2;
    resetform2 = document.getElementById("form2");
    if (resetform2) { // verificar si es null
        resetform2.reset();
    }
}
//********************************************* FORMULARIOS METODOS *********************************************
//********** FORMULARIO 1 **********
//VERIFICAR DATOS MATRÍCULA
function matricula() {
    //Recoger los valores entrados en el formulario por el usuario
    var matricula = document.getElementById("plate");
    var tipoMatricula = /\b[0-9]{4}[a-zA-Z]{3}\b/gm; // Expresión regular. Condición de la matricula, se tiene que componer de 4 numeros al inicio y 3 letras al final
    var errorcampo = document.getElementById("nummatricula");
    if (!matricula.value.match(tipoMatricula) || matricula.value == "") {
        if (errorcampo) {
            errorcampo.innerHTML = "Write the plate number. Example: 1234ABC";
            errorcampo.style.display = "block"; //se muestra el campo con el mensaje asignado al no cumplir la condición
        }
    }
    else {
        if (errorcampo) {
            errorcampo.style.display = "none";
        }
    }
}
//VERIFICAR MARCA
function marca() {
    //Recoger los valores entrados en el formulario por el usuario
    var marca = document.getElementById("brand");
    var errormarca = document.getElementById("marcacoche"); // variable a asignar mensaje y mostrar en documento
    if (marca.value == "") {
        if (errormarca) { //si el campo es nulo
            errormarca.innerHTML = "Write the brand of the vehicle";
            errormarca.style.display = "block"; //mostrar mensaje de error
        }
    }
    else { // si el usuario rectifica el valor
        if (errormarca) {
            errormarca.style.display = "none"; // ocultar mensaje de error
        }
    }
}
// VERIFICAR COLOR
function colorcoche() {
    //Recoger los valores entrados en el formulario por el usuario
    var colores = document.getElementById("color");
    var errorcolor = document.getElementById("colorcoche"); // variable a asignar mensaje y mostrar en documento
    if (colores.value == "") {
        if (errorcolor) { //verificar que no es nulo
            errorcolor.innerHTML = "Write the color of the vehicle";
            errorcolor.style.display = "block";
        }
    }
    else {
        if (errorcolor) {
            errorcolor.style.display = "none";
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
function marcas() {
    for (var i = 1; i <= 4; i++) {
        var marca_1 = document.getElementById("marca" + i);
    }
}
function marcaRueda1() {
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
function marcaRueda2() {
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
function marcaRueda3() {
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
function marcaRueda4() {
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
