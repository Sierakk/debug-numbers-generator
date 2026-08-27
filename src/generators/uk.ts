import { buildIban, randomDigits, randomItem } from "./checksum";

// UK IBAN: GB + 2 check digits + 4-letter bank code + 6-digit sort code + 8-digit account
const UK_BANK_CODES = ["BARC", "HSBC", "LOYD", "NWBK", "TSBB", "MONZ", "STAR"];

export function generateUKIBAN(): string {
  return buildIban("GB", `${randomItem(UK_BANK_CODES)}${randomDigits(14)}`);
}

export function generateUKPhoneNumber(): string {
  return `+447${randomDigits(9)}`;
}

const UK_POSTAL_AREAS = [
  "SW",
  "SE",
  "E",
  "N",
  "NW",
  "W",
  "M",
  "B",
  "L",
  "LS",
  "S",
  "NE",
  "G",
  "EH",
  "CF",
  "BS",
  "OX",
  "CB",
];

export function generateUKPostalCode(): string {
  const area = randomItem(UK_POSTAL_AREAS);
  const district = Math.floor(Math.random() * 20) + 1;
  const unit = `${Math.floor(Math.random() * 10)}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;

  return `${area}${district} ${unit}`;
}

export function generateUKVAT(): string {
  return `GB${randomDigits(9)}`;
}
