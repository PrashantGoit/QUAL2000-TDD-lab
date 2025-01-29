///// Import Required Modules
const {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
  } = require("../lab-TDD-starter");
  
  const { describe, test } = require("node:test");
  const assert = require("node:assert");
  
  ///// Test Suite
  describe("Lab-TDD test cases", () => {
  
    // Addition Tests
    describe("Addition Function", () => {
      test("Adding 3 and 5 should give 8 as the result", () => {
        assert.strictEqual(add(3, 5), 8);
      });
      test("Adding 11 and 10 should equal 21", () => {
        assert.strictEqual(add(11, 10), 21);
      });
    });
  
    // Subtraction Tests
    describe("Subtraction Function", () => {
      test("Subtracting 9 from 5 should result in -4", () => {
        assert.strictEqual(subtract(5, 9), -4);
      });
      test("Subtracting 10 from 20 should leave 10", () => {
        assert.strictEqual(subtract(20, 10), 10);
      });
    });
  
    // Multiplication Tests
    describe("Multiplication Function", () => {
      test("Multiplying 12 by 9 should give 108", () => {
        assert.strictEqual(multiply(12, 9), 108);
      });
      test("Multiplying 10 by 7 should return 70", () => {
        assert.strictEqual(multiply(10, 7), 70);
      });
    });
  
    // Division Tests
    describe("Division Function", () => {
      test("32 divided by 8 should result in 4", () => {
        assert.strictEqual(divide(32, 8), 4);
      });
      test("Dividing by zero should throw an error", () => {
        assert.throws(() => divide(10, 0), Error);
      });
    });
  
    // Modulus Tests
    describe("Modulus Function", () => {
      test("17 divided by 4 should leave a remainder of 1", () => {
        assert.strictEqual(modulas(17, 4), 1);
      });
      test("22 divided by 5 should leave a remainder of 2", () => {
        assert.strictEqual(modulas(22, 5), 2);
      });
    });
  
    // Power Tests
    describe("Power Function", () => {
      test("2 raised to the power of 5 should be 32", () => {
        assert.strictEqual(power(2, 5), 32);
      });
      test("3 squared should be 9", () => {
        assert.strictEqual(power(3, 2), 9);
      });
    });
  
    // Square Root Tests
    describe("Square Root Function", () => {
      test("The square root of 25 should be 5", () => {
        assert.strictEqual(squareRoot(25), 5);
      });
      test("Trying to take the square root of a negative number should throw an error", () => {
        assert.throws(() => squareRoot(-3), Error);
      });
    });
  
    // Floor Function Tests
    describe("Floor Function", () => {
      test("The floor value of 15.3 should be 15", () => {
        assert.strictEqual(floor(15.3), 15);
      });
      test("The floor value of 14.3 should be 14", () => {
        assert.strictEqual(floor(14.3), 14);
      });
    });
  
    // Ceiling Function Tests
    describe("Ceiling Function", () => {
      test("The ceiling value of 15.3 should be 16", () => {
        assert.strictEqual(ceiling(15.3), 16);
      });
      test("The ceiling value of 16.3 should be 17", () => {
        assert.strictEqual(ceiling(16.3), 17);
      });
    });
  
  });  