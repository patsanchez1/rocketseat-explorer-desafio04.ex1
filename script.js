/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let studentList = [
  {
    nome: "Julia",
    nota1: 8,
    nota2: 9,
  },
  {
    nome: "Ana",
    nota1: 5,
    nota2: 6,
  },
  {
    nome: "Paula",
    nota1: 3,
    nota2: 10,
  },
];

//só criei a função que retorna média
function averageStudents(student) {
  return (student.nota1 + student.nota2) / 2;
}

//processamento da função, percorrendo a lista
for (let student of studentList) {
  const media = averageStudents(student);

  if (media >= 7) {
    alert(`A média do aluno(a) ${student.nome} é ${media}
    Parabéns, ${student.nome}, você foi aprovado no concurso!`);
  } else {
    alert(`A média do aluno(a) ${student.nome} é ${media}
    Não foi dessa vez ${student.nome}, tente novamente!`);
  }
}
