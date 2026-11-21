/**
 Musi być ciągiem znaków (typ string).
Po obcięciu białych znaków jej długość musi wynosić od 3 do 15 znaków włącznie.
W przypadku spełnienia wymagań funkcja zwraca true, w przeciwnym razie false.
 */

export function ValidateUsername(username) {
  if (typeof username !== "string") { 
    return false;
  }
  
  // sprawdza, czy to w ogóle tekst (jeśli ktoś poda liczbę albo null, od razu false). Jest to potrzebne, bo .length i .trim() działają tylko na stringach.

  const trimmedUsername = username.trim(); // Obcinanie białych znaków z początku i końca ciągu

  if (trimmedUsername.length < 3 || trimmedUsername.length > 15) {
    return false;
  } // Sprawdza, czy długość po obcięciu białych znaków jest mniejsza niż 3 lub większa niż 15

  return true;
}

