import { ClientOptions, Intents } from 'discord.js';
import { container } from 'tsyringe';

export const options: ClientOptions = {
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	],
};

container.registerInstance('clientOptions', options);
