import { buildIban, randomDigits, randomItem } from "./checksum";

// French IBAN: FR + 2 check digits + 5-digit bank code + 5-digit branch + 11-char account + 2-digit RIB key
export function generateFrenchIBAN(): string {
  return buildIban("FR", randomDigits(21));
}

// French mobile: 06 / 07
export function generateFrenchPhoneNumber(): string {
  return `+33${randomItem(["6", "7"])}${randomDigits(8)}`;
}

export function generateFrenchPostalCode(): string {
  return randomDigits(5, true);
}

// SIREN: 9 digits with Luhn checksum
export function generateFrenchSIREN(): string {
  const base = randomDigits(8, true);
  let sum = 0;

  for (let i = base.length - 1, step = 1; i >= 0; i--, step++) {
    let digit = Number(base[i]);
    if (step % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  const check = (10 - (sum % 10)) % 10;
  return `${base}${check}`;
}

// French VAT: FR + 2 key chars + SIREN (key = (12 + 3 * (siren % 97)) % 97)
export function generateFrenchVAT(): string {
  const siren = generateFrenchSIREN();
  const key = (12 + 3 * (Number(siren) % 97)) % 97;

  return `FR${String(key).padStart(2, "0")}${siren}`;
}
