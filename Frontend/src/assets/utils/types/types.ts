export interface ITrainingData {
  id?: string;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

export interface IData {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

export interface IMuscle {
  id: number;
  muscle: string;
}

export interface IExcersiseObject {
  id: number;
  excercise: string;
}

export interface IActivePage {
  login: boolean;
  landing: boolean;
  create: boolean;
}

export interface ICreateInputs {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
