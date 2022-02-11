import "reflect-metadata";

import { Container } from "typedi";

import commands from "./commands";
import events from "./events";
import { CommandHandler } from "./lib/classes/CommandHandler";
import GombleClient from "./services/GombleClient";

const client = Container.get(GombleClient);

client.commands = CommandHandler.collectCommands(commands);

for (const event of events) {
	const callback = (event.once ? client.once : client.on).bind(client);
	callback(event.name, (...args: any) => event.execute(...args));
}

client.login();
