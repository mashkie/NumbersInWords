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

    it("should throw an error if a string was passed which is not convert able to a number", () => {
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

  describe("conversion till 999", () => {
    it("should convert the number 0", () => {
      expect(convertNumberToWord(0)).toEqual("zero");
    });

    it("should convert the numbers from 1 to 9", () => {
      const results = [
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
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
    it("should convert all numbers in the tens up to 90", () => {
      const results = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      const numbers = [20, 30, 40, 50, 60, 70, 80, 90];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
    it("should convert all numbers in the hundreds up to 900", () => {
      const results = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
      ];
      const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
    it("should convert numbers in between", () => {
      const results = [
        "twenty one",
        "thirty two",
        "fourty three",
        "fifty four",
        "one hundred one",
        "two hundred twenty two",
        "three hundred thirty three",
        "nine hundred ninety nine",
      ];
      const numbers = [21, 32, 43, 54, 101, 222, 333, 999];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
  });
  describe("conversions in the thousands", () => {
    it("should call itself recursively until the number in the thousands is converted", () => {
      const results = [
        "one thousand",
        "two thousand one",
        "three thousand sixteen",
        "four thousand twenty one",
        "five thousand one hundred one",
        "six thousand two hundred twelve",
        "six thousand two hundred twenty two",
        "seven thousand three hundred thirty three",
        "nine thousand nine hundred ninety nine",
      ];
      const numbers = [1000, 2001, 3016, 4021, 5101, 6212, 6222, 7333, 9999];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
  });
  describe("conversions in the millions", () => {
    it("should call itself recursively until the number in the millions is converted", () => {
      const results = [
        "one million",
        "two million one",
        "three million sixteen",
        "four million two hundred twenty one",
        "five million six thousand eight hundred ninety nine",
        "twenty one million one hundred sixty seven thousand eight hundred ninety one",
        "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine",
        "nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine",
      ];
      const numbers = [1000000, 2000001, 3000016, 4000221, 5006899, 21167891, 123456789, 999999999];
      numbers.forEach((num, index) => {
        expect(convertNumberToWord(num)).toEqual(results[index]);
      });
    });
  });
});
