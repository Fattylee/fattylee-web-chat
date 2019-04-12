const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('../utils/generators');

describe('generateMessage', () => {
  it('should generator a new message', () => {
    const from = 'fattylee';
    const text = 'Hi peeps';
    const result = generateMessage(from, text);
    expect(result.createdAt).toBeTruthy();
    expect(result).toMatchObject({from, text});
  }); // end it
}); // end generateMessage

describe('generateLocationMessage', () => {
  it('should generator a new location message', () => {
    const from = 'fattylee';
    const latitude = 12;
    const longitude = 34;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const result = generateLocationMessage(from, latitude, longitude);
    expect(result.createdAt).toBeTruthy();
    expect(result).toMatchObject({from, url});
  }); // end it
}); // end generateLocationMessage