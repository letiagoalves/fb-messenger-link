const messengerLink = require('../src/index.js');
const VALID_APP_ID = 'SOME_APP_ID';
const VALID_LINK = 'http://letiagoalves.com';

describe('link factory creation', () => {
    describe('when a invalid APP_ID is given', () => {
        test('it should throw an Error', () => {
            expect(() => messengerLink()).toThrowError('appId must be a {String}');
            expect(() => messengerLink(null)).toThrowError('appId must be a {String}');
            expect(() => messengerLink(1337)).toThrowError('appId must be a {String}');
            expect(() => messengerLink({})).toThrowError('appId must be a {String}');
            expect(() => messengerLink([])).toThrowError('appId must be a {String}');
        });
    });

    describe('when a valid APP_ID is given', () => {
        test('should return a function', () => {
            expect(messengerLink(VALID_APP_ID)).toBeInstanceOf(Function);
        });

        describe('share link creation', () => {
            describe('when a invalid link is given', () => {
                test('should throw an Error', () => {
                    const factory = messengerLink(VALID_APP_ID);

                    expect(() => factory()).toThrowError('link must be a {String}');
                    expect(() => factory(null)).toThrowError('link must be a {String}');
                    expect(() => factory(1337)).toThrowError('link must be a {String}');
                    expect(() => factory({})).toThrowError('link must be a {String}');
                    expect(() => factory([])).toThrowError('link must be a {String}');
                });
            });

            describe('when a valid link is given', () => {
                test('should return a FB messenger protocol link', () => {
                    const factory = messengerLink(VALID_APP_ID);


                    expect(factory(VALID_LINK))
                        .toBe('fb-messenger://share?link=http%3A%2F%2Fletiagoalves.com&app_id=SOME_APP_ID');
                });
            });
        });
    });
});
