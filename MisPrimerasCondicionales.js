//Mis primeras condicionales

let edad = parseInt(prompt("Ingrese su edad"));

if (edad > 0) {
    alert("Bienvenid@s");
} else {
    alert("No ingresaste edad");
}

if (null) {
    alert("No naciste");
}

let animo = prompt ("¿Cómo te sientes hoy?");

if (animo === "triste") {
    console.log ("Vamos! hoy es un gran día!");
}

let numSecreto = parseInt(prompt("¿Cuál es el número secreto?"));

if (numSecreto !== 5) {
    alert ("El número es incorrecto");    
}

let contrasena = prompt("Ingrese una contraseña");

if (contrasena == 1234) {
    window.location = "http://www.google.com";
}