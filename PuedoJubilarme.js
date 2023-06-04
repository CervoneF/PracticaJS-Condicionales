//Puedo Jubilarme

let genero = prompt("Ingresa si sos hombre o mujer. M = mujer H = hombre ");
let edad = parseInt(prompt("Ingresa tu edad"));
if ((genero === "M" && edad >= 60) || (genero==="H" && edad >=65) ) {
    alert (`Sos ${genero} y tienes ${edad} y puedes jubilarte`);
}else {
    alert ("No puedes jubilarte");
};
