/**
 * Official test data from Skatteverket sourced from here:
 * https://www.skatteverket.se/omoss/apierochoppnadata/hittaapierochoppnadata/kunskapochinspiration/alltdubehovervetaomtestpersonnummer.4.5b35a6251761e6914202df9.html
 */

const test = require('tape');
const { isValid } = require('./dist');

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
  assert.ok(isValid('20131112-2384'));
  assert.ok(isValid('19900704-2386'));
  assert.ok(isValid('19950113-2386'));
  assert.ok(isValid('19080807-9800'));
  assert.ok(isValid('18991223-9812'));
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
  assert.ok(isValid('201707302384'));
  assert.ok(isValid('201411182387'));
  assert.ok(isValid('195210092218'));
  assert.notOk(isValid('199601267042'));
  assert.notOk(isValid('197807015207'));
  assert.notOk(isValid('193312286704'));
  assert.end();
});

test('valid personal identity numbers in the 10 digit format', assert => {
  assert.ok(isValid('971129-2392'));
  assert.ok(isValid('900804-2385'));
  assert.ok(isValid('141031-2381'));
  assert.ok(isValid('930302+9806'));
  assert.ok(isValid('091224+9828'));
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
  assert.ok(isValid('1712192390'));
  assert.ok(isValid('0205102387'));
  assert.ok(isValid('5211231864'));
  assert.notOk(isValid('9601267042'));
  assert.notOk(isValid('7807013107'));
  assert.notOk(isValid('0908157892'));
  assert.end();
});

test('coordination numbers', assert => {
  assert.ok(isValid('900477-2381'));
  assert.ok(isValid('110482-2398'));
  assert.ok(isValid('7911882392'));
  assert.ok(isValid('197203702399'));
  assert.ok(isValid('19600780-2397'));
  assert.ok(isValid('020372-2392'));
  assert.ok(isValid('197505722392'));
  assert.ok(isValid('196104902397'));
  assert.end();
});