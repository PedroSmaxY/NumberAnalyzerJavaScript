let numbers = [];
let resultText = document.querySelector("#res ul");

function generate() {
  let numberInput = document.querySelector("#txtn").value;
  let listItem = document.createElement("li");

  if (isNaN(numberInput) || numberInput <= 0 || numberInput > 100) {
    window.alert("Please enter a valid number (between 1 and 100)!");
    return;
  } else {
    numberInput = parseInt(numberInput);
  }

  if (!numbers.includes(numberInput)) {
    numbers.push(Number(numberInput));

    let selectTab = document.querySelector("#seltab");
    let optionItem = document.createElement("option");
    optionItem.text = `Value ${numberInput} added`;

    if (typeof numberInput === "number") {
      selectTab.appendChild(optionItem);
    }
  } else {
    window.alert("Duplicate Value!");
  }

  document.querySelector("#txtn").value = "";
  document.querySelector("#txtn").focus();
}

function finish() {
  if (numbers.length === 0) {
    window.alert("No numbers have been added yet!");
    return;
  }

  numbers.sort();
  resultText.innerHTML = "";

  let highestValue = numbers[numbers.length - 1];
  let sum = 0;
  let smallestItem = document.createElement("li");
  let largestItem = document.createElement("li");
  let totalSumItem = document.createElement("li");
  let averageItem = document.createElement("li");
  let totalNumbersItem = document.createElement("li");
  let smallest = numbers[0];
  let largest = numbers[0];
  let totalNumbers = numbers.length;

  for (let pos in numbers) {
    sum += numbers[pos];
    if (numbers[pos] > largest) {
      largest = numbers[pos];
    }
    if (numbers[pos] < smallest) {
      smallest = numbers[pos];
    }
  }

  totalNumbersItem.innerHTML = `There are ${totalNumbers} registered numbers.`;
  resultText.appendChild(totalNumbersItem);
  largestItem.innerHTML = `The highest value entered was ${largest}.`;
  resultText.appendChild(largestItem);
  smallestItem.innerHTML = `The smallest value entered was ${smallest}.`;
  resultText.appendChild(smallestItem);
  totalSumItem.innerHTML = `Adding all values, we have ${sum}.`;
  resultText.appendChild(totalSumItem);
  averageItem.innerHTML = `The average of the entered values is ${
    sum / totalNumbers
  }.`;
  resultText.appendChild(averageItem);
}

function clearNumbers() {
  numbers = [];
  let selectTab = document.querySelector("#seltab");
  selectTab.innerHTML = `<option value="initial">Enter a value above</option>`;
  resultText.innerHTML = "";
  document.querySelector("#txtn").value = "";
  document.querySelector("#txtn").focus();
}
