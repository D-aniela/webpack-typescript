import { Persona } from "../temas Base/interfaces";

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

interface resolveFinal {
  nombre: string;
  salario: number;
}

const getEmpleado = (id: number): Promise<Persona> => {
  return new Promise((resolve, reject) => {
    const Empleado = Personas.find((persona) => persona.id == id);

    if (!Empleado) {
      reject(`No se ha encontrado el usuario con id: ${id}`);
    }

    resolve(Empleado);
  });
};

const getSalario = (Empleado: Persona): Promise<resolveFinal> => {
  return new Promise((resolve, reject) => {
    const salarioEmpleado = Salario.find(
      (salario) => salario.id == Empleado.id
    );

    if (!salarioEmpleado) {
      reject(`No se encuentra salario para el empleado: ${Empleado.nombre}`);
    }

    resolve({
      nombre: Empleado.nombre,
      salario: salarioEmpleado.Salario,
    });
  });
};

getEmpleado(3)
  .then((resolve: any) => {
    console.log(`Ejecucion del resolve`);
    console.log(resolve);

    getSalario(resolve)
      .then((resolve: any) => {
        console.log(
          `El empleado: ${resolve.nombre} gana un salario de: ${resolve.salario}`
        );
      })
      .catch((reject: string) => console.log(reject));
  })
  .catch((reject: string) => {
    console.log(`Ejecucion del reject`);
    console.log(reject);
  });
