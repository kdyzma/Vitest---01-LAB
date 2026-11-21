// import { describe, it, expect } from 'vitest';
// import { longestString } from '../src/examples.js';

// describe('examples.longestString', () => {
//   it('zwraca najdłuższy ciąg znaków dla standardowych danych', () => {
//     const longest = longestString('Pikachu', 'Ditto');
//     expect(longest).toBe('Pikachu');
//   });

//   it('zwraca pierwszy ciąg znaków, gdy oba mają identyczną długość', () => {
//     const result = longestString('Snorlax', 'Poliwag');
//     expect(result).toBe('Snorlax');
//   });

//   it('poprawnie obsługuje puste ciągi znaków', () => {
//     expect(longestString('', 'Mario')).toBe('Mario');
//     expect(longestString('Luigi', '')).toBe('Luigi');
//     expect(longestString('', '')).toBe('');
//   });

//   it('ignoruje wiodące i końcowe białe znaki podczas porównywania długości', () => {
//     const result = longestString(' Ash ', 'Misty');
//     expect(result).toBe('Misty');
//   });
// });

import { describe, it, expect } from 'vitest';
import { convertCurrency } from '../src/examples.js';

describe('convertCurrency - Debugowanie Wizualne', () => {
  it('poprawnie przelicza 100 EUR na PLN (kurs 1 EUR = 4.30 PLN, 1 PLN = 1.00)', () => {
    // 100 EUR -> PLN: 100 * 4.30 / 1.00 = 430.00 PLN
    const result = convertCurrency(100, 1.00, 4.30);
    expect(result).toBe(430.00);
  });
});
