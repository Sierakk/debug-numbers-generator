import { ActionPanel, Action, Icon, List, ListItem } from "@raycast/api";
import { generateRandomPESEL, generateRandomNIP, generateRandomREGON } from "./utils/idGenerators";


const peselList = {
  icon: Icon.AddPerson,
  title: "PESEL",
  subtitle: generateRandomPESEL(),
  accessory: "Numer Identyfikacji -  Osobsty",
};

const nipList = {
  icon: Icon.AddPerson,
  title: "NIP",
  subtitle: generateRandomNIP(),
  accessory: "Numer Identyfikacji Podatkowej",
}

const regonList = {
  icon: Icon.AddPerson,
  title: "REGON",
  subtitle: generateRandomREGON(),
  accessory: "Numer w Rejestrze Gospodarki Narodowej"
}

export default function Command() {
  return (
    <List>
        <List.Item
          icon={peselList.icon}
          title={peselList.title}
          subtitle={peselList.subtitle}
          accessories={[{ icon: Icon.Clipboard, text: peselList.accessory }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={peselList.subtitle} />
              <Action.Paste content={peselList.subtitle} />
            </ActionPanel>
          }
        />
      <List.Item
        icon={nipList.icon}
        title={nipList.title}
        subtitle={nipList.subtitle}
        accessories={[{ icon: Icon.Clipboard, text: nipList.accessory }]}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard content={nipList.subtitle} />
            <Action.Paste content={nipList.subtitle} />
          </ActionPanel>
          }
        />
        <List.Item
          icon={regonList.icon}
          title={regonList.title}
          subtitle={regonList.subtitle}
          accessories={[{ icon: Icon.Clipboard, text: regonList.accessory }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={regonList.subtitle}/>
              <Action.Paste content={regonList.subtitle} />
            </ActionPanel>
          }
          />
    </List>
  );
}
