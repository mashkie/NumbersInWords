export function convertNumberToWord(numberInput: number): string {
  numberInput = +numberInput;
  if (isNaN(numberInput))
    throw new Error("The number has to be a valid integer");
  if (numberInput < 0 || numberInput > 999999999)
    throw new Error("Number has to be positive and be bellow 999.999.999");
  if (numberInput % 1 !== 0)
    throw new Error("Number can not contain a decimal point");
  return "zero";
}
