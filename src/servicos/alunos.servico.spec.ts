import { AlunosServico } from './alunos.servico';

describe('Todos os alunos', () => {
  let alunosServico: AlunosServico;

  beforeEach(() => {
    alunosServico = new AlunosServico();
  });

  it('Obtendo lista de alunos', async () => {
    const alunos = await alunosServico.obterAlunos();
    expect(alunos.length).toBeGreaterThanOrEqual(0);
  });

  it('Adicionando um aluno', async () => {
    await alunosServico.adicionarAluno({
      nome: 'Teste',
      telefone: '2222',
      email: 'carlos@gmail.com',
      endereco: 'Rua A',
      cpf: '121212',
      dataNascimento: new Date(),
    });
    const alunos = await alunosServico.obterAlunos();
    const id = alunos.at(0)?.id;
    expect(alunos.at(0)?.nome).toEqual('Teste');
    await alunosServico.removerAluno(id as number);
  });

  it('Excluindo aluno', async () => {
    try {
      const alunos = await alunosServico.obterAlunos();
      const id = alunos.at(0)?.id;
      await alunosServico.removerAluno(id as number);
      const aluno = await alunosServico.obterAlunoPorId(id as number);
      expect(aluno).toBeNull();
    } catch (erro) {
      console.error(erro.statusText);
    }
  });

  it('Recuperando o aluno pelo id', async () => {
    try {
      const alunos = await alunosServico.obterAlunos();
      const id = alunos.at(0)?.id;
      const aluno = await alunosServico.obterAlunoPorId(id as number);
      expect(aluno).toBeTruthy();
    } catch (erro) {
      console.error(erro.statusText);
    }
  });
});
