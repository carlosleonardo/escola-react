import { Pessoa } from './pessoa.model';

export interface Aluno extends Pessoa {
  matricula: number;
}
