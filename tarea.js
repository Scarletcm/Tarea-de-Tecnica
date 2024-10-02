//1. Crea una función nombrada que sume dos números.
function suma2 (num1, num2){
let suma = num1+num2
return suma
}
console.log (suma2(10,15))


//2. Escribe una función nombrada que reste dos números.
function resta2 (n1, n2){
    let resta = n1-n2
    return resta
    }
    console.log (resta2(20,14))

//3. Desarrolla una función nombrada que multiplique dos números.
function multi2 (a, b){
    let multiplicacion = a*b
    return multiplicacion
    }
    console.log (multi2(8,6))

//4. Implementa una función nombrada que divida dos números.
function div2(c,d){
    let divicion = c/d
    return divicion
    }
    console.log (div2(12,4))

//5. Diseña una función nombrada que calcule el módulo de dos números.
function modulo2(x,y){
    let resultado = x % y;
    if (resultado < 0 && y > 0) {
        resultado += x;
      }
      return resultado;
    }
    console.log (modulo2(20,3))

    // 6. Asigna una función anónima a una variable que eleva un número al cuadrado.
let cuadrado=function(num){
    return num*num;
}
console.log(cuadrado(5));

// 7. Usa una función anónima para convertir grados Celsius a Fahrenheit.
let grados=function(gr){
    return (gr * 9/5) + 25;
}
console.log(grados(25),"FAHRENHEIT");

// 8. Crea una función anónima que calcula el perímetro de un rectángulo.

let perimetro=function(base,alt){
    return (base + alt) * 2;
}
console.log(perimetro(10,5));

// 9. Implementa una función anónima que determina si un número es par o impar.
let parimpar = function(numer){
     if (numer % 2 == 0){
        console.log("es par");
    }else{
        console.log("es impar");
    }
 }

console.log(parimpar(2))

// 10. Escribe una función anónima que devuelva el número mayor entre dos números.
function num_mayor(num1, num2) {
    return num1 > num2 ? num1 : num2
}
console.log('El mayor es:',num_mayor(15,3));

// 11. Desarrolla una función flecha que calcula el área de un círculo.
let Area = (radio) => {
    return Math.PI * radio ** 2;
  };
  
  let radio = 10;
  let area = Area(radio);
  console.log("El área del círculo es:", area);

// 12. Crea una función flecha que convertirá kilómetros a millas.
  let convertidor = (km) => {
    return (km * 0.621371)
  }
  let dkm=30
  let mll = (convertidor(dkm))
  console.log(`${dkm} kilómetros son aproximadamente ${mll} millas`);

// 13. Escribe una función flecha que retorna el nombre completo dado un nombre y apellido.

let nombre_com = (nombre,apellido) => {
return `${nombre} ${apellido}`;

}
let nombre = 'Scarlet';
let apellido = 'Castillo';
let nombrecompl = nombre_com(nombre,apellido)
console.log(nombrecompl);


// 14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.

let verif = (palabra) => {
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') {
            return true;
          }
        }
        return false;
        
    }
    let palabra1 = 'Casa'
    console.log(`El texto "${palabra1}" contiene la letra 'a': ${verif(palabra1)}`);

    const palabra2 = "Gota";
    console.log(`El texto "${palabra2}" contiene la letra 'a': ${verif(palabra2)}`);

// 15. Diseña una función flecha que cuente cuántos elementos en un array son números.

let contar_Numeros = (array) => {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number' ) {
        contador++;
      }
    }
    return contador;
  }
  
  const Array = [1, 'dos', 3, 'cuatro', 5, 6,6];
  console.log(`El número de elementos numéricos en el arreglo son: ${contar_Numeros(Array)}`);

// 16. Escribe una función de orden superior que tome una función y la aplique a todos los elementos de un array.

let aplica = (array, funcion) => {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
      resultado.push(funcion(array[i]));
    }
    return resultado;
  };
    let miArray = [1, 2, 3, 4, 5];
    let  cuadrados = aplica(miArray, (elemento) => elemento ** 2);
  console.log("Cuadrados de los elementos del array:", cuadrados);
  
  let mitad = aplica(miArray, (elemento) => elemento / 2);
  console.log("Mitad de los elementos del array:", mitad);

