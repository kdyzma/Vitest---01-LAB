/**
 * Porównuje dwa ciągi znaków i zwraca dłuższy z nich.
 * W przypadku równej długości zwraca pierwszy argument.
 */
// export function longestString(stringOne, stringTwo) {
//   const trimmedStringOne = stringOne.trim();
//   const trimmedStringTwo = stringTwo.trim();

//   if (trimmedStringTwo.length > trimmedStringOne.length) {
//     return stringTwo;
//   } else {
//     return stringOne;
//   }
// }

export function convertCurrency(amount, fromRate, toRate) {
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }

  // BŁĄD: Zamiast przeliczać przez kursy (amount * toRate / fromRate),
  // funkcja wykonuje błędne odejmowanie!
  const converted = (amount * toRate) - fromRate;
  
  return Number(converted.toFixed(2));
}
