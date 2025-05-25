// ej1 Definir una variable numérica, asignarle un valor y sumarle 5.
function ej1() {
    let numero = 10;         // Paso 1: Declaro y asigno un número
    numero += 5;             // Paso 2: Le sumo 5
    alert("Ej1 - El resultado es: " + numero); // Paso 3: Lo muestro
}


// ej2 Definir dos variables de cadenas, asignarles valores y concatenarlas.
function ej2() {
    let texto1 = "Hola";           // Cadena 1
    let texto2 = "Mundo";          // Cadena 2
    //let resultado = texto1 + " " + texto2;  // Concatenación igual al de abajo
    let resultado = `${texto1} ${texto2}`; 
    alert("Ej2 - El resultado es: " + resultado);
}

//Ejercicio 3 Evaluar si dos números son iguales, 
// diferentes, mayor o menor. Resolver utilizando “if”/”else”.

function ej3() {
    let a = 10;
    let b = 5;
    let mensaje = "";

    if (a === b) {
        mensaje = "Los números son iguales.";
    } else if (a > b) {
        mensaje = "El primer número es mayor que el segundo.";
    } else {
        mensaje = "El primer número es menor que el segundo.";
    }

    alert("Ej3 - " + mensaje);
}

//Utilizando “switch”. Definir una variable numérica. 
// Asignarle un valor entre 1 y 10; mostrar a qué grupo pertenece:

function ej4() {
    let numero = 4; // Cambiá este número para probar distintos casos
    let mensaje = "";

    switch (true) {
        case (numero >= 1 && numero <= 3):
            mensaje = "Grupo 1";
            break;
        case (numero >= 4 && numero <= 6):
            mensaje = "Grupo 2";
            break;
        case (numero >= 7 && numero <= 10):
            mensaje = "Grupo 3";
            break;
        default:
            mensaje = "Número fuera de rango.";
    }

    alert("Ej4 - " + mensaje);
}

//Ejercicio 
// Modifiquemos el ejercicio para que el número lo ingrese el usuario (con “prompt”).
function ej4_1() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
    let mensaje = "";

    switch (true) {
        case (numero >= 1 && numero <= 3):
            mensaje = "Grupo 1";
            break;
        case (numero >= 4 && numero <= 6):
            mensaje = "Grupo 2";
            break;
        case (numero >= 7 && numero <= 10):
            mensaje = "Grupo 3";
            break;
        default:
            mensaje = "Número fuera de rango.";
    }

    alert("Ej4_1 - " + mensaje);
}

//Ejercicio 5 Realizar la sumatoria de 0 a 10 y devolver el valor de la misma.

function ej5() {
    let suma = 0;
    for (let i = 0; i <= 10; i++) {
        suma += i;
    }
    alert("Ej5 - La suma de 0 a 10 es: " + suma);
}

//Ejercicio 6 Generar un array con 10 números, 
// recorrerlo e ir multiplicando todos los elementos, finalmente obtener el producto total.

function ej6() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let producto = 1;

    for (let i = 0; i < numeros.length; i++) {
        producto *= numeros[i];
    }

    alert("Ej6 - El producto de los 10 números es: " + producto);
}

//Ej 7 Crear una función que reciba dos valores y retorne el producto de los mismos.
function ej7() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    let resultado = producto(a, b);
    alert("Ej7 - El producto es: " + resultado);
}

function producto(x, y) {
    return x * y;
}

//Ejercicio 8 Crear una función que reciba dos cadenas y retorne la concatenación de las mismas
function ej8() {
    let texto1 = prompt("Ingrese la primera cadena:");
    let texto2 = prompt("Ingrese la segunda cadena:");
    let resultado = concatenar(texto1, texto2);
    alert("Ej8 - La cadena resultante es: " + resultado);
}

function concatenar(a, b) {
    return a + " " + b;
}

//Ejercicio 9 Crear una función, a partir de la lógica del ejercicio 3, 
// que reciba dos valores y muestre cuál es el mayor. En caso de ser iguales, deberá indicarlo.
function ej9() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    if (num1 === num2) {
        alert("Ej9 - Los números son iguales.");
    } else if (num1 > num2) {
        alert("Ej9 - El primer número es mayor.");
    } else {
        alert("Ej9 - El segundo número es mayor.");
    }
}

//Ejercicio 10 Crear una función que reciba un número 
// y muestre tantos asteriscos como la cantidad pasada como parámetro.
function ej10() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de asteriscos:"));
    let resultado = "";

    for (let i = 0; i < cantidad; i++) {
        resultado += "*";
    }

    alert("Ej10 - " + resultado);
}

/*Ejercicio 11 Crear una función que reciba el monto de un producto, 
 y el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito). 
 Si el monto del producto es menor a $200 no se aplicará ningún descuento, 
 pero si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% 
 si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito. 
 Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago, 
 dicho descuento es del 40%. 
 La función deberá retornar el monto final a abonar.*/

 function ej11() {
    let monto = parseFloat(prompt("Ingrese el monto del producto:"));
    let medio = prompt("Ingrese el medio de pago (E, D o C):").toUpperCase();
    let descuento = 0;

    if (monto < 200) {
        descuento = 0;
    } else if (monto <= 400) {
        if (medio === "E") descuento = 0.30;
        else if (medio === "D") descuento = 0.20;
        else if (medio === "C") descuento = 0.10;
    } else {
        descuento = 0.40;
    }

    let total = monto - (monto * descuento);
    alert("Ej11 - Monto final a abonar: $" + total.toFixed(2));
}

