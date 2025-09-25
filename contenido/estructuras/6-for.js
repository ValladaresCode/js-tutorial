/**
 CICLO FOR
 */

let lista= ["comer", "dormir","code", "repetir"]
for (let i = 0; i < lista.length; i++) {
    //console.log(lista[i])
    
}

//FOR-OF ---------> for each
let canasta = ["Iphone", "uvas", "sandilla"]
for (fruta of canasta) {
   // console.log(fruta)
}

//FOR-IN -> itera sobre las propiedades de un object
const canastaDeFrutas = {
    nombre : "manzana",
    precio : 5,
    tipo : "verde",
    marca : "Chanita Iphone"
}

for (fruta in canastaDeFrutas) {
 //   console.log(fruta)

}

for (fruta in canastaDeFrutas){
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`)
}