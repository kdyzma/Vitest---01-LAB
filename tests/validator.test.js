import { describe, it, expect } from 'vitest';
import { ValidateUsername } from '../src/validator.js';

describe('validator.ValidateUsername', () => {
  it('zwraca false, gdy argument nie jest stringiem', () => {
    expect(ValidateUsername(123)).toBe(false);
    expect(ValidateUsername(null)).toBe(false);
    expect(ValidateUsername(undefined)).toBe(false);
    expect(ValidateUsername({})).toBe(false);
 
});
  it('zwraca true dla poprawnej nazwy użytkownika', () => {
    expect(ValidateUsername('Miecio')).toBe(true);
  });
  it('zwraca false dla za krótkiej nazwy użytkownika', () => {
    expect(ValidateUsername('Mi')).toBe(false);
  });
    it('zwraca false, jeśli username ma więcej niż 15 znaków', () => {
    const result = ValidateUsername('Aleksandra-Kowalska');
    expect(result).toBe(false);
  });
    it('zwraca true dla nazwy o długości dokładnie 3 znaków', () => {
    expect(ValidateUsername('Ala')).toBe(true);
  });

  it('zwraca true dla nazwy o długości dokładnie 15 znaków', () => {
    expect(ValidateUsername('abcdefghijklmno')).toBe(true);
  });

  it('obcina białe znaki przed sprawdzeniem długości', () => {
    expect(ValidateUsername('  Al  ')).toBe(false);   // po trim: 2 znaki
    expect(ValidateUsername('  Ala  ')).toBe(true);   // po trim: 3 znaki
  });
});
