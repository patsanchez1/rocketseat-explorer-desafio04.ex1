/* 
  Solicitar o nome do aluno e as 3 notas do bimestre
  calcular a média daquele aluno

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu
  melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt("Qual o nome do aluno?");
let grade1 = Number(prompt("Qual a primeira nota?"));
let grade2 = Number(prompt("Qual a segunda nota?"));
let grade3 = Number(prompt("Qual a terceira nota?"));

let average = Number((grade1 + grade2 + grade3) / 3).toFixed(2);

if (average >= 6) {
  alert(`Parabéns ${studentName} você passou! Sua média foi de ${average}`);
} else {
  alert(
    `${studentName} infelizmente você terá de estudar mais para a prova de recuperação! Sua média foi de ${average}`
  );
}
