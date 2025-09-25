/**
 *      CONVERSIONES -> Explicitas e Implicitas
 */

//Conversion Explicit Type Casting
const string = '54'
const integer = parseInt(string)

const float = parseFloat("3.14")

const binario = '1010' //10
const decimal = parseInt(binario, 2)
//console.log(decimal)

//Conversion Implicit Type Casting
const resultado = '5'+3
//console.log(resultado) // es String porque lo concatena

const sumaConBoolean = '3'+ true
//console.log(sumaConBoolean) // es String porque lo concatena

const sumaConNumero = 3 + true
//console.log(sumaConBoolean) // es int porque lo pasa true a 1 y lo suma

const valorString = '20'
const valorNumber = 10
const valorBoolean = true

//Cualquiera con string se concatena y los demas se suman
console.log(valorString+valorString)
console.log(valorString+valorNumber)
console.log(valorString+valorBoolean)
console.log('-----------------------')
console.log(valorNumber+valorString)
console.log(valorNumber+valorNumber)
console.log(valorNumber+valorBoolean)
console.log('-----------------------')
console.log(valorBoolean+valorString)
console.log(valorBoolean+valorNumber)
console.log(valorBoolean+valorBoolean)