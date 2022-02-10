const { DiscordEvent } = require('../models/discord/events');

module.exports = new DiscordEvent('messageCreate', false, async message => {
	if (message.author.id == message.client.user.id
		&& message.type == 'CHANNEL_PINNED_MESSAGE') {
		return message.delete();
	}
});
