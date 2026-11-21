//"Tworzysz moduł obliczania zniżek dla koszyka sklepowego (calculateDiscount). 
// Funkcja przyjmuje cenę początkową (price) oraz kod rabatowy (code).
// Kod "RABAT10" daje 10% zniżki.
// Kod "RABAT20" daje 20% zniżki.
// Brak kodu lub pusty string nie zmienia ceny.
// Użycie nieprawidłowego kodu (np. "FEJK") powoduje wyrzucenie wyjątku Error('Invalid discount code').
// Przekazanie ujemnej ceny powoduje wyrzucenie wyjątku Error('Price cannot be negative').
// Wynik musi być zwracany jako obiekt z polami { originalPrice, finalPrice, discountAmount }.
// Zadanie dla Studenta
// Stwórz plik src/discount.js oraz odpowiadający mu plik testowy tests/discount.test.js. 
// Użyj odpowiednich matcherów (toEqual, toBeCloseTo lub toBe, toThrow).
// 

// src/discount.js
export function calculateDiscount(price, code = '') {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('Price cannot be negative');
    }
    if (code === 'RABAT10') {
        const discountAmount = price * 0.10;
        const finalPrice = price - discountAmount;
        return { originalPrice: price, finalPrice, discountAmount };
    }
    if (code === 'RABAT20') {
        const discountAmount = price * 0.20;
        const finalPrice = price - discountAmount;
        return { originalPrice: price, finalPrice, discountAmount };
    }
    throw new Error('Invalid discount code');
}

