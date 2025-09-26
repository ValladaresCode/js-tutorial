/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Genera un número aleatorio entre 1 y 100
 * El usuario debe adivinarlo con pistas
 */

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));

while (numeroUsuario !== numeroSecreto) {
    if (numeroUsuario < numeroSecreto) {
        console.log("El número secreto es mayor 🔼");
    } else {
        console.log("El número secreto es menor 🔽");
    }
    numeroUsuario = parseInt(prompt("Intenta de nuevo:"));
}

console.log(`🎉 ¡Felicidades! Adivinaste el número secreto: ${numeroSecreto}`);