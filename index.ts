const pattern = /^\d{6}(\d{2})?[+-]?\d{4}$/;

const hasCorrectChecksum = (input: string) => {
  const sum = input
    .split('')
    .reverse()
    .map(Number)
    .map((x, i) => i % 2 ? x * 2 : x)
    .map((x) => x > 9 ? x - 9 : x)
    .reduce((x, y) => x + y);

  return sum % 10 === 0;
};

const hasValidDate = (input: string) => {
  let [_, yearStr, monthStr, dayStr] = /^(\d{2})(\d{2})(\d{2})/.exec(input);

  const year = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);
  const date = new Date(year, month, day);

  const yearIsValid = String(date.getFullYear()).substr(-2) === yearStr;
  const monthIsValid = date.getMonth() === month;
  const dayIsValid = date.getDate() === day;

  return yearIsValid && monthIsValid && dayIsValid;
};

export const isValid = (input: string) => {
  if (!pattern.test(input)) {
    return false;
  }

  const cleaned = input.replace(/[+-]/, '').slice(-10);

  return hasCorrectChecksum(cleaned) && hasValidDate(cleaned);
};
