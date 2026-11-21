//Projektujesz automatyczny system naliczania opłat na parkingu podziemnym (calculateParkingFee). 
// Opłata zależy od liczby rozpoczętych godzin postoju (hours):

// Do 1 godziny (włącznie): 5 zł.
// Powyżej 1 godziny do 3 godzin (włącznie): 10 zł.
// Powyżej 3 godzin do 8 godzin (włącznie): 20 zł.
// Powyżej 8 godzin do 24 godzin (włącznie): 50 zł (opłata dobowa).
// Postój powyżej 24 godzin lub ujemny czas jest niedozwolony – funkcja rzuca wyjątek

export function calculateParkingFee(hours) {
  if (typeof hours!== 'number' || hours < 0 || hours > 24) { 
    throw new Error("Nieprawidłowy czas postoju");
  }
  if (hours <= 1) {
    return 5;
  }
  if (hours <= 3) {
    return 10;
  }
  if (hours <= 8) {
    return 20;
  }
  return 50;
}