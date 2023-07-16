/* Capturar 2 números 
e fazer as operações matemáticas
de soma, subtração, multiplicação,
divisão e resto da divisão. 

E para cada operação mostrar um alerta com o resultado*/

let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));

let sum = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let restDiv = number1 % number2;

//mostrando um resultado por vez
// alert(`A soma dos números é: ${sum}`);
// alert(`A subtração dos números é: ${sub}`);
// alert(`A multiplicação dos números é: ${mult}`);
// alert(`A divisção dos números é: ${div}`);
// alert(`O resto da divisão dos números é: ${restDiv}`);

//mostrando todos os resultados ao mesmo tempo
alert(`A soma dos números é: ${sum}
A subtração dos números é: ${sub}
A multiplicação dos números é: ${mult}
A divisção dos números é: ${div}
O resto da divisão dos números é: ${restDiv}
`);
