/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Solicita 3 números al usuario y determina
 * si pueden formar un triángulo
 */

const lado1 = parseInt(prompt("Ingresa el primer lado:"));
const lado2 = parseInt(prompt("Ingresa el segundo lado:"));
const lado3 = parseInt(prompt("Ingresa el tercer lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log(`Los lados ${lado1}, ${lado2}, ${lado3} SÍ pueden formar un triángulo`);
} else {
    console.log(`Los lados ${lado1}, ${lado2}, ${lado3} NO pueden formar un triángulo`);
}