//Adivina el numero

let numeroSecreto = 7;

let numero = parseInt(prompt("¿Cuál es el número secreto?"));

if (numero === numeroSecreto) {
    alert ("Adivinaste el número secreto");
} else if (numero < numeroSecreto) {
    alert ("Ese número no es el correcto y es menor que el número secreto");
} else if (numero > numeroSecreto) {
    alert ("Ese número no es el correcto y es mayor que el número secreto");
}