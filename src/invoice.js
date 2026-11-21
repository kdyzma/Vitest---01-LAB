// src/invoice.js
export function calculateInvoice(items, taxRate = 0.23) {
  if (!Array.isArray(items) || items.length === 0) {
    return { netTotal: 0, taxTotal: 0, grossTotal: 0 };
  }

  let netTotal = 0;

  // BŁĄD 1: Pętla zaczyna się od indeksu 1 zamiast 0! EDIT: Zmieniono na i = 0
  for (let i = 0; i < items.length; i++) {
    netTotal += items[i].price * items[i].quantity;
  }

  // BŁĄD 2: Brak zaokrąglenia podatku do 2 miejsc po przecinku EDIT: Dodano zaokrąglenie do 2 miejsc po przecinku
  const taxTotal = netTotal * taxRate;
  const grossTotal = netTotal + taxTotal;

  return {
    netTotal: Number(netTotal.toFixed(2)),
    taxTotal: Number(taxTotal.toFixed(2)), // Błąd!

    grossTotal: Number(grossTotal.toFixed(2))
  };
}
