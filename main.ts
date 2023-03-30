export function convertNumberToWord(numberInput: number): string {
  numberInput = +numberInput;
  if (isNaN(numberInput))
    throw new Error("The number has to be a valid integer");
  if (numberInput < 0 || numberInput > 999999999)
    throw new Error("Number has to be positive and be bellow 999.999.999");
  if (numberInput % 1 !== 0)
    throw new Error("Number can not contain a decimal point");

  const numberLength = numberInput.toString().length;
  const singleDigits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  if (numberLength === 1) {
    return singleDigits[numberInput.toString().charCodeAt(0) - 48];
  }
  return "zero";
}
