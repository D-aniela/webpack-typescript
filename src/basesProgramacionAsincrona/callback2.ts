import { Alumno, Carrera, CentroEstudio } from "../temas Base/interfaces";
/********Problemas**********
 1.-Aplicar Interfaces a cada Arreglo

 2.- Nombre de la carrera en la cual estudia el alumno con id 2

 3.- Nombre del centro a la cual pertenece la carrera Nutricion

 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.


 Nota: cree las funciones necesarias, implementado callbacks como en el ejemplo del salario.
        Aunque en los problemas maneje un  dato objetivo, tiene que tener validación para
        los casos en el que el dato no exista

******************/
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
/************************************************************

************************************************************/

let getAlumno = (id: number, callback: Function) => {
  // debugger;
  let alumnosDB = alumno.find((Alumno) => Alumno.id == id);

  !alumnosDB ? callback(`Alumno: ${id}`) : callback(null, alumnosDB);
  console.log(alumnosDB);
};

let getCarrera = (alumno: Alumno, callback: Function) => {
  let carreraDB = carrer.find((carrer) => carrer.idCarrera == alumno.id);

  !carreraDB
    ? callback(`No se encontro carrera de ${alumno.Nombre}`)
    : callback(null, {
        Nombre: alumno.Nombre,
        carrera: carreraDB.carrera,
      });
};

getAlumno(2, (err: null | string, alumno: Alumno) => {
  if (err) {
    return console.error(err);
  }
  getCarrera(alumno, (err: any, resp: any) => {
    if (err) {
      console.log(err);
      return;
    }

    console.info(`La carrera de ${resp.Nombre} es ${resp.carrera}`);
  });
});
/************************************************************
 3.- Nombre del centro a la cual pertenece la carrera Nutricion
************************************************************/
let getCentro = (id: number, callback: Function) => {
  let estudiosDB = estudios.find((CentroEstudio) => CentroEstudio.id == id);

  !estudiosDB ? callback(`Carrera ${id}`) : callback(null, estudiosDB);
};

let getEstudio = (centro: CentroEstudio, callback: Function) => {
  let NutricionDB = estudios.find((estudios) => estudios.id == centro.id);

  !NutricionDB
    ? callback(`No se encontro carrera de ${centro.Nombre}`)
    : callback(null, {
        Centro: centro.Nombre,
        CentroEstudio: NutricionDB.id,
      });
};

getCentro(2, (err: null | string, centro: CentroEstudio) => {
  if (err) {
    return console.error(err);
  }
  getEstudio(centro, (err: any, resp: any) => {
    if (err) {
      console.log(err);
      return;
    }
    console.info(`La carrera pertenece al centro de ${resp.Centro}`);
  });
});

/************************************************************
 4.- Nombre del centro al cual pertenece la carrera del alumno Victor Lemus.
************************************************************/
getAlumno(4, (err: null | string, alumno: Alumno) => {
  // debugger;
  if (err) {
    return console.error(err);
  }
  getCarrera(alumno, (err: any, resp: any) => {
    if (err) {
      return console.error(err);
    }
    getCentro(alumno.idCarrera, (err: null | string, centro: CentroEstudio) => {
      if (err) {
        return console.error(err);
      }
      getEstudio(centro, (err: any, resp: any) => {
        if (err) {
          console.log(err);
          return;
        }
        console.info(
          `La carrera ${resp.carrera} del alumno ${resp.Nombre} pertenece al centro de ${resp.Centro}`
        );
      });
    });
  });
});
