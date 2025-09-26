/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Solicita un número y muestra su tabla de multiplicar (del 1 al 10)
 */

const numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}