// 17. Crea una función de orden superior que filtra elementos de un array basándose en una condición dada.

let  filtrar_array = (array, condicion) => {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
      if (condicion(array[i])) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  };
  
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosPares = filtrar_array(numeros, (numero) => numero % 2 === 0);
  console.log("Números pares:", numerosPares);
  
  let palabras = ["casa", "perro", "gato", "mesa", "silla"];
  let palabrasConS = filtrar_array(palabras, (palabra) => palabra.includes('s'));
  console.log("Palabras que contienen la letra 's':", palabrasConS);

// 18. Desarrolla una función de orden superior que retorna una nueva función incrementadora.
function incrementa(){
  let cont=0;
  return function(){
    cont += 1;
    return cont;
  }
}
function hiden(){
    let incrementor= incrementa;
    console.log(`the incrementor is ${incrementor()}`)
    console.log(`the incrementor is ${incrementor()}`)
    console.log(`the incrementor is ${incrementor()}`)
}

hiden()
// 19. Implementa una función de orden superior que tome dos funciones como argumentos y elija una para ejecutar basada en una condición.
function adult(lis1,lis2,calback1,calback2){
    let newarr = []
    for (let i = 0; i < lis2.length; i++) { 
        if(calback1(lis2[i])){
            newarr.push(calback2(lis1[i],lis2[i]))
        }
        
    } return newarr

}
function age(edad){
    return edad >= 18
}function united2(name,edad){
    return "Hola, " + name + " tu tienes " + edad + " años eres mayor de edad"
}
function hidden4() {
    let array1 = ["Scarlet","Gianela","LUisa","Karla"]
    let array2 = [12,15,19,23]
    let arrayShow = adult(array1,array2,age,united2)
    console.log(arrayShow)
}
hidden4() 

// 20. Diseña una función de orden superior que modifica un objeto utilizando otra función proporcionada.
function modifica(Object,callback) {
    for (let i in Object) {
        Object[i] = callback(Object[i])
    }
    return Object
}
function multiply1(x) {
    return x * 2
}

function hidden5() {
    miObjeto = {
        a : 2,
        b : 4,
        c : 6
    }
    let arrayShow = modifica(miObjeto,multiply1)
    console.log(arrayShow)
}
hidden5()

// 21. Defina una función constructora para un objeto "Coche" que tenga propiedades como marca, modelo y año.

let Coche = {
    marca: " Audi ",
    Modelo: "E-Tron",
    año: "2024",
}
console.log(Coche)

// 22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título y año de publicación.
let libro = {
    Nombre: "bulevar",
    fecha_de_publicacio: "12/11/1998",
    paginas: " 300 ",
}
console.log(libro)

// 23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo electrónico y contraseña.
 
let usuario = {
    Nombre: "vanecas",
    correo_electronico: 'ejemplo@gmail.com',
    contraseña: "scarcm",
}
console.log(usuario)

// 24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad.

let producto = {
    Nombre: "blusa",
    precio: '$5,00 dolares',
    cantidad: "12",
}
console.log(producto)
// 25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, matrícula y carrera.
let estudiante = {
    Nombre: "Scarlet Castillo",
    matricula: 'S-203',
    carrera: "INGENIERIA EN SOFTWARE",
}
console.log(estudiante)

// 26. Escribe una función recursiva para calcular el factorial de un número.
function fact(n){
    if (n==0) {
        return 1;
    }else{
        return n * fact(n - 1);
    }

}
console.log(fact(5));

// 27. Crea una función recursiva que sume todos los números hasta un número dado.

function sumas(n){
  if(n == 0) {
    return 1;
    
  }else {
    return n + sumas( n - 1 );
  }
}
console.log(sumas(5));

// 28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de dos números.
function mcd(x, y) {
    if (y === 0) {
      return x; 
    } else {
     
      return mcd(y, x % y);
    }
  }
  
  console.log(mcd(24, 36)); 

// 29. Diseña una función recursiva que genera la secuencia de Fibonacci hasta un número específico.

