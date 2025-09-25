/**
 *  Se solicite un numero al usuario para adivinar un numero secreto del 1 al 10
 */

const numeroSecreto = Math.floor(Math.random()*11-1)
const numeroJugador = parseInt(prompt("adivina el numero entre el 1 al 10"))

console.log(`El numero que ingresaste fue: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades acertaste")
} else if (numeroJugador < numeroSecreto){
    console.log("El numero secreto es mayor")
}else{
    console.log("El numero secreto es menor")
}

console.log(`El numero secreto fue: ${numeroSecreto}`)