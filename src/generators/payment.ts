import { randomDigits } from "./checksum";

export function generateTestCard(): string {
  return "4242424242424242";
}

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
