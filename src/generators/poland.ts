import { buildIban, randomDigits, randomItem } from "./checksum";

const PESEL_WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
const NIP_WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];
const REGON_WEIGHTS = [8, 9, 2, 3, 4, 5, 6, 7];

const POLISH_PHONE_PREFIXES = ["45", "50", "51", "53", "57", "60", "66", "69", "72", "73", "78", "79", "88"];

const PLATE_DISTRICTS_2 = [
  "WA",
  "WB",
  "WD",
  "WE",
  "WK",
  "WN",
  "WT",
  "WU",
  "WW",
  "WX",
  "KR",
  "KK",
  "GD",
  "GA",
  "PO",
  "PY",
  "DW",
  "DX",
  "LU",
  "EL",
  "SZ",
  "ZS",
  "KT",
  "KN",
  "RZ",
  "TK",
  "BI",
  "BS",
  "CT",
  "OP",
];

const PLATE_DISTRICTS_3 = ["WIA", "KRA", "GSP", "PZA", "DWR", "LUB", "SZZ", "TSA", "RZE"];
const PLATE_LETTERS = "ACEGHJKLMNPRSTUWXYZ";

function peselMonth(year: number, month: number): number {
  if (year >= 2000 && year < 2100) return month + 20;
  if (year >= 2100 && year < 2200) return month + 40;
  if (year >= 2200 && year < 2300) return month + 60;
  if (year >= 1800 && year < 1900) return month + 80;
  return month;
}

export function generateRandomPESEL(): string {
  const start = new Date(1950, 0, 1).getTime();
  const end = new Date().getTime();
  const birthDate = new Date(start + Math.random() * (end - start));

  const year = birthDate.getFullYear();
  const month = peselMonth(year, birthDate.getMonth() + 1);
  const day = birthDate.getDate();
  const serial = randomDigits(3);
  const genderDigit = Math.floor(Math.random() * 10);

  const peselBase = `${String(year % 100).padStart(2, "0")}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}${serial}${genderDigit}`;

  const sum = PESEL_WEIGHTS.reduce((acc, weight, index) => acc + Number(peselBase[index]) * weight, 0);
  const checksum = (10 - (sum % 10)) % 10;

  return `${peselBase}${checksum}`;
}

export function generateRandomNIP(): string {
  const digits = [Number(randomDigits(1, true))];

  for (let i = 1; i < 9; i++) {
    digits.push(Number(randomDigits(1)));
  }

  const checksum = digits.reduce((acc, digit, index) => acc + digit * NIP_WEIGHTS[index], 0) % 11;

  if (checksum === 10) {
    return generateRandomNIP();
  }

  return `${digits.join("")}${checksum}`;
}

export function generateRandomPolishVAT(): string {
  return `PL${generateRandomNIP()}`;
}

export function generateRandomREGON(): string {
  const digits = Array.from({ length: 8 }, () => Number(randomDigits(1)));
  let checksum = digits.reduce((acc, digit, index) => acc + digit * REGON_WEIGHTS[index], 0) % 11;

  if (checksum === 10) {
    checksum = 0;
  }

  return `${digits.join("")}${checksum}`;
}

export function generateRandomPolishIBAN(): string {
  return buildIban("PL", randomDigits(24));
}

export function generateRandomPolishPhoneNumber(): string {
  return `+48${randomItem(POLISH_PHONE_PREFIXES)}${randomDigits(7)}`;
}

function randomPlateLetters(length: number): string {
  return Array.from({ length }, () => randomItem(PLATE_LETTERS.split(""))).join("");
}

export function generateRandomPolishPlateNumber(): string {
  if (Math.random() < 0.75) {
    const district = randomItem(PLATE_DISTRICTS_2);
    const formats = [
      randomDigits(5),
      `${randomDigits(4)}${randomPlateLetters(1)}`,
      `${randomDigits(3)}${randomPlateLetters(2)}`,
    ];
    return `${district} ${randomItem(formats)}`;
  }

  const district = randomItem(PLATE_DISTRICTS_3);
  const formats = [
    randomDigits(4),
    `${randomDigits(2)}${randomPlateLetters(2)}`,
    `${randomDigits(1)}${randomPlateLetters(3)}`,
  ];
  return `${district} ${randomItem(formats)}`;
}
