const validOperators = ["-", "+", "/", "*"];

/**
 * validate number
 */
const isNumber = (digit: string): number | undefined => {
  const num = parseInt(digit, 10);
  return !isNaN(num) ? num : undefined;
};

/**
 *  mapper given operator symbol
 * */
const doOperation = (number1: number, number2: number, operator: string) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return 0;
  }
};

const calculate = (pattern: string): number => {
  const characters = pattern.split(" ");
  /**
   * Filter valid numbers only and parsing its value to number
   */
  const numbers = characters
    .filter((it) => isNumber(it) !== undefined)
    .map((it) => parseInt(it, 10))
    .reverse();
  /**
   * Filter not valid operators and not numbers
   */
  const operators = characters.filter(
    (it) => !isNumber(it) && validOperators.includes(it) && it
  );

  /**
   * Check that operators has 1 less item than number
   */
  if (numbers.length !== operators.length + 1) {
    throw Error("Wrong string");
  }

  let result = numbers[0]; //we start with position 0
  numbers.forEach((_, index) => {
    const nextNumber = numbers[index + 1];
    if (!nextNumber) {
      return;
    }
    result = doOperation(result, nextNumber, operators[index]);
  });

  return result;
};

export default calculate;
