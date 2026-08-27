import { randomDigits } from "./checksum";

export function generateRandomSSN(): string {
  let area: number;

  do {
    area = Math.floor(Math.random() * 899) + 1;
  } while (area === 666);

  const group = Math.floor(Math.random() * 99) + 1;
  const serial = Math.floor(Math.random() * 9999) + 1;

  return `${String(area).padStart(3, "0")}-${String(group).padStart(2, "0")}-${String(serial).padStart(4, "0")}`;
}

export function generateRandomUSPhoneNumber(): string {
  const areaCode = `${Math.floor(Math.random() * 8 + 2)}${randomDigits(2)}`;
  const centralOfficeCode = `${Math.floor(Math.random() * 8 + 2)}${randomDigits(2)}`;

  return `+1${areaCode}${centralOfficeCode}${randomDigits(4)}`;
}
