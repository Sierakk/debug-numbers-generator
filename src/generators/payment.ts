import { randomDigits, randomItem } from "./checksum";

const MASTERCARD_PREFIXES = ["51", "52", "53", "54", "55", "2221", "2222", "2720"];

export function calculateLuhnChecksum(partial: string): number {
  let sum = 0;
  for (let i = partial.length - 1, step = 1; i >= 0; i--, step++) {
    let digit = Number(partial[i]);
    if (step % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return (10 - (sum % 10)) % 10;
}

export function generateLuhnCard(prefix: string, totalLength = 16): string {
  const randomLength = totalLength - prefix.length - 1;
  const base = `${prefix}${randomDigits(randomLength)}`;
  const checkDigit = calculateLuhnChecksum(base);
  return `${base}${checkDigit}`;
}

export function generateStripeTestCard(): string {
  return "4242424242424242";
}

export function generateVisaCard(): string {
  return generateLuhnCard("4", 16);
}

export function generateMasterCard(): string {
  const prefix = randomItem(MASTERCARD_PREFIXES);
  return generateLuhnCard(prefix, 16);
}

export const generateTestCard = generateStripeTestCard;

export function generateCardExpiry(): string {
  const now = new Date();
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String((now.getFullYear() + Math.floor(Math.random() * 4) + 1) % 100).padStart(2, "0");

  return `${month}/${year}`;
}

export function generateCardCvc(): string {
  return randomDigits(3);
}

export function formatCardNumber(value: string): string {
  return value.replace(/(\d{4})(?=\d)/g, "$1 ");
}
