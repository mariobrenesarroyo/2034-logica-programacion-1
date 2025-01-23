// 1. Mensaje de bienvenida en la consola
console.log("¡Bienvenido a mi programa!");

// 2. Variable "nombre" y mensaje con console.log
let nombre = "Mario";
console.log(`¡Hola, ${nombre}!`);

// 3. Variable "nombre" y mensaje con alert
alert(`¡Hola, ${nombre}!`);

// 4. Prompt para preguntar sobre lenguaje de programación favorito
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Tu lenguaje de programación favorito es: ${lenguaje}`);

// 5. Suma de dos valores y mensaje en la consola
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// 6. Resta de dos valores y mensaje en la consola
valor1 = 15;
valor2 = 8;
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

// 7. Verificar si es mayor o menor de edad
let edad = prompt("Por favor, ingresa tu edad:");
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// 8. Verificar si un número es positivo, negativo o cero
let numero = prompt("Por favor, ingresa un número:");
numero = Number(numero);
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// 9. Bucle while para mostrar números del 1 al 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 10. Verificar si una nota es aprobatoria o no
let nota = 8; // Cambia el valor según prefieras
if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// 11. Generar un número aleatorio
let numeroAleatorio = Math.random();
console.log(`Número aleatorio generado: ${numeroAleatorio}`);

// 12. Generar un número entero entre 1 y 10
let entero10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número entero entre 1 y 10: ${entero10}`);

// 13. Generar un número entero entre 1 y 1000
let entero1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número entero entre 1 y 1000: ${entero1000}`);
