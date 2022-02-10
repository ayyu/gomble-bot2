const { DiscordEvent } = require('../lib/classes/events');

module.exports = new DiscordEvent('messageCreate', false, async message => {
	if (message.author.id == message.client.user.id
		&& message.type == 'CHANNEL_PINNED_MESSAGE') {
		return message.delete();
	}
});
