const pattern = /^\d{6}(\d{2})?[+-]?\d{4}$/;

const isValidSwedishPersonalIdentityNumber = input => {
  if (!pattern.test(input)) {
    return false;
  }

  const cleaned = input.replace(/[+-]/, '').slice(-10);

  const sum = cleaned
    .split('')
    .reverse()
    .map(Number)
    .map((x, i) => i % 2 ? x * 2 : x)
    .map((x) => x > 9 ? x - 9 : x)
    .reduce((x, y) => x + y);

  const checksumIsCorrect = sum % 10 === 0;

  if (!checksumIsCorrect) {
    return false;
  }

  const [_, year, month, day] = /^(\d{2})(\d{2})(\d{2})/.exec(cleaned);
  const dateIsValid = Date.parse(`${month} ${day} ${year}`);

  if (!dateIsValid) {
    return false;
  }

  return true;
};

module.exports = isValidSwedishPersonalIdentityNumber;
