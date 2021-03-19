const BLOCKED_PLACEHOLDER = 5;

/**
 * @param text number to verify
 * @param startPosition first split point
 * @param middlePosition middle split point
 * @param lastPosition last in case we dont want last one
 * @returns {startDigits:string, endDigits:string}
 */
export const extractStringPortion = (
  text: string,
  startPosition: number,
  middlePosition: number,
  lastPosition?: number
) => {
  return {
    startDigits: text.slice(0, startPosition),
    endDigits: text.slice(middlePosition, lastPosition || text.length),
  };
};

const maskify = (cardNumber: string) => {
  //Filter number with less than 7 digits
  if (cardNumber.length < 7) {
    throw Error("Wrong string");
  }

  const { endDigits, startDigits } = extractStringPortion(
    cardNumber,
    1,
    cardNumber.length - 4
  );

  return `${startDigits}${"x".repeat(
    cardNumber.length - BLOCKED_PLACEHOLDER
  )}${endDigits}`;
};

export default maskify;
