const expect = require('expect');
const { generateMessage } = require('../utils/generators');

describe('generateMessage', () => {
  it('should generator a new message', () => {
    const from = 'fattylee';
    const text = 'Hi peeps';
    const result = generateMessage(from, text);
    expect(result.createdAt).toBeTruthy();
    expect(result).toMatchObject({from, text});
  }); // end it
}); // end generateMessage
