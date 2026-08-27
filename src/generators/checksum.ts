function mod97(numericValue: string): number {
  let remainder = 0;

  for (const char of numericValue) {
    remainder = (remainder * 10 + Number(char)) % 97;
  }

  return remainder;
}

function toIbanDigits(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => String(letter.charCodeAt(0) - 55));
}

export function buildIban(countryCode: string, bban: string): string {
  const normalizedCountry = countryCode.toUpperCase();
  const rearranged = `${bban}${normalizedCountry}00`;
  const check = 98 - mod97(toIbanDigits(rearranged));

  return `${normalizedCountry}${String(check).padStart(2, "0")}${bban}`;
}

export function randomDigits(length: number, firstNonZero = false): string {
  let result = "";

  for (let i = 0; i < length; i++) {
    const min = firstNonZero && i === 0 ? 1 : 0;
    result += String(Math.floor(Math.random() * (10 - min)) + min);
  }

  return result;
}

export function randomItem<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
