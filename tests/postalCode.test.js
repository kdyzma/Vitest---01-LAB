
import { describe, it, expect } from 'vitest';
import { validatePostalCode } from '../src/postalCode.js';

describe('validatePostalCode - Walidacja kodów pocztowych', () => {

  it.each([
    { code: '00-001', expected: true, desc: 'poprawny kod 00-001' },
    { code: '60-123', expected: true, desc: 'poprawny kod 60-123' },
    { code: '99-999', expected: true, desc: 'poprawny kod 99-999' },
    { code: '00001', expected: false, desc: 'brak myślnika' },
    { code: '00-0000', expected: false, desc: 'za dużo cyfr' },
    { code: 'ab-cde', expected: false, desc: 'litery zamiast cyfr' },
    { code: ' 00-001 ', expected: false, desc: 'białe znaki' },
    { code: null, expected: false, desc: 'wartość null' },
    { code: undefined, expected: false, desc: 'wartość undefined' },
    { code: '0a-001', expected: false, desc: 'litera wśród cyfr' }
  ])('$desc', ({ code, expected }) => {
    expect(validatePostalCode(code)).toBe(expected);
  });

});
