import { describe, it, expect } from 'vitest';
import { longestString } from '../src/examples.js';

describe('examples.longestString', () => {
  it('zwraca najdłuższy ciąg znaków dla standardowych danych', () => {
    const longest = longestString('Pikachu', 'Ditto');
    expect(longest).toBe('Pikachu');
  });

  it('zwraca pierwszy ciąg znaków, gdy oba mają identyczną długość', () => {
    const result = longestString('Snorlax', 'Poliwag');
    expect(result).toBe('Snorlax');
  });

  it('poprawnie obsługuje puste ciągi znaków', () => {
    expect(longestString('', 'Mario')).toBe('Mario');
    expect(longestString('Luigi', '')).toBe('Luigi');
    expect(longestString('', '')).toBe('');
  });

  it('ignoruje wiodące i końcowe białe znaki podczas porównywania długości', () => {
    const result = longestString(' Ash ', 'Misty');
    expect(result).toBe('Misty');
  });
});
