import { Message } from 'discord.js';
import DiscordEvent from '../lib/classes/DiscordEvent';

export default new DiscordEvent('messageCreate', false, async (message: Message) => {
	if (message.client.user?.id
		&& message.author.id == message.client.user.id
		&& message.type == 'CHANNEL_PINNED_MESSAGE') {
		return message.delete();
	}
});
