const test = require('./index');

test('it should return an integer', () => {
    const tests = tests();
    expect(tests).toBe(1);
    
})