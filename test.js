const test = require('tape');
const isValid = require('./index');

test('personal identity numbers in an erroneous format', assert => {
  assert.notOk(isValid('12345'));
  assert.notOk(isValid('123456789123456789'));
  assert.notOk(isValid('abc'));
  assert.notOk(isValid('191a0831-7574'));
  assert.notOk(isValid('19610603!1757'));
  assert.end();
});

test('personal identity numbers with a correct checksum but incorrect date', assert => {
  assert.notOk(isValid('000000-0000'));
  assert.notOk(isValid('198413320428'));
  assert.notOk(isValid('7602314564'));
  assert.notOk(isValid('19520132-6724'));
  assert.notOk(isValid('941301-4235'));
  assert.end();
});

test('valid personal identity numbers in the 12 digit format', assert => {
  assert.ok(isValid('19990827-6034'));
  assert.ok(isValid('19590526-3868'));
  assert.ok(isValid('19221002-2618'));
  assert.ok(isValid('19110815-3527'));
  assert.ok(isValid('19240112-1039'));
  assert.end();
});

test('invalid personal identity numbers in the 12 digit format', assert => {
  assert.notOk(isValid('19541011-3606'));
  assert.notOk(isValid('19631224-8564'));
  assert.notOk(isValid('19781213-4250'));
  assert.notOk(isValid('19231112-1287'));
  assert.notOk(isValid('19810329-4635'));
  assert.end();
});

test('personal identity numbers in the 12 digit format without the hyphen/plus sign', assert => {
  assert.ok(isValid('199301049608'));
  assert.ok(isValid('197608181017'));
  assert.ok(isValid('198109124530'));
  assert.notOk(isValid('199601267042'));
  assert.notOk(isValid('197807015207'));
  assert.notOk(isValid('193312286704'));
  assert.end();
});

test('valid personal identity numbers in the 10 digit format', assert => {
  assert.ok(isValid('150928-2701'));
  assert.ok(isValid('630108-6002'));
  assert.ok(isValid('760401-1127'));
  assert.ok(isValid('580331+7592'));
  assert.ok(isValid('350304+2784'));
  assert.end();
});

test('invalid personal identity numbers in the 10 digit format', assert => {
  assert.notOk(isValid('952813-5358'));
  assert.notOk(isValid('020903-1815'));
  assert.notOk(isValid('080412-3215'));
  assert.notOk(isValid('630712+3176'));
  assert.notOk(isValid('151123+1604'));
  assert.end();
});

test('personal identity numbers in the 10 digit format without the hyphen/plus sign', assert => {
  assert.ok(isValid('9301049608'));
  assert.ok(isValid('7608181017'));
  assert.ok(isValid('8109124530'));
  assert.notOk(isValid('9601267042'));
  assert.notOk(isValid('7807013107'));
  assert.notOk(isValid('0908157892'));
  assert.end();
});
