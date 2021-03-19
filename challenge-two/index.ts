const commonSuffix = "th";
const patterUniq: { [key: string]: string } = {
  "1": "st",
  "2": "nd",
  "3": "rd",
};

const selectSuffix = (digit: number): string => {
  const sizeNumber = `${digit}`.length - 1;
  const lastDigit = `${digit}`.substr(sizeNumber, 1);

  if (!Object.keys(patterUniq).includes(lastDigit)) {
    return commonSuffix;
  }

  //Take number bigger than 2 digits
  if (digit > 10) {
    const lastTwoDigits = parseInt(`${digit}`.substr(sizeNumber - 1, 2), 10);
    // filter number from 10 - 13
    return lastTwoDigits < 14 ? commonSuffix : patterUniq[lastDigit];
  }

  return patterUniq[lastDigit];
};

const numberToOrdinal = (digit: number): string => {
  if (digit === 0) {
    return "0";
  }

  return `${digit}${selectSuffix(digit)}`;
};

export default numberToOrdinal;
