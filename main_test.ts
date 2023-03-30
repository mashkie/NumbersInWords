import { describe, expect, it } from "bun:test";
import { convertNumberToWord } from "./main.js";

describe("main", () => {
  it("should have a function called convertNumberToWord", () => {
    expect(convertNumberToWord).toBeDefined();
  });
  it("should take a number as an input and return it as a string", () => {
    expect(convertNumberToWord(0)).toEqual("zero");
  });
  it("should not through an error if a string is passed which can be converted to a number", () => {
    expect(convertNumberToWord("0")).toEqual("zero");
  });
  it("should throw an error if a string was passed which is not convertable to a number", () => {
    expect(() => {
      convertNumberToWord("1EUR");
    }).toThrow("The number has to be a valid integer");
  });
  it("should throw an error if the number is bellow 0", () => {
    expect(() => {
      convertNumberToWord(-1);
    }).toThrow("Number has to be positive and be bellow 999.999.999");
  });
  it("should throw an error if the number is above 999 999 999", () => {
    expect(() => {
      convertNumberToWord(1000000000);
    }).toThrow("Number has to be positive and be bellow 999.999.999");
  });
  it("should throw an error if the number contains a decimal point", () => {
    expect(() => {
      convertNumberToWord(1.1);
    }).toThrow("Number can not contain a decimal point");
  });
});
