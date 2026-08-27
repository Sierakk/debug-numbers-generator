import { CountryId, FieldCategory, FieldDefinition } from "./types";
import { extractPlusTag, generateDebugEmail } from "../generators/email";
import {
  formatCardNumber,
  generateCardCvc,
  generateCardExpiry,
  generateMasterCard,
  generateStripeTestCard,
  generateVisaCard,
} from "../generators/payment";
import {
  generatePolishBirthDate,
  generatePolishCity,
  generatePolishCompanyName,
  generatePolishFirstName,
  generatePolishFullName,
  generatePolishLastName,
  generatePolishPostalCode,
  generatePolishStreet,
  generateUSBirthDate,
  generateUSCity,
  generateUSCompanyName,
  generateUSFirstName,
  generateUSFullName,
  generateUSLastName,
  generateUSState,
  generateUSStreet,
  generateUSZip,
} from "../generators/person";
import {
  generateRandomNIP,
  generateRandomPESEL,
  generateRandomPolishIBAN,
  generateRandomPolishPhoneNumber,
  generateRandomPolishPlateNumber,
  generateRandomPolishVAT,
  generateRandomREGON,
} from "../generators/poland";
import { generateUuid } from "../generators/tracking";
import { generateRandomSSN, generateRandomUSPhoneNumber } from "../generators/usa";

export const categoryOrder: FieldCategory[] = [
  "tracking",
  "identity",
  "contact",
  "address",
  "company",
  "payment",
  "vehicle",
];

