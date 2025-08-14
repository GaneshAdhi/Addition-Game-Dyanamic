let firstRandomNumber = Math.ceil(Math.random() * 100);
let secondRandomNumber = Math.ceil(Math.random() * 100);

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let inputElement = document.getElementById("userInput");
let para = document.getElementById("gameResult");

let inputValue = parseInt(inputElement.value);
let value1 = firstNumber.textContent = firstRandomNumber;
let value2 = secondNumber.textContent = secondRandomNumber;
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";


function checkResult() {
    let valueFirst = parseInt(value1);
    let valueSecond = parseInt(value2);
    let inputValue = parseInt(inputElement.value);
    let ans = valueFirst + valueSecond;

    if (ans === inputValue) {
        para.textContent = successMessage;
        para.style.backgroundColor = "#028a0f";
    } else {
        para.textContent = tryAgainMessage;
        para.style.backgroundColor = "#1e217c";
    }
}

function restartButton() {
    para.textContent = "";
    inputElement.value = "";

}
