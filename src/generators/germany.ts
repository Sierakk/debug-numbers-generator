import { buildIban, randomDigits, randomItem } from "./checksum";

// German IBAN: DE + 2 check digits + 8-digit BLZ + 10-digit account
export function generateGermanIBAN(): string {
  return buildIban("DE", randomDigits(18));
}

export function generateGermanPhoneNumber(): string {
  const prefixes = ["15", "16", "17"];
  return `+49${randomItem(prefixes)}${randomDigits(8)}`;
}

export function generateGermanPostalCode(): string {
  return randomDigits(5, true);
}

// German VAT: DE + 9 digits
export function generateGermanVAT(): string {
  return `DE${randomDigits(9)}`;
}
