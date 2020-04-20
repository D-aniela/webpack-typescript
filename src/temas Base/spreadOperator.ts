import {Persona} from './interfaces'
/***************************Spread Arrays*********************************

************************************************************/

const arreglo1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arreglo1);

const arreglo2 = [8, 9, 10];

// Se muestra el arreglo junto ...
// const arreglo3 = [...arreglo1, ...arreglo2];
// numeros, arreglos y objetos OPERADOR DE PROPAGACION

/*Codigo que estamos simplificando*/

// let arreglo4 = [];
// for(let i=0; i<arreglo1.length, i++){
//     arreglo4.push(arreglo1[i])
// }

const arreglo3 = [...arreglo1, ...arreglo2, 11, 12, 13];

const arreglo4 = [...arreglo3, "Hola mundo"];

/***************************Spread objects*********************************

************************************************************/

// const ObjetoPersona1: Persona = {
//   nombre: "Jose Carlos",
//   apellido: "Gonzalez",
//   edad: 23,
//   sexo: "Masculino",
//   estatura:1.75,
// };
// const objetoPersona2 = { ...ObjetoPersona1, nombre: "Sergio" };
// console.log(objetoPersona2);

function SumarValores(x?: number, y?: number, z?: number) {
  let suma = x! + y! + z!;
  console.log(suma);
}

// SumarValores(arreglo1[0], arreglo1[1], arreglo1[2]);
SumarValores(...arreglo2);
