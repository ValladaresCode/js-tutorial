/**
 * Funciones en js son tipos de datos
 */

//duenos de una empresa y necesitamos calcular el descuento de productos
function calcularDescuento(precio, porcetajeDeDescuento) {
    const descuento = (precio*porcetajeDeDescuento)/100
    const precioConDescuento = precio-descuento
    return precioConDescuento
}

const precioOriginal = 1000
const porcetajeDeDescuento = 15
const precioFinal= calcularDescuento(precioOriginal, porcetajeDeDescuento)

console.log("Orecio original Q."+ precioOriginal)
console.log("Descuento "+porcetajeDeDescuento+"%")
console.log("Precio con descuento Q."+precioFinal)
