
export function validatePostalCode(code) {
  if (typeof code !== 'string') {
    return false;
  }

  return /^\d{2}-\d{3}$/.test(code);
}
