import { Alumno, Carrera, CentroEstudio } from "../temas Base/interfaces";

let alumno: Array<Alumno> = [
  {
    id: 1,
    Nombre: "Alicia Villareal",
    idCarrera: 3,
  },
  {
    id: 2,
    Nombre: "Blanca Díaz",
    idCarrera: 2,
  },
  {
    id: 3,
    Nombre: "Daniel Palacios",
    idCarrera: 4,
  },
  {
    id: 4,
    Nombre: "Victor Lemus",
    idCarrera: 1,
  },
  {
    id: 5,
    Nombre: "Karen Sanchez",
    idCarrera: 5,
  },
];

let carrer: Array<Carrera> = [
  {
    idCarrera: 1,
    carrera: "Mercadotecnia",
    idCentroEstudios: 1,
  },
  {
    idCarrera: 2,
    carrera: "Historia",
    idCentroEstudios: 3,
  },
  {
    idCarrera: 3,
    carrera: "Nutricion",
    idCentroEstudios: 2,
  },
  {
    idCarrera: 4,
    carrera: "Tics",
    idCentroEstudios: 1,
  },
];

let estudios: Array<CentroEstudio> = [
  {
    id: 1,
    Nombre: "Ciencias y tecnologias",
  },
  {
    id: 2,
    Nombre: "Salud",
  },
];
/********Problemas**********
 1.-Aplicar Interfaces a cada Arreglo

 2.- Nombre de la carrera en la cual estudia el alumno con id 2

 3.- Nombre del centro a la cual pertenece la carrera Nutricion

 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.


 Nota: cree las funciones necesarias, implementado callbacks como en el ejemplo del salario.
        Aunque en los problemas maneje un  dato objetivo, tiene que tener validación para
        los casos en el que el dato no exista

******************/
const getAlumno = async (id: number) => {
  let alumnoDB = alumno.find((Alumno) => Alumno.id === id);

  if (!alumnoDB) {
    throw new Error(`Alumno con ${id} no existe`);
  } else {
    return alumnoDB;
  }
};

const getCarrera = async (alumno: Alumno) => {
  let carreraDB = carrer.find((carrer) => carrer.idCarrera == alumno.id);

  if (!carreraDB) {
    throw new Error(`No se encontro carrera de ${alumno.Nombre}`);
  } else {
    return {
      Nombre: alumno.Nombre,
      carrera: carreraDB.carrera,
    };
  }
};

const getInformacion = async (id: number) => {
  const alumno = await getAlumno(id);
  const response = await getCarrera(alumno);

  return `El alumno ${response.Nombre}, estudia la carrera de ${response.carrera}`;
};

getInformacion(2)
  .then((mensaje: string) => console.info(mensaje))
  .catch((err: Error) => console.log(err.message));

/************************************************************
   Nombre del centro a la cual pertenece la carrera Nutricion
************************************************************/

const getCentro = async (id: number) => {
  let estudioDB = estudios.find((CentroEstudio) => CentroEstudio.id === id);

  if (!estudioDB) {
    throw new Error(
      `Carrera con id ${id} no pertenece a algún centro de estudio`
    );
  } else {
    return estudioDB;
  }
};

const getEstudio = async (centro: CentroEstudio) => {
  let nutricionDB = estudios.find((estudios) => estudios.id === centro.id);

  if (!nutricionDB) {
    throw new Error(`No se encontro carrera de ${centro.Nombre}`);
  } else {
    return {
      Centro: centro.Nombre,
      Estudio: nutricionDB.id,
    };
  }
};

const getDatos = async (id: number) => {
  const centro = await getCentro(id);
  const response = await getEstudio(centro);

  return `La carrera pertenece al centro de ${response.Centro}`;
};

getDatos(2)
  .then((mensaje: string) => console.info(mensaje))
  .catch((err: Error) => console.log(err.message));

/************************************************************
  Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.
  ************************************************************/

const getCentroD = async (id: number, id2: number) => {
  const alumno = await getAlumno(id);
  const responseA = await getCarrera(alumno);
  const centro = await getCentro(id2);
  const responseB = await getEstudio(centro);

  return `La carrera ${responseA.carrera} que cursa el alumno ${responseA.Nombre} 
  pertenece al centro de ${responseB.Centro}`;
};

getCentroD(4, 1)
  .then((mensaje: string) => console.info(mensaje))
  .catch((err: Error) => console.log(err.message));
