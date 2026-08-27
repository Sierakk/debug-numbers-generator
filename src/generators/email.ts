import { GeneratorContext } from "../catalog/types";

const TAG_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

function randomTag(length: number): string {
  let tag = "";

  for (let i = 0; i < length; i++) {
    tag += TAG_ALPHABET[Math.floor(Math.random() * TAG_ALPHABET.length)];
  }

  return tag;
}

function timestampTag(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  const time = now.toISOString().slice(11, 19).replaceAll(":", "");

  return `${date}${time}`;
}

export function parseTesterEmail(email: string): { local: string; domain: string } | null {
  const trimmed = email.trim();
  const at = trimmed.lastIndexOf("@");

  if (at <= 0 || at === trimmed.length - 1) {
    return null;
  }

  const local = trimmed.slice(0, at);
  const domain = trimmed.slice(at + 1);

  if (!local || !domain.includes(".")) {
    return null;
  }

  return { local: local.split("+")[0], domain };
}

export function extractPlusTag(email: string): string {
  const at = email.lastIndexOf("@");

  if (at <= 0) {
    return "";
  }

  const local = email.slice(0, at);
  const tagStart = local.indexOf("+");

  return tagStart === -1 ? "" : local.slice(tagStart);
}

function buildTag(ctx: GeneratorContext): string {
  const prefix = ctx.emailPrefix.trim().replace(/[^a-zA-Z0-9-]/g, "");
  const length = ctx.emailTagLength;

  let core: string;

  switch (ctx.emailTagMode) {
    case "timestamp":
      core = timestampTag();
      break;
    case "country-random":
      core = `${ctx.country.slice(0, 2)}${randomTag(length)}`;
      break;
    case "random":
    default:
      core = randomTag(length);
      break;
  }

  return prefix ? `${prefix}-${core}` : core;
}

export function generateDebugEmail(ctx: GeneratorContext): string {
  const parsed = parseTesterEmail(ctx.testerEmail);

  if (!parsed) {
    return "";
  }

  return `${parsed.local}+${buildTag(ctx)}@${parsed.domain}`;
}
