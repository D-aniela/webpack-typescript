// iniciar una interfaz

export interface Persona {
  // Estructurar la interface
  id: number;
  nombre: string;
  edad: number;
  sexo: string;
}

export interface Salario {
  id: number;
  salario: number;
}

export interface Alumno {
  id: number;
  Nombre: string;
  idCarrera: number;
}

export interface Carrera {
  idCarrera: number;
  carrera: string;
  idCentroEstudios: number;
}

export interface CentroEstudio {
  id: number;
  Nombre: string;
}
