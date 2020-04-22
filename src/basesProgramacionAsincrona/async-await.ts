import { Salario, Persona } from "../temas Base/interfaces";

const GetNombre = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    // console.log(`Me estoy resolviendo`);
    if (true) {
      resolve("Laura Daniela");
    } else {
      reject(new Error("No hay usuarios"));
    }
  });
};

async function saludos() {
  console.log('Ejecutandose funcion Async "saludos"');

  let nombreRespuesta: string | undefined = undefined;

  //   GetNombre().then((nombre: string) => {
  //     nombreRespuesta = nombre;
  //     console.log(`Apenas me resolví`);
  //   });

  //   se utiliza para que nombreRespuesta espere y luego seguir ejecutando
  nombreRespuesta = await GetNombre();

  //   prueba();

  if (nombreRespuesta == undefined) {
    throw new Error(`Nombre del usuario con valor indefinido`);
  }
  return `Hola usuario: ${nombreRespuesta}`;
}

// function prueba() {
//   let suma = 2 + 2;
//   console.log(suma);
// }

// saludos()
//   .then((valor: string) => {
//     console.log(valor);
//   })
//   .catch((error: Error) => {
//     console.log(error.message);
//   });

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

/*al agregarle async, se convierte en una promesa*/

const GetEmpleado = async (id: number) => {
  const empleado = Personas.find((persona) => persona.id === id);

  if (!empleado) {
    throw new Error(`Empleado con id ${id}, no existe en la base de datos`);
  } else {
    return empleado;
  }
};

const GetSalario = async (empleado: Persona) => {
  const SalarioEmpleado = Salario.find((salario) => salario.id == empleado.id);

  if (!SalarioEmpleado) {
    throw new Error(
      `El empleado con id: ${empleado.id}, no cuenta con un salario registrado`
    );
  } else {
    return {
      nombre: empleado.nombre,
      salario: SalarioEmpleado.Salario,
    };
  }
};
/* Es lo mismo que escrcibir el codigo anterior*/

// function GetEmpleado(id:number){
//     return new Promise((res, rej)=>{
//         const empleado = Personas.find((persona)=>persona.id ===id);

//         if(!empleado){
//             rej(new Error(``))
//         }else{
//             res(empleado)
//         }
//     })
// }

const GetInformacion = async (id: number) => {
  const empleado = await GetEmpleado(id);
  const response = await GetSalario(empleado);

  return `El empleado con ${response.nombre}, gana un salario de $${response.salario}`;
};

GetInformacion(3)
  .then((mensaje: string) => console.info(mensaje))
  .catch((err: Error) => console.log(err.message));
