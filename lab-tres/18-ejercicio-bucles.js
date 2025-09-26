/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Solicita una palabra o frase y la invierte
 */

const texto = prompt("Ingresa una palabra o frase:");
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${invertido}`);