export const categoryTitles: Record<FieldCategory, string> = {
  tracking: "Tracking",
  identity: "Identity",
  contact: "Contact",
  address: "Address",
  company: "Company",
  payment: "Payment",
  vehicle: "Vehicle",
};

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function spacedPolishPhone(value: string): string {
  const digits = digitsOnly(value).replace(/^48/, "");
  return `+48 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

function spacedUSPhone(value: string): string {
  const digits = digitsOnly(value).replace(/^1/, "");
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export const fieldCatalog: FieldDefinition[] = [
  {
    id: "debug-email",
    title: "Your debug email",
    accessory: "Plus-addressed tester email",
    category: "tracking",
    countries: "global",
    generator: generateDebugEmail,
    copyVariants: [
      { title: "Copy plus tag", transform: extractPlusTag },
      { title: "Copy local part", transform: (value) => value.split("@")[0] ?? value },
    ],
  },
  {
    id: "uuid",
    title: "UUID",
    accessory: "Unique session / order id",
    category: "tracking",
    countries: "global",
    generator: generateUuid,
  },
  {
    id: "first-name-pl",
    title: "Imię",
    accessory: "Polskie imię",
    category: "identity",
    countries: ["poland"],
    generator: generatePolishFirstName,
  },
  {
    id: "last-name-pl",
    title: "Nazwisko",
    accessory: "Polskie nazwisko",
    category: "identity",
    countries: ["poland"],
    generator: generatePolishLastName,
  },
  {
    id: "full-name-pl",
    title: "Imię i nazwisko",
    accessory: "Pełne imię i nazwisko",
    category: "identity",
    countries: ["poland"],
    generator: generatePolishFullName,
  },
  {
    id: "birth-date-pl",
    title: "Data urodzenia",
    accessory: "Format DD.MM.YYYY",
    category: "identity",
    countries: ["poland"],
    generator: generatePolishBirthDate,
    copyVariants: [{ title: "Copy ISO date", transform: (value) => value.split(".").reverse().join("-") }],
  },
  {
    id: "pesel",
    title: "PESEL",
    accessory: "Numer Identyfikacji Osobistej",
    category: "identity",
    countries: ["poland"],
    generator: generateRandomPESEL,
  },
  {
    id: "first-name-us",
    title: "First name",
    accessory: "US first name",
    category: "identity",
    countries: ["usa"],
    generator: generateUSFirstName,
  },
  {
    id: "last-name-us",
    title: "Last name",
    accessory: "US last name",
    category: "identity",
    countries: ["usa"],
    generator: generateUSLastName,
  },
  {
    id: "full-name-us",
    title: "Full name",
    accessory: "US full name",
    category: "identity",
    countries: ["usa"],
    generator: generateUSFullName,
  },
  {
    id: "birth-date-us",
    title: "Date of birth",
    accessory: "Format MM/DD/YYYY",
    category: "identity",
    countries: ["usa"],
    generator: generateUSBirthDate,
  },
  {
    id: "ssn",
    title: "SSN",
    accessory: "Social Security Number",
    category: "identity",
    countries: ["usa"],
    generator: generateRandomSSN,
    copyVariants: [{ title: "Copy without dashes", transform: digitsOnly }],
  },
  {
    id: "phone-pl",
    title: "Numer telefonu",
    accessory: "Polski numer telefonu",
    category: "contact",
    countries: ["poland"],
    generator: generateRandomPolishPhoneNumber,
    copyVariants: [
      { title: "Copy national format", transform: (value) => digitsOnly(value).replace(/^48/, "") },
      { title: "Copy spaced E.164", transform: spacedPolishPhone },
    ],
  },
  {
    id: "phone-us",
    title: "Phone number",
    accessory: "US phone number",
    category: "contact",
    countries: ["usa"],
    generator: generateRandomUSPhoneNumber,
    copyVariants: [
      { title: "Copy national format", transform: (value) => digitsOnly(value).replace(/^1/, "") },
      { title: "Copy spaced E.164", transform: spacedUSPhone },
    ],
  },
  {
    id: "street-pl",
    title: "Ulica",
    accessory: "Ulica i numer",
    category: "address",
    countries: ["poland"],
    generator: generatePolishStreet,
  },
  {
    id: "postal-pl",
    title: "Kod pocztowy",
    accessory: "Format XX-XXX",
    category: "address",
    countries: ["poland"],
    generator: generatePolishPostalCode,
  },
  {
    id: "city-pl",
    title: "Miasto",
    accessory: "Polskie miasto",
    category: "address",
    countries: ["poland"],
    generator: generatePolishCity,
  },
  {
    id: "street-us",
    title: "Street",
    accessory: "US street address",
    category: "address",
    countries: ["usa"],
    generator: generateUSStreet,
  },
  {
    id: "city-us",
    title: "City",
    accessory: "US city",
    category: "address",
    countries: ["usa"],
    generator: generateUSCity,
  },
  {
    id: "state-us",
    title: "State",
    accessory: "US state code",
    category: "address",
    countries: ["usa"],
    generator: generateUSState,
  },
  {
    id: "zip-us",
    title: "ZIP",
    accessory: "US ZIP code",
    category: "address",
    countries: ["usa"],
    generator: generateUSZip,
  },
  {
    id: "company-pl",
    title: "Nazwa firmy",
    accessory: "Polska nazwa firmy",
    category: "company",
    countries: ["poland"],
    generator: generatePolishCompanyName,
  },
  {
    id: "nip",
    title: "NIP",
    accessory: "Numer Identyfikacji Podatkowej",
    category: "company",
    countries: ["poland"],
    generator: generateRandomNIP,
  },
  {
    id: "vat-pl",
    title: "VAT",
    accessory: "PL + NIP",
    category: "company",
    countries: ["poland"],
    generator: generateRandomPolishVAT,
  },
  {
    id: "regon",
    title: "REGON",
    accessory: "Numer w Rejestrze Gospodarki Narodowej",
    category: "company",
    countries: ["poland"],
    generator: generateRandomREGON,
  },
  {
    id: "company-us",
    title: "Company name",
    accessory: "US company name",
    category: "company",
    countries: ["usa"],
    generator: generateUSCompanyName,
  },
  {
    id: "iban-pl",
    title: "IBAN",
    accessory: "Numer konta bankowego",
    category: "payment",
    countries: ["poland"],
    generator: generateRandomPolishIBAN,
    copyVariants: [{ title: "Copy without spaces", transform: (value) => value.replaceAll(" ", "") }],
  },
  {
    id: "stripe-card",
    title: "Stripe Test Card",
    accessory: "Stripe test PAN",
    category: "payment",
    countries: "global",
    generator: generateStripeTestCard,
    copyVariants: [{ title: "Copy spaced", transform: formatCardNumber }],
  },
  {
    id: "visa-card",
    title: "Visa Card",
    accessory: "Valid Visa test PAN",
    category: "payment",
    countries: "global",
    generator: generateVisaCard,
    copyVariants: [{ title: "Copy spaced", transform: formatCardNumber }],
  },
  {
    id: "mastercard-card",
    title: "MasterCard Card",
    accessory: "Valid Mastercard test PAN",
    category: "payment",
    countries: "global",
    generator: generateMasterCard,
    copyVariants: [{ title: "Copy spaced", transform: formatCardNumber }],
  },
  {
    id: "card-expiry",
    title: "Card expiry",
    accessory: "MM/YY",
    category: "payment",
    countries: "global",
    generator: generateCardExpiry,
  },
  {
    id: "card-cvc",
    title: "Card CVC",
    accessory: "3-digit CVC",
    category: "payment",
    countries: "global",
    generator: generateCardCvc,
  },
  {
    id: "plate-pl",
    title: "Numer rejestracyjny",
    accessory: "Polski numer rejestracyjny",
    category: "vehicle",
    countries: ["poland"],
    generator: generateRandomPolishPlateNumber,
    copyVariants: [{ title: "Copy without spaces", transform: (value) => value.replaceAll(" ", "") }],
  },
];

export function fieldsForCountry(country: CountryId): FieldDefinition[] {
  return fieldCatalog.filter((field) => field.countries === "global" || field.countries.includes(country));
}
