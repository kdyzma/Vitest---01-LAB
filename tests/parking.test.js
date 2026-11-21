import { describe, it, expect } from 'vitest';
import { calculateParkingFee } from '../src/Parking.js';

describe('calculateParkingFee - Obliczanie opłat parkingowych', () => {
  it('zwraca poprawną opłatę dla postoju do 1 godziny', () => {
    expect(calculateParkingFee(0.5)).toBe(5);
    expect(calculateParkingFee(1)).toBe(5);
  });
  it('zwraca poprawną opłatę dla postoju powyżej 1 godziny do 3 godzin', () => {
    expect(calculateParkingFee(1.01)).toBe(10);
    expect(calculateParkingFee(3)).toBe(10);
    });

  it('zwraca poprawną opłatę dla postoju powyżej 3 godzin do 8 godzin', () => {
    expect(calculateParkingFee(3.01)).toBe(20);
    expect(calculateParkingFee(8)).toBe(20);
  });
  it('zwraca poprawną opłatę dla postoju powyżej 8 godzin do 24 godzin', () => {
    expect(calculateParkingFee(8.01)).toBe(50);
    expect(calculateParkingFee(24)).toBe(50);
  });
  it('rzuca wyjątek dla postoju powyżej 24 godzin', () => {
    expect(() => calculateParkingFee(24.01)).toThrow('Nieprawidłowy czas postoju');
  });
});