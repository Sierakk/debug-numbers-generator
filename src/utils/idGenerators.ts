//File with generators

//Polish section

function generateRandomPESEL(): string {
  // Generate a random birth date (1900-01-01 to today)
  const start = new Date(1900, 0, 1).getTime();
  const end = new Date().getTime();
  const birthDate = new Date(start + Math.random() * (end - start));

  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  // Encode month according to PESEL rules
  let peselMonth = month;
  if (year >= 2000 && year < 2100) peselMonth += 20;
  else if (year >= 2100 && year < 2200) peselMonth += 40;
  else if (year >= 2200 && year < 2300) peselMonth += 60;
  else if (year >= 1800 && year < 1900) peselMonth += 80;

  const yearStr = (year % 100).toString().padStart(2, "0");
  const monthStr = peselMonth.toString().padStart(2, "0");
  const dayStr = day.toString().padStart(2, "0");

  // Serial: 4 digits, last digit is gender (even=female, odd=male)
  const serial = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  const genderDigit = (Math.floor(Math.random() * 10) & ~1) + 1; // random odd digit (male)
  const peselBase = `${yearStr}${monthStr}${dayStr}${serial}${genderDigit}`;

  // Calculate checksum
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(peselBase[i], 10) * weights[i];
  }
  const checksum = (10 - (sum % 10)) % 10;

  const pesel = peselBase + checksum;
  return pesel;
}

function generateRandomNIP(): string {
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const digits: number[] = [Math.floor(Math.random() * 9) + 1]; // first digit 1-9

  for (let i = 1; i < 9; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  const sum = digits.reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
  const checksum = sum % 11;
  if (checksum === 10) {
    // regenerate if checksum is invalid
    return generateRandomNIP();
  }

  const nip = digits.join("") + checksum;
  return nip
}

function generateRandomREGON(): string {
  const weights = [8, 9, 2, 3, 4, 5, 6, 7];
  const digits: number[] = [];
  for (let i = 0; i < 8; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }
  const sum = digits.reduce((acc, digit, idx) => acc + digit * weights[idx], 0);
  let checksum = sum % 11;
  if (checksum === 10) checksum = 0;
  return digits.join("") + checksum;
}

function generateRandomPolishIBAN(): string {
  // Generate 26 random digits for the account number
  let account = "";
  for (let i = 0; i < 26; i++) {
    account += Math.floor(Math.random() * 10).toString();
  }
  // Calculate checksum (simplified, not fully compliant)
  const iban = `PL00${account}`;
  return iban;
}

//US Section
function generateRandomSSN(): string {
  let area: number;
  do {
    area = Math.floor(Math.random() * 899) + 1; // 001–899
  } while (area === 666);

  const group = Math.floor(Math.random() * 99) + 1; // 01–99
  const serial = Math.floor(Math.random() * 9999) + 1; // 0001–9999

  const areaStr = area.toString().padStart(3, "0");
  const groupStr = group.toString().padStart(2, "0");
  const serialStr = serial.toString().padStart(4, "0");

  return `${areaStr}-${groupStr}-${serialStr}`;
}



export { generateRandomPESEL, generateRandomNIP, generateRandomREGON, generateRandomSSN, generateRandomPolishIBAN };