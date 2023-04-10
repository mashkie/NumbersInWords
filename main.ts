import { singleDigits, teens, tens } from "./constants.js";

export function convertNumberToWord(numberInput: number): string {
  numberInput = +numberInput;

  _handleExceptions(numberInput);

  let numberAsWord = "";

  if (numberInput === 0) {
    return "zero";
  }

  if (numberInput >= 1000000) {
    numberAsWord +=
      convertNumberToWord(Math.floor(numberInput / 1000000)) + " million ";
    numberInput %= 1000000;
  }

  if (numberInput >= 1000) {
    numberAsWord +=
      convertNumberToWord(Math.floor(numberInput / 1000)) + " thousand ";
    numberInput %= 1000;
  }

  if (numberInput >= 100) {
    numberAsWord += singleDigits[Math.floor(numberInput / 100)] + " hundred ";
    numberInput %= 100;
  }

  if (numberInput >= 10 && numberInput <= 19) {
    numberAsWord += teens[numberInput - 10];
    return numberAsWord.trim();
  }
  if (numberInput >= 20) {
    numberAsWord += tens[Math.floor(numberInput / 10)] + " ";
    numberInput %= 10;
  }
  if (numberInput > 0) {
    numberAsWord += singleDigits[numberInput];
  }
  return numberAsWord.trim();
}

function _handleExceptions(numberInput: number) {
  if (isNaN(numberInput)) {
    throw new Error("The number has to be a valid integer");
  }
  if (numberInput < 0 || numberInput > 999999999) {
    throw new Error("Number has to be positive and be bellow 999.999.999");
  }
  if (numberInput % 1 !== 0) {
    throw new Error("Number can not contain a decimal point");
  }
}

// cli menu to input the number to convert
