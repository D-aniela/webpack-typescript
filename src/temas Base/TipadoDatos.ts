let variable1: number = 0;
let variable2: string = "Hola Mundo";
let variable3: boolean = true;

// Tipificacion de datos numericos
// let Array1: Array<string | number> = [123, 2, 4, 6, "a", "b"];

let Array1: Array<string> = ["a", "b"];

function Numerica(x: number, y: number): number | null {
  let resultado: number = x + y;

  //   if (isNaN(resultado)) {
  //     return null;
  //   }
  return resultado;
}

const btnEjecutar: HTMLElement = document.getElementById("BtnEjecutar")!;

btnEjecutar.addEventListener("click", CalcularEdadCasarse);

function CalcularEdadCasarse() {
  const inputEdadUsuario: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("edadUsuario")
  );

  const edadUsuario: number = Number(inputEdadUsuario.value);

  let resultado: number = edadUsuario + 20;

  const outputElement: HTMLDivElement = <HTMLDivElement>(
    document.querySelector("#output")
  );

  outputElement.innerText = `Te vas a casar a los ${resultado}`;
}