function fibonacci(n) {
    if (n <= 1) {
      return [0, 1].slice(0, n + 1);
    } else {
      let sequence = fibonacci(n - 1);
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
      return sequence;
    }
  }
  
  console.log(fibonacci(8))

// 30. Desarrolla una función recursiva que invierte una cadena de texto.

function invert(cadena){
if (cadena.length <=1) {
    return cadena
}else{
    return invert(cadena.slice(1)) + cadena[0];
  }

}
console.log(invert("casa"));

// 31. Demuestra el uso de una variable global modificándola dentro de una función.
let global="c";
function vari(){
    global="d";
    console.log(global);
}
vari();

// 32. Escribe un código donde una variable local oculte una variable global del mismo nombre.

let local = "A"; 
function varis(){
    local = "b";
    console.log(local);
}
varis();
// 33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de nombres.
// CADA UNPO ES INDEPENDIENTE
let locales= "m";
function nomb(){
   locales = "n";
   console.log(locales);
}
nomb()
// 34. Implementa un contador utilizando una variable global.
let contador=0;
function con(){
    while(contador>0){
        contador++;
    }
}

// 35. Crea una función que intenta modificar una variable local definida en otra función.

let modin="A";
function modi2(){
    let modin="2";
}function modi2(){
let modin = "3"
} 
console.log(modin);

// 36. Escribe una función que determina si un año es bisiesto.

function años(año){
    return año % 4 == 0 || año % 100 == 0 && año % 400 !== 0
 }console.log(años(2021));
// 37. Implementa una función que evalúe tres números y regrese el mayor.

let mayo = (num1,num2,num3)=>{
    if(num1>num2 && num1>num3){
         console.log(num1);
    }else if (num2>num1 && num2>num3)
    {
         console.log(num2);  
    } else  
            console.log(num3);
    } 
    
   mayo(4,4,4)


// 38. Diseña una función que decide si un estudiante aprueba o reprueba basada en su nota.

let Estudiante= (nota)=>{
    let suma = 0
 for (let i = 0; i < nota.length; i++) {
    suma = suma + nota[i]
    
 }
 let promedio = suma / nota.length


 if (promedio > 7) {
    console.log("El estudiante ha aprobado")
 }else{
    console.log("el estudiante no ha aprobado")
 }
}
let calificaciones = [7,7,9,10,8]
Estudiante(calificaciones)

// 39. Crea una función que clasifica una edad en categorías (niño, adolescente, adulto, anciano).

function edad(age){
  if (age>0 && age<= 12) {
    return "NIÑO"
  }else if (age>=13 && age<18){
               return "Eres adolescente"
  }else if(age>=18 && age<50){
                return "Eres adulto"
  }else if(age>=50 && age<120){
                return "Eres anciano"
  } else {
   return "ENTER TO AGE VALID"
  }
}
console.log(edad(16));


// 40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
// Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function verifyAccess(age) {
    if (age > 18 && age < 80) {
        return `you have access to`
    }else if (age > 0 && age < 18) {
        return `you do not have access `
    }else{
        return `Enter valid ages`
    }
}
function hidden15() {
    let age = 1000
    let showResult = verifyAccess(age)
    console.log(showResult)
}
hidden15()

//Exercise #41
// Escribe un bucle while que cuente de 1 a 100
function accountant(){
    let count = 1
    let count1 = []
    while (count > 0 && count <= 100) {
        count1.push(count)
        count++
    }
    console.log(count1)
}
accountant()

//Exercise #42
// Implementa un bucle while que sume los primeros 50 números naturales.
function naturalNumber() {
    let count = 1
    let sum = 0
    while (count > 0 && count <= 50) {
        sum = sum + count
        count++
    }
    console.log(`the sum of the natural numbers from 1 to 50 is ${sum}`)
}
naturalNumber()

//Exercise #43
// Crea un bucle while que repita un saludo hasta que el usuario decida parar
function infinitGreeting(number) {
    let run = true
    while (run == true) {
        console.log("Hi")
        if (number == 0) {
            run = false
            break
        }
        number--
    }
}
function hidden16(){
    let num = 10
    infinitGreeting(num)

}
hidden16()

