export type CountryId = "poland" | "usa" | "germany" | "uk" | "france";

export type EmailTagMode = "random" | "timestamp" | "country-random";

export type FieldCategory = "tracking" | "identity" | "contact" | "address" | "company" | "payment" | "vehicle";

export interface ExtensionPreferences {
  mainCountry: CountryId;
  testerEmail: string;
  emailPrefix: string;
  emailTagMode: EmailTagMode;
  emailTagLength: string;
}

export interface GeneratorContext {
  country: CountryId;
  testerEmail: string;
  emailPrefix: string;
  emailTagMode: EmailTagMode;
  emailTagLength: number;
  values: Record<string, string>;
}

export interface CopyVariant {
  title: string;
  transform: (value: string) => string;
}

export interface FieldDefinition {
  id: string;
  title: string;
  accessory: string;
  category: FieldCategory;
  countries: CountryId[] | "global";
  generator: (ctx: GeneratorContext) => string;
  copyVariants?: CopyVariant[];
}
