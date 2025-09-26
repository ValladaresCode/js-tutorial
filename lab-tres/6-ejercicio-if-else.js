/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Solicita un número del 1 al 7 al usuario
 * y muestra el día de la semana correspondiente
 */

const numeroDia = parseInt(prompt("Ingresa un número del 1 al 7:"));

if (numeroDia === 1) {
    console.log("Lunes");
} else if (numeroDia === 2) {
    console.log("Martes");
} else if (numeroDia === 3) {
    console.log("Miércoles");
} else if (numeroDia === 4) {
    console.log("Jueves");
} else if (numeroDia === 5) {
    console.log("Viernes");
} else if (numeroDia === 6) {
    console.log("Sábado");
} else if (numeroDia === 7) {
    console.log("Domingo");
} else {
    console.log("Número inválido, ingresa un valor entre 1 y 7");
}