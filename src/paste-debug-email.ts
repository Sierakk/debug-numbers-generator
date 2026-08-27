import { Clipboard, closeMainWindow, showHUD, showToast, Toast, openExtensionPreferences } from "@raycast/api";
import { generateDebugEmail, parseTesterEmail } from "./generators/email";
import { getGeneratorContext } from "./preferences";

export default async function Command() {
  const ctx = getGeneratorContext();
  const email = generateDebugEmail(ctx);

  if (!parseTesterEmail(ctx.testerEmail) || !email) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Tester email is not configured",
      message: "Set Your email in the extension preferences",
      primaryAction: {
        title: "Open Preferences",
        onAction: openExtensionPreferences,
      },
    });
    return;
  }

  await Clipboard.paste(email);
  await closeMainWindow();
  await showHUD(`Pasted ${email}`);
}
