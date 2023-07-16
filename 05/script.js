/*
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 itens, imprima-0s, separando por vírgula.
*/

//item = variavel de controle que esta começando com zero
// variável item que inicia em 0, enquanto item menor que 10; vá acrescentando mais 1

let items = [];

//variável que inicia em 0 dentro do for
//para cada item enquanto for menor que 10, vá carescentando mais 1
for (let item = 0; item < 10; item++) {
  //nova variável para guardar o nome dos itens que o user digitar
  //prompt pergunta o nome e o user digita, e guarda na variavel itemName que vai guardando no item + 1
  let itemName = prompt("Digite o nome do item " + (item + 1));

  items[item] = itemName;
}

alert(items);
