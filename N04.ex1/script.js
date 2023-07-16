/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));

let sum = Number(number1 + number2);
let sub = Number(number1 - number2);
let mult = Number(number1 * number2);
let div = Number(number1 / number2).toFixed(2);
let restDiv = Number(number1 % number2);

// alert(`A soma dos dois números é ${sum}`);
// alert(`A subtração dos dois números é ${sub}`);
// alert(`A multiplicação dos dois números é ${mult}`);
// alert(`A divisão dos dois números é ${div}`);
// alert(`O resto da divisão dos dois números é ${restDiv}`);

alert(`A soma dos dois números é ${sum}
A subtração dos dois números é ${sub}
A multiplicação dos dois números é ${mult}
A divisão dos dois números é ${div}
O resto da divisão dos dois números é ${restDiv}
`);

if (sum % 2 == 0) {
  alert(`O resultado é par ${sum}`);
} else {
  alert(`O resultado é ímpar ${sum}`);
}

if (number1 === number2) {
  alert(`Os números são iguais`);
} else {
  alert(`Os números são diferentes`);
}