/*
Ejercicio 12 Crear una función que reciba un número que represente la altura de un medio-árbol.
Debe generar algo así para altura 5:
*
* *
* * *
* * * *
* * * * *
*/
function ej12() {
    let altura = parseInt(prompt("Ingrese la altura del medio-árbol:"));
    let resultado = "";

    for (let i = 1; i <= altura; i++) {
        resultado += "* ".repeat(i) + "\n";
    }

    alert("Ej12 - Árbol generado:\n\n" + resultado);
}
/* Ejercicio 13Crear una función que reciba un número (1 al 7) y retorne el nombre del día.
Si es 6 o 7 → "fin de semana". Si es inválido, mostrar error.*/

function ej13() {
    let dia = parseInt(prompt("Ingrese un número (1-7):"));
    let mensaje = "";

    switch (dia) {
        case 1: mensaje = "Lunes"; break;
        case 2: mensaje = "Martes"; break;
        case 3: mensaje = "Miércoles"; break;
        case 4: mensaje = "Jueves"; break;
        case 5: mensaje = "Viernes"; break;
        case 6:
        case 7:
            mensaje = "Fin de semana"; break;
        default:
            mensaje = "Número inválido. Debe ser del 1 al 7."; break;
    }

    alert("Ej13 - " + mensaje);
}

/* 
Ejercicio 14 Crear una función que genere un array de varios elementos numéricos 
y muestre por pantalla el promedio de esos números. 
El tamaño y los valores deben ser ingresados por el usuario (comando prompt) en dicho orden. 
TIP: El dato ingresado con prompt es de tipo string, usar split() 
para quitar los espacios y usar la función Number para transformarlo.
*/
function ej14() {
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
    let valores = prompt("Ingresá los " + cantidad + " números separados por espacio:");

    let numeros = valores.trim().split(/\s+/).map(Number);

    if (numeros.length !== cantidad) {
        alert("Ej14 - Error: cantidad de números ingresados incorrecta.");
        return;
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / cantidad;
    alert("Ej14 - El promedio es: " + promedio.toFixed(2));
}

/*
Ejercicio 15
Utilizar la función que genera el medio-árbol (ejercicio 12): crear un campo de entrada 
que le permita al usuario ingresar la altura del mismo. Incluir un botón que al presionarlo, 
invoque a la función generada previamente 
con el valor ingresado por el usuario para que la misma muestre el medio-árbol.
Deberá incluir validación de datos ingresados por el usuario.
*/

function ej15_generarArbol() {
    let input = document.getElementById("alturaArbol");
    let altura = parseInt(input.value);

    if (isNaN(altura) || altura < 1) {
        alert("Ej15 - Ingrese una altura válida (número mayor a 0).");
        return;
    }

    let resultado = "";
    for (let i = 1; i <= altura; i++) {
        resultado += "* ".repeat(i) + "\n";
    }

    alert("Ej15 - Árbol generado:\n\n" + resultado);
}


/* Ejercicio 16 Desarrollemos un portero eléctrico:
Tendrá dos visores, de dos posiciones el piso y una posición para dpto. 
Los pisos van del 00 al 48. Los dptos, del 1 al 6.
El botón llamar, muestra el mensaje de abajo. 
El botón borrar limpia los visores y el mensaje de abajo. 
Si se hace referencia a un piso y/o dpto que no existe, mostrar el error en el visor de abajo.

 */

let piso = "";
let dpto = "";

function presionarNumero(num) {
    let visorPiso = document.getElementById("visorPiso");
    let visorDpto = document.getElementById("visorDpto");

    if (piso.length < 2) {
        piso += num;
        visorPiso.value = piso;
    } else if (dpto.length < 1) {
        dpto += num;
        visorDpto.value = dpto;
    }
}

function llamar() {
    const mensaje = document.getElementById("mensajePortero");
    const pisoNum = parseInt(piso);
    const dptoNum = parseInt(dpto);

    if (
        isNaN(pisoNum) || isNaN(dptoNum) ||
        piso.length < 1 || pisoNum < 0 || pisoNum > 48 ||
        dpto.length < 1 || dptoNum < 1 || dptoNum > 6
    ) {
        mensaje.innerText = "Error: Piso o Dpto inexistente.";
    } else {
        mensaje.innerText = `Llamando al piso ${piso.padStart(2, '0')}, dpto ${dpto}`;
    }
}

function borrar() {
    piso = "";
    dpto = "";
    document.getElementById("visorPiso").value = "";
    document.getElementById("visorDpto").value = "";
    document.getElementById("mensajePortero").innerText = "";
}





/* Ejercio 17: 
Desarrollemos un teclado en pantalla:
Cada línea del teclado debe hacerse en un array.
Al presionar cada tecla (botón) deberá mostrarse en el display.
La muestra estará centralizada en una sola función.
Debe existir un botón para borrar el display.
Botón Backspace.
*/
let contenido = "";

function presionarTecla(letra) {
    contenido += letra;
    document.getElementById("visorTeclado").innerText = contenido;
}

function borrarTodo() {
    contenido = "";
    document.getElementById("visorTeclado").innerText = "";
}

function backspace() {
    contenido = contenido.slice(0, -1);
    document.getElementById("visorTeclado").innerText = contenido;
}