//Exercise #44
// Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango
function divisible() {
    let count = 1
    while (count > 0 && count <= 30 ) {
        if (count % 7 == 0) {
            console.log(`el primer numero divisible para 7 es ${count}`)
            count = 40
        }
        count++
    }
}
divisible()

//Exercise #45
// Diseña un bucle while que verifique la entrada del usuario hasta que sea válida
function EnterUser(number) {
    let comp = true
    while(number == 0){
        console.log(`valid number, thanks`)
        comp = false
        number = 2
    }
    if (comp == true) {
        console.log(`Number enter do not is valid`)
    }
}
function hidden17() {
    let num = 8
    EnterUser(num)
}
hidden17()

//Exercise #46
// Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos.
function ratings(option) {
    switch (option) {
        case "C":
            return `you has 10 points`
            break;
        case "B":
            return `you has 8 points`
            break;
        case "I":
            return `you has 6 points`
            break;
        case "H":
            return `you has 4 points`
            break;
        case "G":
            return `you has 2 points`
            break;
        default:
            break;
    }
}
function hidden18() {
    let option = "B"
    let showResult = ratings(option)
    console.log(showResult)
}
hidden18()

//Exercise #47
// Implementa una función que use switch para responder a diferentes comandos de un chatbot.
function chatBot(comando) {
    switch (comando) {
        case "hi":
            console.log(`Hello, how can I help you today`)
            break;
        case "help":
            console.log(`Here are the commands you can use: Hello, Help, Goodbye`)
            break;
        case "goodbye" || "bye":
            console.log(`See you later! I hope to see you again soon.`)
            break;
        default:
            console.log(`Sorry, I don't understand that command`)
            break;
    }
}
function hidden19() {
    let comando = "hi"
    comando = comando.toLowerCase()
    chatBot(comando)
}
hidden19()

//Exercise #48
// Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque)
function  payments(method) {
    switch (method) {
        case "cash":
            console.log(`You have selected to pay in cash. Please hand the money over to the cashier.`)
            break;
        case "card":
            console.log(`You have selected to pay by card. Please insert your card into the reader.`)
            break;
        case "check":
            console.log(`You've selected to pay by check. Please give your check to the cashier.`)
            break;
        default:
            console.log(`Payment method not recognized. Please select a valid payment method: cash, card, check.`)
            break;
    }
}
function hidden20() {
    let method = "Card"
    method = method.toLowerCase()
    payments(method)
}
hidden20()    

//Exercise #49
// Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function basicCalculations(number1,number2,option) {
    switch (option) {
        case "+":
            return number1 + number2
            break;
        case "-":
            return number1 - number2
            break;
        case "*":
            return number1 * number2
            break;
        case "/":
            return number1 / number2
            break;
        default:
            return`Sorry the entered option is not available`
            break;
    }
}
function hidden21() {
    let option = "+", number1 = 2 , number2 = 6
    let showResult = basicCalculations(number1,number2,option)
    console.log(`option : ${option} , result: ${showResult}`)
}
hidden21()

//Exercise #50
// Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
function language(option) {
    switch (option) {
        case "spanish":
            return `Bienvenido, puede comenzar su navegacion`
            break;
        case "english":
            return `Welcome, you can start your browsing`
            break;  
        case "frances":
            return `Bienvenue, vous pouvez commencer votre navigation`
            break;  
        case "chino":
            return `欢迎，您可以开始导航`
            break; 
        default:
            return `I'm sorry, I can't recognize that language`
            break;
    }
}
function hidden22() {
    let option = "FRANCES"
    option = option.toLowerCase()
    let showResult = language(option)
    console.log(showResult)
}
hidden22()

//Exercise #51
// Implementa un bucle for que imprima todos los elementos de un array
function print(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`Element array ${list[i]}`)
    }
}
function hidden23() {
    let arrayNumbers = [1,2,3,4,5]
    print(arrayNumbers)
}
hidden23()

