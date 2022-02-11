import { Interaction } from 'discord.js';
import Container from 'typedi';
import DiscordEvent from '../lib/classes/DiscordEvent';
import GombleClient from '../services/GombleClient';

const client = Container.get(GombleClient);

export default new DiscordEvent(
	'interactionCreate',
	false,
	async (interaction: Interaction) => {
		if (!interaction.isCommand()) return;
		const command = client.commands.get(interaction.commandName);
		if (command) return command.run(interaction);
	}
);