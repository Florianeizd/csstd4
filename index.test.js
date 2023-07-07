const getRandomNumber = require('./index');

test('should first', () => { 
    const number = getRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
})