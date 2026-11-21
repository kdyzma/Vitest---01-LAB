/**
 * Porównuje dwa ciągi znaków i zwraca dłuższy z nich.
 * W przypadku równej długości zwraca pierwszy argument.
 */
export function longestString(stringOne, stringTwo) {
  const trimmedStringOne = stringOne.trim();
  const trimmedStringTwo = stringTwo.trim();

  if (trimmedStringTwo.length > trimmedStringOne.length) {
    return stringTwo;
  } else {
    return stringOne;
  }
}
