//Agrega caminos

let edad=prompt("Ingrese su edad.")
if (edad < 0) {
    alert ("Edad no valida");
} else {
    if(edad<18) {
    alert("No puede pasar al bar.");
        if (edad%2==!0) {
            alert("¿Sabias que tu edad es impar?");
        }
    } 
    else if(edad<21){
    alert("Puede pasar al bar, pero no puede tomar alcohol.");
        if (edad%2==!0) {
            alert("¿Sabias que tu edad es impar?");
        }
    } else if (edad==21){
        alert("Felicitaciones por tu mayoria de edad");
        alert("¿Sabias que tu edad es impar?");
    }
    else{
    alert("Puede pasar al bar y tomar alcohol.");
    if (edad%2==!0) {
        alert("¿Sabias que tu edad es impar?");
    }
    }
}