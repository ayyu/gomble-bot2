import { container, GombleClient } from "./services/di";

import commands from "./commands";
import events from "./events";
import { CommandHandler } from "./lib/classes/CommandHandler";

const client = container.resolve(GombleClient);

client.commands = CommandHandler.collectCommands(commands);

for (const event of events) {
	const callback = (event.once ? client.once : client.on).bind(client);
	callback(event.name, (...args: any) => event.execute(...args));
}

client.login();
