// import { Persona } from './interfaces';
// /******************************caracteristidas de los parametros de las funciones************************
 
// Explicaremos las caracterisitcas que tienen los parametros de las funciones

// parametros obligatorios:
// parametros opcionales:
// parametros defatult/defecto:

// Notas:
//     1.- El primer parametro no puede ser opcional
//     2.- Siempre los parametros opcionales deben escribirse al final
// ************************************************************/

// function suma(x: number, ultimo: number = 10, y?: boolean) {
//   let suma = x + ultimo;

//   // if (y == undefined) console.log(suma);
//   y == undefined ? console.log(suma) : null;
// }

// suma(10, 20);

// /******************************Funcion de flecha************************/

// function impresionDatos() {
//   console.log("Hola Mundo desde una funcion estandar");
// }
// const ArrowFunctionSaludos = (x: number, y: number) => x + y;

// /**************************************************************************** 
// Metodos Array Funcion de flecha

// 1. Foreach
// 2. Map
// 3. Find
// 4. Filter
// 5. Some
// *****************************************************************************/

// let ArregloNumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let personas: Array<Persona> = [
//   {
//     nombre: "Jose Carlos",
//     apellido: 'Gonzalez',
//     sexo: "Masculino",
//     edad: 23,
//   },
//   {
//     nombre: "Chinese",
//     apellido: 'Peralta',
//     sexo: "Masculino",
//     edad: 23
//   },
//   {
//     nombre: "La Daniela",
//     apellido: 'Estrada',
//     sexo: "Femenino",
//     edad: 26,
//   },
// ];
// // for (let i = 0; i < ArregloNumerico.length; i++) {
// //   let elemento = ArregloNumerico[i];

// //   if (elemento % 2 == 0) {
// //     console.log("par");
// //   } else {
// //     console.log("impar");
// //   }
// // }

// let ArregloNuevo: any = [];
// // Mandando una funcion dentro de una funcion
// /*forEach recorre un arreglo y aplica un cambio al valor de sus arreglos*/

// ArregloNuevo = ArregloNumerico.forEach((elemento) =>
//   elemento % 2 == 0 ? elemento : null
// );

// /*******************************Map********************************************* 

// Es similar al forEach ya que por cada valor en el arrelgo le aplica una accion,
// la diferencia es que Map nos crea un arreglo nuevo y forEach no

// *****************************************************************************/

// ArregloNuevo = ArregloNumerico.map((elemento) =>
//   elemento % 2 == 0 ? "par" : "impar"
// );

// /***************************Find*********************************
//  * 
// Encuentra 1 valor dentro de un arreglo y nos comparte un valor nuevo

// ************************************************************/

// // personas.forEach((elemento) => console.log(elemento));
// // if(elemento.id == 2){
// //   return elemento
// // }
// let persona = personas.find((elemento) => elemento.id == 2);

// /***************************Filter*********************************
//  * 
//  * Encuentra varios valores y regresa uun array con ellos

// ************************************************************/

// let personasFemenino = personas.filter((persona) => persona.sexo == "Femenino");

// /***************************Some*********************************
// Encuentra un valor dentro de un arreglo y nos regresa un true/false 

// true=para cuando existe el valor

// false = para cuando no existe
  
// ************************************************************/

// personas.some((persona) => persona.id == 3 && persona.nombre == "Chinese");

// console.log("existe");
