import { Persona } from "../temas Base/interfaces";

const Arreglo4: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Arreglo4.forEach(function (elemento) {
  console.log(elemento);
});

function primerFuncion(segundaFuncion: Function) {
  alert("Primero ejectuo primerFuncion y despues segunda Funcion");
  segundaFuncion();
}

function segundaFuncion() {
  alert("Hola se ejecutó la segunda función");
}
/***************************2 ejercicio Callback*********************************
  
************************************************************/
function userName(saludarUserName: Function) {
  let name = prompt("Ingrese su nombre");
  saludarUserName(name);
}

function saludarUserName(nombre: string) {
  alert(`Hola ${nombre}`);
}

// userName(saludarUserName);

/***************************3 ejercicio*********************************

************************************************************/

function suma(a: number, b: number, callback: Function) {
  let resultado = a + b;
  mostrarResultado(resultado);
}
function mostrarResultado(resultado: number) {
  resultado > 10 ? alert("Pasaste materia") : alert(`Reprobaste la materia`);
}
// suma(7, 10, mostrarResultado);

/************************************************************
Uso intermedio CallBack
************************************************************/

let Salario: Array<any> = [
  {
    id: 1,
    Salario: 5000,
  },
  {
    id: 2,
    Salario: 10000,
  },
  {
    id: 3,
    Salario: 2000,
  },
  {
    id: 4,
    Salario: 4000,
  },
];

// const button = document.querySelector(`#BtnEjecutar`);
// button?.addEventListener("click", eliminarUsuarios);

function eliminarUsuarios(Nombre: string, callback: Function) {
  let longitudInicial = Personas.length;
  // const InputNombreEliminado = <HTMLInputElement>(
  //   document.querySelector(`#NombreUsuario`)
  // );
  // let nombreEliminar = InputNombreEliminado.value.toLowerCase().trim();

  Personas = Personas.filter(
    (persona) => persona.nombre.toLowerCase() != Nombre
  );

  if (longitudInicial == Personas.length) {
    callback(true, Nombre);
  } else {
    callback(null, Nombre);
  }
}

function mostrarUsuariosTabla(err: string | null, resultado: boolean) {
  if (err) {
    console.error(
      `El usuario con nombre: ${resultado}, no existe en la base de datos`
    );
    return;
  }
  const tbody = document.querySelector(`#tbody`);

  Personas.forEach((persona) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `

    <td>${persona.id}</td>
    <td>${persona.nombre}</td>
    <td>${persona.edad}</td>
    <td>${persona.sexo}</td>

    `;

    tbody?.appendChild(tr);
  });
}

let Personas: Array<Persona> = [
  {
    id: 1,
    nombre: "Jose Carlos",
    edad: 23,
    sexo: "M",
  },
  {
    id: 2,
    nombre: "Manuel Alejandro",
    edad: 26,
    sexo: "M",
  },
  {
    id: 3,
    nombre: "Daniela Estrada",
    edad: 26,
    sexo: "F",
  },
  {
    id: 4,
    nombre: "Laura Rubalcava",
    edad: 25,
    sexo: "F",
  },
  {
    id: 5,
    nombre: "Maria Fernanda",
    edad: 22,
    sexo: "F",
  },
];

let getEmpleado = (id: number, callback: Function) => {
  // debugger;
  let empleadoDB = Personas.find((empleado) => empleado.id === id);

  // Me puede enviar un false o undefined
  if (!empleadoDB) {
    callback(`No existe un empleado con ID ${id}`);
  }
};

let getSalario = (empleado: Persona, callback: Function) => {
  let salarioDB = Salario.find((salario) => salario.id == empleado.id);

  if (!salarioDB) {
    callback(`No se encontró un salario para usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
    });
  }
};

// getEmpleado(3, (err: null | string, empleado: Persona) => {
//   if (err) {
//     return console.error(err);
//   }
//   getSalario(empleado, (err: any, resp: any) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     // debugger;
//     console.info(`El salario de ${resp.nombre} es de ${resp.salario}`);
//   });
// });

/***************************Callbacks asincronos*********************************

************************************************************/
function functionsegundaFuncion() {
  console.log(`Se ejecuta segunda funcion`);
}

function getEmpleadoAsincrono(id: number, callback: Function) {
  setTimeout(() => {
    const Empleado = Personas.find((persona) => persona.id == id);

    if (!Empleado) {
      callback(`No existe empleado con tal id`);
    } else {
      callback(null, Empleado);
    }
  }, 2000);
}

getEmpleadoAsincrono(6, (error: string | null, empleado: Persona) => {
  if (error) {
   return console.log(error);
  }
  console.log(empleado);
});

segundaFuncion();
