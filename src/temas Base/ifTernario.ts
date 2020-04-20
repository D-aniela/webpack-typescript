// const NumeroRandom = Math.floor(Math.random() * 10);

// if (NumeroRandom >= 6) {
//   alert(`Pasaste con calificacion ${NumeroRandom}`);
// } else {
//   alert(`No pasaste con calificación ${NumeroRandom}`);
// }

// Ternario Básico
// NumeroRandom > 6
//   ? alert(`Pasaste con calificacion ${NumeroRandom}`)
//   : alert(`No pasaste con calificación ${NumeroRandom}`);

let numero = 11;

// let numeroObtenido = numero == 5 ? "Cinco" : null;

let numeroObtenido =
  numero == 5
    ? "Cinco"
    : numero == 7
    ? "Siete"
    : numero == 11
    ? "Once"
    : "Es otro número";

// Lo de arriba es lo mismo que lo de abajo solo que en una linea

if (numero == 5) {
  numeroObtenido = "Cinco";
} else if (numero == 7) {
  numeroObtenido = "Siete";
} else if (numero == 11) {
  numeroObtenido = "Once";
} else {
  numeroObtenido = "Es otro número";
}

// console.log(numeroObtenido);
/*
== ===
!= !==
>= >==
<= <==
*/

let x: number = 80;
let y: number = 80;
x === y
  ? alert("los valores sin operador restrictivo son iguales")
  : alert("los valores con operador restrictivo no son iguales");
