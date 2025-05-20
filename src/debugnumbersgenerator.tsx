import { ActionPanel, Action, Icon, List } from "@raycast/api";
import { useState } from "react";
import { generateRandomPESEL, generateRandomNIP, generateRandomREGON, generateRandomSSN, generateRandomPolishIBAN } from "./utils/idGenerators";


const idTypesByCountry: Record<string, Array<{ key: string; title: string; generator: () => string; accessory: string }>> = {
  poland: [
    { key: "pesel", title: "PESEL", generator: generateRandomPESEL, accessory: "Numer Identyfikacji Osobistej" },
    { key: "nip", title: "NIP", generator: generateRandomNIP, accessory: "Numer Identyfikacji Podatkowej" },
    { key: "regon", title: "REGON", generator: generateRandomREGON, accessory: "Numer w Rejestrze Gospodarki Narodowej" },
    { key: "iban", title: "IBAN", generator: generateRandomPolishIBAN, accessory: "Numer konta bankowego" },
  ],
  usa: [
    { key: "ssn", title: "SSN", generator: generateRandomSSN, accessory: "Social Security Number" },
  ],
};

const countryOptions = [
  { key: "poland", title: "Poland" },
  { key: "usa", title: "USA" },
];

export default function Command() {
  const [selectedCountry, setSelectedCountry] = useState("poland");
  const idTypes = idTypesByCountry[selectedCountry];

  return (
    <List
      searchBarAccessory={
        <List.Dropdown
          tooltip="Select Country"
          value={selectedCountry}
          onChange={setSelectedCountry}
        >
          {countryOptions.map((country) => (
            <List.Dropdown.Item key={country.key} title={country.title} value={country.key} />
          ))}
        </List.Dropdown>
      }
    >
      {idTypes.map((id) => {
        const generated = id.generator();
        return (
          <List.Item
            key={id.key}
            icon={Icon.AddPerson}
            title={id.title}
            subtitle={generated}
            accessories={[{ icon: Icon.Clipboard, text: id.accessory }]}
            actions={
              <ActionPanel>
                <Action.CopyToClipboard content={generated} />
                <Action.Paste content={generated} />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}