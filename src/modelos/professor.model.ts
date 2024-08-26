import { Pessoa } from './pessoa.model';

export interface Professor extends Pessoa {
  id?: number;
  idDisciplina: number;
}
