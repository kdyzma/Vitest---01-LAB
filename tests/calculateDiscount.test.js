import { describe, it, expect } from 'vitest';
import { calculateDiscount } from '../src/calculateDiscount.js';

describe('calculateDiscount - Obliczanie zniżek ', () => {
  it('używa toEqual do porównywania wyników', () => {
    const result = calculateDiscount(100, 'RABAT10');
    expect(result).toEqual({ originalPrice: 100, finalPrice: 90, discountAmount: 10 });
  });
  it('używa toBeCloseTo do porównywania wyników z ułamkami', () => {
    const result = calculateDiscount(99.99, 'RABAT20');
    expect(result.finalPrice).toBeCloseTo(79.992);
  });
  it('używa toBe do porównywania wyników z liczbami całkowitymi', () => {
    const result = calculateDiscount(50, 'RABAT10');
    expect(result.discountAmount).toBe(5);
  });   
    it('używa toThrow do sprawdzania wyjątków', () => {
    expect(() => calculateDiscount(-10, 'RABAT10')).toThrow('Price cannot be negative');
    expect(() => calculateDiscount(100, 'INVALID')).toThrow('Invalid discount code');
  });
  it('zwraca obiekt z polami originalPrice, finalPrice, discountAmount', () => {
    const result = calculateDiscount(200, 'RABAT20');
    expect(result).toHaveProperty('originalPrice');
    expect(result).toHaveProperty('finalPrice');
    expect(result).toHaveProperty('discountAmount');
  });
  it('zwraca poprawne wartości dla różnych kodów rabatowych', () => {
    const result10 = calculateDiscount(150, 'RABAT10');
    expect(result10.finalPrice).toBeCloseTo(135);
    expect(result10.discountAmount).toBeCloseTo(15);    
  });
  it('zwraca błąd dla nieprawidłowego kodu rabatowego', () => {
    expect(() => calculateDiscount(100, 'INVALID')).toThrow('Invalid discount code');
  });
    it('zwraca błąd dla ujemnej ceny', () => {
    expect(() => calculateDiscount(-50, 'RABAT10')).toThrow('Price cannot be negative');
    });
    it('zwraca poprawne wartości dla ceny 0', () => {
    const result = calculateDiscount(0, 'RABAT10');
    expect(result.finalPrice).toBe(0);
    expect(result.discountAmount).toBe(0);
  });
    it('zwraca błąd dla stringowej ceny', () => {
    expect(() => calculateDiscount('100', 'RABAT10')).toThrow('Price cannot be negative');
  });
  
});

  