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
});
