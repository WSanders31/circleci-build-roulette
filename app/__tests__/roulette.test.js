const roulette = require('../roulette.js');

test('Playing build roulette... did we pass?', () => {
  expect(!!roulette.play()).toBe(true);
});