import { Action, ActionPanel, Icon, List, openExtensionPreferences } from "@raycast/api";
import { useMemo, useState } from "react";
import { countryOptions } from "./catalog/countries";
import { categoryOrder, categoryTitles, fieldsForCountry } from "./catalog/fields";
import { CountryId, FieldCategory, FieldDefinition } from "./catalog/types";
import { parseTesterEmail } from "./generators/email";
import { getDefaultCountry, getGeneratorContext } from "./preferences";

const fieldIcons: Record<FieldCategory, Icon> = {
  tracking: Icon.Link,
  identity: Icon.AddPerson,
  contact: Icon.Phone,
  address: Icon.Pin,
  company: Icon.Building,
  payment: Icon.CreditCard,
  vehicle: Icon.Car,
};

export default function Command() {
  const [selectedCountry, setSelectedCountry] = useState<CountryId>(getDefaultCountry);
  const [seed, setSeed] = useState(0);
  const testerEmailConfigured = Boolean(parseTesterEmail(getGeneratorContext(selectedCountry).testerEmail));

  const items = useMemo(() => {
    const ctx = getGeneratorContext(selectedCountry);

    return fieldsForCountry(selectedCountry).map((field) => ({
      field,
      value: field.generator(ctx),
    }));
  }, [selectedCountry, seed]);

  const groupedItems = categoryOrder
    .map((category) => ({
      category,
      items: items.filter(({ field }) => field.category === category),
    }))
    .filter((group) => group.items.length > 0);

  function renderActions(field: FieldDefinition, value: string, missingEmail: boolean) {
    return (
      <ActionPanel>
        {missingEmail ? (
          <Action title="Open Extension Preferences" icon={Icon.Gear} onAction={openExtensionPreferences} />
        ) : (
          <>
            <Action.CopyToClipboard title="Copy Value" content={value} />
            <Action.Paste title="Paste Value" content={value} />
            {field.copyVariants
              ?.map((variant) => {
                const transformed = variant.transform(value);
                if (!transformed) {
                  return null;
                }

                return <Action.CopyToClipboard key={variant.title} title={variant.title} content={transformed} />;
              })
              .filter(Boolean)}
          </>
        )}
        <Action
          title="Regenerate Values"
          icon={Icon.ArrowClockwise}
          shortcut={{ modifiers: ["cmd"], key: "r" }}
          onAction={() => setSeed((current) => current + 1)}
        />
        {!missingEmail && (
          <Action title="Open Extension Preferences" icon={Icon.Gear} onAction={openExtensionPreferences} />
        )}
      </ActionPanel>
    );
  }

  return (
    <List
      searchBarPlaceholder="Search debug fields"
      searchBarAccessory={
        <List.Dropdown
          tooltip="Select Country"
          value={selectedCountry}
          onChange={(value) => setSelectedCountry(value as CountryId)}
        >
          {countryOptions.map((country) => (
            <List.Dropdown.Item key={country.key} title={country.title} value={country.key} />
          ))}
        </List.Dropdown>
      }
    >
      {groupedItems.map((group) => (
        <List.Section key={group.category} title={categoryTitles[group.category]}>
          {group.items.map(({ field, value }) => {
            const isEmail = field.id === "debug-email";
            const missingEmail = isEmail && !testerEmailConfigured;

            return (
              <List.Item
                key={field.id}
                icon={isEmail ? Icon.Envelope : fieldIcons[field.category]}
                title={field.title}
                subtitle={missingEmail ? "Set tester email in preferences" : value}
                accessories={[{ icon: Icon.Clipboard, text: field.accessory }]}
                actions={renderActions(field, value, missingEmail)}
              />
            );
          })}
        </List.Section>
      ))}
    </List>
  );
}
