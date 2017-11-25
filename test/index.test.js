const fbMessengerLink = require('../src/index.js');

test('it should return greet', () => {
    expect(fbMessengerLink()).toBe('hello, friend');
});
