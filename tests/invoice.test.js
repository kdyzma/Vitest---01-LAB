import { describe, it, expect } from 'vitest';
import { calculateInvoice } from '../src/invoice.js';

describe('calculateInvoice - Debugowanie Wyzwania', () => {
  it('oblicza poprawne sumy dla pojedynczej pozycji na fakturze', () => {
    const items = [{ name: 'Klawiatura', price: 100, quantity: 1 }];
    const result = calculateInvoice(items, 0.23);

    expect(result).toEqual({
      netTotal: 100.00,
      taxTotal: 23.00,
      grossTotal: 123.00
    });
  });

  it('oblicza poprawne sumy dla wielu pozycji', () => {
    const items = [
      { name: 'Myszka', price: 50, quantity: 2 },  // 100 zł
      { name: 'Kabel', price: 20, quantity: 1 }     // 20 zł
    ];
    const result = calculateInvoice(items, 0.23);

    expect(result).toEqual({
      netTotal: 120.00,
      taxTotal: 27.60,
      grossTotal: 147.60
    });
  });
});
