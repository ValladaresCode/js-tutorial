/**
 * Roger Steven Valladares Pineda 2024060
 * 
 * Función que verifica si un número es primo
 */
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    let divisor = 2;
    while (divisor < numero) {
        if (numero % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

// Ejemplo con prompt
const num = parseInt(prompt("Ingresa un número para verificar si es primo:"));

if (esPrimo(num)) {
    console.log(`${num} es un número primo ✅`);
} else {
    console.log(`${num} NO es un número primo ❌`);
}
