import { Pessoa } from './pessoa.model';

export interface Professor extends Pessoa {
  matricula: number;
  idDisciplina: number;
}
