const pattern = /^\d{6}(\d{2})?[+-]?\d{4}$/;

const hasCorrectChecksum = input => {
  const sum = input
    .split('')
    .reverse()
    .map(Number)
    .map((x, i) => i % 2 ? x * 2 : x)
    .map((x) => x > 9 ? x - 9 : x)
    .reduce((x, y) => x + y);

  return sum % 10 === 0;
}

const hasValidDate = input => {
  let [_, year, month, day] = /^(\d{2})(\d{2})(\d{2})/.exec(input);

  year = Number(year);
  month = Number(month) - 1;
  day = Number(day);

  const date = new Date(year, month, day);

  return date.getYear() === year && date.getMonth() === month && date.getDate() === day;
}

const isValidSwedishPersonalIdentityNumber = input => {
  if (!pattern.test(input)) {
    return false;
  }

  const cleaned = input.replace(/[+-]/, '').slice(-10);

  return hasCorrectChecksum(cleaned) && hasValidDate(cleaned);
};

module.exports = isValidSwedishPersonalIdentityNumber;
