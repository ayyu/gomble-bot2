import { inject, singleton } from "tsyringe";
import { Client, ClientOptions, Collection } from "discord.js";

import { ICommandHandler } from "../lib/classes/ICommandHandler";

@singleton()
class GombleClient extends Client {
	commands: Collection<string, ICommandHandler>;
	constructor(
		@inject("clientOptions") options: ClientOptions,
		@inject("discordToken") token: string,
	) {
		super(options);
		this.token = token ?? null;
		this.commands = new Collection<string, ICommandHandler>();
	}
}

export { GombleClient };
