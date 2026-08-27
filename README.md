<div align="center">
  
  <img src="assets/extension_icon.png" alt="Debug ID Generator Icon" width="128" height="128">
  
  # Debug ID Generator
  
  **Generate validation-friendly test data for QA and analytics in Raycast**
  
  Unique IDs, national identifiers, phone numbers, ISO 13616 IBANs with valid checksums, and plus-addressed debug emails. All values pass frontend validators while keeping your test data synthetic and safe.
  
  <br>
  
  [![Raycast Extension](https://img.shields.io/badge/Raycast-Extension-FF6363.svg?style=for-the-badge&logo=raycast&logoColor=white)](https://www.raycast.com/)
  [![Supported Countries](https://img.shields.io/badge/Countries-PL%20%7C%20DE%20%7C%20UK%20%7C%20FR%20%7C%20US-blue.svg?style=for-the-badge)](#-field-catalog)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
  
  <br>

  [✨ Features](#-features) •
  [🚀 Commands](#-commands) •
  [📁 Field Catalog](#-field-catalog) •
  [⚙️ Preferences](#️-preferences) •
  [🎯 Use Cases](#-use-cases) •
  [🔧 Technical Details](#-technical-details)
  
</div>

---

## ✨ Features

Debug ID Generator is a Raycast extension built for **digital analysts, QA testers, and developers** who need realistic-looking test data that validates correctly in forms, CRM systems, and tracking pipelines — without colliding with production records.

- ⚡ **Frontend validators pass** — IBAN, PESEL, NIP, REGON, SIREN, SSN, VAT, and credit card numbers include real checksums (ISO 13616, Luhn, modulo algorithms).
- 📬 **CRM-friendly & inbox-safe** — Plus-addressed emails land directly in your tester inbox while appearing as unique test users/leads.
- 🌍 **Multi-country support** — Realistic native names, formats, and identifiers for Poland 🇵🇱, Germany 🇩🇪, United Kingdom 🇬🇧, France 🇫🇷, and USA 🇺🇸.
- 📋 **Instant Paste or Copy** — Direct paste into focused form fields on `Enter`, or copy to clipboard with `⌘C`.
- 🔄 **Session-stable values** — Generated values stay consistent across form fields (e.g. full name matches first & last name) until you manually regenerate with `⌘R`.

---

## 🚀 Commands

| Command | Description | Mode | Shortcut |
|:---|:---|:---|:---|
| **Debug ID Generator** | Browse and copy/paste test data fields for the selected country, organized into 7 categories. | `view` | <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>D</kbd> *(suggested)* |
| **Paste Debug Email** | Instantly paste a unique plus-addressed email into the currently focused field (browser, app, terminal). | `no-view` | <kbd>⌃</kbd> <kbd>⌘</kbd> <kbd>E</kbd> *(suggested)* |

---

## 📁 Field Catalog

All fields are organized into **7 categories** and filtered by country. Global fields (UUID, debug email, test cards) appear for every country.

### 🌍 Global Fields (All Countries)

| Field | Format | Description |
|:---|:---|:---|
| **Your debug email** | `local+tag@domain` | Plus-addressed email from your configured tester inbox |
| **UUID** | `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` | RFC 4122 v4 unique session/order identifier |
| **Stripe Test Card** | `4242 4242 4242 4242` | Stripe standard test PAN |
| **Visa Card** | `4xxx xxxx xxxx xxxx` | Luhn-valid Visa test card number |
| **MasterCard Card** | `51xx xxxx xxxx xxxx` | Luhn-valid Mastercard test card number |
| **Card expiry** | `MM/YY` | Future expiration date (1–4 years ahead) |
| **Card CVC** | `XXX` | 3-digit card security code |

---

### 🌐 Country-Specific Catalogs

<details>
<summary><strong>🇵🇱 &nbsp; Poland (Polska)</strong></summary>

#### Identity
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **Imię** | `Jan`, `Anna` | Real Polish first names |
| **Nazwisko** | `Kowalski`, `Nowak` | Real Polish last names |
| **Imię i nazwisko** | `Jan Kowalski` | Consistent full name combination |
| **Data urodzenia** | `DD.MM.YYYY` | Adult date range (with ISO copy transform) |
| **PESEL** | `YYMMDDSSSGG` | 11 digits with valid checksum, encodes birth date & gender |

#### Contact
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **Numer telefonu** | `+48 XXX XXX XXX` | Polish mobile prefixes (45, 50, 51, 53, 57, 60, 66, 69, 72, 73, 78, 79, 88) |

#### Address
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **Ulica** | `ul. Marszałkowska 123` | Polish street names with house numbers |
| **Kod pocztowy** | `XX-XXX` | Valid 5-digit Polish postal code |
| **Miasto** | `Warszawa`, `Kraków` | Real Polish cities |

#### Company
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **Nazwa firmy** | `Firma Handlowa sp. z o.o.` | Polish company names |
| **NIP** | `XXXXXXXXXX` | 10 digits with valid weighted checksum |
| **VAT** | `PLXXXXXXXXXX` | Polish VAT format (`PL` + NIP) |
| **REGON** | `XXXXXXXXX` | 9 digits with valid weighted checksum |

#### Payment
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **IBAN** | `PL XX XXXX XXXX XXXX XXXX XXXX XXXX` | ISO 13616 valid checksum (Mod 97-10) |

#### Vehicle
| Field | Format | Validation / Notes |
|:---|:---|:---|
| **Numer rejestracyjny** | `WA 12345`, `WIA 1234`, `KRA 1A23` | Realistic Polish license plates with district codes |

</details>

<details>
<summary><strong>🇩🇪 &nbsp; Germany (Deutschland)</strong></summary>

#### Identity
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Vorname** | `Max`, `Anna` | German first names |
| **Nachname** | `Müller`, `Schmidt` | German last names |
| **Vorname und Nachname** | `Max Müller` | Consistent full name combination |
| **Geburtsdatum** | `DD.MM.YYYY` | Valid date (with ISO copy transform) |

#### Contact
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Telefonnummer** | `+49 XXX XXX XXX` | German mobile numbers (`+49 15x`, `16x`, `17x`) |

#### Address
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Straße** | `Hauptstraße 123` | German street names with house numbers |
| **Postleitzahl** | `XXXXX` | 5-digit German postal code |
| **Stadt** | `Berlin`, `München`, `Hamburg` | German cities |

#### Company
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Firmenname** | `Muster GmbH` | German company names |
| **USt-IdNr** | `DE XXXXXXXXX` | 11 characters (`DE` + 9 digits) |

#### Payment
| Field | Format | Description / Notes |
|:---|:---|:---|
| **IBAN** | `DE XX XXXX XXXX XX XXXX XX` | ISO 13616 valid checksum (BLZ + account) |

</details>

<details>
<summary><strong>🇬🇧 &nbsp; United Kingdom</strong></summary>

#### Identity
| Field | Format | Description / Notes |
|:---|:---|:---|
| **First name** | `John`, `Emma` | UK first names |
| **Last name** | `Smith`, `Jones` | UK last names |
| **Full name** | `John Smith` | Consistent full name combination |
| **Date of birth** | `DD/MM/YYYY` | Valid date (with ISO copy transform) |

#### Contact
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Phone number** | `+44 7XXX XXXXXX` | UK mobile numbers |

#### Address
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Street** | `123 High Street` | UK street addresses |
| **Postcode** | `EC1A 1BB`, `SW1A 1AA` | Valid UK postcode outward/inward formats |
| **City** | `London`, `Manchester`, `Edinburgh` | UK cities |

#### Company
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Company name** | `Acme Ltd` | UK company names |
| **VAT number** | `GB XXXXXXXXX` | 11 characters (`GB` + 9 digits) |

#### Payment
| Field | Format | Description / Notes |
|:---|:---|:---|
| **IBAN** | `GB XX XXXX XXXX XX XXXX XX` | ISO 13616 valid checksum (Bank code + Sort code + Account) |

</details>

<details>
<summary><strong>🇫🇷 &nbsp; France</strong></summary>

#### Identity
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Prénom** | `Jean`, `Marie` | French first names |
| **Nom** | `Dupont`, `Martin` | French last names |
| **Prénom et nom** | `Jean Dupont` | Consistent full name combination |
| **Date de naissance** | `DD/MM/YYYY` | Valid date (with ISO copy transform) |

#### Contact
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Numéro de téléphone** | `+33 6 XX XX XX XX` | French mobile numbers (`06` / `07`) |

#### Address
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Rue** | `123 Rue de Rivoli` | French street addresses |
| **Code postal** | `XXXXX` | 5-digit French postal code |
| **Ville** | `Paris`, `Lyon`, `Marseille` | French cities |

#### Company
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Nom de l'entreprise** | `Société Anonyme` | French company names |
| **SIREN** | `XXXXXXXXX` | 9 digits with valid Luhn checksum |
| **Numéro de TVA** | `FR XX XXXXXXXXX` | `FR` + key derived from SIREN + SIREN |

#### Payment
| Field | Format | Description / Notes |
|:---|:---|:---|
| **IBAN** | `FR XX XXXX XXXX XX XXXX XXXX XXX` | ISO 13616 valid checksum (Bank + Branch + Account + RIB) |

</details>

<details>
<summary><strong>🇺🇸 &nbsp; USA (United States)</strong></summary>

#### Identity
| Field | Format | Description / Notes |
|:---|:---|:---|
| **First name** | `John`, `Emily` | US first names |
| **Last name** | `Smith`, `Johnson` | US last names |
| **Full name** | `John Smith` | Consistent full name combination |
| **Date of birth** | `MM/DD/YYYY` | Valid date |
| **SSN** | `XXX-XX-XXXX` | Valid Social Security Number format |

#### Contact
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Phone number** | `+1 (XXX) XXX-XXXX` | US NANP phone format |

#### Address
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Street** | `123 Main St` | US street addresses |
| **City** | `New York`, `Los Angeles`, `Chicago` | US cities |
| **State** | `NY`, `CA`, `TX`, `FL` | 2-letter US state codes |
| **ZIP** | `XXXXX` | 5-digit US ZIP code |

#### Company
| Field | Format | Description / Notes |
|:---|:---|:---|
| **Company name** | `Acme Inc` | US company names |

</details>

---

## ⚙️ Preferences

Configure the extension to match your testing workflow:

| Preference | Type | Default | Description |
|:---|:---|:---|:---|
| **Choose your main country** | Dropdown | `Poland 🇵🇱` | Country displayed first upon opening the command |
| **Your email** | Text | `you@gmail.com` | Base inbox for debug emails (must be a valid email) |
| **Email debug prefix** | Text | `qa` | Optional campaign/debug prefix (e.g. `gtm` or `qa`) |
| **Email tag mode** | Dropdown | `Random string` | How the unique plus-tag is generated |
| **Email tag length** | Text | `6` | Length of the random part (4–12 chars, ignored in timestamp mode) |

### Email Tag Modes

| Mode | Format Pattern | Example Output |
|:---|:---|:---|
| **Random string** | `[prefix-]random` | `you+qa-ab12cd@gmail.com` |
| **Timestamp** | `[prefix-]YYYYMMDDHHMMSS` | `you+qa-20260827143022@gmail.com` |
| **Country + random** | `[prefix-]country-random` | `you+qa-pl-abc123@gmail.com` |

---

## 🎯 Use Cases

### 1. Tracking & Form QA
```yaml
Scenario: Testing a marketing lead form with UTM parameters
Email:    you+qa-camp1-a7b2c3@gmail.com
UUID:     550e8400-e29b-41d4-a716-446655440000
PESEL:    92031512345
Phone:    +48 501 234 567
```

### 2. Payment & Checkout Testing
```yaml
Scenario: Testing checkout form field validation
Card:     4111 1111 1111 1111 (Luhn-valid Visa PAN)
Expiry:   08/29
CVC:      482
IBAN:     DE89 3704 0044 0532 0130 00
```

### 3. CRM Lead Deduplication Testing
```
Different plus-tagged emails all deliver to your single inbox:
 • you+test1@gmail.com
 • you+test2@gmail.com
 • you+qa-signup@gmail.com

CRM/GA4 treats them as unique users; you inspect confirmation emails in one place.
```

---

## 🔧 Technical Details

### Validations & Checksums

| Identifier | Country | Algorithm / Standard | Notes |
|:---|:---|:---|:---|
| **IBAN** | PL, DE, GB, FR | ISO 13616 (Mod 97-10) | Formatted with country-specific BBAN rules |
| **PESEL** | PL 🇵🇱 | Weighted Mod 10 | Validates birth date, century offsets, and gender digit |
| **NIP** | PL 🇵🇱 | Weighted Mod 11 | 10-digit Polish tax identification number |
| **REGON** | PL 🇵🇱 | Weighted Mod 11 | 9-digit Polish national business registry number |
| **SIREN** | FR 🇫🇷 | Luhn Algorithm | 9-digit French company identifier |
| **TVA (VAT)** | FR 🇫🇷 | `(12 + 3 * (SIREN % 97)) % 97` | Key mathematically linked to the SIREN number |
| **SSN** | US 🇺🇸 | Area / Group / Serial rule | Avoids invalid ranges and reserved area 666 |
| **Credit Cards** | Global 🌍 | Luhn Algorithm | Valid check digit for Visa (`4...`) and Mastercard (`51-55...`, `2221-2720...`) |

### Data Generation Engine

- **Localized Faker**: Names, streets, and cities use [@faker-js/faker](https://github.com/faker-js/faker) locales (`pl`, `de`, `en_GB`, `fr`, `en_US`).
- **Cryptographic & Seeded Math**: Accurate checksum computations ensure synthetic data passes strict client-side validation libraries.

---

## 📝 Notes & Limitations

> [!NOTE]
> **Synthetic Test Data Only**: All generated IDs and accounts are strictly synthetic. They pass format and checksum validators for testing purposes, but do not represent real bank accounts or active government records.

> [!TIP]
> **Plus-Addressing Compatibility**: Plus-addressing (`user+tag@domain`) works out of the box with Gmail, Google Workspace, Outlook.com, and most modern mail servers.

---

## 🔄 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes and migration guides.

---

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ for the digital analytics and QA testing community
</p>
