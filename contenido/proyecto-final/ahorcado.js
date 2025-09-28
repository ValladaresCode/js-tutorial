/**
 *  Roger Steven Valladares Pineda 2024060
 *  Ahorcado
 */

const listaDePalabras = [
    "KINAL", "AGUA", "PIZZA", "MATEMATICA", "JAVA",
    "HTML", "CSS", "LENGUAJE", "SOCIALES", "ROPA",
    "VIDEOJUEGOS", "PAPAS", "COCACOLA", "PEPSI", "POSTMAN",
    "INDEX", "CHATGPT", "ROGER", "TICS", "BIGCOLA"
]

let palabraSeleccionada = ""
let letrasMostradas = []
let cantidadIntentos = 0

const cantidadMaximaIntentos = 7
const letrasUsadas = new Set()

const lienzo = document.getElementById("ahorcado")
const dibujo = lienzo.getContext("2d")
const divPalabra = document.getElementById("palabra")
const mensajeDiv = document.getElementById("mensaje")
const divLetras = document.getElementById("letras")

function iniciarJuego(nuevaPalabra = true) {

    if (nuevaPalabra) {
        palabraSeleccionada = listaDePalabras[Math.floor(Math.random() * listaDePalabras.length)]
    }

    letrasMostradas = Array(palabraSeleccionada.length).fill("_")
    cantidadIntentos = 0

    letrasUsadas.clear()
    divPalabra.textContent = letrasMostradas.join(" ")
    mensajeDiv.textContent = ""
    divLetras.innerHTML = ""

    dibujarHorca()
    crearBotonesDeLetras()
}

function crearBotonesDeLetras() {

    "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").forEach(letra => {

        const boton = document.createElement("button")
        boton.textContent = letra

        boton.onclick = () => probarLetra(boton.textContent, boton)
        divLetras.appendChild(boton)
    })
}

function probarLetra(letra, boton) {

    if (letrasUsadas.has(letra)) return
    letrasUsadas.add(letra)
    boton.disabled = true

    if (palabraSeleccionada.includes(letra)) {
        palabraSeleccionada.split("").forEach((l, i) => {
            if (l === letra) letrasMostradas[i] = letra
        })

        divPalabra.textContent = letrasMostradas.join(" ")
        if (!letrasMostradas.includes("_")) mostrarMensaje("¡Ganaste! Adivinaste la palabra en " + cantidadIntentos + " intentos")

    } else {

        cantidadIntentos++
        dibujarAhorcado()
        if (cantidadIntentos >= cantidadMaximaIntentos) mostrarMensaje("Perdiste. La palabra era: " + palabraSeleccionada)
    }
}

function mostrarMensaje(mensaje) {

    mensajeDiv.textContent = mensaje
    document.querySelectorAll("#letras button").forEach(boton => boton.disabled = true)

}

function dibujarAhorcado() {

    switch (cantidadIntentos) {
        case 1:
            dibujo.beginPath();
            dibujo.arc(200, 80, 30, 0, Math.PI * 2);
            dibujo.stroke();
            break

        case 2:
            dibujo.beginPath();
            dibujo.moveTo(200, 110); dibujo.lineTo(200, 200);
            dibujo.stroke();
            break

        case 3:
            dibujo.beginPath();
            dibujo.moveTo(200, 200); dibujo.lineTo(160, 250);
            dibujo.stroke();
            break

        case 4:
            dibujo.beginPath();
            dibujo.moveTo(200, 200); dibujo.lineTo(240, 250);
            dibujo.stroke();
            break

        case 5:
            dibujo.beginPath();
            dibujo.moveTo(200, 140); dibujo.lineTo(160, 170);
            dibujo.stroke();
            break

        case 6:
            dibujo.beginPath();
            dibujo.moveTo(200, 140); dibujo.lineTo(240, 170);
            dibujo.stroke();
            break

        case 7: dibujo.beginPath();
            dibujo.moveTo(190, 70); dibujo.lineTo(195, 75);
            dibujo.moveTo(210, 70); dibujo.lineTo(205, 75);
            dibujo.moveTo(190, 95); dibujo.arc(200, 95, 10, 0, Math.PI, true);
            dibujo.stroke();
            break
    }
}

function dibujarHorca() {
    dibujo.clearRect(0, 0, lienzo.width, lienzo.height)
    dibujo.beginPath()
    dibujo.moveTo(100, 350); dibujo.lineTo(300, 350)
    dibujo.moveTo(150, 350); dibujo.lineTo(150, 50)
    dibujo.lineTo(200, 50); dibujo.lineTo(200, 80)
    dibujo.stroke()
}

const divBotones = document.createElement("div")
divBotones.style.marginTop = "20px"

const botonReintentar = document.createElement("button")
botonReintentar.textContent = "Reintentar"
botonReintentar.onclick = () => iniciarJuego(false)

const botonReiniciar = document.createElement("button")
botonReiniciar.textContent = "Reiniciar"
botonReiniciar.onclick = () => iniciarJuego(true)

divBotones.appendChild(botonReintentar)
divBotones.appendChild(botonReiniciar)

document.body.appendChild(divBotones)

iniciarJuego(true)
