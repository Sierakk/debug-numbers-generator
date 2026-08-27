import { faker as fakerPL } from "@faker-js/faker/locale/pl";
import { faker as fakerUS } from "@faker-js/faker/locale/en_US";
import { faker as fakerDE } from "@faker-js/faker/locale/de";
import { faker as fakerGB } from "@faker-js/faker/locale/en_GB";
import { faker as fakerFR } from "@faker-js/faker/locale/fr";
import { GeneratorContext } from "../catalog/types";
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

export function generateCompositeFullName(
  ctx: GeneratorContext | undefined,
  firstNameKey: string,
  lastNameKey: string,
  fallbackFirst: () => string,
  fallbackLast: () => string,
): string {
  let firstName = ctx?.values?.[firstNameKey];
  if (!firstName) {
    firstName = fallbackFirst();
    if (ctx?.values) {
      ctx.values[firstNameKey] = firstName;
    }
  }

  let lastName = ctx?.values?.[lastNameKey];
  if (!lastName) {
    lastName = fallbackLast();
    if (ctx?.values) {
      ctx.values[lastNameKey] = lastName;
    }
  }

  return `${firstName} ${lastName}`;
}

export function generatePolishFirstName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["first-name-pl"]) {
    return ctx.values["first-name-pl"];
  }
  const name = fakerPL.person.firstName();
  if (ctx?.values) {
    ctx.values["first-name-pl"] = name;
  }
  return name;
}

export function generatePolishLastName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["last-name-pl"]) {
    return ctx.values["last-name-pl"];
  }
  const name = fakerPL.person.lastName();
  if (ctx?.values) {
    ctx.values["last-name-pl"] = name;
  }
  return name;
}

export function generatePolishFullName(ctx?: GeneratorContext): string {
  return generateCompositeFullName(
    ctx,
    "first-name-pl",
    "last-name-pl",
    () => fakerPL.person.firstName(),
    () => fakerPL.person.lastName(),
  );
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

export function generateUSFirstName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["first-name-us"]) {
    return ctx.values["first-name-us"];
  }
  const name = fakerUS.person.firstName();
  if (ctx?.values) {
    ctx.values["first-name-us"] = name;
  }
  return name;
}

export function generateUSLastName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["last-name-us"]) {
    return ctx.values["last-name-us"];
  }
  const name = fakerUS.person.lastName();
  if (ctx?.values) {
    ctx.values["last-name-us"] = name;
  }
  return name;
}

export function generateUSFullName(ctx?: GeneratorContext): string {
  return generateCompositeFullName(
    ctx,
    "first-name-us",
    "last-name-us",
    () => fakerUS.person.firstName(),
    () => fakerUS.person.lastName(),
  );
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

export function generateGermanFirstName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["first-name-de"]) {
    return ctx.values["first-name-de"];
  }
  const name = fakerDE.person.firstName();
  if (ctx?.values) {
    ctx.values["first-name-de"] = name;
  }
  return name;
}

export function generateGermanLastName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["last-name-de"]) {
    return ctx.values["last-name-de"];
  }
  const name = fakerDE.person.lastName();
  if (ctx?.values) {
    ctx.values["last-name-de"] = name;
  }
  return name;
}

export function generateGermanFullName(ctx?: GeneratorContext): string {
  return generateCompositeFullName(
    ctx,
    "first-name-de",
    "last-name-de",
    () => fakerDE.person.firstName(),
    () => fakerDE.person.lastName(),
  );
}

export function generateGermanBirthDate(): string {
  return formatDate(randomBirthDate(), "de-DE");
}

export function generateGermanStreet(): string {
  return fakerDE.location.streetAddress();
}

export function generateGermanCity(): string {
  return fakerDE.location.city();
}

export function generateGermanCompanyName(): string {
  return fakerDE.company.name();
}

export function generateUKFirstName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["first-name-uk"]) {
    return ctx.values["first-name-uk"];
  }
  const name = fakerGB.person.firstName();
  if (ctx?.values) {
    ctx.values["first-name-uk"] = name;
  }
  return name;
}

export function generateUKLastName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["last-name-uk"]) {
    return ctx.values["last-name-uk"];
  }
  const name = fakerGB.person.lastName();
  if (ctx?.values) {
    ctx.values["last-name-uk"] = name;
  }
  return name;
}

export function generateUKFullName(ctx?: GeneratorContext): string {
  return generateCompositeFullName(
    ctx,
    "first-name-uk",
    "last-name-uk",
    () => fakerGB.person.firstName(),
    () => fakerGB.person.lastName(),
  );
}

export function generateUKBirthDate(): string {
  return formatDate(randomBirthDate(), "en-GB");
}

export function generateUKStreet(): string {
  return fakerGB.location.streetAddress();
}

export function generateUKCity(): string {
  return fakerGB.location.city();
}

export function generateUKCompanyName(): string {
  return fakerGB.company.name();
}

export function generateFrenchFirstName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["first-name-fr"]) {
    return ctx.values["first-name-fr"];
  }
  const name = fakerFR.person.firstName();
  if (ctx?.values) {
    ctx.values["first-name-fr"] = name;
  }
  return name;
}

export function generateFrenchLastName(ctx?: GeneratorContext): string {
  if (ctx?.values?.["last-name-fr"]) {
    return ctx.values["last-name-fr"];
  }
  const name = fakerFR.person.lastName();
  if (ctx?.values) {
    ctx.values["last-name-fr"] = name;
  }
  return name;
}

export function generateFrenchFullName(ctx?: GeneratorContext): string {
  return generateCompositeFullName(
    ctx,
    "first-name-fr",
    "last-name-fr",
    () => fakerFR.person.firstName(),
    () => fakerFR.person.lastName(),
  );
}

export function generateFrenchBirthDate(): string {
  return formatDate(randomBirthDate(), "fr-FR");
}

export function generateFrenchStreet(): string {
  return fakerFR.location.streetAddress();
}

export function generateFrenchCity(): string {
  return fakerFR.location.city();
}

export function generateFrenchCompanyName(): string {
  return fakerFR.company.name();
}
