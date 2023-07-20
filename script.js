let numeros = [];
let texto = document.querySelector("#res ul");

function gerar() {
  let numeroInput = document.querySelector("#txtn").value;
  let item = document.createElement("li");
  if (isNaN(numeroInput) || numeroInput <= 0 || numeroInput > 100) {
    window.alert("Digite um número válido (entre 1 e 100)!");
    return;
  } else {
    numeroInput = parseInt(numeroInput);
  }

  if (!numeros.includes(numeroInput)) {
    numeros.push(Number(numeroInput));

    let tab = document.querySelector("#seltab");
    let itens = document.createElement("option");
    itens.text = `Valor ${numeroInput} adicionado`;

    if (typeof numeroInput === "number") {
      tab.appendChild(itens);
    }
  } else {
    window.alert("Valor Repetido!");
  }

  document.querySelector("#txtn").value = "";
  document.querySelector("#txtn").focus();
}

function finalizar() {
  if (numeros.length === 0) {
    window.alert("Nenhum número foi adicionado ainda!");
    return;
  }

  numeros.sort();
  texto.innerHTML = "";

  let maiorValor = numeros[numeros.length - 1];
  let soma = 0;
  let menorItem = document.createElement("li");
  let maiorItem = document.createElement("li");
  let somaTotal = document.createElement("li");
  let mediaTotal = document.createElement("li");
  let todo = document.createElement("li");
  let menor = numeros[0];
  let maior = numeros[0];
  let tot = numeros.length;
  for (let pos in numeros) {
    soma += numeros[pos];
    if (numeros[pos] > maior) {
      maior = numeros[pos];
    }
    if (numeros[pos] < menor) {
      menor = numeros[pos];
    }
  }
  todo.innerHTML = `Ao todo temos ${tot} números cadastrados.`;
  texto.appendChild(todo);
  maiorItem.innerHTML = `O maior valor informado foi ${maior}.`;
  texto.appendChild(maiorItem);
  menorItem.innerHTML = `O menor valor informado foi ${menor}.`;
  texto.appendChild(menorItem);
  somaTotal.innerHTML = `Somando todos os valores temos ${soma}.`;
  texto.appendChild(somaTotal);
  mediaTotal.innerHTML = `A média dos valores digitados é ${soma / tot}.`;
  texto.appendChild(mediaTotal);
}

function limpar() {
  numeros = [];
  let select = document.querySelector("#seltab");
  select.innerHTML = `<option value="initial">Digite um valor acima</option>`;
  texto.innerHTML = "";
  document.querySelector("#txtn").value = "";
  document.querySelector("#txtn").focus();
}
