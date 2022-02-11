import { Interaction } from 'discord.js';
import { container, GombleClient } from "../services/di";
import DiscordEvent from '../lib/classes/DiscordEvent';

const client = container.resolve(GombleClient);

const command: DiscordEvent = {
	name: 'interactionCreate',
	execute: async (interaction: Interaction) => {
		if (!interaction.isCommand()) return;
		const command = client.commands.get(interaction.commandName);
		if (command) return command.run(interaction);
	}
}

export default command;
