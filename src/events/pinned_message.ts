import { Message } from 'discord.js';
import DiscordEvent from '../lib/classes/DiscordEvent';

const command: DiscordEvent = {
	name: 'messageCreate',
	execute: async (message: Message) => {
		if (message.client.user?.id
			&& message.author.id == message.client.user.id
			&& message.type == 'CHANNEL_PINNED_MESSAGE') {
			return message.delete();
		}
	}
};

export default command;
