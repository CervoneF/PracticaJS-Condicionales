//Switch Ej 2

let valoracion = prompt("Ingresa un número del 1 al 5 para puntuar la pelicula, 1-Muy Mala, 2-Mala, 3-Mediocre, 4-Buena, 5-Muy buena.");
switch (valoracion) {
    case "1":
        alert("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "2":
        alert("Calificaste la película como Mala. Lo lamentamos mucho.");
        break;
    case "3":
        alert("Calificaste la película como Mediocre. Lo lamentamos mucho.");
        break;
    case "4":
        alert("Calificaste la película como Buena. Nos alegramos.");
        break;
    case "5":
        alert("Calificaste la película como Muy Buena. Nos pone muy felices.");
        break;
        default:
            alert("Esa opción no es correcta");
}

alert("Gracias por tu valoración");