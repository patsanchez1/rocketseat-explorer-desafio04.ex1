/* 
  Solicita 2 números, faça a soma deles
  e apresente o resultado final ao usuário

  Obs. o prompt lê String e concatena, então preciso tranformar em número para somar, usando a função Number
*/

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));

let sum = number1 + number2;

// alert("A soma dos números que você digitou é: " + sum);

alert(`A soma dos números que você digitou é ${sum}`);
