import { getPreferenceValues } from "@raycast/api";
import { isCountryId } from "./catalog/countries";
import { CountryId, EmailTagMode, ExtensionPreferences, GeneratorContext } from "./catalog/types";

const EMAIL_TAG_MODES: EmailTagMode[] = ["random", "timestamp", "country-random"];

function parseTagLength(value: string | undefined): number {
  const parsed = Number.parseInt(value ?? "6", 10);

  if (Number.isNaN(parsed)) {
    return 6;
  }

  return Math.min(12, Math.max(4, parsed));
}

function parseTagMode(value: string | undefined): EmailTagMode {
  return EMAIL_TAG_MODES.includes(value as EmailTagMode) ? (value as EmailTagMode) : "random";
}

export function getExtensionPreferences(): ExtensionPreferences {
  return getPreferenceValues<ExtensionPreferences>();
}

export function getDefaultCountry(): CountryId {
  const { mainCountry } = getExtensionPreferences();
  return isCountryId(mainCountry) ? mainCountry : "poland";
}

export function getGeneratorContext(country?: CountryId): GeneratorContext {
  const preferences = getExtensionPreferences();

  return {
    country: country ?? getDefaultCountry(),
    testerEmail: preferences.testerEmail ?? "",
    emailPrefix: preferences.emailPrefix ?? "",
    emailTagMode: parseTagMode(preferences.emailTagMode),
    emailTagLength: parseTagLength(preferences.emailTagLength),
  };
}
