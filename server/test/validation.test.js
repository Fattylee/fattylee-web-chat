const expect = require('expect');
const { isRealString } = require('../utils/validation');


describe('isRealString', () => {
  it('should allow valid string values', () => {
    const result = isRealString('g');
    expect(result).toBeTruthy();
  }); // end it
  it('should reject non-string values', () => {
    const result = isRealString(635);
    expect(result).toBeFalsy();
  }); // end it
  it('should return false for empty form field', () => {
    const result = isRealString('');
    expect(result).toBeFalsy();
  }); // end it
  it('should return false for form field with space characters only', () => {
    const result = isRealString('    ');
    expect(result).toBeFalsy();
  }); // end it
}); // end isRealString
