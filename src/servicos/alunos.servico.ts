import axios from 'axios';
import { Aluno } from 'src/modelos/aluno.model';

export class AlunosServico {
  private url = 'http://localhost:3000/alunos';
  private conexao = axios.create({
    baseURL: this.url,
  });

  async obterAlunos(): Promise<Aluno[]> {
    return (await this.conexao.get<Aluno[]>('/')).data;
  }

  async adicionarAluno(aluno: Aluno): Promise<Aluno> {
    return (await this.conexao.post<Aluno>('/', aluno)).data;
  }
}
