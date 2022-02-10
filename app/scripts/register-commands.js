const client = require('../services/discord-client');
const { registerCommands } = require('../lib/functions/register-commands');

client.login()
	.then(() => registerCommands(client))
	.then(() => client.destroy());
