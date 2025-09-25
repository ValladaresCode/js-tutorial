/**
 * Tipo de dato NUMBER
 */

//1.entero y decimal
const entero = 33
const decimal = 3.34
//2.notacion cientifica
const cientifica = 5e4
//3. infinitpo y NaN(No es un numero)
const infinito = Infinity
const noEsNumero = NaN

// operaciones aritmeticas
//1. suma, resta, multi, division
const suma = 5+6
const resta = 10-10
const multi= 10*8
const division = 16/4

//2. modulo, exponenciacion
const modulo = 16%8 //0
const exponenciacion = 10**2

//3. Precicion en javascript
const resultado = 0.1 + 0.2 //0.30000000000000004
//console.log(resultado == 0.3) //false
//console.log(resultado.toFixed(1))

//4. OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16) //4
const valorAbsoluto = Math.abs(-5) //5
                          //trunc o floor para aproximar a entero
const aleatorio = Math.trunc( Math.random()*10+10) //numero aleatorio entre 0 y 10
//console.log(aleatorio)

//5.Lenguajes de programacion

//COMPILADOS: java(JVM -> .java --> .class ---> .jar), C, C++
//INTERPRETADOS: javascript --> lee mientras ejecuta

const numero = 2
const boolean = true
//conversion implicita
console.log(numero+boolean)