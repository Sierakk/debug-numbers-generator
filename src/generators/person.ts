import { faker as fakerPL } from "@faker-js/faker/locale/pl";
import { faker as fakerUS } from "@faker-js/faker/locale/en_US";
import { randomDigits, randomItem } from "./checksum";

const POLISH_CITIES = [
  "Warszawa",
  "Kraków",
  "Gdańsk",
  "Wrocław",
  "Poznań",
  "Łódź",
  "Katowice",
  "Lublin",
  "Szczecin",
  "Bydgoszcz",
  "Białystok",
  "Rzeszów",
];

const US_STATES = ["CA", "NY", "TX", "FL", "IL", "WA", "MA", "CO", "PA", "GA", "NC", "AZ"];

function randomBirthDate(minAge = 21, maxAge = 65): Date {
  const now = new Date();
  const max = new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate()).getTime();
  const min = new Date(now.getFullYear() - maxAge, now.getMonth(), now.getDate()).getTime();
  return new Date(min + Math.random() * (max - min));
}

function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function generatePolishFirstName(): string {
  return fakerPL.person.firstName();
}

export function generatePolishLastName(): string {
  return fakerPL.person.lastName();
}

export function generatePolishFullName(): string {
  return `${generatePolishFirstName()} ${generatePolishLastName()}`;
}

export function generatePolishBirthDate(): string {
  return formatDate(randomBirthDate(), "pl-PL");
}

export function generatePolishStreet(): string {
  return `${fakerPL.location.street()} ${fakerPL.number.int({ min: 1, max: 180 })}`;
}

export function generatePolishPostalCode(): string {
  return `${randomDigits(2)}-${randomDigits(3)}`;
}

export function generatePolishCity(): string {
  return randomItem(POLISH_CITIES);
}

export function generatePolishCompanyName(): string {
  return fakerPL.company.name();
}

export function generateUSFirstName(): string {
  return fakerUS.person.firstName();
}

export function generateUSLastName(): string {
  return fakerUS.person.lastName();
}

export function generateUSFullName(): string {
  return `${generateUSFirstName()} ${generateUSLastName()}`;
}

export function generateUSBirthDate(): string {
  return formatDate(randomBirthDate(), "en-US");
}

export function generateUSStreet(): string {
  return fakerUS.location.streetAddress();
}

export function generateUSCity(): string {
  return fakerUS.location.city();
}

export function generateUSState(): string {
  return randomItem(US_STATES);
}

export function generateUSZip(): string {
  return randomDigits(5);
}

export function generateUSCompanyName(): string {
  return fakerUS.company.name();
}
