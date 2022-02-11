import { Client, Collection } from 'discord.js';
import { options, token } from '../config/discord_client';
import { Service } from 'typedi';
import { ICommandHandler } from "../lib/classes/ICommandHandler";

@Service()
class GombleClient extends Client {
	commands: Collection<string, ICommandHandler>;
	constructor() {
		super(options);
		this.token = token;
		this.commands = new Collection<string, ICommandHandler>();
	}
}

export default GombleClient;
