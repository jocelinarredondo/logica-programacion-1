// Solicito tres números al usuario
const numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
const numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
const numero3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));

// Verifico si los tres números forman una secuencia creciente
if (numero1 < numero2 && numero2 < numero3) {
  console.log("Los números forman una secuencia creciente.");
}
// Verifico si los tres números forman una secuencia decreciente
else if (numero1 > numero2 && numero2 > numero3) {
  console.log("Los números forman una secuencia decreciente.");
} 
// Si no forman una secuencia específica
else {
  console.log("Los números no forman una secuencia creciente ni decreciente.");
}

// Ordeno los números de menor a mayor y los muestro
const numerosOrdenados = [numero1, numero2, numero3].sort((a, b) => a - b);
console.log("Números ordenados de menor a mayor: " + numerosOrdenados.join(", "));

// Ordeno los números de mayor a menor y los muestro
const numerosOrdenadosDesc = [...numerosOrdenados].reverse();
console.log("Números ordenados de mayor a menor: " + numerosOrdenadosDesc.join(", "));
