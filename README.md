# Debug ID Generator

Generate unique, validation-friendly test data for form and tracking QA.

## Commands

- **Debug ID Generator** — browse fields for the selected country, copy or paste values, regenerate with `⌘R`.
- **Paste Debug Email** — paste a unique plus-addressed email into the focused field (assign a hotkey for Chrome forms).

## Field groups

Tracking, Identity, Contact, Address, Company, Payment, Vehicle.

Poland, Germany, United Kingdom, France, and USA include names, dates of birth, addresses, company data, phones, national IDs, plus global debug email, UUID, and test cards (Stripe, Visa, MasterCard).

## Preferences

- **Main country** — shown first in the country dropdown.
- **Your email** — base inbox for debug emails (`you@gmail.com` → `you+qa-ab12cd@gmail.com`).
- **Email debug prefix** — optional campaign tag (`gtm`, `qa`).
- **Email tag mode** — random, timestamp, or country + random.
- **Email tag length** — 4–12 characters for the random part.

Plus-addressing works with Gmail / Google Workspace and many Outlook setups. The same inbox receives the mail; CRMs treat each address as a new lead.

## Notes

Generated IDs are synthetic and meant only for testing. IBAN values use a real ISO 13616 checksum so frontend validators accept them.
