import { AlunosServico } from './alunos.servico';

describe('Todos os alunos', () => {
  let alunosServico: AlunosServico;

  beforeEach(() => {
    alunosServico = new AlunosServico();
  });

  it('Obtendo lista de alunos vazia', async () => {
    const alunos = await alunosServico.obterAlunos();
    expect(alunos.length).toEqual(0);
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
    expect(alunos.length).toEqual(1);
  });
});