//Exercise #52
// Escribe un bucle for que multiplique todos los elementos de un array
function multiply2(list) {
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        newArray.push(list[i]*2)
    }
    return newArray
}
function hidden24() {
    let arrayNumbers = [1,2,3,4,5]
    let showResult = multiply2(arrayNumbers)
    console.log(`multiplied array is [${showResult}]`)
}
hidden24()

//Exercise #53
// Crea un bucle for para encontrar el menor número en un array
function minorNumber(list) {
    let minor = list[0]
    for (let i = 0; i < list.length; i++) {
        if (list[i] < minor) {
            minor = list[i]
        }
    }
    return minor
}
function hidden25() {
    let arrayNumbers = [2,3,4,5,7] 
    let showResult = minorNumber(arrayNumbers)
    console.log(`the minor number is ${showResult}`)
}
hidden25()

//Exercise #54
// Desarrolla un bucle for para verificar si un array contiene un elemento específico.
function searchItem(list,search) {
    let comp = false , index = []
    for (let i = 0; i < list.length; i++) {
        if (list[i] == search) {
            index.push(i)
            comp = true
        }
    }
    if (comp == true) {
        return index
    }else {
        return comp
    }
}
function hidden26() {
    let Item = [2,3,4,5,"hola"]
    let search = "hola"
    let showResult = searchItem(Item,search)

    if (showResult == false) {
       console.log(`Sorry, the item wasn't found `) 
    }else{
        console.log(`element is in the ${showResult}`)
    }
}
hidden26()

//Exercise #55
// Diseña un bucle for que copie un array en otro.
function copy(list){
    let arrayCopy = []
    for (let i = 0; i < list.length; i++) {
        arrayCopy.push(list[i])
    }
    return arrayCopy
}
function hidden27() {
    let arrayOriginal = [1,2,3,4,5] 
    console.log(`Array original is [${arrayOriginal}]`)

    let showResult = copy(arrayOriginal)

    console.log(`Array copied is [${showResult}]`)
}
hidden27()

//Exercise #56
// Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10
function LargeNumber3(number) {
    do {
        if (number < 10) {
            console.log(`the number is no more than 10`)     
        }else{
            console.log(`thanks, the number is greater than 10 `)
        }
        number = 11
    } while (number < 10);
}
function hidden28() {
    let number = 56
    LargeNumber3(number) 
}
hidden28()

//Exercise #57
// Implementa un for-in para mostrar todas las propiedades de un objeto.
function properties(Object) {
    for (let i in Object) {
        console.log(`La propiedad ${i} tiene el valor ${Object[i]}`)
    }
}
function hidden29() {
    let MiObject = {
        name : "Luis",
        lastName : "Arguello",
        age : 19,
        addres : "Km-26"
    }
    properties(MiObject)
}
hidden29()

//Exercise #58
// Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
function greetings2(list) {
    for ( let name of list) {
        console.log(`Hi, ${name}`)
    }
}
function hidden30() {
    let arrayNames = ["Scarlet","Emiliana","Yalitza"]
    greetings2(arrayNames)
}
hidden30()

//Exercise #59
// Crea un forEach para aplicar un descuento del 10% a precios en un array.
function discounts(list,desc) {
    let pricesDiscounts = []
    list.forEach((i) => {
        let valor = i * desc 
        valor = valor.toFixed(2)
        pricesDiscounts.push(valor)
    });
    return pricesDiscounts
}
function hidden31() {
    let prices = [13,23,31,46]
    let desc = 0.10
    let showResult = discounts(prices,desc)
    console.log(`Prices discounts is [${showResult}]`)
}
hidden31()

//Exercise #60
// Escribe un código que use map para convertir todas las temperaturas de un array de Celsius a Fahrenheit.
function convert3(temperatureCelsius){
    let temperatureFahrenheit = temperatureCelsius.map((tempCelsius)=>{
        return tempCelsius * 9/5 + 32
    })
    return temperatureFahrenheit
}
function hidden32() {
    let temperatureCelsius = [0,10,20,30,40]
    let showResult = convert3(temperatureCelsius)
    console.log(`Temperatures converted to fahrenheit are [${showResult}]`)
}
hidden32()
    
