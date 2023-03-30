import { describe, expect, it } from "bun:test";
import { convertNumberToWord } from "./main.js";

describe("main", () => {
  it("should have a function called convertNumberToWord", () => {
    expect(convertNumberToWord).toBeDefined();
  });

  describe("exception handling", () => {
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

  describe("conversion in the single digits", () => {
    it("should convert a number as a single digit if its length equals 1", () => {
      expect(convertNumberToWord(0)).toEqual("zero");
    });

    it("should convert the numbers from 0 to 9", () => {
      const results = [
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
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
    it("should convert all numbers in the teens up to 19", () => {
      const results = [
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
      const numbers = [10,11,12,13,14,15,16,17,18,19];
      numbers.forEach((num, index) => {
        console.log("num", num);
        console.log("index", results[index]);
        
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
  });
});
