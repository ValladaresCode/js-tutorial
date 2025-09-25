/**
 * ESTRUCTURA DE SWITCH
 */

let comprar = 'uvas'

switch (comprar) {
    case 'oranges':
        console.log("LAs oranges estan a 10 Quetzal voz the mane")
        break;

    case 'Iphone':
        console.log("Las Iphone estan a 10 Quetzal voz the mane")
        break;

    case 'Platano':
        console.log("Los Platanos estan a 10 Quetzal voz the mane")
    break;

    case 'hola':
    case 'hi':
        console.log("Los hi o hola estan a 10 Quetzal voz the mane")
    break;

    default:
        console.log(`lo que compro no se encuentra: ${comprar}`)
        break;
}