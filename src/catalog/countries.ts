import { CountryId } from "./types";

export const countryOptions: Array<{ key: CountryId; title: string }> = [
  { key: "poland", title: "Poland" },
  { key: "usa", title: "USA" },
];

export function isCountryId(value: string): value is CountryId {
  return countryOptions.some((country) => country.key === value);
}
